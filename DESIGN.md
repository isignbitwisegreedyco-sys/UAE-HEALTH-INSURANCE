---
name: Swasthya Shuraksha
description: A comparison-led way to weigh illustrative UAE health-cover profiles.
colors:
  ink: "#211d39"
  ink-soft: "#58556f"
  violet: "#584ee8"
  violet-deep: "#30286d"
  violet-mid: "#40389a"
  paper: "#f6f5fa"
  white: "#ffffff"
  line: "#dedce8"
  lime: "#d6f36a"
  orange: "#f0a36d"
  blue: "#aab8f6"
typography:
  display:
    fontFamily: 'Inter, "Segoe UI", "Helvetica Neue", Arial, sans-serif'
    fontSize: "clamp(48px, 6vw, 76px)"
    fontWeight: 780
    lineHeight: 0.99
    letterSpacing: "-0.075em"
  headline:
    fontFamily: 'Inter, "Segoe UI", "Helvetica Neue", Arial, sans-serif'
    fontSize: "clamp(36px, 4.5vw, 56px)"
    fontWeight: 770
    lineHeight: 1.01
    letterSpacing: "-0.065em"
  title:
    fontFamily: 'Inter, "Segoe UI", "Helvetica Neue", Arial, sans-serif'
    fontSize: "23px"
    fontWeight: 770
    lineHeight: 1.15
    letterSpacing: "-0.05em"
  body:
    fontFamily: 'Inter, "Segoe UI", "Helvetica Neue", Arial, sans-serif'
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: 'Inter, "Segoe UI", "Helvetica Neue", Arial, sans-serif'
    fontSize: "9px"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.13em"
rounded:
  field: "3px"
  control: "5px"
  circle: "50%"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.control}"
    padding: "0 17px"
    height: "45px"
  button-primary-hover:
    backgroundColor: "{colors.violet-deep}"
    textColor: "{colors.white}"
    rounded: "{rounded.control}"
  button-bright:
    backgroundColor: "{colors.lime}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "0 17px"
    height: "45px"
  quote-console:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    padding: "27px 30px 25px"
  choice-card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    padding: "10px 12px"
  select:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "0 40px 0 13px"
    height: "47px"
---

# Design System: Swasthya Shuraksha

## Overview

**Creative North Star: "Swasthya Shuraksha Comparison Exchange"**

Swasthya Shuraksha makes side-by-side differences the first thing shoppers can understand. Its Indian-language-inspired name means "health protection." The interface treats comparison as a clear ledger: crisp, tightly tracked sans-serif type; fine rules; numbered scale marks; and hard-edged rows. The first view pairs “Health cover, weighed against what matters.” directly with a plainly labeled sample comparison board, so the visual promise is to compare questions and lenses—not to present invented plans.

Ink violet anchors a bright periwinkle, signal lime, and saffron palette on cool paper. The board and its scale-mark motif bring a sense of weighing into the page without borrowing another marketplace's identity. The comparison builder carries that visual grammar into a three-step local demo; the underlying prototype has no live insurer, policy, premium, eligibility, or quote-service data.

**Key Characteristics:**
- Put comparison structure before promotional claims: visible columns, row labels, and clear sample markers.
- Use violet for hierarchy and active states; lime and saffron distinguish emphasis and sample profiles.
- Prefer ledger rules, crisp edges, and offset shadows to soft, rounded card stacks.
- Keep the illustrative-data boundary visible wherever profiles or the local demo brief appear.

## Colors

The palette sets deep ink violet against cool paper, with bright periwinkle for active comparison signals and lime, saffron, and pale blue for distinct highlights.

### Primary
- **Ink Violet** (`{colors.violet-deep}`): The hero and FAQ bands, strong headings, and high-contrast accent text.
- **Bright Periwinkle** (`{colors.violet}`): Interactive emphasis, selected states, board marks, and section numbering.

### Secondary
- **Signal Lime** (`{colors.lime}`): Hero emphasis, sample tags, numbered markers, and small points of attention against violet.
- **Mid Violet** (`{colors.violet-mid}`): Supporting violet depth where the palette needs another level.

### Tertiary
- **Saffron** (`{colors.orange}`): A distinct profile/ledger marker, not a general surface or success color.
- **Pale Periwinkle** (`{colors.blue}`): A quieter comparison marker that remains distinct from the vivid active violet.

