---
title: "[EXAMPLE] New User Onboarding: Discovery Findings"
date: "2026-05-06"
sources: ["User Interviews (Zoom)", "Dovetail Highlights", "Product Strategy Doc"]
summary: "Key findings from 8 user interviews on first-time onboarding experience, revealing friction in API key setup and unclear next steps after account creation."
---

## Key Themes

### 1. API Key Setup Is a Dead End

**Finding:** 6 of 8 participants struggled to understand what to do after generating their first API key. Users described feeling "dropped off a cliff" after the key was created.

> "I got the key, and then I just stared at the screen. What am I supposed to do with this?" — P3, Series A Fintech

**Frequency/Strength:** High frequency (75% of participants), strong emotional response.

**Design implication:** The API key moment needs contextual next steps — not a separate docs link, but an embedded guide that appears in context. Visual weight should shift from the key itself to the action the user should take next.

---

### 2. Users Want to See Progress, Not Just Tasks

**Finding:** Participants preferred interfaces that showed them how far they'd come, not just what remained. The current checklist felt "endless" even when only 3 items remained.

**Frequency/Strength:** Moderate (5 of 8), expressed as preference rather than blocker.

**Design implication:** Consider a progress-oriented framing over a task-list framing. Journey and state thinking applies here — the transition from "setting up" to "ready to build" should feel like a moment, not just another checkbox.

---

### 3. Integration Type Matters Early

**Finding:** Users who knew their integration type (no-code vs. custom) early moved faster. Those who didn't felt overwhelmed by options presented simultaneously.

**Frequency/Strength:** High (7 of 8), clear behavioral pattern in session recordings.

**Design implication:** Intent capture should happen first. Focus over density — present one question at a time rather than showing all options simultaneously. After intent is captured, the UI should adapt to show only relevant paths.

---

## Narrative Summary

The onboarding experience currently treats all new users as a homogeneous group, presenting the same checklist regardless of technical background or integration intent. Research shows this creates two distinct failure modes: technical users feel slowed down by basics they don't need, while non-technical users feel overwhelmed by API-first language.

The strongest signal is around the API key moment — it's positioned as a milestone but functions as a dead end. Users generate the key successfully but lack contextual guidance on what to do next. This maps directly to the Design Director's principle of contextual integration: the help shouldn't live in a separate panel or docs page, but should appear embedded in the moment it's needed.

Progress perception emerged as an underappreciated factor. Users who felt they were "almost done" persisted longer than those who could only see remaining tasks. This suggests the visual design of onboarding should emphasize journey completion, not task enumeration.

---

## Action Items

| Priority | Action | Owner | Rationale |
|----------|--------|-------|-----------|
| P0 | Redesign post-API-key experience with contextual next steps | Design | 75% of users hit dead end here — highest-friction moment |
| P0 | Add intent capture step before showing integration options | Product | Reduces overwhelm, enables personalized paths |
| P1 | Introduce progress indicator replacing pure checklist | Design | Improves persistence and perceived momentum |
| P1 | Differentiate API key visual styling from general content | Design | Users confused key with surrounding UI elements |
| P2 | Explore embedded assistant for onboarding guidance | Product + Design | Users want help in-context, not in separate docs |

---

## Open Questions

- How do we handle users who don't yet know their integration type? Force a choice or provide a "help me decide" path?
- Should progress be linear or allow non-linear exploration?
- What's the right moment to introduce Stripe's assistant — during onboarding or after?
- How do we measure "perceived progress" quantitatively?

---

## Design Direction

The research points toward an onboarding experience that captures intent early, then adapts. The current one-size-fits-all checklist should evolve into a journey-aware interface that:

1. **Leads with a single question** (integration type) rather than presenting all options — focus over density
2. **Embeds guidance contextually** at the API key moment rather than linking out — no hard boundaries between setup and learning
3. **Shows progress as a journey** rather than a task list — visual weight on what's accomplished, not just what remains
4. **Differentiates content types visually** — API keys should look distinct from instructional content, distinct from action items

The Design Director's principle of "take it one problem at a time" applies directly: the current UI shows too many things simultaneously. Each step should feel like a clear moment with one focal point.
