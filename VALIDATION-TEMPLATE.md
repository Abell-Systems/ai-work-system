# Validación de usuario — IA como sistema de trabajo

## Instrucción para el facilitador

Di exactamente esto al usuario y no añadas ninguna explicación adicional:

> **«Enséñame este curso.»**

No le hables del funcionamiento. No le digas qué buscar. No le guíes. Obsérvalo.

---

## Datos de la sesión

- **Fecha:** ___________
- **Hora:** ___________
- **Facilitador:** ___________
- **Usuario (inicial/alias):** ___________
- **Contexto profesional declarado:** ___________
- **Dispositivo:** ___________ (escritorio / móvil / tablet)
- **Navegador:** ___________
- **Versión de pantalla:** ___________

---

## Fase 1 — Primera impresión (sin intervención)

El usuario abre el curso por primera vez. No se le dice nada más.

- ¿Qué ve primero?
- ¿Busca algo específico?
- ¿Pregunta algo?
- ¿Intenta tocar/clicar algo sin sentido aparente?

**Observaciones:**

_________________________________________

_________________________________________

## Fase 2 — Módulo 1 → 2 → 3 (recorrido secuencial)

El usuario avanza por los módulos 1, 2 y 3 en orden.

- ¿Comprende el título de cada módulo?
- ¿Entiende qué se le pide en cada paso?
- ¿Dónde se detiene? ¿Por qué?
- ¿Intenta volver a un módulo anterior?
- ¿Pide ayuda? ¿Qué tipo de ayuda?

**Observaciones:**

_________________________________________

_________________________________________

## Fase 3 — Caso y elección

Cuando el curso pide elegir un caso o tarea:

- ¿Cómo elige?
- ¿Pierde tiempo decidiendo?
- ¿Pregunta qué significa cada caso?
- ¿Elige "Mi propia tarea" y se bloquea?

**Observaciones:**

_________________________________________

## Fase 4 — Práctica fuera del curso

El usuario sale del curso a hacer la práctica con su propia IA.

- ¿Sabe qué tiene que hacer fuera?
- ¿Vuelve? ¿Vuelve cuando debe o cuándo puede?
- ¿Trae evidencia o nota?

**Observaciones:**

_________________________________________

## Fase 5 — Módulos 4 → 10 (avance y final)

El usuario completa el recorrido hasta el módulo 10 o hasta donde llegue.

- ¿Sabe que está avanzando?
- ¿Entiende el sistema de XP/niveles/badges?
- ¿Intenta ver los badges?
- ¿Se frustra, se aburre, o sigue motivado?

**Observaciones:**

_________________________________________

## Fase 6 — Resultado final

El usuario llega al proyecto final o abandona el curso.

- ¿Puede describir qué ha aprendido?
- ¿Puede explicar qué parte de su trabajo podría automatizar?
- ¿Produce un briefing, checklist o métrica?
- ¿Entiende la diferencia entre contenido y misión?

**Observaciones:**

_________________________________________

---

## Registro de bloqueos

Cualquier momento en que el usuario se detenga, se confunda, o no sepa qué hacer.

| Momento | Módulo/Paso | Qué hizo | Qué dijo | Qué observé |
|---------|-------------|----------|----------|-------------|
|         |             |          |          |             |
|         |             |          |          |             |
|         |             |          |          |             |

> **Regla:** aquí se anota el comportamiento observado, NO la causa inferida.
> "Se detuvo 2 minutos mirando el case picker" → observación.
> "El case picker es confuso" → interpretación.

---

## Intervenciones y ayudas

Todo momento en que el facilitador tuvo que intervenir.

| Momento | Módulo | Tipo de ayuda | Qué hizo el usuario después |
|---------|--------|---------------|-----------------------------|
|         |        |               |                             |
|         |        |               |                             |
|         |        |               |                             |

Tipos de ayuda:
- **Indicación verbal** — se le dice algo brevemente
- **Redirección** — se le señala dónde mirar
- **Explicación** — se le da contexto o instrucciones
- **Técnica** — problema técnico (navegador, dispositivo, conexión)

---

## Resultado final del usuario

### Briefing completado
- [ ] Sí
- [ ] Parcial
- [ ] No

### Checklist de verificación completado
- [ ] Sí
- [ ] Parcial
- [ ] No

### Control humano definido
- [ ] Sí
- [ ] Parcial
- [ ] No

### Métrica antes/después (al menos una variable)
- [ ] Sí
- [ ] Parcial
- [ ] No

---

## Metodología de estas 5 sesiones

5 sesiones ejecutadas el 2026-09-28 por alumnos simulados (LLM) sobre la URL publicada. Registro completo en `sessions/session-01.md` … `session-05.md`.

**Advertencia de método:** las sesiones no son equivalentes.

| Sesión | Caso elegido | Entorno | Interacción real con la UI |
|---|---|---|---|
| 01 | Mi propia tarea | Chromium headless (Playwright) | Sí — clic, escritura, localStorage |
| 02 | Mi propia tarea | webfetch (solo lectura) | No |
| 03 | Mi propia tarea | webfetch (solo lectura) | No |
| 04 | Dirección / análisis | Chromium headless (Playwright) | Sí — clic, escritura, localStorage |
| 05 | Dirección / análisis | webfetch (solo lectura) | No |

