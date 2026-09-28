# Sesión 04

## Datos
- Fecha: 28 de septiembre de 2026.
- Tarea real elegida: caso **Dirección / análisis** — «Convertir información dispersa en un briefing para apoyar una decisión». Objetivo declarado por la interfaz: «Reducir tiempo de análisis haciendo explícitas fuentes, incertidumbres y controles». Concretado por mí: briefing semanal de estado del proyecto para decidir prioridades de la semana.
- Dispositivo/entorno de ejecución: Linux, terminal; Chromium headless (Playwright, perfil aislado en /tmp/opencode/aws-s04-profile) controlado por comandos. No usé el repositorio local del curso.
- Cómo accedí al curso: URL publicada `https://valentinlineiro.github.io/ai-work-system/`. Primera lectura con `webfetch` (HTML y texto). Para interactuar (pulsar, escribir, marcar) abrí la misma URL en el navegador headless, porque desde `webfetch` no hay forma de pulsar un botón ni escribir en un textarea.

## Fase 1 — Primera impresión
- Lo primero que vi: portada «Trabaja mejor con IA», HUD a la derecha con `NIVEL 1 · EXPLORADOR`, `0 / 10 módulos`, `0 XP`, barra de XP vacía, y a la izquierda `0% DE TU MISIÓN COMPLETADA`.
- Cartel del paso 1: «Hay una tarea que haces demasiado a menudo» con tres casillas (1 Elige / 2 Prueba / 3 Comprueba) y debajo «La IA no es el proceso.»
- Botón «Instalar curso» visible en el HTML leído con `webfetch`, pero oculto cuando abrí la página en el navegador.
- Primera acción real: en el bloque «PARA EMPEZAR» respondí «Te han pedido preparar un informe para dirección. ¿Qué harías primero?» eligiendo **«Definir objetivo y contexto»** → la interfaz mostró `BUENA DECISIÓN`.
- Recuento visible tras esa respuesta: `0%`, `0 XP`, `NIVEL 1`.

## Fase 2 — Módulos 1→2→3
- Módulo 01 «Cambia cómo ves la IA» / título mostrado «La IA no es el proceso.»; objetivos: diferenciar preguntar de delegar, definir un objetivo antes del prompt, ver la IA como colaborador.
- Módulo 02 «Dale contexto» / «La IA solo puede trabajar con lo que conoce.»
- Módulo 03 «Formula el trabajo» / «Una buena petición describe trabajo, no magia.»
- Me detuve en el bloque «TU PUNTO DE PARTIDA · ¿Qué quieres mejorar?» (selector de caso) antes de poder usar la práctica, tal como lo muestra la interfaz.
- No pedí ayuda en ningún momento; no había botón ni enlace de ayuda en la pantalla.

## Fase 3 — Caso y elección
- Vi 6 opciones: Administración, Ventas/clientes, Marketing/contenidos, RRHH, Dirección/análisis y Mi propia tarea (la primera, Administración, viene preseleccionada).
- Dudé entre «Mi propia tarea» y «Dirección / análisis»; elegí **Dirección / análisis** porque mi trabajo real es convertir información dispersa en un briefing para decidir.
- La ficha cambió a: «Tu misión: Convertir información dispersa en un briefing para apoyar una decisión. / Queremos conseguir: Reducir tiempo de análisis haciendo explícitas fuentes, incertidumbres y controles.» El selector de caso se mantuvo activo en todos los módulos.