### Neutral
- **Deep Ink** (`{colors.ink}`): Default text and dark primary actions.
- **Soft Ink** (`{colors.ink-soft}`): Supporting copy, hints, and secondary information.
- **Cool Paper** (`{colors.paper}`): The main page canvas.
- **White** (`{colors.white}`): Form and profile surfaces.
- **Ledger Line** (`{colors.line}`): Fine dividers and control borders.

### Named Rules
**The Comparison-Signal Rule.** Use violet to organize and activate; reserve lime, saffron, and pale periwinkle for separate comparison signals rather than blending them into a generic accent wash.

## Typography

- **Display Font:** Inter, with Segoe UI, Helvetica Neue, Arial, and sans-serif fallbacks.
- **Body Font:** Inter, with Segoe UI, Helvetica Neue, Arial, and sans-serif fallbacks.
- **Label/Mono Font:** The same sans-serif stack; no separate mono face is used.

**Character:** Heavy, compact headlines make the comparison proposition immediate. Supporting copy is quieter and more open; small uppercase labels, coordinates, and row headings give the board its ledger-like precision.

### Hierarchy
- **Display** (weight 780, responsive 48–76px, line-height 0.99): The hero statement; its final phrase is accented in lime.
- **Headline** (weight 770, responsive 36–56px, line-height 1.01): Section headings and major explanatory statements.
- **Title** (weight 770, 23px, line-height 1.15): Quote-flow step headings.
- **Body** (weight 400, 15px, line-height 1.55): Default text; supporting paragraphs adjust size and line-height by context.
- **Label** (weight 800, 9px, letter-spacing 0.13em, uppercase): The comparison-board identifier and similarly compact metadata.

### Named Rules
**The Ledger-Label Rule.** Keep compact labels small, weighty, and letter-spaced; reserve display scale for the shopper-facing message and the comparison headline.

## Layout

The wide first view uses a two-column hero: explanatory copy beside a three-profile comparison board. The board remains a four-column grid (row label plus three lenses) with horizontal rules and stable column meaning. Content sections use centered, viewport-responsive gutters, with a narrower comparison guide, process, and FAQ alignment than the hero and quote builder.

At 1050px and below, the hero and board columns tighten. At 860px and below, the hero stacks, the quote console and comparison aside stack, and guide/how-it-works/FAQ sections become single-column. Navigation changes to a toggle-controlled dropdown. At 600px and below, gutters, type, and control spacing tighten; profile rows place their actions beneath their details. The three-step progress indicator remains horizontal.

The generated comparison table sits in a horizontally scrollable region with a 500px minimum table width and labeled row/column headers. This preserves the comparison structure on narrow screens rather than squeezing away column meaning. The initial board itself keeps its four columns at phone widths, with narrower type and row spacing.

The quote console moves through three panels—household and emirate, age and comparison priority, then sample profiles—using native required-field validation. Priority selects the demo ordering; household, emirate, age, and priority are echoed into the on-page brief. Up to three sample profiles can be compared. Reduced-motion preferences disable smooth scrolling and reduce transition and animation durations.

## Elevation & Depth

Depth is graphic and restrained: offset, hard-edged shadows make the tilted sample board and white quote console read like ledger sheets. Most other surfaces use contrast, borders, and inset selected-state outlines rather than soft elevation. Small halos mark the active step and console indicator.

### Shadow Vocabulary
- **Comparison-board offset** (`13px 15px 0 rgb(18 14 54 / 22%)`): The hero board's firm, offset separation; it tightens on mobile.
- **Quote-console offset** (`8px 8px 0 #e7e4f0`): A subtle sheet-like lift for the discovery console; reduced on mobile.
- **Active-step halo** (`0 0 0 4px #e8e6ff`): Marks the current progress stop.
- **Console-indicator halo** (`0 0 0 4px #ebe9ff`): Separates the small active indicator from its surface.

### Named Rules
**The Ledger-Sheet Rule.** Keep shadows hard-edged and secondary; use ruled borders and selected-state outlines for most hierarchy.

## Shapes

The form language is deliberately crisp: the hero board, profile rows, quote console, and comparison results use square corners; common buttons have a restrained 5px radius, selects use a tighter 3px radius, and circular geometry is reserved for small marks and progress indicators. Thin, straight rules carry the ledger metaphor. Selected controls use a violet border and inset outline rather than a pill or large glow.

