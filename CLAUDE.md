# Think and Grow: Unit F164 Website Development

Student coursework prototype for the OCR Level 3 Cambridge Advanced National in Computing: Application Development, Unit F164 (set assignment "Think and Grow", valid September 2025 to June 2027). Think and Grow is a scenario client, not a real organisation. Hosted on GitHub Pages from this public repository.

## The official OCR brief
Think and Grow creates educational resources for secondary schools. The commission is a high-fidelity prototype of a website used as a learning resource in UK secondary schools and colleges to teach climate change. It could be used in Science, Geography and PSHE lessons. Audience: students aged 14-18, accessible to students of all abilities, used in lessons or for independent research.

Minimum content:
- information about the causes of climate change
- information about the effects of climate change
- examples of practical things students can do to help protect the environment
- a range of interactive components
- a clear, easy-to-use navigation system
- compatible with a range of browsers and devices

Extra requirements recorded earlier from the learner's own copy of the scenario (F164_Scenario.docx). They are not in the OCR PDF. Keep them, but if they conflict, the OCR PDF wins: fully responsive on desktop, laptop, tablet and smartphone; fast on 4G/5G with compressed web-friendly media; brand identity, services and mission promoted; easy to get in touch.

## Assessment structure (what each task needs)
**Task 1, plan and design** (planning document): P1 describe client and user requirements, as specific requirements that can be used as review criteria in Task 3. P2 explain hosting requirements (Topic Area 2.1 content). P3 design site structure, navigation and a content overview, detailed enough for a stranger to follow. P4 design page template(s) showing layout and house style. P5 identify essential assets (an assets list is enough). P6 describe testing: methods, types and elements tested. M1 explain which libraries/frameworks are used and how they make the site work. M2 explain how the house style suits the client. M3 justify the testing approach. D1 justify SEO techniques. D2 assess design choices against W3C and accessibility guidelines.

**Task 2, create the prototype** (this is the current task): P7 website structure: folder structure, page structure, index page location (screenshots of folders and files). P8 prepare assets for use as components. P9 create interactive and navigational components. P10 use web authoring tools (Topic Area 3.3). M4 implement W3C and accessibility compliance. M5 implement responsive design, shown working on the scenario devices (photos or video). M6 use CSS for a consistent, appropriate style, with evidence of the CSS. D3 implement SEO techniques, with evidence. D4 use appropriate libraries/frameworks, with evidence.
Delivery: the final prototype must be viewable without installing specialist software (the GitHub Pages link), or be provided as video/screen recordings. Keep a screen recording as a backup. Deviating from the Task 1 plan is not penalised.

**Task 3, test and review:** P11 test and document actual results (screenshots, photos or recordings). P12 assess suitability against the requirements. M7 analyse results and explain remedial action (fixing is not required). D5 discuss improvements and further development. Test table columns used by OCR: Test number, Test type, Test description, Test data, Expected result, Actual result, Remedial action required.

Command words: Describe = give an account of characteristics. Explain = give reasons and make clear. Justify = give valid reasons for an opinion. Assess = reasoned judgement informed by facts. Discuss = present, analyse and evaluate points to reach a judgement. Reference every book, website or other source used.

## Current state (6 October 2026)
- Static site, no build step. Files at repo root: `index.html`, `climate-basics.html`, `causes.html`, `impacts.html`, `solutions.html`, `css/style.css`, `js/menu.js` (every page), `js/main.js` (index only: footprint check, quiz, contact form), `fonts/README.txt`, `.nojekyll`, `README.md`.
- Done: real original copy (no statistics), one original SVG diagram per topic page, demo-labelled contact form, coursework footer note. Browser checks last passed 61/61 (Chromium via Playwright, five pages at 375/768/1280 px).
- Contact form is a demo: it validates and sends nothing. The audience includes under-18s, so do not collect names or emails and do not set `FORM_ENDPOINT` without asking.

