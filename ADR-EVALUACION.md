# ADR — Los 10 retos: evaluación o autoevaluación

**Estado:** pendiente de decisión de producto.
**Fecha:** 2026-09-28.
**Origen:** validación con 5 sesiones (`sessions/`, análisis en `VALIDATION-TEMPLATE.md`).

## Contexto

Cada módulo cierra con un reto "TÚ DECIDES". El sistema valida la opción elegida contra un índice `correct` y exige un razonamiento de ≥20 caracteres antes de permitir avanzar. El índice `correct`, las opciones y el feedback de las 10 respuestas viajan en el `<script>` inline de `site/index.html`.

3 de las 5 sesiones leyeron ese índice sin buscarlo (S02, S03, S05) y completaron los 10 retos acertando.

Esto no es un fallo de UI: es una pregunta de diseño sobre qué están midiendo los retos.

## Dos modelos

```text
Modelo A — Evaluación
Alumno responde → sistema valida contra respuesta correcta
                         ↑
              debe protegerse de la consulta

Modelo B — Autoevaluación
Alumno responde → sistema registra y guía la reflexión
                         ↑
         la respuesta en cliente es compatible
```

## Evidencia relevante

- El recorrido no se completa solo acertando: exige evidencia (≥30 caracteres + 3 comprobaciones) y artefactos reales en los 10 módulos.
- Las 5 sesiones produjeron los 10 artefactos y una métrica antes/después.
- S04 acertó a la primera en 9 retos y falló el módulo 09; el feedback de ese error fue el que enseñó el principio de mínimo privilegio.
- XP e insignias dependen de pasar el reto, no solo de haberlo intentado.

## Decisión pendiente

> **¿Los 10 retos son evaluaciones que deben resistir la consulta de la respuesta, o son checkpoints de autoevaluación cuyo objetivo es provocar reflexión y avanzar?**

- Si es **autoevaluación**: no cambiar nada. Las respuestas en cliente son coherentes y la integridad ya la aporta la evidencia exigida.
- Si es **evaluación**: hay que sacar la validación del cliente o aceptar que XP e insignias no certifican competencia.

## Consecuencias

- Mientras no se decida, no se modifica la arquitectura de los retos.
- Cualquier decisión condiciona la Fase 4 del roadmap (insignias por competencia demostrada) y el criterio de éxito del gate de validación.
