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

## Review phase: three design variants

The site is currently published as three visual variants of the same six-
section profile (Profile · Experience · Achievements · Recognition · Skills ·
Contact) so a direction can be chosen:

| Route | Variant | Character |
|---|---|---|
| `/a` | Drafting Room | graphite, copper, Archivo — the evolved editorial identity |
| `/b` | Executive Ledger | navy, ivory, brass, Newsreader serif — executive register |
| `/c` | Marine Foam | light, teal → foam gradient, Manrope — calm, international |

`/` is a `noindex` chooser. Each variant hosts the full site under its prefix;
content, detail pages and diagrams are shared, only composition and tokens
differ (`[data-variant]` blocks in `globals.css`). To promote the winner:
move its `src/components/variants/<id>` components to the root routes, drop
the `[variant]` segment and the other two folders, and remove the unused
fonts from `layout.tsx`.

## Structure

```
src/
  app/
    layout.tsx            fonts, metadata, JSON-LD
    page.tsx              variant chooser (review phase)
    [variant]/            the six sections + detail pages, per variant
    opengraph-image.tsx   generated social card
    sitemap.ts robots.ts  generated from content
  variants/               registry (id → chrome + pages), path helpers, resolver
  components/
    variants/a|b|c/       Header, Footer and the six section pages per variant
    shared/               NavShell, FooterShell, detail pages, content blocks
    layout/               Section, PageIntro, Container
    ui/                   Portrait (placeholder until a photo is set), marine-foam,
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

Tokens live in `src/app/globals.css` (`@theme`): a warm graphite ground,
paper-toned type, a copper accent for fulfilment/action and a cool "signal"
tone reserved for assurance/runtime feedback. Typography roles are exposed
as utilities (`t-display`, `t-h1`…`t-h3`, `t-lead`, `t-body`, `t-small`,
`t-meta`, `t-mono`). Motion is limited to page entrance, reveal-on-scroll,
diagram edge flow and hover states, all disabled under `prefers-reduced-motion`.
