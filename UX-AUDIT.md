# UX/UI audit — 2026-09-26

## Alcance y evidencia

Auditoría de la experiencia implementada en `site/index.html`, centrada en el recorrido de aprendizaje de los 10 módulos y la práctica de cada módulo.

La URL publicada no pudo capturarse desde el navegador disponible en esta ejecución, por lo que este documento es una **auditoría de implementación y flujo**, no una validación visual pixel-perfect del despliegue. Los cambios posteriores deben validarse también en navegador real, especialmente en móvil.

## Flujo auditado

1. Entrada al curso.
2. Consulta del mapa de 10 módulos.
3. Lectura de idea clave y objetivos.
4. Interacción con el escenario del módulo 1.
5. Apertura de la práctica.
6. Realización de la práctica fuera del curso.
7. Marcado de módulo completado.
8. Avance al siguiente módulo.
9. Llegada progresiva a herramientas y agentes.
10. Proyecto final.

## Defectos encontrados

### P0 — La finalización de módulos 2–10 podía quedar bloqueada

El botón de completar la misión se inicializaba deshabilitado y no existía una interacción que lo habilitara para los módulos sin escenario.

**Impacto:** el alumno podía leer y realizar la práctica, pero no podía registrar el progreso ni avanzar.

**Corrección:** al abrir una misión estándar, el botón pasa a estar disponible.

### P0 — Título del módulo muestra la idea en vez del nombre del módulo

`<h2 id="title">` renderiza `m.idea` (ej: *"La IA no es el proceso"*) en vez de `m.t` (ej: *"Cambia cómo ves la IA"*). El usuario no ve el nombre del módulo en el que está trabajando.

**Corrección aplicada 2026-09-28:** cambio `m.idea → m.t` en `site/index.html:310`.

### P1 — El progreso era demasiado débil *(hipótesis, pendiente de validación)*

Solo aparecía un estado textual de módulo y el color de los nodos completados.

**Hipótesis:** no hay una representación clara de avance global ni una recompensa visible.

**Estado:** hipótesis de UX. No confirmada ni refutada por usuarios reales.

### P1 — No había feedback de progreso a medio plazo *(hipótesis, pendiente de validación)*

Completar una práctica llevaba directamente al siguiente módulo, pero no existían hitos que reconocieran el progreso acumulado.

**Hipótesis:** el alumno recibe feedback local, pero no una sensación de trayectoria.

**Estado:** hipótesis de UX. No confirmada ni refutada por usuarios reales.

### P1 — La gamificación podía haber sido superficial *(hipótesis, pendiente de validación)*

Un sistema basado solo en puntos habría incentivado clicar "completado" sin reforzar el aprendizaje.

**Decisión de diseño actual:** los XP se conceden por completar módulos/prácticas, pero las insignias representan competencias concretas: contexto, iteración, investigación, verificación, workflows, agentes y sistema final.

**Estado:** la implementación actual es una respuesta a esta hipótesis. La hipótesis de que la gamificación actual es suficiente o insuficiente queda pendiente de validación con usuarios.

### P2 — La navegación móvil necesitaba una jerarquía más clara *(hipótesis, pendiente de validación)*

El mapa de módulos ocupa una parte importante de la experiencia y en móvil se convierte en una cuadrícula.

**Hipótesis:** la disposición actual no funciona bien en móvil.

**Estado:** hipótesis de UX. No validada visualmente en navegador real ni con usuarios móviles.

### P2 — El curso necesita diferenciar "contenido" de "misión" *(hipótesis, pendiente de validación)*

La arquitectura actual ya contiene ambas cosas, pero visualmente podían percibirse como una única página de lectura.

**Dirección adoptada:** mantener la idea clave en primer plano y convertir la práctica en una misión explícita con recompensa de progreso.

**Estado:** hipótesis de UX. La separación actual es efectiva o no — por validar con usuarios.

### P2 — El selector de casos interrumpe el flujo *(hipótesis, pendiente de validación)*

El case picker aparece en medio del contenido de los módulos 1–2, antes de que el usuario haya interactuado con la práctica.

**Hipótesis:** la elección de caso en este punto puede interrumpir la lectura y generar fricción innecesaria.

**Estado:** hipótesis de UX. No confirmada ni refutada por usuarios reales.

### P2 — El textarea de evidencia no se auto-enlarge *(hipótesis, pendiente de validación)*

`rows="5"` es fijo. Si el usuario escribe más, el layout puede desbordarse.

**Hipótesis:** el textarea genera problemas de edición o desbordamiento.

**Estado:** hipótesis de UX. No validada con usuarios reales.