## Task 2 gap check
- P7: structure exists. Still need screenshots of the folder and file tree and a note of the index location.
- P8: SVGs done. No photos or video yet. Prepare any new assets (compress, WebP, licence log, captions and transcripts for video).
- P9: interactive parts today are the footprint score, quiz, mobile menu and form validation. The brief asks for a "range", so one or two more would help (temperature timeline, journey comparison).
- P10: record which web authoring tools were used (check the Topic Area 3.3 list in the unit specification, not seen yet).
- M4: not done. Run the W3C HTML and CSS validators on every page, fix errors, keep the reports. Check contrast, keyboard use and a screen reader.
- M5: only tested in Chromium emulation. Need photos or video on real phone, tablet, laptop and desktop, in more than one browser.
- M6: CSS is consistent. Collect screenshots of the style tokens and key rules.
- D3: partial. Each page has a title, meta description, `lang`, headings and alt text. Add canonical URLs, Open Graph tags, `sitemap.xml`, `robots.txt` and JSON-LD once the live URL is known, and capture evidence.
- D4: the site has no library or framework, so D4 and M1 are not met. This is the learner's decision. If aiming for Distinction, add one appropriate library (for example a charting library for the timeline), self-hosted, and explain and evidence it.

## Task 1 gaps (planning document)
The Word planning document has no sections yet for P2 hosting, P5 assets list, M1 libraries/frameworks or D1 SEO, and its Section 16 mapping is empty. Map it to P1-P6, M1-M3 and D1-D2. It was earlier mislabelled a "P1 document": P1 is one criterion of Task 1.

## House style (do not change without asking)
- Colours: Forest `#0B3D2E` (primary), Teal `#0E6E6E` (links/secondary), Amber `#F2A900` (call to action, dark text on it), Mist `#F7F9F5` (background), Leaf `#DFF3EC` (panels), Ink `#1F2933` (text), Slate `#5B6770` (secondary text), Alert red `#B42318` (errors only).
- Fonts: Lexend (headings), Atkinson Hyperlegible (body), system fallbacks. Base text 18 px, line height 1.6. WOFF2 files are not added yet (see `fonts/README.txt`).
- Mobile-first. Breakpoints 600 px and 1024 px. Touch targets at least 44 x 44 px. Skip link, visible focus, `prefers-reduced-motion` respected. Target WCAG 2.2 AA.
- Navigation: Learn, Explore, Resources, Services, About, Contact. Key pages within two clicks. Tone: calm, hopeful, action-focused. UK English.

## Open data tasks
1. **Journey comparison** to replace the simple footprint score. Use only figures read from the official 2026 UK government GHG conversion factors workbook (gov.uk "Greenhouse gas reporting: conversion factors 2026", full set, sheet "Business travel- land"). Put figures in `js/factors.js` with edition, sheet and cell in comments. Do not use third-party websites: they mix 2025 and 2026 values. Verified so far: UK grid electricity including grid losses is 0.14396 kg CO2e per kWh (2026 methodology paper, Table 9). Per-km car, bus and rail figures are NOT yet verified. Food is not in these factors, so it stays out of any scored result.
2. **Temperature timeline** (planned, not built): NASA GISTEMP global annual anomalies. Download the data and show the source URL and access date on the page.
3. **Fonts:** add the WOFF2 files to `/fonts`, then enable the `@font-face` block in `css/style.css` by deleting the two marker lines.

## Rules
- Never invent statistics, emission factors, temperature data, sources or assessment wording. If a number is not from a named source you can open, say so and ask.
- Show where every figure on the site comes from.
- Write planning and evidence text in the first person as a Level 3 student, professional but not inflated, using the OCR command words above.
- Make small, reviewable commits. Ask before changing the house style, adding dependencies, or adding anything that sends data or loads from another site.
- Re-run the browser checks after changes to HTML, CSS or JS: serve with `python3 -m http.server 8123` and test with Playwright.
- This repository is public. Do not commit the learner's name, centre, tutor or other personal details, and do not commit the OCR assignment PDF.
