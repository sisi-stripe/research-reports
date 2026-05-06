---
title: "New User Home: Research Synthesis"
date: "2026-05-06"
sources: ["New User Dash Home: Consolidated Strategy (Google Drive)", "V1 Experiment Brief (Google Drive)", "New User Home Study - Dovetail (106 highlights)", "NUH Session #1 Zoom Transcript (Melissa)", "NUH Session #2 Notes (Travis, Software Dev Company)", "NUH Session #3 Zoom Transcript (Brandi, Farm in a Box)", "NUH Session #5 Zoom Transcript (Amy, Pulse Labs)"]
summary: "Synthesis of 4 new user interviews testing the latest NUH design, layered on prior strategy and Dovetail research. New study validates Setup vs. Discovery framework and reveals sandbox/live confusion, strong preference for linear personalized ordering, and desire for more visual brand expression."
---

## Prior Research Context

This section summarizes what was already known from the Consolidated Strategy doc, V1 Experiment Brief, PSAT data, and earlier Dovetail highlights. This is the foundation the new study was designed to test.

### Known Problems

**Blank slate dead end:** The current new user Dashboard shows empty charts pre-first-charge. Users land with no direction. PSAT verbatims confirm frustration:

> "The dashboard is very confusing for someone that's not tech savvy. It's impossible to understand where to go and what to do." — PSAT

> "This is the first time I've ever used Stripe, and it's been a terrible introduction. An unclear UI, no info at all on subscription setup options." — PSAT

**40% skip FOX:** Four in ten users bypass the intent capture flow, leaving the system without personalization signals. These users hit the blank dashboard with no guidance.

**Wayfinding friction:** New users looking for "front door" setup actions face friction because navigation is not optimized for early discovery.

### Strategic Framework (from Consolidated Strategy)

The strategy doc established two primary user intents:

1. **Setup Intent** — User has a clear goal. Needs to complete a task fast (create invoice, accept payments, get API keys).
2. **Discovery Intent** — User has no clear intent or too many. Needs to explore what's possible.

The V1 experiment hypothesis: replacing static placeholder charts with a Hero Module + product cards will help users discover and try front-door payments products faster, driving 7-day first charge rate.

### Prior Dovetail Findings (from earlier research rounds)

- **Setup guide resonates:** Users like progress bars and checklist-style guidance
- **Discovery happens later:** Users prefer to explore products after completing basic setup
- **Visual plainness noted:** Participants flagged the Dashboard as "too plain," lacking color and brand
- **AI assistant context matters:** When placed next to the setup guide, users assume it helps with setup; placed alone, it feels generic
- **Information overload risk:** Showing too many demos/cards simultaneously overwhelms users

> "I like that it's listed out clear with the setup guide and it shows me. I like the status bar. So it's tracking how many steps of the five that I've completed." — Dovetail highlight

> "I may out of curiosity click on see all stripe products. But I feel like anything as far as products I would wait towards the end... after setting up the basic features, then I'll probably explore the other stripe products." — Dovetail highlight (tagged: discovery mode)

> "When I see the assistant side by side to the setup guide, I'm thinking this assistant is going to help me with this setup process." — Dovetail highlight (tagged: AI assistant)

> "People may just feel like, oh, it's just a general assistant, where if I ask the question, it's going to send me to a page." — Dovetail highlight (tagged: AI assistant)

---

## New Study Findings (4 participants)

This section covers what emerged from the latest round of research: 4 sessions testing the newest NUH design.

