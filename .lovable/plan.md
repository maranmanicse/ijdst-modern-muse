# V2 Theme Rollout Plan — static-html/

Goal: unify the entire `static-html/` site under the v2 visual language already established in `home-v2.html` and `archive-v2.html`, without restructuring navigation, header/footer link sets, or page logic.

---

## Step 1 — Create shared design layer

**New file:** `static-html/css/theme-v2.css`

Contains all shared tokens + base component styles so every page can include one stylesheet instead of duplicating CSS:

- **Fonts:** Fraunces (display/headings), Plus Jakarta Sans (body/UI), JetBrains Mono (code, metadata)
- **Color tokens** (CSS variables):
  - `--primary: #0B5ED7`, `--primary-600: #0a52bf`, `--primary-50: #eff5ff`
  - `--accent: #F59E0B` (amber)
  - `--ink: #0F172A`, `--ink-2: #334155`, `--muted: #64748B`
  - `--surface: #F8FAFC`, `--border: #E2E8F0`, `--card: #ffffff`
  - Semantic: `--success #16A34A`, `--warning #F59E0B`, `--danger #DC2626`, `--info #0EA5E9`
- **Radii:** `--r-sm 8px`, `--r 14px`, `--r-lg 22px`, `--r-pill 999px`
- **Shadows:** `--shadow-soft`, `--shadow-lift`, `--shadow-pop`
- **Base utilities + components:**
  - `.topbar` (utility strip: ISSN, email, author/board login chips)
  - `.site-header` + `.brand` + `.brand-mark` + `.main-nav` + `.nav-cta`
  - `.site-footer` (4-col grid, dark `#0F172A`, indexing strip)
  - `.btn`, `.btn-primary`, `.btn-outline`, `.btn-ghost`
  - `.card`, `.pill`, `.chip`, `.badge` (semantic variants)
  - `.input`, `.select`, `.textarea` (12px radius, focus ring `rgba(11,94,215,.25)`)
  - `.table-v2` (zebra rows, sticky header)
  - `.crumbs` (breadcrumbs)
  - `.whatsapp-fixed`, `.news-banner` (kept globally)
  - `.section`, `.container-x`, headings (Fraunces sizes h1–h4)
- Google Fonts `<link>` snippet documented at top of file for copy into each page `<head>`

---

## Step 2 — Standardize header + footer across all pages

Apply the v2 two-row header (topbar utility row + main nav row with `IJ` brand mark + Submit CTA) and the v2 dark 4-column footer to every page below. Nav link set stays identical to today — only markup classes and visual treatment change.

Pages updated (header + footer + theme-v2.css include + font links):
- `index.html`
- `archive.html` *(or redirect to `archive-v2.html` — see Step 4)*
- `current-issue.html`
- `editorial-board.html`
- `special-issues.html`, `special-issue-detail.html`
- `call-for-paper.html`, `submission.html`, `join-board.html`
- `contact.html`
- `publication-ethics.html`, `refund-cancellation-policy.html`
- `author-login.html`, `author-forgot-password.html`, `author-reset-password.html`
- `board-login.html`, `board-certificate.html`
- `author-dashboard.html`, `board-dashboard.html` (header only; sidebar kept)
- `404.html`

Mobile accordion menu behavior preserved.

---

## Step 3 — Migrate `index.html` to v2 home pattern

Replace existing hero with v2 **welcome strip** (intro text + deadline card + quick-links column), then image slider below. Restyle "About / Scope / Indexing / Editorial highlights / Latest issue" sections using new `.card` + Fraunces headings. Keep all existing content, just rewrap in v2 components.

---

## Step 4 — Adopt `archive-v2.html` as the canonical archive

Replace `archive.html` contents with the `archive-v2.html` layout (volume → issue cards, sticky filter bar, year rail, search). Keep the existing Select2 filter logic if still required, but rendered inside the v2 controls bar. URL `archive.html` keeps working.

---

## Step 5 — Sweep remaining pages with v2 component classes

Page-by-page light pass (content untouched, only classes + spacing):

| Page | Key adjustments |
|---|---|
| `current-issue.html` | Article rows → `.card` with 14px radius, JetBrains Mono for DOI/pages, amber `.badge` for "Open Access" |
| `editorial-board.html` | Member cards: rounded avatar, Fraunces name, amber role pill, country chip |
| `special-issues.html` | Grid of `.card` with pill status badges (Open / Closing Soon / Closed) |
| `special-issue-detail.html` | Hero summary card + topics pill list + guest-editor cards |
| `call-for-paper.html` | Two-column layout, deadline `.card` accent border, scope as pill list |
| `submission.html` | Stepper + form fields in v2 `.input` style, primary submit button |
| `join-board.html` | Application form in v2 inputs + benefits `.card` grid |
| `contact.html` | Contact `.card` (email/hours) + map block + form |
| `publication-ethics.html`, `refund-cancellation-policy.html` | Fraunces h1/h2, generous line-height, side TOC `.crumbs` style |
| `author-login.html`, `author-forgot-password.html`, `author-reset-password.html`, `board-login.html` | 22px-radius centered auth card, brand mark on top, primary button |
| `author-dashboard.html`, `board-dashboard.html` | Stat cards restyled, sidebar in `--surface`, table → `.table-v2` |
| `board-certificate.html` | Certificate frame with amber accent border, Fraunces title |
| `404.html` | Oversized Fraunces "404", v2 buttons |

---

## Step 6 — Admin layout pass (optional but recommended)

`static-html/admin/*.html` and `admin/css/admin.css`: align admin shell to v2 tokens (same primary blue, surface, card radius, table style, DataTable wrapper). Keep admin sidebar structure as-is.

---

## What is intentionally NOT changing

- Navigation link set, page URLs, file names (except optional archive consolidation)
- Header/footer structural sections (only restyled, per project memory)
- Banner images stay absent everywhere (per project memory)
- Fixed WhatsApp button + conditional news banner remain global
- IJDST identity, ISSN 2456-8503, content copy
- React app under `src/` — untouched

---

## Technical notes

- All pages keep Tailwind CDN; `theme-v2.css` is loaded **after** Tailwind so tokens win
- Tailwind config block in each page extended once with `primary: #0B5ED7`, `accent: #F59E0B`, `fontFamily.display: ['Fraunces']`, `fontFamily.sans: ['Plus Jakarta Sans']`
- Google Fonts preconnect + single combined `<link>` (Fraunces + Plus Jakarta Sans + JetBrains Mono) added once per page
- No JS framework added — Vanilla JS + existing libraries (Select2, Lucide, DataTables) retained
- `archive-v2.html` content moves into `archive.html`; `archive-v2.html` becomes a 1-line redirect or is deleted

---

## Suggested execution order if you want it staged

1. **Now:** Step 1 + Step 2 → instantly unifies ~80% of the visible surface
2. **Next:** Step 3 (home) + Step 4 (archive)
3. **Then:** Step 5 page sweep
4. **Last:** Step 6 admin alignment

Reply with which steps to ship first (default: 1 + 2 together) and I'll start.
