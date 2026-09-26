# AI Work System

Interactive, deterministic MOOC for learning how to turn everyday work into **human + AI systems**, without requiring technical knowledge.

## Educational goal

The course takes a non-technical learner through:

**AI assistant → context → clear work request → iterative cycles → research/creation → verification → tools → agent → work system**

The learner uses their own AI during the practical exercises. The course itself does not require AI API calls.

## Who it is for

- People with no programming background.
- Professionals who already perform real work tasks and want to augment them with AI.
- Teams that want a practical introduction to AI agents without starting from technical implementation.

## What the learner finishes with

By the end of the 10-module programme, the learner can:

- identify work that can be delegated to AI;
- turn ambiguous requests into clear AI-ready work;
- iterate and verify AI output;
- design simple human + AI workflows;
- understand agents in practical, non-technical terms;
- configure a simple agent with tools, limits and approvals;
- measure the effect of the new workflow.

The final deliverable is a **real work system**, not a quiz or a collection of prompts.

## Curriculum

See **[CURRICULUM.md](./CURRICULUM.md)** for the complete educational programme, learning objectives, practices, evidence and final-project criteria.

### 10 modules

1. **Cambia cómo ves la IA** — define the problem before asking.
2. **Dale contexto** — provide relevant context, constraints and quality criteria.
3. **Formula el trabajo** — turn a task into an executable brief.
4. **Trabaja en ciclos** — improve through observation and iteration.
5. **Investiga con IA** — research, compare sources and preserve uncertainty.
6. **Crea con IA** — produce and refine real professional artefacts.
7. **Verifica** — check claims, sources and human controls.
8. **Dale herramientas** — map triggers, steps, tools and decisions.
9. **Construye tu primer agente** — introduce autonomy, tools, limits and approvals.
10. **Diseña tu sistema** — build and measure a complete human + AI workflow.

## Design principles

- **No prerequisites:** no programming or AI expertise required.
- **Work first:** every module starts from a real task.
- **Tool-agnostic:** the method should survive changes in AI products.
- **Progressive autonomy:** the learner chooses the appropriate level of delegation.
- **Human control:** critical actions require explicit review or approval.
- **Verification:** generated does not mean correct.
- **Evidence over theory:** every module produces a practical artefact or observation.
- **No magic agents:** an agent is introduced as a goal + rules + tools + controlled execution.

## Runtime

The current public vertical slice is a deterministic static site in `site/`.

The learning runtime intentionally has **no AI dependency**. AI work happens in the learner's own environment, keeping the course portable and avoiding vendor lock-in.

## Deployment

GitHub Pages is deployed automatically from `site/` by `.github/workflows/deploy.yml`.

See [PLAN.md](./PLAN.md) for the implementation plan.