Toda conclusión sobre **comportamiento de la interfaz** descansa en **n = 2** (S01, S04). Las sesiones 02/03/05 aportan evidencia sobre **contenido y práctica**, no sobre UI: su "0 / 10 · 0 XP" es artefacto del entorno, no fallo del curso.

Alumnos simulados, no personas no técnicas: sirven para encontrar fricción y contradicciones, no para medir comprensión real.

---

## Patrones observados (no puntuación)

Después de las 5 sesiones, agrupar patrones. No promedios, no notas. Patrones reales.

### Lo que funciona
- Las 5 sesiones produjeron los 10 artefactos (ficha → briefing → encargo → iteraciones → investigación → artefacto → checklist → workflow → agente → sistema) y una métrica antes/después, sin que nadie tuviera que preguntar.
- Con navegador real (S01, S04) el recorrido 1→10 se completó al 100 % sin intervención externa.
- S01 y S04 notaron las subidas de XP, cambio de nivel y desbloqueo de insignias sin que se les pidiera.

### Lo que genera fricción
- Elección de caso: 4 de 5 dudaron antes de elegir (S02, S03, S04, S05); solo S01 eligió a la primera. 0 bloqueos.
- "Ya lo he probado →" deshabilitado sin indicar el motivo: S01 lo pulsó en el módulo 8 y no ocurrió nada visible; S04 solo vio los mensajes de validación al probar a propósito.
- El % de progreso solo sube al pulsar "Ya lo he probado →", no al guardar la evidencia (S01, S04).

### Lo que se entiende sin ayuda
- Qué hacer fuera del curso y cuándo volver ("Abre tu IA, prueba el paso y vuelve"); las 5 sesiones lo siguieron literalmente.
- Ninguna sesión pidió ayuda: el curso no ofrece canal de ayuda y tampoco se echó de menos aquí.

### Lo que genera confusión
- Orden de la primera pantalla: 5 bloques en una misma vista; S02 tuvo que ordenar la página para decidir por dónde empezar.
- Ninguna sesión verbalizó confusión con los títulos de módulo.

### Lo que sorprende
- La respuesta correcta de cada reto viaja en el `<script>` inline (S02, S03, S05 la leyeron; verificado en `site/index.html:80-89`).
- No existe pantalla de cierre: al 10/10 solo aparece "TU PROYECTO FINAL", que ya era visible al entrar en el módulo 10 (S01, S04; no hay cadena de felicitación en el HTML).
- El eyebrow se reemplaza por "INTERACTIVE MOOC · NN / 10" al renderizar (S01, S02, S03, S05; `site/index.html:308`).
- "Instalar curso" nunca llegó a mostrarse (S01, S03, S04, S05).
- Las insignias se desbloquean en [1,3,4,5,7,8,9,10]: no hay insignia para los módulos 2 ni 6 (S01; verificado en `site/index.html:112`).

---

## Comparación entre sesiones

| Sesión | Caso elegido | Entorno | Bloqueos | Confusiones | Resultado |
|--------|------|----------|-------------|-----------|---------|
| 1 | Mi propia tarea | Chromium real | 2 (práctica no cambió nada; botón deshabilitado en m8) | ninguna verbalizada | 10/10 · 1000 XP · nivel 5 · 8/8 insignias · persiste al recargar |
| 2 | Mi propia tarea | webfetch | 6, todos por falta de interacción | orden de la pantalla inicial | 10/10 en memoria · 0/10 en pantalla |
| 3 | Mi propia tarea | webfetch | 6, todos por falta de interacción | ninguna | 10/10 en memoria · 0/10 en pantalla |
| 4 | Dirección / análisis | Chromium real | 1 (respuesta incorrecta en m9, reintentó) + "Instalar curso" ausente | ninguna verbalizada | 10/10 · 1000 XP · nivel 5 · 8/8 insignias · persiste al recargar |
| 5 | Dirección / análisis | webfetch | 6, todos por falta de interacción | ninguna | 0/10 en pantalla |

---

## Hipótesis evaluadas

Esta sección se completa tras las 5 sesiones. Cada hipótesis del audit se marca como confirmada, refutada o inconclusa.

