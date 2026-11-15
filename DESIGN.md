---
name: Reuel's Web Services
description: Less admin. More business. A warm, friendly app surface where a busy owner taps the problem slowing them down and sees the real build that fixed it.
colors:
  ground: "#f3f1ec"
  card: "#ffffff"
  surface: "#ebe7df"
  surface-2: "#e2ddd2"
  ink: "#1c1b19"
  ink-2: "#4b4843"
  accent: "#1f5eeb"
  accent-hover: "#184fcc"
  accent-ink: "#ffffff"
  accent-soft: "#e4ecfd"
  danger: "#b4322a"
  field-bg: "#faf9f6"
  field-line: "#d9d3c7"
  field-line-hover: "#bdb6a8"
  placeholder: "#8b867d"
typography:
  display:
    fontFamily: "Figtree Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 7vw, 6rem)"
    fontWeight: 650
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Figtree Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 4.4vw, 3.75rem)"
    fontWeight: 650
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Figtree Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 2.2vw, 2rem)"
    fontWeight: 650
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  card-title:
    fontFamily: "Figtree Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "20px"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.015em"
  lede:
    fontFamily: "Figtree Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 1.7vw, 1.4rem)"
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: "-0.005em"
  body:
    fontFamily: "Figtree Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Figtree Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 500
    lineHeight: 1.4
  button:
    fontFamily: "Figtree Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 650
rounded:
  card: "28px"
  problem: "24px"
  shot: "20px"
  inner: "18px"
  field: "14px"
  mark: "12px"
  screen: "10px"
  pill: "999px"
spacing:
  gutter: "clamp(16px, 4vw, 48px)"
  section-gap: "clamp(104px, 12vw, 176px)"
  grid-tight: "12px"
  grid: "16px"
  card-pad: "32px"
  card-pad-lg: "48px"
  frame: "1280px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0 26px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
  button-quiet:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0 26px"
    height: "52px"
  button-quiet-hover:
    backgroundColor: "{colors.surface}"
  button-soft:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0 26px"
    height: "52px"
  button-soft-hover:
    backgroundColor: "{colors.surface-2}"
  card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "{spacing.card-pad}"
  problem-card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.problem}"
    padding: "18px 18px 16px"
  problem-go:
    backgroundColor: "{colors.accent-soft}"
    textColor: "{colors.accent}"
    rounded: "{rounded.pill}"
    size: "40px"
  problem-go-hover:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-ink}"
  work-card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "12px"
  media-panel:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.inner}"
    padding: "16px"
  field:
    backgroundColor: "{colors.field-bg}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "14px 16px"
    height: "54px"
  field-focus:
    backgroundColor: "{colors.card}"
  sheet:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    width: "620px"
---

# Design System: Reuel's Web Services

## Overview

**Creative North Star: "The Friendly App"**

The site behaves like a consumer app a busy owner already trusts, not like a developer studio and not like a template agency hero. Warm light stone is the ground; content lives on white cards with large, soft corners that float on it with no border and no resting shadow. Real screens of real builds sit on tinted stone panels inside those cards, so the work is the picture and nothing decorative competes with it.

One saturated blue does one job: it marks what you can do. Primary buttons, the arrow discs on tappable cards, the RWS mark, focus rings, selection and the caret. Headings, panels, backgrounds and emphasis never take it. Type is one friendly humanist sans, Figtree, set heavy and tight for headlines and generous for reading, at sizes that suit a non-technical reader on a phone (body 18px, nothing interactive below 16px).

The page reads as a sequence of big, touchable objects: the problem picker grid, the fix sheet that slides in, the work bento, the two service columns, the about cards, the budget card, the form. Motion is short and physical: content rises in once, pressed things give slightly, the sheet slides on a drawer curve. Everything still works with no JS and with reduced motion.

**Key Characteristics:**
- Warm stone ground, white borderless cards, tinted panels for screens.
- One blue, only on actions.
- One typeface (Figtree Variable), heavy tight headlines, 18px body.
- Large soft corners everywhere; pill-shaped buttons.
- Flat at rest; shadow only on the overlay sheet.
- Real screenshots or clearly labelled demo fragments; never invented proof.

## Colors

A warm, low-chroma stone family carries every surface; a single saturated blue is the only colour with something to say.

