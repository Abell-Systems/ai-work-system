# Roadmap — IA como sistema de trabajo

## Norte del producto

Formar a personas no técnicas para incorporar IA de forma práctica, segura y progresiva en su trabajo diario.

> El alumno debe demostrar que puede rediseñar una tarea real de su trabajo como un sistema humano + IA, con controles y una mejora observable.

Regla de evolución: menos contenido consumido → más capacidad demostrada.

## Fase 0 — Base del MVP
**Estado: completado**
- [x] Curso estático y determinista.
- [x] 10 módulos.
- [x] Progresión asistente → sistema.
- [x] Prácticas sobre trabajo real.
- [x] Verificación y control humano.
- [x] Gamificación básica.
- [x] PWA instalable.
- [x] Persistencia local mediante localStorage.
- [x] Funcionamiento sin APIs de IA.
- [x] Despliegue estático.

## Fase 1 — Evidencia de aprendizaje
**Prioridad: P0**

Objetivo: dejar de considerar que módulo completado equivale a competencia adquirida.

| Módulo | Evidencia |
|---|---|
| 01 | Ficha de tarea |
| 02 | Briefing contextualizado |
| 03 | Encargo ejecutable |
| 04 | Registro de iteraciones |
| 05 | Investigación trazable |
| 06 | Artefacto inicial + revisado |
| 07 | Checklist de verificación |
| 08 | Workflow humano + IA |
| 09 | Especificación de agente |
| 10 | Sistema completo medido |

Cada módulo debe permitir registrar que la evidencia existe y progresivamente conservar una versión estructurada.

### Evaluación situacional
Las pruebas deben comprobar identificación del problema, elección de autonomía, controles, verificación, errores y justificación. No se evalúa velocidad.

### Estados de aprendizaje
- not_started
- in_progress
- evidence_ready
- mastered

## Fase 2 — Casos de trabajo completos
**Prioridad: P1**

Crear inicialmente 5 casos reutilizables: Administración/operaciones, Ventas/atención al cliente, Marketing/contenidos, RRHH y Dirección/análisis.

Cada caso recorre: tarea → contexto → encargo → iteración → verificación → workflow → autonomía → sistema.

## Fase 3 — Modelo de agentes más preciso
**Prioridad: P1**

Introducir una distinción simple:
- Automatización: las reglas determinan los pasos.
- Agente: la IA puede decidir qué paso ejecutar a continuación para alcanzar un objetivo dentro de unas reglas y permisos.

El módulo 9 debe enseñar objetivo, contexto, reglas, herramientas, decisiones, permisos, aprobaciones, errores y nivel de autonomía.

## Fase 4 — Gamificación basada en competencias
**Prioridad: P1**

XP representa avance. Las insignias representan competencias demostradas.

Competencias: Primer paso, Constructor de contexto, Constructor de encargos, Iterador, Investigador, Creador, Verificador, Diseñador de workflows, Diseñador de agentes y Diseñador de sistemas.

Una insignia no debe depender solamente de leer contenido: debe depender de evidencia o dominio.

## Fase 5 — El propio curso como ejemplo
**Prioridad: P1**

Mostrar explícitamente que el curso también es un sistema: objetivo → contexto → IA → herramientas → decisión → verificación → resultado.

## Fase 6 — Personalización ligera
**Prioridad: P2**

Preguntar al inicio por contexto profesional: Administración, Ventas, Marketing, RRHH, Educación, Operaciones, Dirección u Otro.

Mantener el mismo modelo pedagógico y adaptar ejemplos, casos, lenguaje y tareas sugeridas.

## Fase 7 — Seguridad como práctica
**Prioridad: P1**

Convertir seguridad en decisiones situacionales sobre datos personales, información confidencial, secretos, propiedad intelectual, acciones externas, acciones irreversibles, permisos y aprobación humana.

## Fase 8 — Persistencia y portabilidad
**Prioridad: P2**

Mantener inicialmente el modelo local. Añadir exportar/importar progreso y evidencias mediante JSON versionado.

## Fase 9 — Arquitectura del contenido
**Prioridad: P2**

Separar contenido educativo del runtime.

