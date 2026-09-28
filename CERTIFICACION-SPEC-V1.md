# Especificación de certificación — v1

**Estado:** aprobado como certificado de finalización. No implementado.
**No depende de** [ADR-EVALUACION.md](./ADR-EVALUACION.md): un certificado de finalización certifica que se completó el recorrido, no que se demostró competencia. ADR-EVALUACION solo se vuelve bloqueante si en el futuro se quiere certificar competencia (ver tabla de niveles).
**No choca con** [PLAN.md](./PLAN.md): no añade funcionalidad al recorrido ni requiere backend, por lo que no toca el gate de validación ni adelanta Fase 8/9.
**Emisor:** Abell Systems.

## Por qué este documento antes que código

La arquitectura actual es 100% cliente: `site/index.html`, sin backend, progreso en `localStorage` por navegador. Un certificado creíble necesita como mínimo un identificador único verificable y una página de verificación — ninguno de los dos existe hoy ni puede existir sin servidor. Definir el modelo evita construir medio certificado y descubrir después que falta la mitad de la infraestructura.

## Niveles de certificado

| | Certificado de finalización | Certificación de competencia | Certificación oficial/homologada |
|---|---|---|---|
| Qué certifica | Completó el curso y sus actividades | Demostró competencias concretas | Reconocimiento externo |
| Requiere backend | No (se genera en cliente) | Sí (ID verificable + página pública) | Otro proyecto |
| Requiere ADR-EVALUACION resuelto | No | Sí | Sí |
| Estado | ✅ Esta spec (v1) | ⏸️ Fuera de alcance | ⏸️ Fuera de alcance |

v1 es solo el primero. No se implementa nada de las otras dos columnas.

## Elementos del certificado de finalización (v1)

1. **Alumno** — nombre completo (input manual, no hay cuenta de usuario).
2. **Criterio de obtención** — 10/10 módulos en estado `mastered` (ya existe: `getState(i)==="mastered"`), 1000 XP, evidencia guardada en los 10 módulos (`aws-evidence-N` con los 3 checks). Sin esto explícito, el certificado dice menos de lo que parece.
3. **Identidad del curso** — "IA como sistema de trabajo", versión (usar el commit/tag), fecha de finalización (`new Date().toISOString()` al completar el módulo 10).
4. **Emisor** — Abell Systems, URL del curso.
5. **Identificador del documento** (no "identificador único" — evitar sugerir verificabilidad que no existe) — hash determinista de nombre+fecha+resultados, impreso en el PDF. Debe ir acompañado de esta nota literal en el documento: *"Este identificador permite identificar el documento emitido, pero no constituye una verificación online de autenticidad."*
6. **Página de verificación** — no incluida en v1. Queda fuera hasta que exista backend (Fase 8/9) o se decida adelantarlo para un caso concreto.

## Lo que v1 NO afirma

No es una certificación oficial, homologada, universitaria o profesional, ni certifica competencia. El documento debe decir literalmente **"Certificado de finalización"** — nunca "certificación profesional", "acreditación" ni "título".

## Lista para implementar

Sin decisiones abiertas. La implementación es pequeña: un botón en `#courseDone` que genera un PDF/imagen a partir de los datos ya presentes en `localStorage` (módulos `mastered`, XP, evidencias, fecha, emisor Abell Systems) — no añade funcionalidad al recorrido, así que no choca con el gate de validación de `PLAN.md`.