### P2 — El badge grid no es visible sin scroll *(hipótesis, pendiente de validación)*

`<div class="badges">` está fuera de `<main>`, al final del body. Si el usuario no llega al footer, nunca ve los badges desbloqueados.

**Hipótesis:** los badges pasan desapercibidos por su posición fuera del viewport principal.

**Estado:** hipótesis de UX. No confirmada ni refutada por usuarios reales.

### P3 — Contraste bajo en textos secundarios *(hipótesis, pendiente de validación)*

`#766f65` sobre `#f4f1eb` ≈ 3.2:1 — puede fallar WCAG AA.

**Hipótesis:** el contraste dificulta la lectura para algunos usuarios.

**Estado:** hipótesis de accesibilidad. No validada con usuarios reales.

### P3 — Contrase de foco invisible *(hipótesis, pendiente de validación)*

No hay estilos `:focus-visible` en elementos interactivos. Los nodos y case-options son `<div>` con `onclick`, no `<button>`.

**Hipótesis:** usuarios que navegan por teclado no tienen indicador visual de foco.

**Estado:** hipótesis de accesibilidad. No validada con usuarios reales (solo observable si se prueba con teclado).

### P3 — Falta de roles ARIA y labels accesibles *(hipótesis, pendiente de validación)*

Los elementos interactivos no son semánticamente `<button>`, no tienen `aria-label` y faltan landmarks adicionales.

**Hipótesis:** screen readers no pueden navegar el mapa de módulos ni los controles de forma efectiva.

**Estado:** hipótesis de accesibilidad. No validada con usuarios reales.

## Gamificación implementada

### XP

- 100 XP por módulo completado.
- Máximo: 1.000 XP.

### Niveles

- Nivel 1 — Explorador
- Nivel 2 — Practicante
- Nivel 3 — Operador
- Nivel 4 — Delegador
- Nivel 5 — Diseñador de sistemas

### Insignias

- 🧭 Primer paso
- 🧱 Constructor de contexto
- 🔄 Iterador
- 🔎 Investigador
- 🛡️ Verificador
- 🧰 Diseñador de flujos
- 🤖 Constructor de agentes
- 🏁 Diseñador de sistemas

## Principios UX de la gamificación

1. **Recompensar avance, no adicción.**
2. **No usar rachas diarias ni presión temporal:** el aprendizaje no necesita castigar pausas.
3. **Hacer visible la progresión.**
4. **Conectar hitos con competencias reales.**
5. **No bloquear el aprendizaje detrás de puntos artificiales.**
6. **Mantener la experiencia útil incluso sin prestar atención a la gamificación.**

## Próxima validación recomendada

En navegador real, con 5 usuarios no técnicos:

1. Completar módulo 1 desde cero.
2. Comprobar persistencia tras recargar.
3. Completar módulo 2 y verificar que permite avanzar.
4. Comprobar XP/nivel/insignias.
5. Comprobar móvil 360px / 390px.
6. Comprobar teclado y foco.
7. Comprobar contraste.
8. Comprobar que un usuario puede volver a módulos anteriores sin perder progreso.
9. Observar si el título del módulo genera confusión (hipótesis P0 verificada por corrección).
10. Observar si el case picker interrumpe el flujo (hipótesis P2).
11. Observar si los badges son visibles y comprendidos (hipótesis P2).
12. Observar si el contraste y el foco generan fricción (hipótesis P3).

## Estado actual: UI congelada

**Último cambio de UI:** 2026-09-28 — `m.idea → m.t` en `site/index.html:310`.

**UI congelada hasta completar 5 sesiones de validación.**

Todas las hipótesis P1/P2/P3 de este documento son **observaciones pendientes de validación**, no tareas de desarrollo. Ninguna se convierte automáticamente en un cambio de producto.

> **Una observación puede confirmar o refutar una hipótesis. No se convierte automáticamente en un cambio de producto.**

## Resultado de la validación — 2026-09-28 (5 sesiones)

Actualiza los estados "pendientes" de más arriba. Registro completo en `sessions/session-01.md` … `session-05.md` y análisis en `VALIDATION-TEMPLATE.md`.

**m = 2 para comportamiento de interfaz:** solo S01 y S04 interactuaron con un navegador real; S02, S03 y S05 fueron de solo lectura. Las sesiones con navegador completaron 10/10 con 1000 XP y 0 abandonos.

