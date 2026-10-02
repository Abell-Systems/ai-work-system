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

// --- fresh learner: clean state, no task, no progress
await check('fresh');
assert(await evalJs(`localStorage.getItem('aws-case') === null && localStorage.getItem('aws-task') === null`), 'starts from clean learner state');
assert(await evalJs(`document.body.classList.contains('prelude')`), 'fresh learner has .prelude');
assert(await evalJs(`getComputedStyle(document.querySelector('#title')).display`) === 'none', 'lesson concept hidden before first decision');
assert(await evalJs(`getComputedStyle(document.querySelector('#badges')).display`) === 'none', 'badges hidden before any progress');
assert(await evalJs(`getComputedStyle(document.querySelector('.progress-card')).display`) === 'none', 'progress card hidden before any progress');
assert(await evalJs(`!!document.querySelector('#casePicker').offsetParent`), 'task picker is the visible action');
assert(await evalJs(`document.querySelector('#taskInput').value`) === '', 'no task assumed for the learner');
assert(await evalJs(`document.querySelector('#taskGo').disabled`) === true, 'cannot continue without a task');
assert(await evalJs(`[...document.querySelectorAll('.hero-card button,#external')].filter(el=>el.offsetParent&&!el.closest('#casePicker')).length`) === 0, 'no competing action visible before the first decision');

// --- blocked navigation answers instead of staying silent
assert(await evalJs(`getComputedStyle(document.querySelectorAll('.node')[1]).cursor`) === 'not-allowed', 'modules ahead of the learner read as locked');
assert(await evalJs(`getComputedStyle(document.querySelectorAll('.node')[0]).cursor`) === 'pointer', 'the current module keeps reading as clickable');
await evalJs(`document.querySelectorAll('.node')[9].click()`);
assert(await evalJs(`current`) === 0, 'a locked module click does not jump ahead');
await evalJs(`document.querySelectorAll('.node')[0].click()`);
assert(await evalJs(`document.activeElement.id`) === 'taskInput', 'a module click before the first decision takes the learner to the task field');

// --- suggestion chip fills the task field
await evalJs(`document.querySelectorAll('.task-hint')[2].click()`);
await sleep(100);
assert(await evalJs(`document.querySelector('#taskInput').value`) === 'Crear informes', 'suggestion chip fills the task field');
assert(await evalJs(`!document.querySelector('#taskGo').disabled`), 'chip enables continuing');

// --- learner writes their own real task
await evalJs(`(()=>{const i=document.querySelector('#taskInput');i.value='Preparar el briefing semanal para dirección';i.dispatchEvent(new Event('input'));return 1})()`);
await sleep(100);
assert(await evalJs(`localStorage.getItem('aws-task')`) === 'Preparar el briefing semanal para dirección', 'typed task is persisted as it is written');

await evalJs(`document.querySelector('#taskGo').click()`);
await sleep(200);
assert(await evalJs(`!document.body.classList.contains('prelude')`), 'prelude ends after confirming the task');
assert(await evalJs(`localStorage.getItem('aws-case')`) === 'own', 'free text lands on the own-task profile');
assert(await evalJs(`document.querySelector('#title').offsetParent !== null`), 'lesson concept shown after confirming');
assert(await evalJs(`document.querySelector('#title').textContent`) === 'Cambia cómo ves la IA', 'module 1 is the next visible step');
assert(await evalJs(`document.querySelector('#taskInput').value`) === 'Preparar el briefing semanal para dirección', 'chosen task stays visible for editing');
assert(await evalJs(`document.querySelector('#taskGo').hidden`) === true, 'the confirm button retires once the task is saved');
assert(await evalJs(`getComputedStyle(document.querySelector('#badges')).display`) === 'none', 'badges still hidden while no progress');

// --- all 10 modules still render against the learner's own task
const titles = await evalJs(`(()=>{const out=[];for(let i=0;i<10;i++){current=i;render();out.push(document.querySelector('#title').textContent)}return out})()`);
assert(titles.length === 10 && titles[0] === 'Cambia cómo ves la IA' && titles[9] === 'Diseña tu sistema', 'all 10 modules render without errors');
assert((await evalJs(`document.querySelector('#missionSteps').textContent`)).includes('Preparar el briefing semanal para dirección'), 'the final project steps are built on the learner task');
assert((await evalJs(`document.querySelector('#practiceText').textContent`)).includes('Preparar el briefing semanal para dirección'), 'the practice text is built on the learner task');
await evalJs(`current=0;render();1`);
assert(await evalJs(`document.querySelectorAll('.node')[1].classList.contains('locked')`) === true, 'the next module reads as locked while this one is current');
await evalJs(`current=1;render();1`);
assert(await evalJs(`document.querySelectorAll('.node')[1].classList.contains('locked')`) === false, 'the next module unlocks once the learner reaches it');
assert(await evalJs(`document.querySelectorAll('.node')[0].classList.contains('locked')`) === false, 'a reached module stays unlocked when moving forward');
await evalJs(`current=0;render();1`);
assert((await evalJs(`document.querySelector('#challengePrompt').textContent`)).includes('Preparar el briefing semanal para dirección'), 'the journey challenge is built on the learner task');

