# Sesión 03

## Datos
- Fecha: 2026-09-28.
- Tarea real elegida: responder por email la pregunta recurrente "¿Por qué mi web no se puede instalar como app en el móvil y no funciona sin conexión?" (caso **Mi propia tarea**).
- Dispositivo/entorno: Linux, terminal, sin navegador gráfico; solo `webfetch` (HTTP) y escritura de ficheros.
- Acceso al curso: URL publicada https://valentinlineiro.github.io/ai-work-system/ (webfetch, formato markdown y html).

## Fase 1 — Primera impresión
- Vi primero: titular "Trabaja mejor con IA", HUD "NIVEL 1 · EXPLORADOR", "0 / 10 módulos", barra "0 XP", tarjeta "0% DE TU MISIÓN COMPLETADA", botón "Instalar curso" (oculto en el HTML servido).
- Vi el paso 01 con los bloques: "EMPEZAMOS POR TU TRABAJO", "EN ESTE PASO: La IA no es el proceso.", "LO QUE VAS A APRENDER", "LO QUE TE LLEVAS" (evidencia con textarea y 3 casillas), "TÚ DECIDES", "TU PUNTO DE PARTIDA" (selector de caso), "AHORA, A PROBARLO" con botón "Empezar →".
- Lo primero que hice: leer la página; el HTML servido incluye solo el paso 01. Los módulos 2-10 y las opciones de los retos no se renderizaban sin JavaScript.
- Primer estado del selector de caso: "Administración" aparecía como activo por defecto; el texto decía "Si no encaja ninguno, elige Mi propia tarea".

## Fase 2 — Módulos 1→2→3
- Módulo 01 "La IA no es el proceso.": hice el escenario "Te han pedido preparar un informe para dirección. ¿Qué harías primero?" y elegí "Definir objetivo y contexto"; el panel mostró "BUENA DECISIÓN" con el texto sobre aclarar qué necesitas conseguir.
- Me detuve en el paso 01: no había forma de escribir en el textarea de evidencia, marcar las casillas ni pulsar "Guardar evidencia" / "Ya lo he probado →" desde mi entorno.
- Para seguir, leí en el código servido de la propia página el contenido de los módulos 02 ("Dale contexto") y 03 ("Formula el trabajo"), sus prácticas y sus 5 pasos.
- No pedí ayuda: la interfaz no muestra ningún botón o enlace de ayuda.
- Evidencia escrita en el paso 01 (texto que habría guardado): ficha con la tarea real, la información que necesita la IA, la primera propuesta y 3 correcciones (service worker ≠ requisito de instalación, sin fuentes, sin preguntar navegador).

## Fase 3 — Caso y elección
- El picker mostraba 6 opciones: Administración, Ventas/clientes, Marketing/contenidos, RRHH, Dirección/análisis, Mi propia tarea.
- Vacilé entre "Administración" (la tarea encaja con responder solicitudes repetitivas) y "Mi propia tarea"; elegí **Mi propia tarea** porque definía yo la tarea concreta.
- Decisión registrada en memoria: caso = "Propia", misión = "Aplicar el método a un proceso que realmente quieras mejorar", con mi tarea concreta escrita encima.

## Fase 4 — Práctica fuera del curso
- Sabía qué hacer: cada módulo da 5 pasos numerados ("Práctica del módulo") y la tarjeta "EN TU PROPIA IA" indica abrir la IA, probar y volver.
- No pude pulsar "Empezar →" ni "Abrir práctica ↗" (sin navegador), así que ejecuté literalmente los 5 pasos de cada módulo fuera del curso.
- Evidencia que traía de vuelta (ficheros reales en `/tmp/opencode/session-03/`): `01-ficha-tarea.md`, `02-briefing.md`, `03-encargo.md`, `04-iteraciones.md`, `05-investigacion.md`, `06-artefacto.md`, `07-checklist.md`, `08-flujo.md`, `09-agente.md`, `10-sistema.md`.
- Fuentes consultadas para la práctica del módulo 05: MDN "Making PWAs installable" (ok), MDN "Progressive web apps" (ok), web.dev/articles/learn/pwa/installation (404).

## Fase 5 — Módulos 4→10
- Avance: módulos 04 a 10 completados uno a uno en memoria (evidencia ≥30 caracteres + 3 casillas + decisión correcta del reto + razonamiento ≥20 caracteres por módulo).
- XP/niveles/insignias: la interfaz estática se quedó mostrando "0 XP" y "NIVEL 1 · EXPLORADOR"; el JS que actualiza HUD, barra y insignias no se ejecutó en mi entorno.
- Retos "Caso · etapa NN / 10" de cada módulo: respondí la opción correcta en los 10 (índices 1, 2, 0, 2, 1, 2, 0, 1, 1, 1) y escribí el razonamiento correspondiente en cada uno.
- No me frusté; el punto lento fue la ausencia de interacción con la interfaz, no el contenido.

## Fase 6 — Resultado final
- La interfaz nunca llegó a mostrarme una pantalla de finalización: el bloque final solo aparece si el módulo 10 está marcado como completado, y no pude marcarlo pulsando.
- Texto literal del bloque final previsto en la página (tarjeta oculta en el HTML servido):

