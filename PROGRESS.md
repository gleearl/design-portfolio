# Design Portfolio – Progress Tracker

## Goal
A live design portfolio on the web. Exact goal and audience to be decided (see Open items).
- In scope: the site itself (content, design, build, deploy).
- Out of scope: <add as decided>

## Links
- <none yet: live URL / repo / Figma / content doc>

## ▶ Resume here (updated 2026-10-20)
Folder and docs set up. Next action: decide the goal and audience (checklist item 1).

## Checklist
| # | Item | Status | Notes |
|---|---|---|---|
| 1 | Decide goal and audience (full-time roles, freelance clients, personal brand) | ⬜ | |
| 2 | Pick 3–4 case studies to feature and check what can be shown publicly | 🟡 | 3 of 3–4 written: MIMS notification experience (works/notification-system.html), UI style guide (works/ui-style-guide.html) and MIMS Philippines design system (works/design-system.html, no images yet). Needs a public-use check with MIMS and for askchamber |
| 3 | Write bio / about copy | ⬜ | |
| 4 | Visual direction and key pages in Figma (home, case study template, about, contact) | 🟡 | Home designed as a Claude Design canvas (liquid glass); implemented as static `index.html` + `styles.css`. Case study template, about, contact still to do |
| 5 | Write case studies | 🟡 | 1 done (notifications), no images yet |
| 6 | Choose stack, hosting and domain | ⬜ | |
| 7 | Build the site | 🟡 | Home page built; placeholders remain |
| 8 | Deploy and run the Launch checklist | ⬜ | |

Status key: ⬜ Not started · 🟡 In progress · 🔍 In review · ✅ Done

## Launch checklist
| Item | Status |
|---|---|
| Domain connected and HTTPS working | ⬜ |
| Page titles, meta descriptions and social preview (Open Graph) image | ⬜ |
| Favicon and 404 page | ⬜ |
| Responsive check at 390 / 768 / 1440 | ⬜ |
| Accessibility pass: contrast, keyboard, alt text, heading order | ⬜ |
| Lighthouse run: performance, accessibility, best practices, SEO | ⬜ |
| Contact links, resume download and external links work | ⬜ |
| Analytics set up (if wanted) | ⬜ |

## Heuristic review log
| Page / flow | Heuristic # | Issue | Severity | Status |
|---|---|---|---|---|

## Decisions
- 2026-10-21: Home page built as plain static HTML/CSS from the design canvas. Nav says Experience instead of About (no about section yet). Dark mode follows OS setting.
- 2026-10-20: Two separate sites, each in its own folder – Glee's choice at kickoff.

## Open items / assumptions
- Goal and audience: full-time roles, freelance clients and/or personal brand?
- Stack and hosting: not decided (options on hand: IONOS Web Hosting Plus, GitHub Pages).
- Domain: not decided (gleearl.com is already in use for travel.gleearl.com).
- Which employer and client work can be shown publicly.