content/ → modules/, challenges/, cases/, badges/
src/ → learning/, assessment/, progress/, gamification/

El contenido debe poder evolucionar sin modificar la lógica de la aplicación.

## Fase 10 — UX móvil y accesibilidad
**Prioridad: P2**

Validar en navegador real, especialmente móvil. Priorizar una acción principal por pantalla, menor densidad, navegación clara, teclado/foco, contraste, labels accesibles y feedback comprensible.

## Fase 11 — Validación educativa real
**Prioridad: P0 después de la siguiente iteración**

Probar con 5–10 personas no técnicas.

Medir comprensión, transferencia, evidencia producida, criterio sobre autonomía/controles, mejora real y fricción.

## Orden de implementación

### Sprint 1 — Evidencia + evaluación
**Estado: completado**
1. [x] Crear modelo de evidencia.
2. [x] Añadir estado evidence_ready.
3. [x] Rediseñar pruebas hacia situaciones.
4. [x] Separar progreso de dominio.
5. [x] Mantener XP y badges actuales.
6. [x] Exigir evidencia real, concreta y reflexiva.
7. [x] Exigir justificación breve de las decisiones de dominio.

### Sprint 2 — Casos
**Estado: bloqueado para validación — recorrido secuencial implementado**

1. [x] Crear 5 casos completos.
2. [x] Asociar casos a módulos.
3. [x] Permitir elegir un caso o tarea propia.
4. [x] Reutilizar patrones de evaluación.
5. [x] Convertir las pruebas en un recorrido de 10 etapas por caso.
6. [x] Persistir decisiones y consecuencias por caso.
7. [x] Hacer que cada etapa muestre cómo la decisión anterior condiciona la siguiente.
8. [ ] Validar los recorridos con alumnos no técnicos.

**Regla:** no añadir nuevas funcionalidades al recorrido hasta completar la validación con alumnos reales.

### Sprint 3 — Agentes + seguridad
**Estado: pospuesto hasta validación real**

1. Refinar automatización vs agente.
2. Añadir decisiones de permisos.
3. Añadir escenarios de aprobación.
4. Añadir escenarios de error.

### Sprint 4 — Competencias
1. Insignias por dominio.
2. Evidencias asociadas.
3. Panel de competencias.
4. Proyecto final como integración.

### Sprint 5 — Personalización + portabilidad
1. Perfil profesional ligero.
2. Ejemplos adaptados.
3. Export/import JSON.
4. Evidencias exportables.

### Sprint 6 — Arquitectura + UX
**Estado: parcialmente anticipado — fork eliminado; resto pendiente**
1. Separar contenido.
2. Tests.
3. Accesibilidad.
4. Validación móvil.
5. Instrumentación mínima para pruebas educativas.

### Sprint 7 — Validación
**Estado: P0 / siguiente hito**
1. Test con 5–10 alumnos.
2. Recoger resultados.
3. Identificar bloqueos.
4. Revisar módulos.
5. Volver a medir.

## Criterio de éxito

El curso se considera validado cuando un alumno no técnico puede seleccionar una tarea real, describirla, trabajar con IA iterativamente, verificarla, diseñar un workflow, decidir autonomía segura, definir controles, explicar errores, medir una mejora y reproducir el sistema en su trabajo.

## Gate de validación antes de seguir

Antes de Sprint 3 o de nuevas funcionalidades, el producto debe pasar este gate:

- [ ] Probar con 5 personas no técnicas.
- [ ] Observar módulos 1–3 y 10 sin enseñarles cómo resolverlos.
- [ ] Comprobar si pueden producir briefing + checklist + métrica antes/después.
- [ ] Registrar cada bloqueo y confusión.
- [ ] Corregir únicamente problemas observados.
- [ ] Repetir la prueba hasta que el recorrido sea comprensible y ejecutable.

La implementación puede seguir siendo sencilla. La evidencia de uso real es ahora la prioridad.

## Fuera de alcance por ahora

No añadir hasta que la validación lo justifique: chatbot integrado, APIs de IA, agentes ejecutados por el curso, rankings, rachas, red social, backend complejo, certificación avanzada o dependencia de una herramienta comercial.

La tecnología debe seguir siendo secundaria respecto al aprendizaje.