### Primary
- **Action Blue** (`accent`): every primary button ("Start a project", "Fix mine", "Send message"), the filled state of the arrow disc on a hovered problem card, the RWS mark tile, the 3px focus outline, text selection and the text caret.
- **Pressed Blue** (`accent-hover`): hover state of primary buttons on fine pointers only.
- **Blue Wash** (`accent-soft`): the resting arrow disc on problem cards and work cards, a quiet signal that the whole card is tappable.
- **On Blue** (`accent-ink`): text and icons on Action Blue.

### Neutral
- **Warm Stone** (`ground`): page background, the scrolled header bar, the mobile menu, the browser `theme-color`.
- **Card White** (`card`): cards, the fix sheet, quiet buttons, a focused field.
- **Tinted Panel** (`surface`): panels that hold screenshots inside cards and sheets, problem-card thumbnails, soft buttons, the hover of quiet buttons.
- **Deeper Panel** (`surface-2`): hover of soft buttons.
- **Warm Ink** (`ink`): headings and body text.
- **Second Ink** (`ink-2`): supporting copy, card hints, inactive nav links, form helper text, "See the fix".
- **Field Paper / Field Line / Field Line Hover / Placeholder** (`field-bg`, `field-line`, `field-line-hover`, `placeholder`): the form fields only. These are currently written as literal values in the field rule rather than `@theme` tokens.
- **Error Red** (`danger`): field error border, error messages, the send-failure line.

### Named Rules
**The Blue Means Do Rule.** Blue appears only on something you can press, or on the RWS mark. Never on a heading, a panel, a section background, a highlight word or a statistic. If you can't tap it, it isn't blue.

**The Warm Neutral Rule.** Every neutral is a warm stone, never a cool grey. New neutrals sit between `ground` and `surface-2` or between `ink-2` and `ink`.

## Typography

**Display Font:** Figtree Variable (with ui-sans-serif, system-ui, sans-serif), self-hosted via `@fontsource-variable/figtree`.
**Body Font:** the same family.

**Character:** One friendly, rounded humanist sans does everything. Headlines are heavy (650) and tightly tracked so they read as confident app titles; body is plain and roomy so a non-technical owner reads it without effort.

### Hierarchy
- **Display** (`display`): the hero headline only, "Less admin. More business.", broken across two lines.
- **Headline** (`headline`): section titles ("Recent work", "Website or system?", "The person who answers", "Tell me your budget.", "Start a conversation"), and the large links in the mobile menu.
- **Title** (`title`): the picker question, sheet titles, service column titles, the About pull quote, "Things I built for myself".
- **Card title** (`card-title`): names inside cards (work cards, service items, about facts); problem-card labels step from 18px on phones to 20px.
- **Lede** (`lede`): the one-sentence intro beside or under a headline, capped near 40ch in the hero.
- **Body** (`body`): reading text in sheets, About, forms; long passages cap at 46 to 60ch.
- **Label** (`label`): card hints, nav links, helper and footer text, "See the fix". Never smaller than 16px for anything a visitor reads; 14 to 15px appears only inside labelled demo fragments.

Headings use `text-wrap: balance`, paragraphs `text-wrap: pretty`. Numbers that change or align (the live time, demo figures) use tabular figures.

### Named Rules
**The One Voice Rule.** One family, no second typeface, no monospace, no uppercase tracking labels. Hierarchy comes from size and weight alone.

**The Readable Floor Rule.** Body is 18px and interactive text is 16px minimum. The audience is busy and often on a phone.

## Layout

A centred frame, max 1280px, with a fluid side gutter (`gutter`, 16px on phones to 48px on wide screens). Sections are separated by one large, fluid section gap (`section-gap`, 104 to 176px); there are no rules or bands between them, only stone.

- **Section heads** use a 12-column grid on large screens: headline across about 7 columns, lede across 5, aligned to the bottom. Below `lg` they stack.
- **Hero picker:** a grid of problem cards, 1 column on phones, 2 from 640px, 4 from 1024px, with a 12px gap. Eight problems show; the remaining six sit behind a quiet "Show 6 more problems" button, beside a text link to the form for anything else.
- **Work bento:** 1, 2 then 3 columns with a 16px gap; Luv Chat, the newest and largest build, leads and spans two columns on large screens. A row of three compact horizontal cards follows for own products.
- **Services:** two equal white cards side by side from `md`.
- **About:** a 7/5 split, a large story card beside a stack of three fact cards.
- **Contact:** a 5/7 split, contact buttons and the live time beside the form card.
- **Header:** fixed, 72px tall, transparent at the top and Warm Stone once scrolled. Anchor jumps account for it with an 88px scroll padding.

