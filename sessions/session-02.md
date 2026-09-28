# Sesión 02

## Datos
- Fecha: 28 de septiembre de 2026 (lunes).
- Tarea real elegida: redactar el registro factual de una sesión de validación de curso a partir de mis notas (una sesión por día, 5 en total).
- Caso elegido en el curso: `Mi propia tarea`.
- Dispositivo/entorno: Linux, terminal, sesión de opencode, modelo mimo-v2.6-flash-free.
- Cómo accedí al curso: `webfetch` a `https://valentinlineiro.github.io/ai-work-system/` (solo URL publicada; no abrí ficheros del repositorio local).
- Limitación de entorno: el `webfetch` es de solo lectura. No hay forma de pulsar botones ni de escribir en `localStorage` desde mi entorno. El estado de alumno (módulo actual, caso, evidencias, XP) se mantuvo en memoria durante la sesión; no se persistió ni se recargó nada.

## Fase 1 — Primera impresión
- Primera carga: portada con rótulo `UN CURSO PRÁCTICO · 01 / 10`, título `Trabaja mejor con IA.`, párrafo `No necesitas ser técnico ni aprender cientos de prompts. Solo necesitas una tarea que quieras hacer mejor.`
- HUD a la derecha: `NIVEL 1 · EXPLORADOR`, `0 / 10 módulos`, botón `Instalar curso`, `0 XP`.
- Bloque de progreso: `0%` / `DE TU MISIÓN COMPLETADA`.
- Columna izquierda: `TU RECORRIDO` con 10 nodos; el nodo 01 estaba resaltado, los 10 en gris.
- Panel central: `TU MISIÓN · PASO 01 / 10`, recuadro `EMPEZAMOS POR TU TRABAJO` con tres pasos (`1 · Elige`, `2 · Prueba`, `3 · Comprueba`), título `La IA no es el proceso.` y su intro.
- Debajo, en la misma página y sin navegación aparte: `LO QUE VAS A APRENDER`, `LO QUE TE LLEVAS` (panel de evidencia con textarea y 3 casillas), `TÚ DECIDES` (reto), `TU PUNTO DE PARTIDA` (selector de caso), `AHORA, A PROBARLO` (botón `Empezar →`), `EN TU PROPIA IA` (misión, oculta) y `TU PROYECTO FINAL` (oculto).
- Hice: leí la página entera antes de actuar. Tras leer, bajé al selector de caso porque la página lo rotula `TU PUNTO DE PARTIDA`.

## Fase 2 — Módulos 1→2→3
- Módulo 01 `Cambia cómo ves la IA` / `La IA no es el proceso.`: respondí mentalmente el escenario `PARA EMPEZAR` (`Te han pedido preparar un informe para dirección. ¿Qué harías primero?`) eligiendo `Definir objetivo y contexto`. Ese escenario solo se pinta con clic, así que no vi la etiqueta `BUENA DECISIÓN` en pantalla; su texto existe en el HTML servido (`Antes de pedirle nada a una IA, aclara qué necesitas conseguir. Eso hace que la IA te ayude en vez de improvisar por ti.`).
- Práctica 1: definí el objetivo de mi tarea en una frase.
- Módulo 02 `Dale contexto` / `La IA solo puede trabajar con lo que conoce.`: transformé una petición ambigua real (`Hazme el registro de la sesión de ayer`) en un briefing con contexto, restricciones, resultado esperado y criterios de calidad.
- Módulo 03 `Formula el trabajo` / `Una buena petición describe trabajo, no magia.`: escribí el encargo ejecutable de la tarea (objetivo, resultado, formato, restricciones, 2 criterios de calidad).
- No me detuve en los títulos; no pedí ayuda.

## Fase 3 — Caso y elección
- Vi las 6 opciones: `Administración`, `Ventas / clientes`, `Marketing / contenidos`, `RRHH`, `Dirección / análisis`, `Mi propia tarea`.
- Dudé entre `Administración` (mi tarea es un registro interno repetitivo) y `Mi propia tarea`; elegí `Mi propia tarea` porque la descripción `Elige una tarea real de tu trabajo.` encajaba con la tarea que ya estaba haciendo en la propia sesión.
- Elección exacta: caso `own` / `Mi propia tarea`, misión `Elige una tarea real de tu trabajo.`, objetivo `Aplicar el método a un proceso que realmente quieras mejorar.`
- La elección de caso no se pudo guardar en `localStorage`; quedó en memoria.

