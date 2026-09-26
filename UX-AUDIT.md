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

### P1 — El progreso era demasiado débil

Solo aparecía un estado textual de módulo y el color de los nodos completados.

**Impacto:** no había una representación clara de avance global ni una recompensa visible.

**Corrección:** porcentaje de curso, barra de progreso, XP y nivel.

### P1 — No había feedback de progreso a medio plazo

Completar una práctica llevaba directamente al siguiente módulo, pero no existían hitos que reconocieran el progreso acumulado.

**Impacto:** el alumno recibe feedback local, pero no una sensación de trayectoria.

**Corrección:** insignias desbloqueables asociadas a hitos pedagógicos.

### P1 — La gamificación podía haber sido superficial

Un sistema basado solo en puntos habría incentivado clicar “completado” sin reforzar el aprendizaje.

**Decisión de diseño:** los XP se conceden por completar módulos/prácticas, pero las insignias representan competencias concretas: contexto, iteración, investigación, verificación, workflows, agentes y sistema final.

### P2 — La navegación móvil necesitaba una jerarquía más clara

El mapa de módulos ocupa una parte importante de la experiencia y en móvil se convierte en una cuadrícula.

**Corrección inicial:** mantener el mapa compacto y trasladar el HUD de progreso a una disposición vertical.

**Pendiente:** validación visual real en varios tamaños de móvil.

### P2 — El curso necesita diferenciar “contenido” de “misión”

La arquitectura actual ya contiene ambas cosas, pero visualmente podían percibirse como una única página de lectura.

**Dirección adoptada:** mantener la idea clave en primer plano y convertir la práctica en una misión explícita con recompensa de progreso.

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

En navegador real:

- completar módulo 1 desde cero;
- comprobar persistencia tras recargar;
- completar módulo 2 y verificar que permite avanzar;
- comprobar XP/nivel/insignias;
- comprobar móvil 360px / 390px;
- comprobar teclado y foco;
- comprobar contraste;
- comprobar que un usuario puede volver a módulos anteriores sin perder progreso.

## Estado

**Implementado:** progreso + XP + niveles + insignias + corrección de finalización de prácticas.

**Pendiente:** validación visual/browser y una segunda iteración de interacción/microfeedback.


## Segunda iteración — misiones y dominio

Se añadió una prueba de dominio a cada módulo. La finalización requiere superar la pregunta de comprensión; los errores muestran una pista y permiten reintentar. El objetivo es que XP e insignias representen aprendizaje demostrado y no simples clics.