## Components

### Buttons
- **Shape:** Crisp rectangles with a small corner radius (5px); the navigation toggle alone is circular.
- **Primary:** Deep-ink fill with white text, 45px minimum height, and 17px horizontal padding; hover changes to deep violet and lifts slightly.
- **Bright CTA:** Signal-lime fill with ink text for the hero action.
- **Quiet / outline:** Transparent text action or a fine outlined comparison action; disabled actions reduce opacity and use a not-allowed cursor.
- **Focus:** Keyboard focus uses a visible 3px olive-lime outline with 3px offset.

### Chips
- **Style:** Summary values use pale violet fills and dark violet text; sample labels use lime or pale violet fills. Profile tags are compact, square, and lightly outlined.
- **State:** Lens choices use bordered rectangular controls; selected choices switch to a violet border and pale violet fill.

### Cards / Containers
- **Quote console:** White, square-cornered, finely bordered, with generous desktop padding (27px 30px 25px) and a hard-offset shadow.
- **Choice cards:** White rectangular household options with a fine ledger border; selection adds a violet border, pale violet fill, and inset outline.
- **Profile rows:** Full-width white ledger rows with letter markers, sample labels, topic tags, and distinct “Use this lens” and “Compare” actions. Selection adds a violet inset outline.
- **Comparison result:** A pale, ruled table container. Its caption identifies the content as sample comparison prompts, and the table labels its columns and comparison rows.

### Inputs / Fields
- **Style:** Native select controls use white backgrounds, ink text, fine muted-violet borders, a tight corner, and a custom chevron. Household and priority choices are native radio inputs represented as rectangular cards or outlined text choices.
- **Focus:** A visible 3px olive-lime outline with 3px offset also appears on the visible representation of visually hidden radio inputs.
- **Validation:** Required controls use native validity reporting before advancing. Placeholder text is muted; selected values stay ink-colored.

### Navigation
- **Desktop:** A light header carries the Swasthya Shuraksha wordmark, text links, and a thin-outlined rectangular CTA.
- **Mobile:** At 860px and below, the links move into a full-width dropdown controlled by a circular menu button with an exposed expanded state; choosing a link closes it.
- **Brand mark:** A custom scale glyph and tightly tracked lowercase wordmark reinforce the comparison motif.

### Comparison Board and Quote Flow
- **Hero board:** A labeled, sample-tagged four-column comparison ledger places three lenses beside row topics. A tilted sheet, scale stamp, coordinate label, and thin rules make the comparison the first visible proof of the interface.
- **Quote flow:** Three numbered progress stops lead through household/emirate, age/priority, and options. Progress remains horizontal on small screens; headings receive focus when the step changes.
- **Profile comparison:** The sample profiles can be individually selected as a lens or toggled into a side-by-side view. The comparison action becomes available after at least two profiles are selected; the generated table compares lens, first detail to check, and what to always review.
- **Demo brief:** Submission is local and on-page. Confirmation text explicitly states that no quote request was sent; the choices are not submitted or saved to a server.

### Ledger Sections and FAQ
- **Guide rows:** Numbered comparison topics are separated by straight rules; on small screens, explanatory copy moves below the topic title.
- **FAQ:** Native disclosure rows use thin dividers and a lime plus/minus marker with visible keyboard focus.

## Do's and Don'ts

### Do:
- **Do** make comparison structure legible before decorative treatment: preserve row labels, column headings, and divider rules.
- **Do** use the CSS palette tokens for violet hierarchy, lime emphasis, saffron and pale-blue profile distinctions, and neutral surfaces.
- **Do** retain visible keyboard focus, native validation, accessible table labels, and reduced-motion behavior.
- **Do** identify the profiles and comparison table as samples, and keep the local-only nature of the brief clear.
- **Do** let the hero comparison board keep its columns; on narrow screens, keep the generated table labeled and horizontally scrollable.

### Don't:
- **Don't** represent sample profiles or comparison prompts as live plans, benefits, premiums, provider ratings, savings, eligibility, or advice.
- **Don't** describe the demo brief as a real quote request or imply that choices leave the page.
- **Don't** collect contact or medical details in this flow.
- **Don't** copy another marketplace's name, branding, copy, or proprietary assets.
