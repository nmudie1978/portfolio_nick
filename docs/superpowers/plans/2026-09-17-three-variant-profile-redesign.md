# Three-Variant Profile Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the site as a six-section senior professional profile, delivered as three visual variants (`/a`, `/b`, `/c`) on one static Next.js deployment.

**Architecture:** One shared, typed content layer and one set of shared renderers (content blocks, diagrams, detail pages, portrait). A `[variant]` dynamic segment applies `data-variant` and picks that variant's header, footer and section components from a registry. Semantic colour/type tokens are redefined per `[data-variant]` so shared components work in all three, including the light Marine Foam variant.

**Tech Stack:** Next.js 16 App Router (static), TypeScript, Tailwind CSS v4 (`@theme` tokens), next/font/google, no new runtime deps.

Spec: `docs/superpowers/specs/2026-09-17-three-variant-profile-redesign-design.md`

---

## File map

Shared (create / modify):
- `src/app/globals.css` — `@theme` (not inline), per-variant token blocks, typography roles, motion.
- `src/app/layout.tsx` — fonts (Archivo, Instrument Sans, Plex Mono, Newsreader, Manrope), metadata, JSON-LD; no header/footer (moved to variant layout).
- `src/app/page.tsx` — chooser (noindex).
- `src/app/[variant]/layout.tsx` — resolves variant, `data-variant`, Header/Footer.
- `src/app/[variant]/{page,experience,achievements,achievements/[slug],recognition,recognition/[slug],recognition/architecture-model,skills,contact}` — thin route files.
- `src/app/sitemap.ts`, `src/app/opengraph-image.tsx`, `src/app/not-found.tsx` — updated for new tree.
- `src/variants/{types.ts,registry.ts,paths.ts}` — VariantDef, VARIANTS, `vhref`.
- `src/content/{person,site,experience,achievements,skills,types}.ts` — content additions.
- `src/components/ui/Portrait.tsx`, `src/components/ui/marine-foam.tsx`, `src/components/ui/QuickFacts.tsx`.
- `src/components/shared/{CaseStudyDetail,InsightDetail,ArchitectureModel,Timeline,AchievementList,SkillsDomains,RecognitionBody,ContactBody,JourneyStrip}.tsx` — variant-agnostic building blocks that accept `variant`.
- `src/components/variants/a/{Header,Footer,Home,Experience,Achievements,Recognition,Skills,Contact}.tsx`
- `src/components/variants/b/…` and `src/components/variants/c/…` — same set.
- Delete: `src/app/{expertise,experience,case-studies,thinking,academy,architecture,contact}`, `src/components/home/Hero.tsx`.

## Tasks

### Task 1: Content layer
- [ ] Extend `types.ts` (Person.portrait/quickFacts/bio/differentiators/currentFocus; ExperienceEntry.stages; Achievement; SkillDomain).
- [ ] Update `person.ts`, `experience.ts` (stages + Telenor), add `achievements.ts`, `skills.ts`; update `site.ts` nav/metadata.
- [ ] `npx tsc --noEmit` passes. Commit.

### Task 2: Theming + variant scaffold
- [ ] `globals.css`: `@theme`, `[data-variant]` blocks for a/b/c, body background per variant.
- [ ] `layout.tsx` fonts; `variants/types.ts`, `paths.ts`, `registry.ts` (stub pages).
- [ ] `[variant]/layout.tsx` + thin routes; chooser page; remove legacy routes; sitemap/OG.
- [ ] `npm run build` passes with stub pages. Commit.

### Task 3: Shared building blocks
- [ ] `Portrait`, `marine-foam`, `QuickFacts`, `Timeline`, `AchievementList`, `SkillsDomains`, `JourneyStrip`, `CaseStudyDetail`, `InsightDetail`, `ArchitectureModel`.
- [ ] Build passes. Commit.

### Task 4: Variant A — Drafting Room
- [ ] Header/Footer/Home/Experience/Achievements/Recognition/Skills/Contact per spec.
- [ ] Build passes; visual check in Chrome (1440/834/390). Commit.

### Task 5: Variant B — Executive Ledger
- [ ] Same set per spec. Build + visual check. Commit.

### Task 6: Variant C — Marine Foam
- [ ] Same set per spec, gradient hero and bands, contrast check. Build + visual check. Commit.

### Task 7: QA and deploy
- [ ] All routes × 3 variants opened; console clean; no overflow; keyboard/menu; reduced motion.
- [ ] Final visual refinement pass. README updated.
- [ ] Push branch; `vercel` preview deploy; report URLs.
