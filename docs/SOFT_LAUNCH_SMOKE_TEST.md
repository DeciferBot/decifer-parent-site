# DECIFER Soft-Launch Smoke Test

> Run this checklist before sharing the live URL. Last updated: 2026-05-24.
>
> Test on the production domain: **https://www.decifer.io**
> Do not test on Vercel preview URLs for final sign-off.

---

## Prerequisites

- [ ] `RESEND_API_KEY` added to Vercel Environment Variables (Production + Preview).
- [ ] Open Vercel Dashboard > decifer-parent-site > Functions in a separate tab to monitor logs during the form tests.

---

## 1. Desktop Chrome

- [ ] Load `https://www.decifer.io`. Page renders without console errors.
- [ ] Hero section visible with correct headline: "Make sense of complex worlds."
- [ ] "Early Access Open" badge visible in the hero.
- [ ] No JavaScript errors in DevTools console.
- [ ] Page background is dark (canvas `#060b18`). Text is legible.

## 2. Mobile Safari (iPhone)

- [ ] Load `https://www.decifer.io` on iPhone Safari.
- [ ] Page renders correctly. No horizontal overflow or clipped text.
- [ ] Hamburger menu opens and closes cleanly.
- [ ] All nav links in the hamburger menu are tappable.
- [ ] "Join Early Access" CTA in hamburger menu scrolls to the form.
- [ ] Select dropdown in the early-access form shows a visible dropdown arrow.
- [ ] Form inputs are full-width and readable at default font size.

---

## 3. Navigation links

Test each nav link. On desktop, click; on mobile, open hamburger then click.

| Link | Target | Expected |
|---|---|---|
| Products | `#products` | Scrolls to the Decifer Trading / Decifer Learning cards |
| How It Works | `#method` | Scrolls to The DECIFER Approach (3-step section) |
| Trust | `#trust` | Scrolls to the "We set clear limits" section |
| Join Early Access | `#early-access` | Scrolls to the form section |
| DECIFER logo | `/` | Returns to homepage top |

- [ ] All five links above work correctly.
- [ ] No 404 pages triggered by nav.
- [ ] Confirm there is no "Pricing" link in the nav (it was removed).

---

## 4. Early-access form — success path

- [ ] Scroll to the Early Access section.
- [ ] Fill in: Name, Email (your own), Interest (select any option).
- [ ] Optionally fill in the "Anything else?" message.
- [ ] Click "Request Early Access".
- [ ] Button shows "Submitting..." while in flight.
- [ ] Success state appears: green checkmark, "You're on the list." message.
- [ ] Check Vercel Function logs: a `[DECIFER Early Access]` line appears with name, email, interest, message, and timestamp.
- [ ] Check `hello@decifer.io` inbox: notification email received with correct details.

---

## 5. Early-access form — failure path

Test client-side validation by submitting the form incomplete.

- [ ] Submit with all fields empty. Three error messages appear (Name, Email, Interest).
- [ ] Submit with an invalid email (e.g., `notanemail`). Email error message appears.
- [ ] Submit with only Name filled. Email and Interest errors appear.
- [ ] Form does not reach the API for any of the above — error messages clear on correction.

Test server-side failure (optional, requires DevTools):

- [ ] Open DevTools > Network. Block the request to `/api/early-access`. Submit a valid form. Error message appears: "Something went wrong. Please try again or email hello@decifer.io." The user is not shown a success state.

---

## 6. Legal page links

From the footer, click each legal link and confirm:

- [ ] Privacy Policy (`/legal/privacy`) — loads, "Early Access Draft" notice visible.
- [ ] Terms of Use (`/legal/terms`) — loads, "Early Access Draft" notice visible.
- [ ] Financial Disclaimer (`/legal/financial-disclaimer`) — loads, explicit "not financial, investment, or trading advice" statement visible at top.
- [ ] Education Disclaimer (`/legal/education-disclaimer`) — loads, explicit "does not replace teachers, schools, tutors, or parental judgement" statement visible at top.
- [ ] AI Accuracy and Source Policy (`/legal/ai-policy`) — loads.
- [ ] Child Safety Policy (`/legal/child-safety`) — loads.
- [ ] Refund Policy (`/legal/refunds`) — loads.
- [ ] "Back to DECIFER" link on each legal page returns to the homepage.
- [ ] "Other policies" list on each legal page links to the other 6 policies correctly.

---

## 7. Footer links

- [ ] Products section: "Decifer Trading" opens `https://decifertrading.com` in a new tab.
- [ ] Products section: "Decifer Learning" opens `https://deciferlearning.com` in a new tab.
- [ ] Products section: "Decifer Money", "Decifer World", "Decifer Work" are shown as plain text (not links).
- [ ] Company section: all anchor links scroll to correct sections.
- [ ] Legal section: all 7 legal page links load correctly.
- [ ] Footer copyright reads: "2026 DECIFER. All rights reserved."
- [ ] Footer disclaimer reads: "DECIFER provides intelligence, not financial advice."

---

## 8. Apex redirect

- [ ] Load `http://decifer.io` (no www). Confirm redirect to `https://www.decifer.io/`.
- [ ] Load `https://decifer.io`. Confirm redirect to `https://www.decifer.io/`.
- [ ] Final URL after redirect is `https://www.decifer.io/`. No redirect loop.

---

## 9. Vercel Function log confirmation

After completing step 4 (success path):

- [ ] In Vercel Dashboard > decifer-parent-site > Functions > `/api/early-access`, the log line reads:
  ```
  [DECIFER Early Access] { name: '...', email: '...', interest: '...', message: '...', timestamp: '...' }
  ```
- [ ] No unhandled error lines present in the log for this invocation.

---

## 10. Email received (when RESEND_API_KEY is configured)

- [ ] Notification email received at `hello@decifer.io`.
- [ ] Subject line: `Early Access Request: [Name] ([Interest])`.
- [ ] Body contains all 5 fields: Name, Email, Interest, Message, Time.
- [ ] No Resend error lines in Vercel Function logs.

---

## Sign-off

| Check | Passed | Notes |
|---|---|---|
| Desktop Chrome render | | |
| Mobile Safari render | | |
| Nav links | | |
| Form success path | | |
| Form failure path | | |
| Legal pages | | |
| Footer links | | |
| Apex redirect | | |
| Vercel log confirmed | | |
| Email received | | |

**Sign-off date:** _______________

**Tested by:** _______________

**Verdict:** GO / HOLD

---

> Legal counsel review is still pending. All legal pages carry an "Early Access Draft" notice. This is acceptable for a controlled soft-launch. Do not represent the legal pages as finalised until legal review is complete.