// --- a task containing HTML is rendered literally, not as markup
await evalJs(`(()=>{const i=document.querySelector('#taskInput');i.value='<img src=x onerror=alert(1)>';i.dispatchEvent(new Event('input'));document.querySelector('#taskGo').click();return 1})()`);
await sleep(200);
assert(await evalJs(`current=7;render();document.querySelector('#missionSteps').querySelectorAll('img').length`) === 0, 'a task with markup does not inject an element into the mission steps');
assert((await evalJs(`document.querySelector('#missionSteps').textContent`)).includes('<img src=x onerror=alert(1)>'), 'the raw task text still appears, escaped, in the mission steps');
assert(await evalJs(`current=0;render();document.querySelector('#challengePrompt').querySelectorAll('img').length`) === 0, 'a task with markup does not inject an element into the challenge prompt');

// --- one module mastered
await evalJs(`localStorage.setItem('aws-state-1','mastered')`);
await check('progress');
assert(await evalJs(`getComputedStyle(document.querySelector('.progress-card')).display`) !== 'none', 'progress card appears after first module');
assert(await evalJs(`getComputedStyle(document.querySelector('#badges')).display`) !== 'none', 'badges appear after first module');
assert(await evalJs(`document.querySelector('#xp').textContent`) === '100 XP', 'XP reflects mastered module');
assert(await evalJs(`!document.body.classList.contains('prelude')`), 'prelude stays off once decided');

// --- drafts: work in progress survives reload and module switches
const DRAFT = 'Evidencia en curso que todavia no se ha guardado.';
await evalJs(`(()=>{const t=document.querySelector('#evidenceInput');t.value=${JSON.stringify(DRAFT)};t.dispatchEvent(new Event('input'));return 1})()`);
assert(await evalJs(`hasEvidence(0)`) === false, 'a draft does not count as saved evidence');
assert(await evalJs(`document.querySelector('#evidenceInput').value`) === DRAFT, 'the evidence draft is kept as it is written');

await check('evidence-draft');
assert(await evalJs(`document.querySelector('#evidenceInput').value`) === DRAFT, 'evidence draft survives a reload');
assert(await evalJs(`hasEvidence(0)`) === false, 'evidence draft still does not satisfy the evidence gate after reload');

await evalJs(`(()=>{document.querySelectorAll('.node')[1].click();return 1})()`);
await sleep(300);
await evalJs(`(()=>{document.querySelectorAll('.node')[0].click();return 1})()`);
await sleep(300);
assert(await evalJs(`document.querySelector('#evidenceInput').value`) === DRAFT, 'evidence draft survives a module switch');
assert(await evalJs(`localStorage.getItem('aws-evidence-1')`) === null, 'the draft is stored apart from the saved evidence');

assert(await evalJs(`(()=>{localStorage.setItem('aws-draft-reason-own-1','borrador de razonamiento en curso');renderAssessmentReason('texto ya guardado');return document.querySelector('#assessmentReason').value})()`) === 'borrador de razonamiento en curso', 'reasoning draft takes precedence over the saved text');
assert(await evalJs(`localStorage.getItem('aws-assessment-own-1')`) === null, 'the reasoning draft does not overwrite the saved reasoning');

// --- actionable errors: the requirement shows while the action is blocked, not after the click
await evalJs(`(()=>{const t=document.querySelector('#evidenceInput');t.value='corto';t.dispatchEvent(new Event('input'));return 1})()`);
assert((await evalJs(`document.querySelector('#evidenceStatus').textContent`)).includes('30'), 'the evidence minimum shows while the evidence is too short');
await evalJs(`(()=>{const t=document.querySelector('#evidenceInput');t.value=${JSON.stringify(DRAFT)};t.dispatchEvent(new Event('input'));return 1})()`);
assert(await evalJs(`document.querySelector('#evidenceStatus').textContent`) === '', 'the evidence minimum clears once the text is long enough');

