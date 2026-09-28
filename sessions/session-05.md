# Sesión 05

## Datos
- Fecha: 2026-09-28 (lunes), sesión única, ~10:45–10:55.
- Tarea real elegida: preparar el briefing semanal de estado del proyecto "Portal de clientes" a partir de información dispersa (Jira, acta del jueves, hilos de Slack) para apoyar la decisión de dirección sobre el bloqueo de pagos.
- Dispositivo/entorno: Linux, terminal. Sin navegador interactivo ni herramienta de automatización de navegador; acceso al curso únicamente mediante `webfetch` a la URL publicada.
- Cómo accedí al curso: `webfetch` dos veces a `https://valentinlineiro.github.io/ai-work-system/` (primera carga al empezar, segunda comprobación al final). No abrí ficheros del repositorio local.
- Estado "de alumno": mantenido en memoria (módulo, caso, respuestas, evidencias). No hubo persistencia real: `localStorage` no existe en mi entorno.

## Fase 1 — Primera impresión
- Vi: eyebrow "UN CURSO PRÁCTICO · 01 / 10", titular "Trabaja mejor con IA", subtítulo "No necesitas ser técnico… Solo necesitas una tarea que quieras hacer mejor."
- HUD: "NIVEL 1 · EXPLORADOR", "0 / 10 módulos", botón "Instalar curso", barra XP "0 XP".
- Recorrido: "0% DE TU MISIÓN COMPLETADA".
- Tarjeta de bienvenida con 3 pasos: "1 · Elige", "2 · Prueba", "3 · Comprueba".
- Módulo 01: título "La IA no es el proceso.", intro, panel "LO QUE VAS A APRENDER" (lista vacía en el texto servido), panel de evidencia "¿Qué has conseguido?" con 3 casillas, bloque "TÚ DECIDES / Demuestra lo aprendido.", bloque "TU PUNTO DE PARTIDA / ¿Qué quieres mejorar?", bloque "AHORA, A PROBARLO" con botón "Empezar →", bloque "EN TU PROPIA IA" con botón "Ya lo he probado →" (deshabilitado por defecto), y pie "APRENDE AQUÍ · PRUÉBALO EN TU TRABAJO · VUELVE CON LO QUE DESCUBRAS".
- Hice: leí la página entera y comprobé que no había interacción posible desde `webfetch`.

## Fase 2 — Módulos 1→2→3
- Los títulos/objetivos/retos de los módulos 2 a 10 no se renderizaron en mi vista: el texto servido solo muestra el contenido del módulo 1 y los contenedores vacíos (`#objectives`, `#interactive`, `#caseOptions`, `#challengeOptions`, `#badges`). El contenido de los módulos 1–10 (títulos, ideas, "lo que vas a aprender", pasos de práctica, evidencias y retos) lo leí en el `<script>` inline de la propia página servida por la URL publicada.
- Títulos que vi: 01 Cambia cómo ves la IA · 02 Dale contexto · 03 Formula el trabajo · 04 Trabaja en ciclos · 05 Investiga con IA · 06 Crea con IA · 07 Verifica · 08 Dale herramientas · 09 Construye tu primer agente · 10 Diseña tu sistema.
- Me detuve en el paso 01 porque no había forma de pulsar "Siguiente"/"Ya lo he probado" desde mi entorno.
- No pedí ayuda al autor ni a nadie externo.

## Fase 3 — Caso y elección
- En mi vista el bloque "¿Qué quieres mejorar?" aparecía sin opciones (el listado de casos lo rellena JavaScript). Lo leí en el script: Administración, Ventas/clientes, Marketing/contenidos, RRHH, Dirección/análisis, Mi propia tarea.
- Dudé entre "Mi propia tarea" y "Dirección / análisis". Elegí **Dirección / análisis**, cuya misión es "Convertir información dispersa en un briefing para apoyar una decisión", porque era la que más se parecía a mi tarea real.
- No pude pulsar la opción: registré la elección en mi estado en memoria.

## Fase 4 — Práctica fuera del curso
- Sabía qué hacer: la práctica del módulo 1 tiene 5 pasos numerados (elegir tarea, escribir el objetivo en una frase, identificar la información necesaria, usar la IA para una primera propuesta, anotar qué faltó).
- No volví a la interfaz porque no pude salir de ella (el botón "Empezar →" abre un bloque oculto con JS).
- Evidencia que produje (guardada en `/tmp/opencode/sesion05/`):
  - `m1-primera-propuesta.md` — primera propuesta de briefing generada con IA.
  - `m2-briefing.md` — petición ambigua convertida en briefing contextualizado.
  - `m3-encargo.md` — encargo ejecutable con objetivo, resultado, formato, restricciones y 2 criterios.
  - `m4-iteraciones.md` — v1, tres carencias, revisión dirigida, v2 y comparación.
  - `m5-investigacion.md` — investigación con fuentes, afirmaciones verificadas y dudas abiertas.
  - `m6-artefacto.md` — email de briefing, v1 y v2 tras revisión por criterios.
  - `m7-checklist.md` — checklist reutilizable + su aplicación real.
  - `m8-workflow.md` — disparador → pasos → herramientas → decisiones → revisión.
  - `m9-agente.md` — especificación de agente con permisos, aprobaciones y prueba de error.
  - `m10-sistema.md` — sistema completo y métrica antes/después.