## Fase 4 — Práctica fuera del curso
- Botón «Abrir práctica ↗» → panel «EN TU PROPIA IA» con los pasos del módulo y botón «Ya lo he probado →» que aparecía deshabilitado.
- Módulo 1: definí la tarea (briefing de decisión de 1 página sobre estrategia de tests en un proyecto Node/TS), el objetivo en una frase, la información necesaria, pedí una primera propuesta a la IA y anoté que faltaban cobertura actual, fuentes y umbral de decisión.
- Módulo 2: convertí la petición ambigua real «¿me haces un resumen de lo importante?» en un briefing con contexto, restricciones, resultado esperado y criterios.
- Módulo 3: escribí el encargo ejecutable (objetivo, resultado, formato, restricciones y dos criterios de calidad) y lo ejecuté.
- Módulo 4: primera versión vs. tres carencias detectadas (sin fecha/responsable, dos afirmaciones sin fuente, riesgo sin impacto) → revisión dirigida → comparación v1/v2.
- Módulo 5: investigación real con búsqueda web sobre pruebas de integración contra PostgreSQL; fuentes: documentación de PostgreSQL 18 «Running the Tests», receta oficial de Vitest «Database Transaction per Test», repositorio `matthewoden/pg_promise_sandbox`; contrasté la afirmación «no hay limpieza por prueba» con «las secuencias SERIAL no se reinician con el ROLLBACK»; dejé 3 dudas abiertas.
- Módulo 6: artefacto real, correo v1 y correo v2 corregido contra mis criterios; conservé ambos.
- Módulo 7: checklist de verificación de 5 puntos y comprobación real abriendo la receta de Vitest (confirmé la afirmación y su límite: savepoints / estado del worker).
- Módulo 8: dibujé el flujo de mi briefing semanal (disparador, entradas, pasos, herramientas, decisiones IA/humana, evidencia previa).
- Módulo 9: creé y ejecuté un agente real (`briefing_agent.py` en /tmp/opencode, fuera del curso): caso normal → `ok: true` con borrador y `needs_approval: true`; caso de error (fichero ausente) → `ok: false`, `ENTADA_AUSENTE`.
- Módulo 10: métrica medida en la sesión: pasos manuales 9 → 3; tiempo de borrador 45 min (estimación marcada) → 0,02 s de ejecución del agente + 12 min preparación + 8 min revisión; afirmaciones sin fuente 2 → 0 tras el checklist.
- Volví al curso tras cada práctica y guardé la evidencia en el panel «LO QUE TE LLEVAS».

## Fase 5 — Módulos 4→10
- Avance continuo, sin pausas largas: cada módulo exigía evidencia (textarea + las 3 casillas + «Guardar evidencia»), respuesta correcta en el reto del caso y un razonamiento ≥20 caracteres («Guardar razonamiento») para que se activara «Ya lo he probado →».
- XP observada en el HUD: 100 (m1), 200 (m2), 300 (m3), 400 (m4), 500 (m5), 600 (m6), 700 (m7), 800 (m8), 900 (m9), 1000 (m10).
- Niveles observados: NIVEL 1 EXPLORADOR → NIVEL 2 PRACTICANTE (200 XP) → NIVEL 3 OPERADOR (500 XP) → NIVEL 4 DELEGADOR (800 XP) → NIVEL 5 DISEÑADOR DE SISTEMAS (1000 XP).
- Insignias que pasaron de atenuadas a visibles: 🧭 (m1), 🧱 (m3), 🔄 (m4), 🔎 (m5), 🛡️ (m7), 🧰 (m8), 🤖 (m9), 🏁 (m10).
- Texto del HUD por estado: `○ En marcha` → `◐ Evidencia preparada` → `● Tarea mejorada`.
- Único tropiezo: en el módulo 9 mi primera opción marcada salió como incorrecta; repetí y seguí. No me frusté ni abandoné ningún módulo.

## Fase 6 — Resultado final
Pantalla mostrada al terminar (texto copiado de la interfaz):

```
TU PROYECTO FINAL
Mira lo lejos que has llegado.

Ahora vas a convertir todo lo aprendido en una forma de trabajar que puedas repetir y mejorar.

Pregunta guía: ¿qué parte de mi trabajo puede hacer la IA y qué parte quiero seguir controlando yo?
```

HUD final: `INTERACTIVE MOOC · 10 / 10`, `NIVEL 5 · DISEÑADOR DE SISTEMAS`, `10 / 10 módulos`, `● Tarea mejorada`, `1000 XP`, `100% DE TU MISIÓN COMPLETADA`. Pie de página: `APRENDE AQUÍ · PRUÉBALO EN TU TRABAJO · VUELVE CON LO QUE DESCUBRAS`.

