import { spawn } from 'node:child_process';
import { setTimeout as sleep } from 'node:timers/promises';
import { rmSync } from 'node:fs';

rmSync('/tmp/opencode/chrome-profile', { recursive: true, force: true });

const procs = [];
process.on('exit', () => procs.forEach(p => { try { p.kill(); } catch {} }));

const chrome = spawn('google-chrome', [
  '--headless=new', '--no-sandbox', '--disable-gpu',
  '--remote-debugging-port=9333', '--user-data-dir=/tmp/opencode/chrome-profile',
  '--window-size=1400,1400', 'about:blank'
], { stdio: 'ignore' });
procs.push(chrome);

const fail = (m) => { console.error('FAIL: ' + m); process.exit(1); };
const assert = (c, m) => { if (!c) fail(m); console.log('ok - ' + m); };

const url = 'http://127.0.0.1:8765/';
const server = spawn('python3', ['-m', 'http.server', '8765', '--bind', '127.0.0.1', '--directory', '/home/valentin/code/active/ai-work-system/site'], { stdio: 'ignore' });
procs.push(server);
await sleep(800);
try { await fetch(url); } catch { fail('site did not come up on ' + url + ' (port busy?)'); }

let target;
for (let i = 0; i < 40; i++) {
  await sleep(250);
  try {
    const list = await (await fetch('http://127.0.0.1:9333/json')).json();
    target = list.find(t => t.type === 'page');
    if (target) break;
  } catch {}
}
if (!target) fail('chrome devtools not reachable');

const ws = new WebSocket(target.webSocketDebuggerUrl);
await new Promise(r => ws.addEventListener('open', r));
let id = 0;
const pending = new Map();
ws.addEventListener('message', e => {
  const m = JSON.parse(e.data);
  if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); }
});
const send = (method, params = {}) => new Promise(res => {
  const i = ++id; pending.set(i, res);
  ws.send(JSON.stringify({ id: i, method, params }));
});
const evalJs = async (expr) => {
  const r = await send('Runtime.evaluate', { expression: expr, returnByValue: true, awaitPromise: true });
  if (r.result?.exceptionDetails) fail('eval threw: ' + JSON.stringify(r.result.exceptionDetails));
  return r.result.result.value;
};

await send('Page.enable');
await send('Runtime.enable');

let firstNav = true;
const check = async (label) => {
  await send(firstNav ? 'Page.navigate' : 'Page.reload', firstNav ? { url } : {});
  firstNav = false;
  await sleep(1200);
  return label;
};

// --- fresh learner: no case, no progress
await check('fresh');
assert(await evalJs(`document.body.classList.contains('prelude')`), 'fresh learner has .prelude');
assert(await evalJs(`getComputedStyle(document.querySelector('#title')).display`) === 'none', 'lesson concept hidden before first decision');
assert(await evalJs(`getComputedStyle(document.querySelector('#badges')).display`) === 'none', 'badges hidden before any progress');
assert(await evalJs(`getComputedStyle(document.querySelector('.progress-card')).display`) === 'none', 'progress card hidden before any progress');
assert(await evalJs(`getComputedStyle(document.querySelector('#casePicker')).display`) !== 'none', 'case picker visible before first decision');
assert(await evalJs(`!!document.querySelector('#casePicker').offsetParent`), 'case picker is the visible action');
assert(await evalJs(`document.querySelectorAll('.case-option.active').length`) === 0, 'no case pre-selected before the first decision');
assert(await evalJs(`document.querySelector('#caseDetail').textContent.includes('Ninguna todavía')`), 'case detail prompts instead of assuming a mission');
assert(await evalJs(`[...document.querySelectorAll('.hero-card button,#external')].filter(el=>el.offsetParent&&!el.closest('#casePicker')).length`) === 0, 'no competing action visible before the first decision');

// --- first decision made
await evalJs(`document.querySelectorAll('.case-option')[4].click()`);
await sleep(200);
assert(await evalJs(`!document.body.classList.contains('prelude')`), 'prelude ends after choosing a case');
assert(await evalJs(`getComputedStyle(document.querySelector('#title')).display`) !== 'none', 'lesson concept shown after choosing');
assert(await evalJs(`localStorage.getItem('aws-case')`) === 'direction', 'chosen case persisted');
assert(await evalJs(`getComputedStyle(document.querySelector('#badges')).display`) === 'none', 'badges still hidden while no progress');

// --- one module mastered
await evalJs(`localStorage.setItem('aws-state-1','mastered')`);
await check('progress');
assert(await evalJs(`getComputedStyle(document.querySelector('.progress-card')).display`) !== 'none', 'progress card appears after first module');
assert(await evalJs(`getComputedStyle(document.querySelector('#badges')).display`) !== 'none', 'badges appear after first module');
assert(await evalJs(`document.querySelector('#xp').textContent`) === '100 XP', 'XP reflects mastered module');
assert(await evalJs(`!document.body.classList.contains('prelude')`), 'prelude stays off once decided');

console.log('ALL PASS');
ws.close();
chrome.kill();
process.exit(0);
