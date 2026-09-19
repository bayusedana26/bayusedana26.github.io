# DESIGN SYSTEM — Bayu Sedana Personal Profile

## Design Direction

**Editorial Technology Professional**

Not:
- AI startup landing page
- developer-template portfolio
- cyberpunk
- glassmorphism
- SaaS dashboard clone

The site should look like a serious professional's digital profile.

---

## 1. Layout

Use a 12-column desktop grid.

Max content width:
`1200–1280px`

Desktop side padding:
`32–48px`

Mobile side padding:
`20–24px`

Section spacing:
`96–144px desktop`
`64–88px mobile`

Use strong vertical rhythm.

---

## 2. Typography

Recommended:
- Primary: Inter / Geist Sans
- Optional display: same family, heavier weight

Hierarchy:

H1:
`clamp(3rem, 6vw, 5.5rem)`

H2:
`clamp(2rem, 4vw, 3.5rem)`

H3:
`1.25–1.5rem`

Body:
`1rem–1.125rem`

Small metadata:
`0.75–0.875rem`

Use typography, not decorative graphics, as the main visual identity.

---

## 3. Color System

### Light
- Background: `#F7F7F5`
- Surface: `#FFFFFF`
- Text: `#111111`
- Muted: `#666666`
- Border: `#DDDDD8`
- Accent: restrained blue such as `#2457D6`

### Dark
- Background: `#111111`
- Surface: `#181818`
- Text: `#F5F5F2`
- Muted: `#A0A0A0`
- Border: `#2A2A2A`
- Accent: same blue family, slightly adjusted for contrast

Do not use gradients as a core visual system.

---

## 4. Navigation

Desktop:
- logo/name left
- navigation center/right
- ID/EN toggle
- theme toggle
- contact CTA

Keep navigation compact.

Mobile:
- hamburger or compact menu
- language + theme controls remain accessible

Sticky navigation is acceptable if visually subtle.

---

## 5. Hero Composition

Use asymmetrical editorial layout.

Left:
- eyebrow
- large headline
- supporting paragraph
- CTA

Right:
- compact "profile index" / capability summary
- or portrait/photo if a high-quality professional image is supplied

Do NOT force a portrait if there is no suitable photo.

Potential visual element:
```
SOFTWARE
DATA
PRODUCT
MENTORING
```
shown as a quiet vertical index, not giant decorative badges.

---

## 6. Capability Section

Avoid four equal colorful cards.

Instead use a large statement with inline capability labels.

Example structure:

BUILD
Software · Systems · APIs

ANALYZE
SQL · Python · Pandas · EDA

CONNECT
Business · Product · Stakeholders

TEACH
Mentoring · Training · Curriculum

Use typography and thin borders.

---

## 7. Experience Timeline

Use a vertical timeline.

Each item:
- year/date
- organization
- role
- 2–4 concise bullets
- optional client line

Active/current roles can have a subtle indicator.

Do not use giant company logos unless high-quality assets are available.

---

## 8. Project Cards

Use 2-column editorial grid on desktop.

Each card:
- project image/screenshot
- category
- title
- one-line description
- stack
- role

Cards should have moderate corner radius, not extreme pill shapes.

Hover:
- image scale 1.02–1.04
- slight translate/elevation
- metadata remains readable

---

## 9. Certification Design

Prefer a clean list/table-like presentation.

Example:

`2026`
MySkill
Project Management

`2024`
HackerRank
Advanced SQL

This makes the section feel like a professional record rather than a collection of shiny badges.

---

## 10. Gallery

Use editorial masonry.

Mix:
- landscape screenshots
- portrait activity photos
- training photos
- project captures

Each item should have category metadata.

Lightbox:
- keyboard accessible
- close button
- previous/next controls
- caption

---

## 11. Collaboration Section

Make this visually distinct but restrained.

Large statement:

> Open for selected collaborations.

Below:
Software · Data · Product · Consulting · Training

Then:
> NDA-friendly when project confidentiality is required.

CTA button:
`Discuss a Project`

No fake urgency.

---

## 12. Mentoring Section

Use a simple split layout:

Left:
> Technical Mentoring

Right:
- Python
- SQL
- Data Analytics
- EDA
- Portfolio Projects
- System Analysis

CTA:
`Ask About Mentoring`

---

## 13. Footer

Minimal.

Name:
`Bayu Sedana`

Descriptor:
`Software · Data · Product · Mentoring`

Links:
LinkedIn · GitHub · Medium · Email

Language:
ID / EN

Theme:
Light / Dark / System

Copyright year should be generated dynamically.

---

# Motion Specification

Use Motion/Framer Motion only where it improves comprehension.

### Page load
- opacity 0 → 1
- y 8 → 0
- duration 0.35–0.5s

### Section reveal
- subtle once-in-view
- avoid long stagger chains

### Hover
- 150–250ms

### Navigation
- active underline transition

### Gallery
- subtle scale

### Theme
- smooth color transition

### Reduced motion
If:
`prefers-reduced-motion: reduce`

Disable:
- reveal transforms
- large movement
- parallax
- complex stagger
- decorative motion

---

# Component Suggestions

- `Navbar`
- `LanguageToggle`
- `ThemeToggle`
- `Hero`
- `CapabilityIndex`
- `ExperienceTimeline`
- `ProjectGrid`
- `ProjectCard`
- `CertificationList`
- `GalleryGrid`
- `GalleryLightbox`
- `CollaborationCTA`
- `MentoringSection`
- `Footer`

Keep components simple and composable.

---

# Visual Quality Rules

1. One accent color.
2. Strong typography.
3. Real content over decoration.
4. Screenshots over fake graphics.
5. Whitespace over excessive cards.
6. Motion is subtle.
7. No fake metrics.
8. No fake testimonials.
9. No fake client logos.
10. No decorative code blocks unless they communicate something real.

The website should feel like a person with technical depth built it—not like an AI website generator produced a portfolio template.
