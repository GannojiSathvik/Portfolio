<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project notes (for picking this project back up later)

## What this actually is

The Next.js scaffold in this repo (`app/`) is a shell: `app/page.tsx` just
redirects `/` to `/index.html`. **The real site lives entirely in
`public/index.html` + `public/script.js` + `public/style.css`** — a static,
single-page portfolio using GSAP + ScrollTrigger for animation and Lenis for
smooth scrolling. Ignore `app/`, `components/`, and `brahmin/` (the last is
unrelated scraped assets from a different company's saved webpage — clutter,
not part of the site) unless asked to touch the Next.js layer specifically.

## Page structure (as of this session)

7 full-page sections in `public/index.html`, in order:
1. **Hero** (`#hero`)
2. **About** (`#about`)
3. **Skills** (`#skills`)
4. **Tech Stack** (`#techstack`)
5. **Projects** (`#projects`) — exactly 3 project cards. Each card is the
   single source for that project: its `data-pill` label feeds the scrolling
   marquee (built by `buildProjectMarquee()` in `script.js`), and its
   `<template class="project-details">` holds the full description + tech
   list shown by the "Details" modal. The marquee lives in the **Focus**
   section (see below), not here — that placement was tried both ways and the user
   settled on marquee-in-Focus. Keep the grid to exactly these 3; more were
   tried (6 total, adding AI Red Team Framework, AI-Powered ASPM, ShroudX)
   and explicitly rolled back as "clumsy" — don't re-add them without being
   asked again.
6. **Focus** (`#focus`, nav label "FOCUS") — a small standalone slide holding
   the decorative "24/7" rotating-ring graphic with AUTOMATION/SECURITY side
   pills, AND the project-pills marquee underneath it. This used to be
   crammed inside Projects; it's deliberately its own slide now per explicit
   instruction — don't merge it back into Projects.