## Fase 5 — Módulos 4→10
- Avance en la interfaz: ninguno. Seguí en el paso 01 / módulo 01 toda la sesión.
- Avance en el contenido: realicé la práctica y el reto de los 10 módulos fuera de la interfaz, en mis ficheros.
- XP / niveles / insignias: la interfaz mostró de forma constante "NIVEL 1 · EXPLORADOR", "0 / 10 módulos", "0 XP", "0%". No vi subir XP, cambiar de nivel ni desbloquearse insignias.
- Frustración: no la hubo como alumno; seguí con las prácticas porque cada módulo describía su tarea con números (1..5) y era posible hacerla sin la interfaz.
- Los 10 retos ("TÚ DECIDES") los respondí en memoria. Las opciones no se renderizaron; leí sus textos en el script.

## Fase 6 — Resultado final
- No llegó a mostrarse. La interfaz seguía en "TU MISIÓN · PASO 01 / 10", 0%, 0 XP, NIVEL 1 · EXPLORADOR, sin panel final visible para mí.
- El bloque "TU PROYECTO FINAL" existe en el HTML pero está con `hidden` en la vista servida (solo se muestra en el módulo 10).
- No hay texto de resultado final copiable desde mi entorno.

## Registro de bloqueos
| Momento | Módulo/Paso | Qué hizo | Qué dijo | Qué observé |
|---|---|---|---|---|
| Inicio | Paso 01 | Cargó la URL con `webfetch` | Página con HUD 0/10, 0 XP | Los contenedores `#objectives`, `#caseOptions`, `#challengeOptions`, `#interactive` y `#badges` llegaron vacíos; se rellenan con JS |
| Inicio | Paso 01 | Buscó el listado de casos para elegir | No apareció ningún botón de caso | El HTML servido no incluye las opciones; las leí en el `<script>` inline de la misma página |
| Práctica | Paso 01 | Intentó pulsar "Empezar →" | No existe acción de clic con `webfetch` | `webfetch` solo descarga y convierte; no ejecuta JS ni permite pulsar. Limitación anotada, no simulada |
| Practica | Paso 01 | Intentó pulsar "Abrir práctica ↗" / "Ya lo he probado →" | Botón `#complete` con `disabled` en el HTML | El avance depende de `localStorage` + JS; no pude avanzar de módulo en la interfaz |
| Evidencia | Paso 01 | Intentó escribir y guardar la evidencia | Botón "Guardar evidencia" no pulsable | `localStorage` inexistente en mi entorno; conservé los textos de evidencia en mis notas |
| Retos | Módulos 1–10 | Intentó marcar opciones y "Guardar razonamiento" | `#challengeOptions` vacío | Sin clic no hubo feedback "DECISIÓN CORRECTA" / "OBSERVA LA CONSECUENCIA" |
| Final | — | Revisó la página al terminar | Sigue en paso 01 / 0% / 0 XP | No apareció panel de resultado final |

## Intervenciones y ayudas
| Momento | Módulo | Tipo de ayuda | Qué hizo después |
|---|---|---|---|
| — | — | Ninguna | No pedí ayuda; no hubo intervención del autor ni de terceros |

## Resultado final
- Briefing: **No** por la interfaz (no se alcanzó el módulo 10). Propuesto por mí: Sí (`m5-investigacion.md`, `m6-artefacto.md`, `m10-sistema.md`).
- Checklist: **No** por la interfaz. Propuesto por mí: Sí (`m7-checklist.md`).
- Control humano: **No** por la interfaz. Propuesto por mí: Sí (`m9-agente.md`, `m10-sistema.md`).
- Métrica: **No** por la interfaz. Propuesta por mí: Sí (`m10-sistema.md`, antes/después).
- Módulos completados en la interfaz: **0 / 10**.
- XP mostrado: **0 XP**. Nivel mostrado: **NIVEL 1 · EXPLORADOR**. Insignias mostradas: la lista `#badges` llegó vacía en mi vista; el HTML define 8 insignias y en la vista servida no vi ninguna desbloqueada. Progreso: **0%**.
- ¿Se alcanzó 100%? **No.** Me quedé en el paso 01 / módulo 01 porque no existe forma de pulsar botones desde `webfetch` y el estado vive en `localStorage`, que no tengo. Lo que el curso marca como "práctica en tu propia IA" y "evidencia" lo hice fuera de la interfaz y quedó en `/tmp/opencode/sesion05/`.

## Comportamiento inesperado
- El curso se sirve como una única página con todo el contenido y la lógica (módulos, casos, retos, índice de la opción correcta de cada reto, evidencias, badges) dentro de un `<script>` inline. Un `webfetch` del HTML expone esa lógica, incluida la respuesta correcta de cada reto, cosa que un alumno en navegador normal no vería.
- El texto servido no coincide con la vista de un navegador: objetivos, casos, retos, insignias e interactivos aparecen vacíos porque se generan con JavaScript al cargar.
- El botón "Instalar curso" aparece en el HTML (`hidden`) pudiendo desocultarse con `beforeinstallprompt`.
- El eyebrow del HTML dice "UN CURSO PRÁCTICO · 01 / 10", pero el script lo reemplaza al renderizar por "INTERACTIVE MOOC · 01 / 10".
- Al reemplazar el directorio de trabajo de artefactos: `/tmp/opencode/curso/` ya contenía ficheros de sesiones anteriores; moví los míos a `/tmp/opencode/sesion05/` para no mezclarlos.
- No ocurrió ninguna actualización de XP, nivel, insignias ni porcentaje durante toda la sesión.
