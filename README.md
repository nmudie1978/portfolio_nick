# Nick Mudie — professional site

Personal professional site for Nick Mudie: telecom architecture, BSS/OSS,
transformation and AI-native telecom. Built as a static, content-driven
Next.js site.

## Stack

- Next.js (App Router, fully static output) · TypeScript · Tailwind CSS v4
- No CMS, no animation library. Content is typed TypeScript in `src/content/`.
- Deploys to Vercel with no configuration.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static build; also runs type checking
npm run lint
```

## Design

"Ocean Depth": a white body with deep navy-teal hero and section bands
(aurora glows over a faint grid), light type on the bands, teal accent,
Instrument Sans throughout. Chosen from eight reviewed directions
(see `docs/superpowers/specs/` for the design spec).

Six sections: Profile (`/`) · Experience · Achievements · Recognition ·
Skills · Contact. Case studies live under `/achievements/<slug>`;
architecture patterns under `/recognition/patterns/<slug>`; viewpoints
under `/recognition/<slug>`; the interactive matrix at
`/recognition/architecture-model`.

## Structure

```
src/
  app/
    layout.tsx            fonts, metadata, JSON-LD, header/footer
    page.tsx              Profile (home)
    experience/ achievements/ recognition/ skills/ contact/   sections + detail pages
    opengraph-image.tsx   generated social card
    sitemap.ts robots.ts  generated from content
  components/
    site/                 Header, Footer, the six section pages, Timeline, primitives, theme
    shared/               NavShell, FooterShell, detail pages, content blocks
    layout/               Section, PageIntro, Container
    ui/                   Portrait (placeholder until a photo is set),
                          Eyebrow, Tag, Links, Cards, Reveal, ContentBlocks
    architecture/         ArchitectureMatrix (interactive), FlowDiagram, StackDiagram
  content/                all site content, typed by content/types.ts
    person.ts             name, positioning, bio, quick facts, portrait, links
    achievements.ts       the six verified deliveries → case studies
    skills.ts             five skill domains
    experience.ts         journey stages + organisations (stages, not dates)
    case-studies.ts       case studies (engagements and patterns)
    insights.ts           viewpoints ("Selected thinking" under Recognition)
    focus.ts              current focus areas
    architecture.ts       the matrix model: layers, columns, nodes, lenses
    site.ts               site name, URL, navigation, keywords
  lib/                    metadata, content resolvers, routes, journey, cn()
```

## Adding content

- **Case study** — append to `caseStudies` in `src/content/case-studies.ts`.
  The route, sitemap entry, cards and related links are generated.
- **Viewpoint** — append to `insights` in `src/content/insights.ts`.
- **Experience** — edit `src/content/experience.ts`. `role` and `period` are
  `null` until verified and render as "To be confirmed" until set.
- **Portrait** — add the photograph under `public/` and set `person.portrait`
  to its path (e.g. `"/portrait/nick-mudie.jpg"`). The 4:5 frame is fixed, so
  no layout change is needed.
- **Links** — `src/content/person.ts` → `links`. `email` and `cv` are `null`
  until a public address / CV path is chosen; the site adapts.

Content blocks (`p`, `h`, `list`, `callout`, `flow`, `stack`) are rendered by
`ContentBlocks`, so diagrams can be placed inline in any case study or
viewpoint.

## Environment

- `NEXT_PUBLIC_SITE_URL` — canonical origin (e.g. `https://example.com`).
  Falls back to Vercel's production URL, then `http://localhost:3000`.

## Design system

Tokens live in `src/app/globals.css` (`@theme`): `ink` is the ground,
`paper` the type, `copper` the primary (teal) accent and `signal` a secondary
tone for assurance/runtime feedback. The navy-teal ground itself is
`src/components/site/theme.tsx`. Typography roles are exposed
as utilities (`t-display`, `t-h1`…`t-h3`, `t-lead`, `t-body`, `t-small`,
`t-meta`, `t-mono`). Motion is limited to page entrance, reveal-on-scroll,
diagram edge flow and hover states, all disabled under `prefers-reduced-motion`.