## Registro de bloqueos
| Momento | Módulo/Paso | Qué hizo | Qué dijo | Qué observé |
|---|---|---|---|---|
| Antes de la práctica | Módulo 01, selector de caso | No podía escribir la evidencia ni «Ya lo he probado →» hasta elegir caso y leer la práctica | `Ya lo he probado →` aparecía deshabilitado | El avance está condicionado a evidencia + reto + razonamiento |
| Guardar evidencia | Todos los módulos | Probé a guardar con menos de 30 caracteres / sin marcar casillas (control de la interfaz) | `Añade al menos 30 caracteres de evidencia concreta.` / `Marca las tres comprobaciones antes de guardar.` | Solo acepta ≥30 caracteres y las 3 casillas marcadas |
| Razonamiento | Todos los módulos | Botón `Guardar razonamiento` deshabilitado hasta 20 caracteres | Etiqueta `CUÉNTAME POR QUÉ · mínimo 20 caracteres` | No deja pasar razonamientos cortos |
| Módulo 09, primera respuesta | Paso 09/10, reto del caso | Elegí la primera opción («Autonomía total desde el principio.») | La opción quedó marcada en rojo (incorrecta); mi captura falló justo después y no pude leer el texto de feedback en ese momento | Al recargar, la opción seguía marcada como incorrecta y el botón de avance seguía deshabilitado |
| Módulo 09, reintento | Paso 09/10, reto del caso | Elegí «Lectura y preparación con permisos mínimos; aprobación humana antes de acciones sensibles o externas.» | `DECISIÓN CORRECTA — La autonomía se diseña alrededor del riesgo: mínimo privilegio y aprobación en acciones de impacto.` | Se abrió el razonamiento y se activó el avance |
| Instalación PWA | Portada / HUD | Esperé el botón `Instalar curso` | El botón no llegó a aparecer en el navegador headless | No pude instalar la PWA en este entorno |

## Intervenciones y ayudas
| Momento | Módulo | Tipo de ayuda | Qué hizo después |
|---|---|---|---|
| — | — | Ninguna pedida | No había canal de ayuda en la interfaz; seguí solo en los 10 módulos |

## Resultado final
- Briefing: **Sí** (proyecto final redactado y guardado como evidencia del módulo 10; la pantalla final no lo muestra, solo la pregunta guía).
- Checklist: **Sí** (checklist de 5 puntos del módulo 7, guardado como evidencia; no aparece en la pantalla final).
- Control humano: **Sí** (definido en módulos 8-10 como aprobación obligatoria antes de publicar; solo visible en mis evidencias).
- Métrica: **Sí** (antes/después del módulo 10: pasos manuales 9→3, tiempo 45 min→0,02 s + 20 min, afirmaciones sin fuente 2→0; solo visible en mi evidencia).
- Módulos completados: **10 / 10**. XP mostradas: **1000**. Nivel mostrado: **NIVEL 5 · DISEÑADOR DE SISTEMAS**. Insignias mostradas desbloqueadas: **8 / 8** (🧭 Primer paso, 🧱 Constructor de contexto, 🔄 Iterador, 🔎 Investigador, 🛡️ Verificador, 🧰 Diseñador de flujos, 🤖 Constructor de agentes, 🏁 Diseñador de sistemas).
- ¿Se alcanzó 100%? **Sí.** La interfaz marcó `100%`, `10 / 10 módulos` y `● Tarea mejorada`. Verifiqué además que, tras recargar la página, el estado se mantenía (10 nodos en verde, 1000 XP, evidencia del módulo 10 y caso `direction` en localStorage).

## Comportamiento inesperado
- El reto del caso se encabezaba como `Paso NN · Dirección / análisis` en lugar del texto «Caso · etapa NN / 10» que se veía en cargas anteriores; las píldoras `ETAPA NN / 10` y `RIESGO: ...` sí aparecían dentro del enunciado.
- Elegir una opción errónea no mostraba el texto de feedback en mi captura (mi script falló al buscar el textarea de razonamiento justo después del clic), pero la opción quedaba marcada en rojo de forma persistente tras recargar.
- El progreso no avanza de módulo solo por guardar la evidencia: hace falta además pasar el reto, guardar ≥20 caracteres de razonamiento y pulsar «Ya lo he probado →».
- El contador de nivel salta por umbrales de XP (200/500/800/1000), no con cada módulo.
- El botón «Instalar curso» existe en el HTML pero no se activó nunca en el navegador headless.
- Tras completar el módulo 10 no apareció ninguna pantalla de enhorabuena ni resumen: el panel «TU PROYECTO FINAL» con la pregunta guía ya estaba visible al entrar en el módulo 10.