## Change log
- 2026-10-21: Git repo initialised and pushed to private GitHub repo gleearl/design-portfolio (main). Kept private until MIMS content clearance is confirmed.
- 2026-10-21: Added third work, MIMS Philippines design system (works/design-system.html), from the Figma file SPR (tokens, variables, components, templates; tools Figma and Claude). New dark cover drawn from scratch (images/design-system/cover.jpg: Tokens in, UI out, primitives to semantic tokens to components). Replaced the placeholder "MIMS Design System" card on home. Copy only uses facts from the file (version 1.0, 20 Sep 2026, 22 templates, 11 missing components, 3 corrected defects). No Figma page images on the page yet: the exports contain the internal name SPR and internal notes in their text, so they need redaction or re-export. Open: confirm MIMS clearance for public use, the cover wording, and which pages to show.
- 2026-10-21: UI style guide cover replaced: an original modern cover (dark blue, large Aa, glass panel with the real blue scale, buttons, search field, alert colours), drawn from scratch instead of cropped from the frames. Static. Overview now says everything is set up in Figma using its components and styles.
- 2026-10-21: Removed the "Looking back" section (and its table of contents link) from the UI style guide page; it now ends at Navigation.
- 2026-10-21: Added second work, UI style guide (works/ui-style-guide.html), from AskChamber.fig (page Style Guide, 5 frames exported at 2x to images/ui-style-guide/). Static cover composed from the frames (cover.jpg, no motion, per Glee). Home card added after the notifications card. Copy sticks to what the frames show; year, role and who the product was for are not stated. The "before AI" line comes from Glee. Open: confirm the year, whether askchamber work can be shown publicly, and whether to name the employer or client.
- 2026-10-21: Added a fixed table of contents on the right of the case study (shows at 1440px and wider, highlights the section in view with the orange dot). Hidden on narrower screens so it never overlaps the wide figures.
- 2026-10-21: TOC fix: the last section (Outcome) now highlights when the page bottom is reached, and clicked links highlight immediately.
- 2026-10-21: Back links ("All works", "All notes") now have a left arrow icon that nudges on hover.
- 2026-10-21: Removed the internal project name from the site: facts now say Project: Notification system; page renamed works/notification-system.html; images moved to images/notifications/. Keep internal names out of public copy, URLs, file names and alt text.
- 2026-10-21: New cover for the notifications case study (images/notifications/cover.jpg), composed from three real screens on a soft olive to lavender gradient. Used on the home card and at the top of the case study.
- 2026-10-21: Added an animated vector cover (images/notifications/cover-motion.svg: bell rings, notifications slide into a phone, action chips float). Used on the home card; the screens cover stays on the case study page. Respects reduced motion.
- 2026-10-21: Animated cover buttons refined: cards taller, button is a full pill under the text, aligned to the text column, sized to its label.
- 2026-10-21: Notification types (A webinar reminders, B incomplete actions, C new content and recommendations, D announcements, from the deck) now shown as four rows with a type tag and a push + in-app list example each (images/notifications/type-*.png, cropped from deck slides 10, 12, 14, 16).
- 2026-10-21: Case study typography refined: 16px body at 1.65 in the darker grey, 17px intro, 32px serif section titles, 24px serif type headings, small uppercase labels, tag now reads "Type A · Webinar reminders".
- 2026-10-21: Cross-checked the case study against the Figma Slides deck (dated 1/20/2025, UX Design Team concept presentation, prototype demo, alignment questions). Added Team and Presented facts, two deck slides (UI elements, push notification flow) and a Next steps section. Deck shows a proposal and no results, so the Outcome claim ("substantial increase in engagement") is not backed by the deck: confirm wording and any numbers before publishing.
- 2026-10-21: Case study facts tidied into a 2-column grid with row dividers (Project, Product, Team, Presented; Scope full width).
- 2026-10-21: Flow slide re-cropped to remove the leftover slide title.
- 2026-10-21: notifications case study rebuilt after rachelchen.tech project pages: section label + statement headline per section, 7 Figma screens in tinted frames (images/notifications/). Source Figma the project Figma file, page Notification Center (Long Term). The back-arrow icon on in-app headers rendered as the text ARROW-LEFT in the Figma export (missing icon font), so it was covered and redrawn as a plain arrow. Re-export if the font is fixed.
- 2026-10-21: Screens re-exported after Glee fixed the Figma file; the real back arrow now exports, so the redrawn arrow patch is gone.
- 2026-10-21: Home card for the case study now shows the notification center screen.
- 2026-10-21: Case study screenshots: fixed tint classes colliding with card tones (caption area was tinted), now one neutral panel, full phone visible with even padding, caption outside.
- 2026-10-21: Fixed: the manual dark switch was missing the olive colour (only OS dark had it).
- 2026-10-21: Added case study page works/notification-system.html and a first card on home. Text supplied by Glee. NDA/public-use clearance for MIMS still to be confirmed; no screens added yet.
- 2026-10-21: Case study facts strip starts with Product: MIMS Education app.
- 2026-10-21: Implemented home page from the design canvas (index.html, styles.css). Open: [YEAR] dates, [EMAIL], social and resume URLs, project links, real thumbnails.
- 2026-10-21: Added light/dark switch in the nav (main.js); remembers the choice, defaults to OS setting.
- 2026-10-21: Nav moved to a right-aligned link list (pages, then socials) like jennywen.ca; content column left-aligned; theme switch now a floating button bottom right.
- 2026-10-21: Added small muted name wordmark top left (rachelchen.tech style); first row of nav on phones.
- 2026-10-21: Nav now Work, About | Email (copy to clipboard), LinkedIn, X. Resume, GitHub, Dribbble removed. Experience section id is now #about.
- 2026-10-21: Nav moved to the left like rachelchen.tech: fixed sidebar at 1024px and wider, a left-aligned row above that.
- 2026-10-21: Theme switch moved to the top right.
- 2026-10-21: Type sizes follow rachelchen.tech: 15px body, nav, labels and captions; headline 40px (64px at 1024+) with 1.2 to 1.25 line height.
- 2026-10-21: Experience moved to its own page, about.html (with the intro line). Nav About links there; current page shows in accent colour.
- 2026-10-21: Added olive green as second accent (#6B7A3A light, #A9B96F dark) for section labels, the Copied state and the first thumbnail tint; orange stays for hover and current page.
- 2026-10-21: Active indicator: orange dot beside the current nav item (Work on home, About on about page).
- 2026-10-21: About page: removed the "About" heading and short intro, replaced with Glee's five-paragraph bio (hidden h1 kept for accessibility). Experience list stays below.
- 2026-10-21: About: added an outdoors line (hiking, camping, travelling). Photos to come from Glee, laid out like rachelchen.tech.
- 2026-10-21: Experience replaced with design roles from LinkedIn (MIMS, Human Incubator UI/UX, Hurdman Full Stack Designer, Mopro). Engineering-only roles and Duple Labs left out per Glee; dates written "to" instead of dashes. Check Duple Labs still belongs elsewhere.
- 2026-10-21: Role descriptions removed from Experience (titles, companies and dates only).
- 2026-10-21: Experience dates now show start date only (month and year).
- 2026-10-21: MIMS role now reads "UI/UX and Product Design".
- 2026-10-21: About bio rewritten (new five-paragraph version, now mentions AI use, MIMS products and outdoors in the last line).
- 2026-10-21: About bio text set to grey (--faint) with key phrases in ink at weight 500.
- 2026-10-21: Ink highlights limited to: Product Designer, 9 years of experience, design and engineering, entire product design process, MIMS.
- 2026-10-21: Added ink highlights: journeys, prototyping, testing, AI.
- 2026-10-21: Home section label renamed "Selected work" to "Works".
- 2026-10-21: Experience: MIMS date now reads "Current" instead of Feb 2024.
- 2026-10-21: "Current" shown in olive.
- 2026-10-21: Experience rows show company HQ (pin) plus work setup tag: Humedit (renamed from Human Incubator Inc.) HQ Japan, Cebu office; Hurdman HQ Utah USA, Remote; Mopro HQ Irvine CA USA, Cebu office; MIMS Remote, HQ not given yet.
- 2026-10-21: Removed the "HQ:" label; pin + place stays.
- 2026-10-21: MIMS HQ Singapore added; Humedit HQ now Tokyo, Japan.
- 2026-10-21: Humedit set to Remote.
- 2026-10-21: Mopro tag now reads "Office: Cebu, Philippines".
- 2026-10-21: Photos section "Outside of work" added to About: 6 photos in images/ (waterfall, crater lake, camp, trail, coffee, dusk), captions are generic (no locations given). Not used: pine forest view and canoe photo. Coffee added to the outdoors line.
- 2026-10-21: Photos restyled as a collage like rachelchen.tech: 4-col grid, numbered captions above, mixed tile sizes and offsets; 2 cols on phones.
- 2026-10-21: Collage redone with all 8 photos in 4 labelled groups (01 Hiking, 02 Camping, 03 Coffee, 04 Dusk); new tiles: pines.jpg, canoe.jpg.
- 2026-10-21: Photos switched to an Apple-style bento grid: crater lake as the single large tile, 7 equal tiles on a strict grid, 20px radius, captions inside tiles, scroll fade-in. Group labels and numbers dropped.
- 2026-10-21: Removed the canoe photo (Glee in the water) from the bento; 7 photos remain, dusk now spans 2 columns.
- 2026-10-21: Coffee tile re-cropped so the cup sits centred., then moved further so the cup and saucer fill the middle of the tile.
- 2026-10-21: Photo tile gap set to 10px (was 16px; 6px was too tight). Radius kept at 20px.
- 2026-10-21: Home hero paragraph set to the theme grey (--faint) at regular weight, matching the About text.
- 2026-10-21: Mopro range tried then reverted: all roles show start date only.
- 2026-10-21: Hurdman start date changed from Jan 2021 to Dec 2018 (joined as engineer; Full Stack Designer role began Jan 2021).
- 2026-10-21: Company name and HQ pin+place now share one line; Remote/office tag stays on the line below.
- 2026-10-21: Pin icon removed; location is plain grey text next to the company name.
- 2026-10-21: Experience rows kept as: date | company + grey HQ on one line with Remote/office pill below | role at right. A one-line redesign was tried and rejected; spacing refined (16px row padding, 8px between name line and pill, baseline-aligned).
- 2026-10-21: "Current" now uses the orange accent instead of olive.
- 2026-10-21: Company names link out (MIMS, Humedit, Hurdman, Mopro) in a new tab; styling unchanged in all states.
- 2026-10-21: US locations spelled out the same way (state names, not abbreviations): Irvine, California, USA and Utah, USA. Hurdman city unknown.
- 2026-10-21: Notes (blog) added after About: notes.html (list, empty state, copy-paste row example) and notes/note-template.html for each post. No posts yet. Nav now Work, About, Notes.
- 2026-10-21: Light theme colours now follow rachelchen.tech: white bg, slate #32404F text, orange #E65F2E accent. Muted greys set a bit darker than hers for contrast.
- 2026-10-20: Project kicked off; CLAUDE.md and PROGRESS.md created.