Card padding is 32px, growing to 48px on larger screens (64px on the budget card at `lg`). Grids between cards use 12 to 16px.

## Elevation & Depth

The page is flat at rest. Depth comes from tone: white cards on warm stone, tinted panels inside white cards, screenshots on those panels. No card, button or field carries a shadow or a border at rest (fields carry one hairline because a real input should look like one).

### Shadow Vocabulary
- **Sheet lift** (`box-shadow: 0 -12px 48px rgb(28 27 25 / 0.18)` on phones, `-12px 0 48px rgb(28 27 25 / 0.18)` on desktop): the fix sheet only, the one true overlay.
- **Sheet scrim** (`rgb(28 27 25 / 0.32)` backdrop): dims the page behind the open sheet.

### Named Rules
**The Flat At Rest Rule.** Only an overlay may cast a shadow. If an element sits in the page flow, separate it by tone, not by shadow or line.

## Shapes

Large, soft, consistent corners. The radius steps down as you go inward, so nested shapes stay concentric:

- Cards and the sheet: `rounded.card` (bottom sheet rounds only its top corners on phones).
- Problem cards: `rounded.problem`.
- Screenshot panel inside a work card: `rounded.shot`; screenshot panels in sheets: `rounded.inner`.
- Fields, problem thumbnails and own-product thumbnails: `rounded.field`.
- The RWS mark tile: `rounded.mark`.
- Screenshots inside panels: `rounded.screen`; phone screenshots round only their top corners (22px) as they rise from the panel.
- Buttons, arrow discs and icon buttons: full pill / circle.

The RWS mark is a 40px Action Blue rounded square with "RWS" in extra-bold Figtree, beside the full name in bold 18px. The footer may close with the full name set very large in Warm Ink.

## Components

### Buttons
Friendly, chunky pills that give slightly under the finger.
- **Shape:** full pill (`rounded.pill`), 52px tall, 26px side padding, 16px weight-650 label, 0.55em icon gap. Compact uses (header CTA, Menu, sheet close, social icons) shrink to 44 to 48px, never below.
- **Primary:** Action Blue with white text. One per view region: the thing we want you to do.
- **Quiet:** Card White with ink text, for secondary actions sitting on Warm Stone ("Show more", WhatsApp/Call/Email, Menu, social icons). Hover goes to Tinted Panel.
- **Soft:** Tinted Panel with ink text, for secondary actions sitting on a white card or sheet ("Keep looking", sheet close). Hover goes to Deeper Panel.
- **Hover / Press:** colour shifts only on fine pointers; a trailing arrow nudges 3px right; `:active` scales to 0.97 in 160ms on the ease-out curve. Disabled is 60% opacity.
- **Focus:** a 3px Action Blue outline offset 3px, shared by every focusable element.

### Problem Cards (signature)
The hero's tappable rows of real problems.
- **Shape:** white, `rounded.problem`, no border, no shadow, 168px minimum height from 640px.
- **Content:** a leading 56 to 64px thumbnail (a real screenshot crop on a Tinted Panel frame, `rounded.field`), the problem in the visitor's words at card-title size, a one-line hint in Second Ink, then "See the fix" with a 40px Blue Wash arrow disc. On phones the disc moves up beside the label and "See the fix" is dropped.
- **States:** on hover the disc fills Action Blue and slides 2px; press scales to 0.97.
- **Behaviour:** opens the fix sheet with the real build, the client it was for, its status, and "Fix mine" (pre-fills the form and scrolls to it) beside "Keep looking".

### Work Cards
- **Shape:** a white card (`rounded.card`) with 12px inner padding; the screenshot sits on a Tinted Panel (`rounded.shot`) at 16:10, then name, one-line headline and a Blue Wash arrow disc.
- **States:** on hover the screenshot panel rises 6px over 500ms; press scales to 0.985.
- **Behaviour:** opens the same sheet with the project story (problem, what was built, result, status, "Made with") and "Start something similar".
- **Own products:** horizontal compact cards, small thumbnail left, an external-link arrow on the name.