**Participants:**
- **Melissa** (Session #1) — Setting up Stripe for day job + side business (subscription platform with multiple tiers)
- **Travis** (Session #2) — Software development company
- **Brandi** (Session #3) — Farm in a Box, launching lease-to-own subscription model
- **Amy** (Session #5) — Pulse Labs, account management + AI training data, considering Stripe for SaaS platform

---

### Theme 1: Setup Guide Is the Immediate Focal Point

**What we heard:** All participants gravitated to the setup guide immediately. It draws attention, sets expectations, and provides a clear starting point.

> Travis: "Drawn to setup guide portion — attention drawn right away. Metrics that can reference later but focused on the setup guide." — Session #2

> Brandi "confirmed she would follow the setup guide in a linear fashion from top to bottom and expressed appreciation for the progress bar feature." — Session #3

> Amy "found the prototype well-organized and straightforward." — Session #5

**What's new here:** The latest design successfully establishes the setup guide as the primary focal point. This wasn't true of the prior blank-chart state.

---

### Theme 2: Sandbox vs. Live Is Confusing and Unwanted

**What we heard:** 3 of 4 participants raised issues with the sandbox/live distinction. Non-technical users prefer to work directly in live. The sandbox banner feels like clutter.

> Travis: "Preference is that the account would be live. As I am doing things it would affect the account and function accordingly." He also found the blue sandbox banner annoying: "Don't like notifications if you can't get rid of them. Not relevant." — Session #2

> Melissa "expressed uncertainty about the process for moving from sandbox to live, noting that current instructions felt 'salesy' and unclear for new users." She questioned "whether work done in sandbox would be duplicated when moving to live" and "expressed a preference for working directly in a live environment from the start." — Session #1

> Amy confirmed that sandbox matters for dev teams doing integration testing — but not for non-technical users exploring the product. — Session #5

> Brandi didn't distinguish sandbox from live at all — she treated the entire experience as one continuous process. — Session #3

**What's new here:** The sandbox/live friction is stronger than anticipated. It's not just confusing — users actively don't want it. This is a new design problem to solve, especially for no-code paths.

---

### Theme 3: Users Want Personalized Step Ordering

**What we heard:** All 4 participants discussed the order of steps. They want linear progression but with *their* most relevant action first, not a generic sequence.

> Travis's preferred order: "Accept payments → add clients → connect bank → plug in services and products." He'd expect invoicing to have "followup questions — like frequency of invoices" and to "add most important clients into the system." — Session #2

> Brandi "suggested reordering the content, moving 'create subscriptions and send invoices' higher up and adjusting the framing to be more educational about integrations rather than discovery of new products." — Session #3

> Melissa "suggested implementing the guide as a series of milestones, allowing users to complete each step at their own pace." — Session #1

> Amy's team would prioritize "payment options, processing fees, and user experience for both payers and payees" — different from a solo founder's priorities. — Session #5

**What's new here:** The desire for personalized ordering is unanimous. The current fixed sequence doesn't serve users with different entry points. This validates the strategy doc's "intent-driven" approach but adds urgency — even within the Setup cohort, order matters.

---

### Theme 4: Discovery Content Is Actively Ignored During Setup

**What we heard:** Participants in setup mode deliberately bypass discovery/exploration content. They register it exists but save it for later.

> Travis on Discover Products: "When first landed, disregard. Now familiar with setup, now it is easy to see, will probably explore that. Maybe down the line." He explicitly said it "wouldn't interest me at this moment while engaged in my current flow — but might remember things for later." — Session #2

> Travis on "Test your integration": "Not sure what that does. Not in explore mode. Hover didn't really help to educate the user. At first glance not really sure what it is capable of. Am not ready to jump on at this point." — Session #2

> Brandi's feedback focused entirely on reordering setup steps, with no engagement with discovery content. — Session #3

**What's new here:** Discovery content doesn't just compete for attention — it's actively filtered out by Setup users. Its presence during setup is dead weight. This validates showing it only after setup is complete or for users who explicitly express Discovery intent.

---

### Theme 5: Unused Real Estate Could Show Contextual Information

**What we heard:** Participants identified empty space on the page and suggested it could show useful-at-a-glance information relevant to their business.

> Travis: "Real estate not used. Right or left column having a list of clients / possibly the different products that have been placed in the system. Summary would be nice / information at a glance." — Session #2

> Amy "noted the need for additional details on accepting payments, creating products, and tax collection, including international taxes like VAT" once the system goes live. — Session #5

> Melissa suggested "a pre-onboarding checklist, gathering necessary information like products, pricing, and business details, might be beneficial." — Session #1

**What's new here:** Users see the unused space and project their own needs onto it. They want it to reflect *their* business context — clients, products, pricing — not generic content. This supports personalization beyond just step ordering.

---

### Theme 6: External AI Is Filling the Guidance Gap (Poorly)

**What we heard:** At least one participant relied on external AI tools for setup guidance, receiving inaccurate instructions.

> Melissa "referenced using AI tools like Claude for guidance during previous Stripe setup processes, which had sometimes provided inaccurate instructions." She used Claude to "create a tutorial for setting up products in Stripe" but it "wasn't fully effective due to incorrect instructions and missing interface elements." — Session #1

**What's new here:** Users are turning to external AI because our in-product guidance is insufficient. This creates a competitive threat for the Stripe assistant — if users already have a habit of using external AI, our assistant needs to be significantly better and more visible to displace that behavior.

---

## Narrative Summary

The new study (4 participants testing the latest NUH design) validates the core strategic framework while surfacing several new concerns.

**What's validated:** The Setup vs. Discovery intent split holds up. All four participants demonstrated clear Setup behavior — gravitating to the setup guide immediately, ignoring discovery content, wanting sequential progression. The hero module and product cards are structurally sound; Amy called the prototype "well-organized and straightforward."

**What's new:** Three findings emerged that weren't fully anticipated by the strategy:

1. **Sandbox/live is a bigger problem than expected.** Three of four users either don't want it, don't understand it, or don't notice the distinction. For non-code paths, it adds friction without value. Travis actively dislikes the banner; Melissa finds the transition unclear; Brandi doesn't see a boundary at all.

2. **Step ordering is personal, not universal.** Every participant described a different ideal order based on their business. Travis wants payments → clients → bank. Brandi wants subscriptions → invoices first. This means a fixed step order, even within "Setup" mode, will feel wrong to most users.

3. **External AI is already competing for the guidance role.** Melissa's use of Claude for Stripe setup — with poor results — signals that users actively seek guided help and will go outside the product to find it. Our assistant has a narrow window to establish itself before external AI habits calcify.

---

## Considerations

Based on 4 qualitative interviews — directional signals, not statistically representative. Use to inform hypotheses and prioritization discussions.

**Strong signal (4/4 participants):**
- Consider progressive disclosure over showing all cards at once — every participant focused narrowly during setup and filtered out the rest
- Consider dynamic step ordering based on user context — all 4 described a different ideal sequence based on their business
- The Hero Module direction is validated structurally — continue with V1 experiment

**Moderate signal (3/4 participants):**
- Revisit the sandbox/live boundary for non-code paths — 3 participants either didn't want it, didn't understand it, or ignored it entirely
- Explore ways to fill unused page real estate with contextual business info (clients, products, summary data) rather than generic content

**Emerging signal (1–2 participants):**
- Investigate how our assistant competes with external AI tools (Claude) that users already turn to for setup help
- Consider whether visual brand expression (color, imagery) in the hero module could improve first impressions — prior Dovetail research flagged this, new study didn't contradict
- Define card dismissal behavior and what happens when users exhaust all options

---

## Open Questions

- **How do we handle users who skip FOX AND dismiss all home cards?** The "infinite GSMs" approach was raised but not resolved.
- **Should the Hero module mirror FOX or differentiate?** Users already skipped FOX — will similar content get skipped again?
- **Should non-code users see sandbox at all?** 3 of 4 participants either ignored or disliked it. Can we make this boundary invisible for Payment Links / Invoice paths?
- **How do we compete with (or complement) external AI guidance?** Melissa used Claude and got wrong answers. Our assistant needs to be more visible, reliable, and contextual.
- **What's the right metric for Discovery users?** First charge doesn't apply. Engagement with educational content? Time to first meaningful action?
- **Floatie vs. Assistant relationship:** "Is the Floatie a container for GSMs? Does the Assistant replace the Floatie?" Not yet resolved.
- **How do we personalize step order without signals?** If users skip FOX, what alternative signals can drive ordering (signup source, browse history, industry)?

---

## Design Direction

**What the new study reinforces:**
- Setup guide as focal point works — keep it prominent, keep it sequential
- One problem at a time — users in setup mode have tunnel vision; respect it
- The hero module direction is structurally sound

**What the new study challenges:**
- Fixed step ordering doesn't serve diverse user needs — consider dynamic ordering
- Sandbox/live as a visible mode is a hard boundary that violates the "no hard boundaries" principle for non-technical users
- Discovery content during setup is wasted — consider hiding or deferring entirely

**Design principles to carry forward (from the Design Director):**
- **Focus over density:** Don't show all cards simultaneously. Travis focused only on setup; everything else was "disregard."
- **Contextual integration:** The sandbox banner, discovery section, and test-integration prompt all feel like separate systems. Make boundaries invisible.
- **Journey thinking:** The progression from setup → familiar → power-user needs distinct states, not a jarring reset when switching modes.
- **Visual hierarchy:** The setup guide should dominate. Secondary content (discover products, charts) should recede visually until relevant.
- **Intentionality:** Every element on the page must earn its place. Travis's "real estate not used" is a design opportunity, not just empty space — fill it with contextual, business-specific information.