| Prioridad | Hipótesis | Evidencia en las 5 sesiones | Estado |
|---|---|---|---|
| P0 | Título del módulo genera confusión | 3 sesiones citaron por separado nombre e idea; ninguna perdió el hilo. Corrección ya aplicada. | **Refutada** |
| P1 | El progreso era demasiado débil | S01 y S04 citaron espontáneamente XP, niveles e insignias | **Refutada** |
| P1 | Sin feedback de progreso a medio plazo | S01 y S04 sí notaron hitos de nivel; pero al 10/10 no hay pantalla de cierre | **Confirmada solo en el hito final** |
| P1 | Gamificación superficial | 3/5 leyeron el índice `correct` de cada reto en el `<script>` inline | **Confirmada por mecanismo concreto** (ver cambio 4 en `VALIDATION-TEMPLATE.md`) |
| P2 | Navegación móvil confusa | Sin datos: todas las sesiones en escritorio/terminal | **Inconclusa** |
| P2 | Contenido vs. misión confusos | Ninguna sesión los confundió | **No se reproduce** |
| P2 | El case picker interrumpe el flujo | 4/5 dudaron antes de elegir; 0 bloqueos, 0 abandonos | **Confirmada (parcialmente)** |
| P2 | Textarea sin auto-enlarge | S01 y S04 editaron sin incidencia | **Refutada** |
| P2 | Badges invisibles sin scroll | S01 y S04 los nombraron y vieron el desbloqueo | **Refutada** (falta medir scroll) |
| P3 | Contraste bajo | No testeable con alumnos simulados | **Inconclusa** |
| P3 | Foco invisible | Nunca se navegó con teclado | **Inconclusa** |
| P3 | Falta de ARIA | No testeable con este método | **Inconclusa** |

### Hallazgos nuevos (no estaban en este audit)

| Hallazgo | Sesiones | Verificado en código |
|---|---|---|
| Respuesta correcta de cada reto expuesta en el `<script>` inline | S02, S03, S05 | `site/index.html:80-89` |
| No existe pantalla de cierre al 10/10; "TU PROYECTO FINAL" ya se ve al entrar en el módulo 10 | S01, S04 | sin cadena de felicitación en el HTML |
| "Ya lo he probado →" deshabilitado sin indicar el motivo | S01 (y S04 al probar) | `site/index.html:45` |
| Eyebrow cambiado a "INTERACTIVE MOOC · NN / 10" | S01, S02, S03, S05 | `site/index.html:308` |
| "Instalar curso" nunca aparece | S01, S03, S04, S05 | botón servido con `hidden` |
| % de progreso solo sube al pulsar "Ya lo he probado →" | S01, S04 | — |
| Sin insignia para los módulos 2 y 6 | S01 | umbrales `[1,3,4,5,7,8,9,10]`, `site/index.html:112` |

### Límites de esta validación

Lo que estas 5 sesiones **no permiten afirmar**:

- **Comportamiento móvil:** ninguna sesión en móvil o tablet.
- **Accesibilidad:** contraste, foco de teclado y ARIA no son evaluables con alumnos simulados; ninguna sesión navegó con teclado.
- **Feedback de progreso a lo largo del recorrido:** solo se observó en los dos hitos extremos (primeros niveles y cierre), no módulo a módulo.
- **Comportamiento de la interfaz con n > 2:** solo S01 y S04 interactuaron con navegador real. Cualquier afirmación sobre UI descansa en esas dos sesiones.
- **Comprensión real de personas no técnicas:** los alumnos son simulados. Sirven para encontrar fricción y contradicciones, no para medir aprendizaje.

### Cambios aplicados (2026-09-28)

1. Motivo visible cuando "Ya lo he probado →" está deshabilitado.
2. Tarjeta de cierre al 10/10 con el resultado (100 %, XP, nivel).
3. Eyebrow corregido a "UN CURSO PRÁCTICO · NN / 10".

Pendiente de decisión de producto, no de implementación: si los 10 retos son evaluación o autoevaluación (ver `ADR-EVALUACION.md`).

**Siguiente paso:** no tocar case picker, móvil, contraste, foco ni ARIA hasta tener evidencia específica de cada uno.

## Segunda iteración — misiones y dominio

Se añadió una prueba de dominio a cada módulo. La finalización requiere superar la pregunta de comprensión; los errores muestran una pista y permiten reintentar. El objetivo es que XP e insignias representen aprendizaje demostrado y no simples clics.

## Registro de hipótesis descartadas

Esta sección se completará tras la validación con 5 usuarios. Registrar hipótesis que NO se confirman es tan importante como registrar las que sí: evita que el equipo vuelva a debatir las mismas ideas meses después sin evidencia.

### Fecha: ___________

**Hipótesis descartadas:**
1. _________________________________________
2. _________________________________________
3. _________________________________________