### Fix Sheet
- Built on the native `<dialog>`, so focus trap, Escape and focus return come from the browser; a backdrop click closes it.
- **Phones:** a bottom sheet up to 92dvh (max 900px), top corners rounded.
- **Desktop (768px+):** a side panel inset 12px from the right, top and bottom, up to 620px wide, all corners rounded.
- **Motion:** slides in from the bottom (phone) or right (desktop) over 420ms on the drawer curve; the scrim fades over 320ms. Under reduced motion it fades only.
- Close is a 44px circular soft button top right; content scrolls inside.

### Cards / Containers
- **Corner Style:** `rounded.card`.
- **Background:** Card White on Warm Stone.
- **Shadow Strategy:** none (see Flat At Rest).
- **Border:** none.
- **Internal Padding:** 32px, 48px on larger screens.

### Inputs / Fields
- **Style:** 54px minimum height, Field Paper background, 1px Field Line border, `rounded.field`, 18px text, label above in medium weight with "(optional)" in Second Ink.
- **Hover:** border darkens to Field Line Hover.
- **Focus:** border turns Action Blue and the background goes to Card White (the global focus outline is suppressed for fields).
- **Error:** Error Red border plus a 16px message under the field linked by `aria-describedby`; the first invalid field receives focus on submit.
- Sits inside a white card; the submit is a primary button with a one-line privacy note beside it.

### Navigation
- Wordmark left; on desktop, 16px medium links in Second Ink (current section in Warm Ink, tracked by scroll position) and a compact primary "Start a project" pill.
- On phones a quiet "Menu" pill opens a full-screen Warm Stone menu: headline-size links, then a full-width primary "Start a project" and a quiet WhatsApp button.

### Demo Fragments
Where a real screen can't be shown (an app behind company sign-in, a product still in development), a small HTML fragment draws the interface with demo data, carries `data-ui`, an `aria-label` that says "demo data", and a visible "Demo data" line. Fragments keep their own product's palette and shapes inside an `rounded.inner` clip; they are the only place colours outside this palette appear.

### Motion
- **Reveal:** elements marked for reveal rise 24px and fade in once as they enter the viewport (opacity 600ms, transform 800ms, ease-out `cubic-bezier(0.23, 1, 0.32, 1)`), staggered 60ms per index. Images rise 36px from 0.985 scale over 900ms. Anything above the fold after a jump is shown at once.
- **Drift:** a scroll-linked translate (default 40px range) for pictures marked to drift.
- **Press:** buttons 0.97, problem cards 0.97, work cards 0.985.
- **Sheet:** drawer curve `cubic-bezier(0.32, 0.72, 0, 1)`, 420ms.
- **Fallbacks:** hidden start states exist only when JS has run and the visitor allows motion; with reduced motion, drift, press scaling and the sheet slide are removed, and smooth scrolling is off.

## Do's and Don'ts

### Do:
- **Do** keep blue on things you can press: buttons, arrow discs, the RWS mark, focus, selection.
- **Do** put content on white cards with `rounded.card` corners, no border, no shadow, floating on Warm Stone.
- **Do** show real screenshots on Tinted Panel frames inside cards, with corners stepping down inward.
- **Do** label any drawn interface as demo data, visibly and in its accessible name.
- **Do** write headlines that lead with the business outcome, in first person and plain words.
- **Do** keep body at 18px, interactive text at 16px or more, and touch targets at 44px or more.
- **Do** keep motion short, once-only and physical, with no-JS and reduced-motion fallbacks.
- **Do** say "worldwide" where scope matters.

### Don't:
- **Don't** use gradients, glows, glass or blur, or decorative background shapes.
- **Don't** add eyebrow or kicker labels above headings, or uppercase tracked labels.
- **Don't** use emoji as icons; use the line icon set at 20px.
- **Don't** give cards a resting shadow or a border; only the overlay sheet casts a shadow.
- **Don't** use blue on headings, panels, backgrounds or highlighted words.
- **Don't** add a second typeface or a monospace "developer" accent.
- **Don't** frame the business by location: no "built in Jamaica", no country lists or flags.
- **Don't** show prices, discounts or "cheap" positioning.
- **Don't** invent proof: no testimonials, client logos, ratings or statistics beyond what is real.
- **Don't** use em dashes in copy.