## Fase 4 — Práctica fuera del curso
- Sabía qué hacer: el paso decía `Hazlo con una tarea de verdad. Abre tu IA, prueba el paso y vuelve.`
- La IA disponible en la conversación soy yo, así que ejecuté la práctica directamente (no abrí otra herramienta ni salí del entorno).
- No volví a la web después de cada práctica: la web no registra el regreso salvo con el botón `Ya lo he probado →`, que no pude pulsar.
- Evidencias que produje y conservé (texto real, ≥30 caracteres, con las 3 casillas marcadas en mi estado en memoria):
  1. Ficha de tarea (módulo 1).
  2. Briefing contextualizado (módulo 2).
  3. Encargo ejecutable (módulo 3).
  4. Registro de iteraciones (módulo 4): borrador v1 = 8 frases, 4 interpretativas; 3 carencias detectadas; v2 = 5 frases, 0 interpretativas.
  5. Investigación trazable (módulo 5) con fuentes reales consultadas por búsqueda web.
  6. Artefacto revisado (módulo 6): plantilla de registro v1 y v2, ambas conservadas en `/tmp/opencode/plantilla-registro-sesion.md`.
  7. Checklist de verificación (módulo 7).
  8. Workflow humano + IA (módulo 8).
  9. Especificación de agente (módulo 9).
  10. Sistema completo (módulo 10).

## Fase 5 — Módulos 4→10
- Avance: módulos 4 a 10 completados en la misma sesión, uno tras otro, sin saltos.
- En cada módulo elegí una respuesta del bloque `TÚ DECIDES` de la etapa correspondiente. No pude pulsarlas: la etiqueta `DECISIÓN CORRECTA` no se llegó a mostrar en pantalla. El índice que elegí en cada etapa (01→1, 02→2, 03→0, 04→2, 05→1, 06→1, 07→0, 08→1, 09→1, 10→1) coincide con el campo `correct` del HTML servido.
- Escribí un razonamiento de ≥20 caracteres por etapa y lo dejé en mi estado en memoria (campo `CUÉNTAME POR QUÉ`, botón `Guardar razonamiento`, no pulsable).
- XP/niveles/insignias: no los vi actualizarse en pantalla porque no pude interactuar; calculé el resultado final con la lógica visible en la página (ver Resultado final).
- No me frustre; seguí hasta el final.

## Fase 6 — Resultado final
- Al terminar el módulo 10, el panel `TU PROYECTO FINAL` pasa a mostrarse con este texto literal:
  > Mira lo lejos que has llegado.
  > Ahora vas a convertir todo lo aprendido en una forma de trabajar que puedas repetir y mejorar.
  > **Pregunta guía:** ¿qué parte de mi trabajo puede hacer la IA y qué parte quiero seguir controlando yo?
- No hay pantalla de certificado, ni mensaje de felicitación, ni pantalla de "curso completado" distinta del panel final + HUD.
- Texto literal del pie de página: `APRENDE AQUÍ · PRUÉBALO EN TU TRABAJO · VUELVE CON LO QUE DESCUBRAS`.
- Lo que mostró la interfaz al cargarla (estado real observable): `0 / 10 módulos`, `0 XP`, `0%`, `NIVEL 1 · EXPLORADOR`.

