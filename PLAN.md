# Implementation Plan

## Product

A visually polished, deterministic interactive MOOC. It teaches a reusable way of working with AI rather than a specific model or vendor.

## Architecture

React + TypeScript + Vite + Framer Motion.

Content is declarative and independent from rendering. No AI backend, no API keys, no server-side model calls.

## Course model

Course → Module → Lesson → Step.

Step primitives planned: Scenario, Choice, Ordering, Classification, Reflection, Mission.

## Roadmap

### M0 — Foundation
- [x] repository
- [x] React/TypeScript/Vite
- [x] deterministic content model
- [x] GitHub Pages workflow

### M1 — First vertical slice
- [x] visual course map
- [x] scenario step
- [x] choice step
- [x] consequence feedback
- [x] external mission
- [x] local progress

### M2 — Learning engine
- [ ] ordering
- [ ] classification
- [ ] reflection
- [ ] reusable lesson renderer
- [ ] content validation

### M3 — Course content
- [ ] Module 01 complete
- [ ] Module 02 — Contexto
- [ ] Module 03 — Iteración

### M4 — Public beta
- [ ] accessibility audit
- [ ] mobile polish
- [ ] E2E journey
- [ ] analytics decision
- [ ] public beta feedback loop

## Guardrails

1. No model/API dependency in the learning runtime.
2. New lesson types should be data-driven before bespoke UI is added.
3. The visual system is part of the pedagogy.
4. Every interactive state has deterministic expected outcomes.