await evalJs(`(()=>{localStorage.removeItem('aws-draft-reason-own-1');renderAssessmentReason('');return 1})()`);
assert(await evalJs(`document.querySelector('#saveAssessment').disabled`) === true, 'the reasoning button is disabled when the text is missing');
assert((await evalJs(`document.querySelector('#assessmentStatus').textContent`)).includes('20'), 'the reasoning requirement shows while the button is disabled');
await evalJs(`(()=>{const i=document.querySelector('#assessmentReason');i.value='demasiado corto';i.dispatchEvent(new Event('input'));return 1})()`);
assert(await evalJs(`document.querySelector('#saveAssessment').disabled`) === true, 'the reasoning button stays disabled below 20 characters');
await evalJs(`(()=>{const i=document.querySelector('#assessmentReason');i.value='Un razonamiento con mas de veinte caracteres.';i.dispatchEvent(new Event('input'));return 1})()`);
assert(await evalJs(`document.querySelector('#saveAssessment').disabled`) === false, 'the reasoning button enables at 20 characters');
assert(await evalJs(`document.querySelector('#assessmentStatus').textContent`) === '', 'the reasoning requirement clears once it can be saved');

// --- contrast: the faint text token clears AA on every surface it sits on
const faintContrast = `(()=>{const g=n=>getComputedStyle(document.documentElement).getPropertyValue(n).trim();
const lum=c=>{c=c.length===4?'#'+[1,2,3].map(i=>c[i]+c[i]).join(''):c;const v=[1,3,5].map(i=>parseInt(c.slice(i,i+2),16)/255).map(x=>x<=.04045?x/12.92:((x+.055)/1.055)**2.4);return .2126*v[0]+.7152*v[1]+.0722*v[2]};
const ratio=(a,b)=>{const x=lum(a),y=lum(b);const hi=Math.max(x,y),lo=Math.min(x,y);return +((hi+.05)/(lo+.05)).toFixed(3)};
const fg=g('--text-faint');
return ['--bg','--bg-card','--bg-subtle','--bg-subtle-2','--bg-progress','--bg-hover'].map(k=>({k,r:ratio(fg,g(k))}))})()`;
let r = await evalJs(faintContrast);
assert(Math.min(...r.map(x=>x.r)) >= 4.5, 'faint text keeps AA contrast on every light surface (worst ' + Math.min(...r.map(x=>x.r)) + ')');
await send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-color-scheme', value: 'dark' }] });
r = await evalJs(faintContrast);
assert(Math.min(...r.map(x=>x.r)) >= 4.5, 'faint text keeps AA contrast on every dark surface (worst ' + Math.min(...r.map(x=>x.r)) + ')');
await send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-color-scheme', value: 'light' }] });

// --- PWA update path: network first, cache only as the offline fallback, old caches purged
assert((await (await fetch(url + 'sw.js')).text()).includes('ia-work-system-v3'), 'the service worker declares the v3 cache');

await check('pwa');
assert(await evalJs(`!!navigator.serviceWorker.controller`), 'the page is controlled by the service worker');

await evalJs(`caches.open('ia-work-system-v3').then(c=>c.put('./content.js',new Response('//POISON'))).then(()=>1)`);
assert((await evalJs(`fetch('./content.js').then(r=>r.text())`)).includes('window.AWS_CONTENT'), 'the network wins over the cache while the server answers');

await evalJs(`caches.open('ia-work-system-v2').then(c=>c.put('./stale',new Response('old design'))).then(()=>1)`);
await evalJs(`navigator.serviceWorker.getRegistration().then(r=>r?r.unregister():true).then(()=>1)`);
await check('pwa-activate');
for (let i = 0; i < 40 && (await evalJs(`caches.has('ia-work-system-v2')`)); i++) await sleep(250);
assert(await evalJs(`caches.has('ia-work-system-v2')`) === false, 'activate purges the inherited v2 cache');
assert(await evalJs(`caches.has('ia-work-system-v3')`) === true, 'the v3 cache survives activation');
assert(await evalJs(`!!navigator.serviceWorker.controller`), 'the page is controlled again after re-registration');

await evalJs(`caches.open('ia-work-system-v3').then(c=>c.put('./offline-fallback.js',new Response('POISON-FALLBACK'))).then(()=>1)`);
server.kill();
for (let i = 0; i < 40; i++) { try { await fetch(url); await sleep(200); } catch { break; } }
assert((await evalJs(`fetch('./offline-fallback.js').then(r=>r.text())`)).includes('POISON-FALLBACK'), 'the cache answers when the network is gone');

console.log('ALL PASS');
ws.close();
chrome.kill();
process.exit(0);