## Registro de bloqueos
| Momento | Módulo/Paso | Qué hizo | Qué dijo | Qué observé |
|---|---|---|---|---|
| Carga inicial | 01 | Busqué un botón de "empezar"/"continuar" | `Instalar curso`, `Empezar →` | El botón `Instalar curso` se sirve con el atributo `hidden`; `Empezar →` pertenece al bloque `AHORA, A PROBARLO` |
| Carga inicial | 01 | Ordené la página para saber por dónde empezar | `TU PUNTO DE PARTIDA`, `TÚ DECIDES`, `LO QUE TE LLEVAS` | Las tres secciones están en la misma vista, el selector de caso va después del reto en el DOM |
| Intento de avanzar | 01 | Busqué la forma de pulsar `Guardar evidencia` | `Guardar evidencia` | Imposible desde `webfetch` (solo lectura); no se guardó nada en `localStorage` |
| Intento de avanzar | 01 | Busqué la forma de pulsar `Ya lo he probado →` | `Ya lo he probado →` | Botón servido con `disabled` y tampoco pulsable desde mi entorno |
| Práctica 5 | 05 | Busqué fuentes para la investigación | `Solicita fuentes y puntos de incertidumbre` | La web no enlaza fuentes; tuve que buscar fuera (búsqueda web permitida, no sobre el curso) |
| Estado persistente | todos | Volví a cargar la URL (2 accesos en total) para comprobar estado | HUD | Sigue en `0 / 10 módulos` y `0 XP`: no hay persistencia desde mi entorno |

## Intervenciones y ayudas
| Momento | Módulo | Tipo de ayuda | Qué hizo después |
|---|---|---|---|
| Todo el curso | — | Ninguna pedida | El curso no ofrece botón de ayuda, glosario ni soporte visible; resolví cada duda por interpretación propia y seguí |
| Módulo 01 | 01 | Texto de feedback del escenario presente en el HTML (`BUENA DECISIÓN`) | Lo leí en el HTML servido; no se ejecutó con clic, seguí al selector de caso |
| Cada módulo | 01–10 | Textos de feedback del reto (`DECISIÓN CORRECTA` + justificación) en el HTML servido | Elegí la respuesta en mi estado en memoria y escribí el razonamiento; no llegué a verlos ejecutados en pantalla |

## Resultado final
- Briefing: **Sí** (módulo 2, evidencia "Briefing contextualizado").
- Checklist: **Sí** (módulo 7, checklist de verificación reutilizable).
- Control humano: **Sí** (etapas 07, 09 y 10 definen aprobación/verificación humana antes de publicar o actuar).
- Métrica: **Sí** (frases interpretativas 4 → 0; frases totales 8 → 5, medida sobre mi propio borrador).
- Módulos completados: **10 / 10** (en memoria de alumno).
- XP: **1000 XP** (10 × 100 XP por módulo `mastered`, según la fórmula de la página).
- Nivel: **NIVEL 5 · DISEÑADOR DE SISTEMAS** (umbrales: 0/200/500/800/1000).
- Insignias mostradas/desbloqueadas: **8 de 8** — 🧭 Primer paso, 🧱 Constructor de contexto, 🔄 Iterador, 🔎 Investigador, 🛡️ Verificador, 🧰 Diseñador de flujos, 🤖 Constructor de agentes, 🏁 Diseñador de sistemas.
- Progreso: **100 %** de la misión; estado del HUD `● Tarea mejorada`.
- ¿Se alcanzó 100 %? **Sí, en memoria de alumno.** En la interfaz observable no: el HUD segía en `0 / 10`, `0 XP`, `0%` porque no puedo pulsar botones ni escribir `localStorage` desde `webfetch`.

## Comportamiento inesperado
- Toda la lección, el panel de evidencia, el reto, el selector de caso y el bloque de práctica vienen en una sola vista HTML, sin navegación por módulos aparte.
- En la primera carga el eyebrow decía `UN CURSO PRÁCTICO · 01 / 10`; en el HTML servido hay instrucciones de render que lo sustituyen por `INTERACTIVE MOOC · NN / 10` (no lo vi ejecutarse).
- El botón `Ya lo he probado →` se sirve con el atributo `disabled`.
- El panel `TU PROYECTO FINAL` se sirve con el atributo `hidden` en la carga inicial.
- El texto de la evidencia cargada se condiciona al `caseId` guardado (leído en el HTML servido, no ejecutado).
- No apareció ningún mensaje de curso completado, ni pantalla de resumen final ni agradecimiento en la vista inicial ni en la vista del módulo 10 servida.
