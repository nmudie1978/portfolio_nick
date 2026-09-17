# Three-variant professional profile redesign — design

Date: 2026-09-17
Status: approved in conversation; implementation follows this document.

## Goal

Redesign the existing Nick Mudie site into a premium, senior-level professional
profile (telecom architecture / BSS/OSS / transformation / AI & modern telecom)
and deliver **three reviewable design variants** on one deployment so the
strongest can be promoted.

The site must communicate: 25+ years of real telecom experience, real delivery,
architectural thinking, transformation experience, current thinking and a
substantial body of work (BSS/OSS Academy). It must never fabricate
professional history, dates, titles, metrics, awards or technologies.

## Non-goals

- Not a generic portfolio, developer portfolio, CV site or SaaS landing page.
- Not a clone of the reference site (hemantsoni.net): reference is used only
  for level of completeness and information architecture.
- No CMS, no animation library, no heavy dependencies.
- No AI-generated or stock portrait. A designed placeholder stands in until a
  real photograph is supplied.

## Information architecture (all variants)

Primary navigation, in order: **Profile · Experience · Achievements ·
Recognition · Skills · Contact**.

| Section | Purpose | Route |
|---|---|---|
| Profile | Who Nick is: positioning, 25+ years, pillars, quick facts, bio, portrait, differentiators, current focus; previews of the other sections | `/[v]` |
| Experience | Career progression Operations → Service Assurance → Architecture → BSS/OSS → Transformation → AI/Modern Telecom, with organisations as evidence | `/[v]/experience` |
| Achievements | The six verified deliveries, each with click-through to the existing case-study depth | `/[v]/achievements`, `/[v]/achievements/[slug]` |
| Recognition | Body of work and intellectual contribution: BSS/OSS Academy, Telco Landscape, architecture model (interactive matrix), architecture patterns, selected thinking (all 12 insights) | `/[v]/recognition`, `/[v]/recognition/[slug]`, `/[v]/recognition/architecture-model` |
| Skills | Five professional domains (Architecture & Transformation; BSS/OSS; Operations & Assurance; AI & Modern Telecom; Cloud & Infrastructure) | `/[v]/skills` |
| Contact | LinkedIn, email (when set), CV availability, Academy | `/[v]/contact` |

"About", "Global Experience", "Case Studies", "Thinking" and "Academy" do not
appear as navigation items. Case studies live under Achievements (engagements)
and Recognition (architecture patterns). Thinking lives under Recognition as
"Selected thinking". The Academy is the centrepiece of Recognition.

Legacy routes (`/expertise`, `/case-studies`, `/thinking`, `/academy`,
`/architecture`) are removed. The sitemap and OG image regenerate from the new
tree.

## Variant mechanism

- `src/app/[variant]/` is a dynamic segment; `generateStaticParams` returns
  `a`, `b`, `c`. Unknown ids → `notFound()`.
- `/` is a minimal, `noindex` chooser page linking the three variants.
- `src/variants/registry.ts` exports `VARIANTS: Record<VariantId, VariantDef>`
  where `VariantDef = { id, name, tagline, fontClass, Header, Footer, pages:
  { Home, Experience, Achievements, Recognition, Skills, Contact } }`.
- `src/app/[variant]/layout.tsx` wraps children in
  `<div data-variant={id} className={fontClass}>` and renders the variant's
  Header and Footer. Page files under `[variant]/` are thin: resolve the
  variant, render `VARIANTS[id].pages.X`.
- Detail pages (achievement/case study, insight, architecture model) are
  implemented **once** as shared components and inherit the variant's tokens.
- All internal links are built with `vhref(variant, path)` so every variant
  stays inside its own tree. Header/Footer receive `variant` as a prop.

Promotion later: move the winning variant's components to root routes, delete
the other two and the chooser. Content and shared components are untouched.

## Theming

`globals.css` moves from `@theme inline` to `@theme` so Tailwind utilities
reference CSS variables. Each `[data-variant="x"]` block redefines the semantic
tokens: `--color-ink{,-2,-3}`, `--color-line{,-strong}`, `--color-paper{,-2,-3}`,
`--color-copper` (primary accent, name retained for compatibility),
`--color-copper-soft`, `--color-signal`, `--color-signal-soft`,
`--font-display`, `--font-sans`. `color-scheme` and `body` background are set
per variant. Focus rings and selection use the accent token.

Fonts (next/font/google, `display: swap`, latin subset): Archivo (wdth axis),
Instrument Sans, IBM Plex Mono (existing) + Newsreader (variant B display) +
Manrope (variant C display and body). All are declared in root layout during
the review phase; unused ones are removed on promotion.

## Shared content changes (verified-only)

- `person.ts`: add `portrait: string | null` (null → placeholder),
  `quickFacts: { label, value }[]` (25+ years telecom; Operators — Telia,
  Telenor, Vodafone, UPC, Marlink; BSS/OSS — architecture & transformation;
  AI / modern telecom — current focus), `bio: string[]` (short executive
  biography derived from existing intro), `differentiators: string[]`,
  `currentFocus: string`.
