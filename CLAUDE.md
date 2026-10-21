# Design Portfolio

Glee's UI/UX design portfolio: a public site that shows design case studies and the thinking behind them. Goal, audience, stack and domain are still to be decided (see PROGRESS.md, Open items).

## Session rules
- Read `PROGRESS.md` at the start of every session. It holds the goal, resume point, checklist, open items and change log.
- Update `PROGRESS.md` whenever something changes status, and add a dated line to its change log.
- Update this file when the stack, deploy setup, domain or content rules change.
- Source of truth: <not decided yet. Until there is a repo, Figma and this folder hold the work.>
- Build/format rules: breakpoints desktop 1440 / tablet 768 / mobile 390. <naming and file locations: not decided yet>

## Context
- Site: design portfolio
- Audience: <not decided yet: full-time roles, freelance clients and/or personal brand>
- Positioning: <not decided yet: e.g. ~9 years across UI/UX and frontend, designs that ship because they are built with engineering in mind>
- Links: <none yet: live URL, repo, Figma, content doc>

## Stack and deploy
- Stack: plain static HTML + CSS, no build step (provisional, set while implementing the home design; fits GitHub Pages or IONOS)
- Run locally: `python3 -m http.server 4173` · Build: none
- Deploy: <not decided yet>
- Domain: <not decided yet>

## Content rules
- Voice: first person, plain and specific, outcomes over adjectives.
- No em dashes in site copy.
- No internal project or code names (for example MERNA) in copy, URLs, file names or alt text. Use plain descriptions.
- Employer or client work (e.g. MIMS): only show what is cleared for public use. Note NDA limits, redactions and permissions per case study in PROGRESS.md.

## UX Standards
Apply both frameworks below to every UX/design output: wireframes, mockups, Figma frames, flows, critiques, proposals and specs. When reviewing or proposing a design, name the heuristic or hierarchy principle behind each recommendation, and log issues in PROGRESS.md (Heuristic review log) with a severity of 0 (not a problem) to 4 (usability catastrophe).

### 1. Nielsen's 10 Usability Heuristics
Source: https://www.nngroup.com/articles/ten-usability-heuristics/

1. **Visibility of system status** – Keep users informed about what is going on through appropriate, timely feedback. Show loading, saving, sync, offline and "you are here" states.
2. **Match between the system and the real world** – Speak the users' language: familiar words and concepts, not internal jargon. Follow real-world conventions and natural mapping.
3. **User control and freedom** – Give a clearly marked "emergency exit" for mistaken actions. Support undo/redo, clear Cancel and Back, easy-to-find exits.
4. **Consistency and standards** – Users should not wonder whether different words, situations or actions mean the same thing. Keep internal consistency (within the product / design system) and external consistency (platform conventions: iOS HIG, Material, web norms).
5. **Error prevention** – Prevent problems before they happen. Prioritise high-cost errors, use constraints and good defaults, and confirm before destructive or irreversible actions.
6. **Recognition rather than recall** – Minimise memory load by keeping elements, actions and options visible. Do not make users carry information from one screen to another; offer contextual help, recents and history.
7. **Flexibility and efficiency of use** – Provide accelerators (shortcuts, gestures, saved items, personalisation) for experts without getting in the way of novices.
8. **Aesthetic and minimalist design** – Do not include irrelevant or rarely needed information. Every extra element competes with what matters and lowers its visibility.
9. **Help users recognize, diagnose, and recover from errors** – Error messages in plain language (no codes), state the problem precisely, and suggest a fix. Use recognisable error visuals.
10. **Help and documentation** – Best if no explanation is needed; when it is, make help searchable, contextual to the task and written as concrete steps.

### 2. Visual Hierarchy
Source: https://www.nngroup.com/articles/visual-hierarchy-ux-definition/

Visual hierarchy is the organisation of elements so the eye takes them in the order of intended importance. It succeeds when the page's visual structure matches the real importance of its content and users can complete their task.

**Color and contrast**
- What matters is contrast with the surroundings, not the colour itself. Bright, saturated colour pulls attention, so reserve it for the most critical items.
- Keep palettes tight (simple designs: about 2 primary + 2 secondary colours) and use no more than 3 contrast levels.
- Type contrast (weight, italics, underline) also signals importance.
- Never rely on colour alone; pair it with text, icon, weight or position for colour-blind users.

**Scale**
- Bigger = more important. Make the most important element the largest.
- Use no more than 3 sizes per view (e.g. heading, subheading, body), and at most 2 "big" elements so they stay prominent.

**Grouping (proximity and common region)**
- More space between groups, less space within a group. Keep headings close to the content they label.
- Give the most important elements breathing room.
- If spacing alone does not separate groups, add containers (borders, background fills, cards).

**Check every screen with the squint / blur test**
- Blur the design (or squint) and confirm the first, second and third things you notice are the intended ones, and that groups read correctly without the text.
- Watch for unintended hierarchy, e.g. a bright image, ad or badge outranking the primary content or action.