7. **Personal Projects** (`#playground`, nav label "PERSONAL") — deliberately
   separate from the professional `#projects` section. Holds non-resume, for-fun
   work: currently just **The 80% Game** (a social-deduction number game,
   live at https://games-for-sloth.vercel.app), with its full escalating
   ruleset hidden behind a native `<details>/<summary>` toggle so the section
   stays uncluttered until someone wants the rules. A second card, **Robot
   Buddy**, sits beside it (the two cards are a 2-column `.playground-grid`,
   stacking under 900px). The user mentioned
   building a "Sphere" personal AI assistant (Grok-like) too, not yet
   described in enough detail to add — ask before inventing content for it.
8. **Contact / "Let's Talk"** (`#contact`) — the last section. An earlier
   big footer (name/tagline/nav links/social icons) was removed as a
   redundant second "page" — don't bring that back. The `.contact-info` row
   (email/LinkedIn/GitHub) is icon-only, laid out horizontally, no visible
   text labels — this was requested explicitly, don't add labels back.
9. **Copyright strip** (`<footer class="copyright-footer">`) — sits after
   `</main>`, outside every section. One thin line: "© 2026 Gannoji
   Sathvik®" on the left, "BY HUMANS. FOR THE FUTURE." on the right.
   Styled at the bottom of `style.css`. The user wants it **small and
   quiet**: 11px Inter, regular weight, gray `#6b7280`, right side uppercase
   with wide letter-spacing, generous padding (3rem sides) so text never
   touches the screen edges; stacks and centers under 768px. A big, bold,
   colored version was tried and rejected — keep it minimal.

## Robot buddy (`public/mascot.js`)

A violet round robot fixed in the bottom-right corner, loaded before
`script.js` and fully self-contained (builds its own SVG, needs GSAP).
Its expressions were modelled on Pippo, the round robot from the Doraemon
movie "Nobita and the New Steel Troops—Winged Angels" (glossy eyes, rosy
cheeks, the body stays a plain sphere and the face does the acting) —
inspired by, not a copy of, that character. Moods: idle, happy, excited,
curious, surprised, sleepy, sad (tears), angry (red flush + manga 💢
vein), shy, love. Triggers: click = happy, quick double click = excited,
5+ clicks in 2s = angry with a 5s cooldown, hover = curious, eyes follow
the cursor, 25s idle = sleeps with zzz, fast scroll = surprised, reaching
`#contact` = excited + wave (once per load) and it steps up/grows via
`.at-contact`, hovering a project card 1.5s = love. Auto reactions are
rate-limited; reduced-motion users get face swaps without body motion.
Random play: every 10–22s (when awake, not hovered, not mid-reaction) it
picks one of roam (hops to 2–4 random screen spots and back; desktop
only), peek (slides up the right edge and looks around), spin, or ride
(for 12–20s it gets carried up while the page scrolls). It always leans
into the scroll. GSAP moves the `.robot-buddy` button itself, so any CSS
transform effect (like `.at-contact`) must go on its inner `svg`.
Demo: any `[data-robot-demo]` element (the "Watch the demo" button on the
Robot Buddy card in Personal Projects) makes it hop beside that element,
act out every mood with a caption, wave, and hop home
(`window.robotBuddy.demo(el)`). The custom cursor dot hides over the robot
(its colour-inverting blend turned the robot green), and the cursor dot
and glow ball are centred on the pointer with `xPercent/yPercent: -50`.
The glow (`#ball`) is a small 36px halo that hugs the dot — the user wants
it kept, just cursor-sized, not the old 320px light. Demo captions fade
on their own after ~1.4s. The robot's colours follow the site palette: dark
graphite glass body with a cyan rim, and cyan (`INK`) eyes, mouth and brows.

## Wording/tone (flagged, not yet fixed)

The user asked for an opinion on copy tone (professional-funny vs. cringe).
Several headline lines — the hero tagline "ADVANCING AI RESEARCH AND
DEVELOPMENT WITH PRIVACY AT THE FOREFRONT", About's background text
"SAFETY.PRIVACY BY HUMANS.FOR HUMANITY", and the Projects heading "THE
FASTEST WAY TO ADAPT AND SCALE AI TECHNOLOGY" — read like corporate
AI-startup mission statements, not personal portfolio copy, and likely
originated from the unrelated "BRAHMAI" scraped content sitting in
`brahmin/`. Flagged as the main tone issue but NOT rewritten — wait for the
user to ask before changing wording/copy.

The 3 current projects (in card order): **NeuroNarrator** (AI
vision-assistance app, source at `~/Documents/neuronarrator-main`),
**Intelligent Cloud Scaling System**, **HackInterviewAI**. AI Red Team
Framework, AI-Powered ASPM, and ShroudX were tried as additional cards and
then explicitly removed again (kept the grid to 3, called 6 "clumsy") — if
asked to add projects back, confirm which ones before re-adding rather than
assuming the full set from the resumes should all be on the grid at once. An
"Experience & Education" timeline section used to exist between Projects and
Contact — it was removed because it just re-listed the projects plus the
About section's education info.

### Two resumes exist — read before touching project content

- `~/Documents/23WU0101044_G Sathvik.pdf` (plain, older) and
  `~/Downloads/23WU0101044_G Satvhik.pdf.pdf` (two-column, newer, note the
  typo in the filename) list **different, overlapping project sets** and
  sometimes describe the same project differently. Do not assume either one
  alone is ground truth — cross-check both before editing project content.
  The newer resume's 4 projects are AI Red Team Framework, Cloud
  Auto-Scaling, AI-Powered ASPM, and ShroudX; the older one has AMART-RAG
  (=AI Red Team), Cloud Scaling, and HackInterviewAI. Neither resume
  mentions NeuroNarrator (that came from the user's own project folder).
- The two resumes describe the cloud project differently: the older one has
  full LSTM/PyTorch/attention detail with metrics (R²=0.94, MAE ~4.13%); the
  newer one just says AWS/Docker/Scikit-learn with no LSTM mention at all.
  The LSTM/PyTorch version was kept as canonical (more specific claims are
  more likely the full truth, condensed for space in the newer resume) —
  the site's card description and modal data both reflect it now.
- Card face vs. modal split: cards show a short, curated tag list for visual
  elegance; the *full* per-project "Tech Stack:" list from the resume goes
  into the card's `<template class="project-details">` list, only visible via
  the "Details" modal on click. This was an explicit design instruction — don't dump full
  tech-stack lists onto the card faces.

## Known conventions / gotchas

- The site uses **Lenis** for smooth scroll. Never re-add CSS
  `scroll-behavior: smooth` on `html` — it fights Lenis's own JS-driven
  easing and causes visible stutter.
- The fixed header (`.minimal-header`) is ~108–112px tall (48px padding +
  a 60px button). In-page jumps go through `scrollToSection()` in
  `script.js`, which owns the `-112` offset — use it rather than calling
  `lenis.scrollTo` with your own offset.
- **Scroll locking** goes through `lockScroll(owner)` / `unlockScroll(owner)`
  (the menu and the project modal both use it). It stops Lenis as well as
  setting body overflow — body overflow alone does not stop Lenis.
  `.full-page` also carries `scroll-margin-top: 112px` as a CSS-level
  backstop for non-JS scroll (URL fragments, back/forward).
- Contact links now live in only one place: the `.contact-info` list inside
  `#contact` (the copyright strip has no links).
- **Refresh must start at the top.** `script.js` sets
  `history.scrollRestoration = 'manual'` then scrolls to 0 (window + Lenis)
  right after Lenis is created. Without the `scrollRestoration` line the
  browser restores the old position after load and the page opens at the
  bottom. Don't remove it.
- **`--gutter` is not a defined CSS variable.** Using it silently voids the
  whole declaration (that's what made the footer text touch the edges). Use
  real values or the variables actually defined in `:root`.
  Real profile URLs: `https://github.com/GannojiSathvik` and
  `https://www.linkedin.com/in/gannoji-sathvik-664b052a5/`.
- Resume source of truth: `~/Documents/23WU0101044_G Sathvik.pdf`. Grad year
  is **2027** (site's education card/timeline say "2023 — 2027").

## Not yet done / open items

- The global Skills (`#skills`) and Tech Stack (`#techstack`) sections have
  never been updated to match either resume — MongoDB/Express (from
  HackInterviewAI) aren't listed there, for instance.
- Certifications from the newer resume (two DeepLearning.AI/Coursera
  courses) aren't reflected anywhere on the site — it currently has no
  certifications section at all.
- Timeline dates removed along with the Experience section were never
  independently verified against real project dates.
- Many files are still untracked in git (several `public/assets/*` images,
  `public/_experience_backup.html`, `update_portfolio.py`, `video stuff/`,
  `.agents/`). Checked: none of the untracked images are referenced by
  `index.html`, `style.css`, or `script.js`, so the live site isn't missing
  anything. If you start using one, `git add` it or it won't exist on Vercel.

## Running and deploying

- **Bump the `?v=` query** on the `style.css`, `mascot.js` and `script.js`
  links in `index.html` whenever those files change. Safari kept serving
  stale copies after deploys (the user saw an old layout), and the version
  string forces a fresh download.

- Local: `npm run dev` in this folder, then open
  `http://localhost:3000/index.html` (`/` just redirects there).
- Deploy: GitHub repo `GannojiSathvik/Portfolio`. Work happens on `main`,
  but Vercel's **production branch is `master`** (the repo's default
  branch) — pushes to `main` only make preview deployments. To update the
  live site (`portfolio-nu-roan-62.vercel.app`), merge `main` into `master`
  and push `master`. Push only when the user asks.
- `CLAUDE.md` is a one-line `@AGENTS.md` import, so these notes load
  automatically in a new Claude session. Keep this file updated after
  changes.