- `achievements.ts`: six entries (UPC Derby; Telia hybrid cloud; Telia E2E
  monitoring & observability; Telia B2B BSS/OSS greenfield; Vodafone M-Pesa;
  Marlink OSS provisioning). Fields: `slug`, `organisation`, `title`,
  `headline` (role-accurate one-liner, e.g. "Key technical contributor to the
  delivery of…"), `scope: string[]`, `technologies: string[]`, `caseStudy`
  (existing case-study slug), `stage` (journey stage label). Only fields with
  real material are populated.
- `skills.ts`: five domains exactly as briefed. `AWS` is included because it
  is user-supplied in the brief, and is flagged for confirmation.
- `experience.ts`: add `stages: string[]` per organisation (which journey
  stages it evidences); add Telenor as an entry with `role: null`,
  `period: null`, `achievements: []`, `context` = "Detail to be confirmed",
  rendered as such. No dates, titles or scope are invented.
- `site.ts`: `PRIMARY_NAV` becomes the six sections (paths relative to the
  variant root). Metadata title/description updated to the brief's wording.

## Portrait

`src/components/ui/Portrait.tsx`: fixed 4:5 frame. If `person.portrait` is
set, renders `next/image` with alt "Nick Mudie". Otherwise renders a designed
placeholder: drafting grid, monogram "NM", small label "Portrait". Both states
share the frame, so replacing the placeholder requires only setting the path
and adding the file under `public/`.

## Variant designs

Common: sticky header with name mark left, six items right, active state,
mobile full-screen menu; skip link; footer with site and elsewhere links; every
section has a clear purpose; no cards-everywhere; restrained motion
(reveal-on-scroll, hover), disabled under `prefers-reduced-motion`.

### A · Drafting Room (dark graphite, copper, Archivo)

Evolves the current identity. Hero: 12-column split — eyebrow, name in display
type, four pillars as a stacked list, statement, journey strip; portrait on the
right with the ambient ArchitectureMatrix beneath at reduced scale. Quick facts
as a four-up hairline strip. Experience: vertical drafting-line timeline of the
six stages, organisations attached to their stages, empty period slots.
Achievements: numbered editorial spreads (01–06) with large organisation name,
headline, scope list, technologies, "Read the case study". Recognition: Academy
as a large editorial block with topic index, architecture model link, patterns,
selected-thinking index list. Skills: five numbered index columns. Contact:
PageIntro + channels list.

### B · Executive Ledger (deep navy, ivory, brass; Newsreader display)

Executive/consulting register. Hero: portrait large on the left (rectangular),
name in serif, positioning line, statement, two buttons; right: "Quick facts"
ledger table (label | value, hairline rows). Journey rendered as a horizontal
six-stage rail on desktop, vertical on mobile. Achievements: ledger rows —
large numeral, organisation, headline, scope, link — alternating hairlines.
Recognition: Academy block with a two-column topic ledger; selected thinking
as a titled list grouped by category. Skills: domain tables. Header carries a
solid "Contact" button.

### C · Marine Foam (light; teal → foam gradient; Manrope)

Calm, international. `GradientBackground` ("Marine Foam", copied verbatim to
`src/components/ui/marine-foam.tsx`) is the full-bleed hero ground with dark
teal type on the pale end and a subtle overlay for contrast; the portrait sits
in the hero and overlaps its bottom edge into the white body. Sections are
paper-white with dark-teal type; the gradient returns as transition bands for
the Recognition intro and the Contact section. Experience: stepped timeline
with teal nodes. Achievements: large-type list with soft dividers and a teal
index. Skills: domain rows with grouped items in a grid (no keyword cloud).

## Detail pages (shared)

- Achievement / case study: header with category, organisation, title,
  summary, technologies; the seven existing sections (context, challenge,
  architecture, role, transformation, outcome, lessons) rendered by
  `ContentBlocks`; related thinking; next link. Back link → Achievements (or
  Recognition for patterns).
- Insight: header, content blocks, related case studies and insights, next
  link. Back link → Recognition.
- Architecture model: interactive `ArchitectureMatrix` plus the existing
  layers/lifecycle explanation. Back link → Recognition.

## SEO, accessibility, performance

- Title: "Nick Mudie — Telecom Architecture, BSS/OSS & Transformation".
  Description per brief. Per-page canonical inside each variant; OG image
  regenerated; JSON-LD Person on the variant layout. Chooser is `noindex`.
- Semantic landmarks, one `h1` per page, logical heading order, visible focus
  ring, keyboard-operable menu, alt text, reduced-motion respected, contrast
  ≥ 4.5:1 for body text in all variants (checked for the light variant on the
  gradient).
- Static output, next/font, no new runtime dependencies. `GradientBackground`
  is pure CSS/SVG.

## Testing / QA

1. `npm run build` passes with no type or lint errors.
2. Every route of every variant opened in Chrome at desktop (1440), tablet
   (834) and mobile (390) widths; console clean; no horizontal overflow; all
   nav, buttons and links resolve.
3. Keyboard pass on the header and menu; reduced-motion pass.
4. Final visual refinement pass per variant.
5. Push branch `redesign/three-variants`, `vercel` preview deploy, report URLs.