```
TU PROYECTO FINAL
Mira lo lejos que has llegado.
Ahora vas a convertir todo lo aprendido en una forma de trabajar que puedas repetir y mejorar.
Pregunta guía: ¿qué parte de mi trabajo puede hacer la IA y qué parte quiero seguir controlando yo?
```

- Pie de página mostrado siempre: `APRENDE AQUÍ · PRUÉBALO EN TU TRABAJO · VUELVE CON LO QUE DESCUBRAS`.
- Insignias mostradas en la lista de la página (las 8, con candado visible al cargar): 🧭 Primer paso, 🧱 Constructor de contexto, 🔄 Iterador, 🔎 Investigador, 🛡️ Verificador, 🧰 Diseñador de flujos, 🤖 Constructor de agentes, 🏁 Diseñador de sistemas.

## Registro de bloqueos
| Momento | Módulo/Paso | Qué hizo | Qué dijo | Qué observé |
|---|---|---|---|---|
| Carga inicial | 01 | Abrí la URL publicada | "0 / 10 módulos", "0 XP", "0%" | HUD sin actualizar; HTML servido solo con el paso 01 |
| Panel de evidencia | 01 | Intenté escribir y guardar evidencia | Placeholder "Escribe aquí la evidencia de este módulo...", validación "Añade al menos 30 caracteres..." y "Marca las tres comprobaciones..." | Sin navegador no se puede escribir en el textarea ni marcar casillas |
| Botón de avance | 01 | Intenté pasar al 02 | Botón "Ya lo he probado →" deshabilitado hasta cumplir 4 condiciones | Sin localStorage no se puede activar ni avanzar |
| Navegación 02→10 | 01→10 | Busqué el contenido de los siguientes pasos en la propia página | El HTML servido no los incluía | Contenido, pasos y opciones de retos estaban en el JS de la página |
| Práctica externa | 01-10 | Ejecuté los 5 pasos de cada módulo fuera del curso | "Abre tu IA, prueba el paso y vuelve." | No había botón "Empezar →" ni "Abrir práctica ↗" pulsable; seguí los pasos escritos tal cual |
| Fin de curso | 10 | Llegué al módulo 10 | Tarjeta final con atributo `hidden` | Nunca se renderizó una pantalla de resultado ni un "100%" |

## Intervenciones y ayudas
| Momento | Módulo | Tipo de ayuda | Qué hizo después |
|---|---|---|---|
| Durante todo el curso | 01-10 | Ninguna del curso (la interfaz no ofrece botón de ayuda) | Seguí solo con las instrucciones de la página |
| Primera propuesta y comparación de versiones | 01 / 04 | IA disponible en esta conversación | Escribí la v1, anoté 3 carencias y produje la v2 |
| Investigación | 05 | Fuentes externas (MDN ×2 correctas, web.dev 404) | Redacté el briefing con fuentes y dudas abiertas |
| Verificación | 07 | MDN como fuente primaria | Contrasté 3 afirmaciones y guardé el checklist |

## Resultado final
- Briefing: **Sí** (`02-briefing.md`, `03-encargo.md`)
- Checklist: **Sí** (`07-checklist.md`, 3 afirmaciones contrastadas)
- Control humano: **Sí** (`09-agente.md`: aprobación humana antes de enviar; caso de error probado)
- Métrica: **Sí** (`10-sistema.md`: 4 variables antes/después; el tiempo no se cronometró)
- Módulos completados (mi estado en memoria): **10 / 10**.
- XP: **1000 XP** según las reglas de la interfaz (100 XP por módulo); la interfaz mostró **0 XP**.
- Nivel: esperado **5 · DISEÑADOR DE SISTEMAS** (umbrales 0/200/500/800/1000); la interfaz mostró **NIVEL 1 · EXPLORADOR**.
- Insignias: esperadas **8 / 8 desbloqueadas**; la interfaz las mostró todas con candado al cargar.
- ¿Se alcanzó 100%? **Parcial**: las 10 actividades se ejecutaron y quedaron registradas en memoria y en ficheros, pero el contador de la interfaz nunca llegó al 100% porque no pude pulsar botones ni escribir en localStorage desde mi entorno.

## Comportamiento inesperado
- El HTML servido solo contiene el módulo 01; el resto se renderiza en cliente, así que como alumno solo pude verlo en el código de la propia página.
- El "eyebrow" del HTML servido dice `UN CURSO PRÁCTICO · 01 / 10` y el script lo cambia a `INTERACTIVE MOOC · 01 / 10` al renderizar.
- El título del reto se escribe dos veces en el render (primero "Caso · etapa NN / 10", después "Paso NN · <caso>").
- Al cargar sin caso guardado, el caso activo por defecto es "Administración", no "Mi propia tarea".
- La página registra un service worker y muestra "Instalar curso" solo tras el evento `beforeinstallprompt`; en mi entorno el botón nunca apareció.
- En mi práctica externa, una fuente que esperaba (web.dev sobre instalación de PWA) devolvió 404 y tuve que trabajar con las fuentes que respondieron.