| Hipótesis | Estado | Evidencia observada |
|-----------|--------|-------------------|
| Título del módulo genera confusión | ☑ Refutada | S01, S04, S05 citaron por separado el nombre del módulo (mapa) y la idea del paso; ninguna perdió el hilo. La corrección `m.idea → m.t` estaba ya aplicada. |
| Case picker interrumpe el flujo | ☑ Confirmada (parcialmente) | 4/5 dudaron antes de elegir (S02, S03, S04, S05). S04 se detuvo en el selector antes de poder usar la práctica. 0 bloqueos y 0 abandonos. |
| Badges pasan desapercibidos | ☑ Refutada | S01 y S04 los nombraron y observaron el desbloqueo sin que se les pidiera. Pendiente: dónde están en el viewport (no se midió scroll). |
| Contraste dificulta la lectura | ☐ Inconclusa | No testeable con este método: los alumnos simulados no perciben contraste. Requiere medición o usuarios reales. |
| Foco invisible genera problemas | ☐ Inconclusa | No testeable: las sesiones interactuaron con clic, nunca con teclado. |
| Textarea genera problemas de edición | ☑ Refutada | S01 y S04 escribieron evidencias largas y razonamientos sin incidencia de edición ni desbordamiento. |
| Navegación móvil confusa | ☐ Inconclusa | Todas las sesiones en escritorio/terminal. Sin datos. |
| Gamificación superficial o suficiente | ☐ Inconclusa | S01 y S04 completaron con XP/nivel/insignias visibles y comentados; pero completaron porque se les pidió, no por la recompensa. No separable con este diseño de sesión. |

---

## Cambios justificados por evidencia

Solo cambios que tienen evidencia de 5 sesiones que los respalda. Orden de prioridad: bloqueos reales → ambigüedades repetidas → errores de aprendizaje → fricción → cosmética.

1. **Mostrar el motivo cuando "Ya lo he probado →" está deshabilitado.**
   **Evidencia:** S01 lo pulsó en el módulo 8 y no ocurrió nada visible, sin texto que explicara qué faltaba; S04 solo vio los mensajes de validación al probar a propósito. 2/2 sesiones con navegador tocaron este camino.
   **Hipótesis que confirma:** ninguna de las P1–P3; es un hallazgo nuevo (fricción en la única puerta de avance).

2. **Pantalla de cierre al 10/10.**
   **Evidencia:** S01 y S04 llegaron al 100 % y solo vieron "TU PROYECTO FINAL", panel que ya estaba visible al entrar en el módulo 10; no hay ningún mensaje de curso completado en el HTML (verificado). 2/2 sesiones con navegador.
   **Hipótesis que confirma:** P1 "no hay feedback de progreso a medio plazo" extrapolado al hito final.

3. **Corregir el eyebrow "INTERACTIVE MOOC · NN / 10".**
   **Evidencia:** 4/5 sesiones registraron el cambio desde "UN CURSO PRÁCTICO"; `site/index.html:308`.
   **Hipótesis que confirma:** ninguna; es cosmético, pero es un cambio de una línea en un curso íntegramente en español.

4. **Decidir si la respuesta correcta debe viajar en el cliente.**
   **Evidencia:** S02, S03 y S05 leyeron el índice `correct` de los 10 retos en el `<script>` inline (`site/index.html:80-89`). No es un bug de UI: desactiva que XP e insignias demuestren aprendizaje, que es el propósito declarado de la Fase 4.
   **Hipótesis que confirma:** P1 "la gamificación puede ser superficial" — aquí con mecanismo concreto.
   **Requiere decisión de diseño, no implementación inmediata:** o el reto deja de autoevaluarse en cliente, o se acepta explícitamente como autoevaluación honesta.

**No se cambia nada de contenido ni de flujo:** 0 bloqueos reales en las sesiones con navegador y 0 abandonos.

---

## Hipótesis descartadas

Hipótesis que tras la validación NO se confirman. Registrarlas evita volver a debatirlas.

1. **Hipótesis:** el progreso global es demasiado débil y no se percibe la recompensa (P1).
   **Evidencia en contra:** S01 y S04 citaron espontáneamente las subidas de XP, los 5 niveles por umbral (200/500/800/1000) y el paso de insignias bloqueadas a desbloqueadas.
   **Motivo para descartarla:** con navegador real la gamificación se percibe sin buscarse. No volver a debatir "hacer visible el progreso" en escritorio.

2. **Hipótesis:** el textarea fijo genera problemas de edición o desbordamiento (P2).
   **Evidencia en contra:** S01 y S04 escribieron evidencias y razonamientos por encima de los mínimos (30 y 20 caracteres) sin incidencia; CSS ya usa `resize:vertical`.
   **Motivo para descartarla:** no se reprodujo y no hay mecanismo por el que se reprodujera.

3. **Hipótesis:** los badges pasan desapercibidos por estar fuera del `<main>` (P2).
   **Evidencia en contra:** S01 y S04 los nombraron y observaron el desbloqueo sin que se les pidiera.
   **Motivo para descartarla:** no se reprodujo el síntoma. Queda pendiente solo la medición de scroll, que es una comprobación, no una hipótesis de producto.

4. **Hipótesis:** el título del módulo genera confusión sobre en qué módulo se está (P0).
   **Evidencia en contra:** 3 sesiones con navegador/lectura citaron por separado el nombre del módulo y la idea del paso; ninguna perdió orientación.
   **Motivo para descartarla:** con la corrección ya aplicada no se reproduce. No reabrir el P0.

**Inconclusas — no descartadas, no implementar:** contraste (P3), foco de teclado (P3), ARIA (P3), navegación móvil (P2). No son falsas: este método no puede evaluarlas. Requieren teclado, móvil o medición, no más sesiones de escritorio.

---

## Notas libres

_________________________________________

_________________________________________

_________________________________________
