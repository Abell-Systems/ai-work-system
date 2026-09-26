import React,{useState} from 'react';
import {createRoot} from 'react-dom/client';
import {motion,AnimatePresence} from 'framer-motion';
import './styles.css';

type Choice={id:string;label:string;feedback:string;good?:boolean};
const choices:Choice[]=[
{id:'context',label:'Definir primero el objetivo y el contexto.',feedback:'Antes de pedir trabajo a una IA necesitas definir qué problema estás resolviendo y qué información condiciona el resultado.',good:true},
{id:'prompt',label:'Pedir directamente a la IA que lo haga.',feedback:'Obtendrás una respuesta, pero todavía no has diseñado el proceso. La primera respuesta no define por sí sola un buen sistema de trabajo.'},
{id:'template',label:'Buscar una plantilla y empezar a rellenarla.',feedback:'Una plantilla puede ayudar, pero todavía no has aclarado qué resultado necesitas ni cómo comprobarás su calidad.'}
];
const modules=['Cambiar el modelo mental','Dar contexto','Formular trabajo','Trabajar en ciclos','Investigar con IA','Crear con IA','Verificar','Experimentar','Delegar','Diseñar tu sistema'];
function App(){
 const [selected,setSelected]=useState<string>(); const [mission,setMission]=useState(false);
 const [done,setDone]=useState(()=>localStorage.getItem('aws-m1')==='done'); const current=choices.find(c=>c.id===selected);
 const complete=()=>{setDone(true);localStorage.setItem('aws-m1','done')};
 return <div className="app">
  <header className="top"><div><div className="eyebrow">INTERACTIVE MOOC · 01 / 10</div><h1>IA como<br/><em>sistema de trabajo.</em></h1><p>Aprende a convertir una tarea en un proceso humano + IA que pueda observarse, verificarse e iterarse.</p></div><div className="status">{done?'● Completado':'○ En progreso'}</div></header>
  <main>
   <section className="map"><div className="section-label">TU RECORRIDO</div><div className="nodes">{modules.map((m,i)=><div key={m} className={i===0?'node active':'node'}><span>{String(i+1).padStart(2,'0')}</span><strong>{m}</strong></div>)}</div></section>
   <section className="lesson"><div className="section-label">MISIÓN 01 · CAMBIAR EL MODELO MENTAL</div>
    <div className="hero-card"><div className="step">SITUACIÓN</div><h2>La IA no es el proceso.</h2><p>Te han pedido preparar un informe para dirección. Tienes documentos, datos y acceso a una IA. <strong>¿Qué haces primero?</strong></p>
     <div className="choices">{choices.map(c=><button key={c.id} className={selected===c.id?'choice selected':'choice'} onClick={()=>setSelected(c.id)}>{c.label}<span>→</span></button>)}</div>
     <AnimatePresence>{current&&<motion.div initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} exit={{opacity:0}} className={current.good?'feedback good':'feedback'}><div className="feedback-title">{current.good?'BUENA DECISIÓN':'OBSERVA LA CONSECUENCIA'}</div><p>{current.feedback}</p></motion.div>}</AnimatePresence>
    </div>
    <div className="external"><div><div className="step">MISIÓN EXTERNA</div><h3>Ahora sal del curso.</h3><p>Utiliza tu propia IA para realizar esta tarea. El curso no ejecuta IA: te enseña el método y después te pide volver con lo aprendido.</p></div><button onClick={()=>setMission(!mission)}>{mission?'Cerrar':'Abrir misión'} ↗</button></div>
    {mission&&<motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} className="mission"><div className="step">EN TU PROPIA IA</div><h3>Hazlo en el mundo real.</h3><ol><li>Define el objetivo del informe en una frase.</li><li>Reúne el contexto y las restricciones relevantes.</li><li>Usa tu IA para generar una primera propuesta.</li><li>Observa qué falta y qué tienes que corregir.</li></ol><p className="return">Cuando vuelvas, el curso te pedirá reconstruir qué ocurrió.</p><button disabled={!current?.good} onClick={complete}>{done?'✓ Módulo completado':'He vuelto · continuar'}</button></motion.div>}
   </section>
  </main><footer>DETERMINISTIC BY DESIGN · TU IA OCURRE FUERA · EL APRENDIZAJE OCURRE AQUÍ</footer>
 </div>
}
createRoot(document.getElementById('root')!).render(<App/>);