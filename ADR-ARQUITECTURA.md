# ADR — Arquitectura: ¿Clean Architecture ahora?

**Estado:** análisis, no implementado. Pide dirección antes de tocar código.
**Relacionado:** [PLAN.md](./PLAN.md) Fase 9 ("Arquitectura del contenido", P2, después de Sprint 7), [ADR-EVALUACION.md](./ADR-EVALUACION.md).

## Estado actual

Todo el runtime vive en `site/index.html`: un `<script>` inline de ~300 líneas sin módulos, sin build, sin dependencias. Es deliberado — `README.md` lo dice explícitamente: "no npm install, Vite build, React runtime o test runner... hasta que el producto de aprendizaje realmente los necesite."

Mapeando lo que hay hoy a capas de Clean Architecture:

| Capa | Qué sería | Dónde está ahora |
|---|---|---|
| **Domain** | Reglas de progreso: `hasEvidence`, `hasEvidenceChecks`, `hasPassed`, `hasRationale`, `getState`, `getXP`, `certId` | Funciones sueltas en el mismo `<script>`, mezcladas con todo lo demás |
| **Domain (contenido)** | `modules[]`, `challenges[]`, `cases[]`, `evidenceDefs`, `badgeDefs`, los 10 `stages` del journey | Literales inline en el mismo archivo que la lógica |
| **Application** | Orquestar "¿está listo para avanzar?", "¿qué badge se desbloquea?" | `syncCompletion()`, `updateGamification()` — mezclan cálculo de dominio **y** escritura de DOM en la misma función |
| **Infrastructure** | Persistencia | `localStorage.getItem/setItem` llamado directamente desde ~30 sitios distintos, sin ningún puerto/interfaz de por medio |
| **Delivery** | Pintar la UI | `render()`, `renderChallenge()`, `renderCertificate()` — leen dominio y mutan el DOM en el mismo paso |

## Violaciones respecto a la regla de dependencia (deps apuntan hacia adentro)

1. **Sin inversión de dependencias**: `hasEvidence()` llama a `localStorage.getItem` directamente — una regla de dominio depende de una concreción de infraestructura, no de una abstracción.
2. **UI y dominio fusionados**: no hay forma de preguntar "¿está completo el módulo 3?" sin arrastrar código que también sabe pintar HTML.
3. **Contenido y comportamiento en el mismo archivo**: ya señalado en `PLAN.md` Fase 9 ("separar contenido educativo del runtime") — y es exactamente lo que bloquea i18n.
4. **Sin costura de test**: como DOM, `localStorage` y lógica están fundidos, `smoke.mjs` solo puede probar de forma integrada (Playwright contra el DOM), no puede probar `hasPassed()` de forma aislada.

## Por qué NO propongo el refactor completo ahora

Tres motivos, no uno:

- **`PLAN.md` ya lo previó y lo puso en P2**, explícitamente después de Sprint 7 (validación con alumnos reales), con esta regla: *"no añadir nuevas funcionalidades al recorrido hasta completar la validación."* Un refactor completo no es una funcionalidad nueva para el alumno, pero sí es un cambio invasivo de alto riesgo de regresión justo antes de que Lydia y los primeros alumnos reales usen el curso.
- **La Constitución de Ingeniería permite excepción explícita** "para un script o prototipo que no merece la ceremonia" — y este proyecto ya tomó esa decisión de forma consciente y documentada, no por omisión.
- **Clean Architecture completa (4 capas + DI) pide un sistema de módulos** (o como mínimo ESM cuidadosamente separado) que hoy no existe. Meterlo ahora es la abstracción prematura que las reglas de ponytail piden evitar: no hay todavía un segundo "delivery" (app móvil, backend, CLI) que justifique la separación completa.

## Recomendación: refactor por etapas, no todo de golpe

| Etapa | Qué | Cuándo | Riesgo |
|---|---|---|---|
| **1** | Extraer contenido (`modules`, `challenges`, `cases`, `evidenceDefs`, `badgeDefs`, los 10 `stages`) a un objeto de datos separado de la lógica | **Ahora** — es además requisito técnico de i18n | Bajo, mecánico |
| **2** | Introducir un puerto de almacenamiento (`progressStore.get/set`) del que dependan las funciones de dominio, en vez de llamar a `localStorage` directamente | Después de Sprint 7 (validación) | Bajo-medio, diff pequeño, ya testeable sin DOM |
| **3** | Separación real en módulos Domain / Application / Infra / Delivery con inyección de dependencias | Solo si aparece un segundo target real (backend de Fase 8/9, certificación verificable online) | Alto si se hace antes de tener ese segundo target — sería especulativo |

La Etapa 1 y la tarea de i18n son, en la práctica, el mismo trabajo: no se puede traducir contenido que vive mezclado con la lógica que lo consume. Propongo hacerlas juntas.

## Decisión pendiente

¿Apruebas la Etapa 1 (extracción de contenido) ahora, como base compartida para i18n, dejando las Etapas 2 y 3 para después de la validación con alumnos reales?
