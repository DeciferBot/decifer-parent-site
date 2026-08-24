# Marketing overhaul, 23 to 24 August 2026

Branch: `claude/decifer-marketing-overhaul-2d419f`. Plain-English record of what changed, why, and what still needs Amit.

## The problem in one line

The old site looked like the 2024 AI-agency template: dark navy, dot grid, orange glow, italic serif headline, a bracketed label above all thirteen sections, glowing cards, no imagery, no faces, no logos. Good copy, wrong clothes. The competitor scan confirms it: 8 of 14 rivals use the same dark-glow hero.

## What changed

### Positioning (from docs/COMPETITOR_ANALYSIS.md)

Two claims nobody else in the UAE makes are now the spine of the home page:

1. You own every account and the repository at handover. No competitor says this.
2. We run three public products on the same method we sell. Only one firm worldwide in the scan (Brainforge, Austin) does this.

"Where AI does not belong, written down and tested" is the third, and it has its own orange section.

### Design (see DESIGN.md and PRODUCT.md)

- Light theme. White page, near-black text, one orange. Orange carries two whole sections per page (the rule, the CTA band) instead of being a glow.
- One typeface, Schibsted Grotesk, a newspaper grotesk. Weight does the hierarchy. Instrument Serif and DM Sans removed.
- No section eyebrows, no 01/02/03 markers, no cards except where a screenshot needs a frame. Services, work and articles are ruled rows.
- Real imagery: screenshots of the three live products (`public/products/*.webp`, captured 23 August 2026), tool marks from the simple-icons set, and a founder photo slot.
- Home page cut from 13 sections to 10: hero, proof strip, services, work, the rule, products, tools, founder, FAQ, CTA. Problem, method, principles and the duplicate doctrine block moved to /about or were cut.
- The hero visual is an example agent scope sheet and action log, built in HTML and labelled as an example. It shows the two things every agent engagement delivers.
- Wordmark is now `Decifer` (title case) to match the three product sites. The mark itself is unchanged.
- New OpenGraph image in the same system, with the brand font loaded.

### Copy

- H1: "AI that does a job inside your business." The old tagline ("not AI that demos well") was the rebuttal pattern that reads as AI-written; it is gone from headings.
- "Tested on our own money" removed everywhere. The trading system is a paper account; that line was a risk.
- Buttons say what happens: "Book a 30-minute call", "Send the enquiry", "Open Markets".
- Scan of all site copy for em dashes, buzzwords, "licensed", "guarantee": clean. Legal pages untouched, as agreed until the UAE licence exists.

### Code

- `src/app/globals.css` rewritten. Custom classes sit in `@layer components` so Tailwind utilities can override them.
- New components: `SectionHead`, `ProductFrame`, `LogoRow`, `Arrow`, `ScopeSheet`, `WorkSection`, `RuleSection`. `ServiceCard`, `CaseShapeCard`, `PostCard` now export rows. `ProductCard`, `AccentCard`, `MethodSteps` and six home sections deleted.
- `services.ts` gained `engagementShort`. FAQ trimmed to seven questions.
- Lint errors in `EnquiryForm` (setState in effect, component created in render) fixed.
- `simple-icons` added as a dependency.
- `npm run build` passes. Typecheck and lint pass.

## Revision, 24 August

Amit rejected the bold single-colour headline look. The site moved to the "control room" direction: grey ground, white panels with instrument labels, Source Serif 4 headings at medium weight, a dark "Systems we run" board in the hero, and a "Choosing an AI partner in Dubai" comparison table. Repo and commit counts were taken off the public site at his request. The stack copy says expertise, not partnership. The agent scope sheet moved to the AI agents service page.

## What still needs Amit

1. Founder photo. Drop a portrait at `public/founder/amit-chopra.jpg` (about 640 by 800). The block renders it automatically; without it there is no placeholder face.
2. Partner programmes that are open now and cheap: Vercel Partner, Supabase Partner, Anthropic Claude Partner Network (Registered tier). Details and links in docs/COMPETITOR_ANALYSIS.md section 3. Do not add a badge to the site until the listing exists.
3. Dubai AI Seal (free) and a printed licence number are the local trust marks buyers look for. Both wait on the UAE registration.
4. The four case shapes in `caseShapes.ts` are still marked DRAFT pending your line-by-line sign-off. They are now more visible, including an "After:" line on the home page.
5. Resend env bug from the last session still stands: Vercel has `Resend_API_Key`, code reads `RESEND_API_KEY`. No email sends until it is renamed in the Vercel dashboard.
6. `NEXT_PUBLIC_BOOKING_URL` is still unset, so the contact page says "send the form and we will offer times by email".
7. Open a pull request from this branch and check the Vercel preview on a phone before merging.
8. A WhatsApp business number. UAE buyers use WhatsApp; the site should carry a WhatsApp contact link with a stated reply time. Not added yet because there is no number to link.
9. Permission from two clients to show their logos. Even two real logos changes how big the firm reads.
10. A 90-second video of you walking through a live system, for the home page. Cheapest trust builder available.

## Verified

- Home, services, service detail, work, case detail, about, products, stack, contact, blog, article and a legal page screenshotted at 1440 and 1024 wide, and home at 375 wide. No horizontal overflow at 375.
- Mobile menu opens, locks scroll, closes.
- OpenGraph image renders with the brand font.
- Production build, typecheck and lint pass.
