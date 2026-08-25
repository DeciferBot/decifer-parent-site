# Content accuracy audit, 2026-08-25

Method: every external factual claim in the 12 blog posts and the tools copy
was checked against primary sources by four independent research passes. All
corrections below are applied in the same commit as this file.

## Verified accurate (primary source on file)

- **Veracode 45%**: "45% of code samples failed security tests and introduced
  OWASP Top 10 security vulnerabilities" (100+ LLMs, 80 tasks, 4 languages).
  Source: https://www.veracode.com/resources/analyst-reports/2025-genai-code-security-report/
- **Gartner 40%**: "Over 40% of agentic AI projects will be canceled by the
  end of 2027, due to escalating costs, unclear business value or inadequate
  risk controls." Press release, June 25, 2025.
  https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027
- **Deloitte refund**: Deloitte Australia repaid ~A$97,000 (final instalment)
  of a A$440,000 report to the Department of Employment and Workplace
  Relations, October 2025, after AI-fabricated citations and a fabricated
  court quote were found. "Partial refund" is exactly right.
  https://www.cfodive.com/news/deloitte-refunds-60k-report-ai-errors-australian-government-accounting/803321/
- **Dubai programme numbers**: 295,000 companies / two years / 100
  specialised AI assistants / 50 agentic AI companies, all match the WAM and
  Dubai Media Office wording. Dubai Chamber delivery (training tracks,
  incubators, funds) confirmed in the May 4 Media Office release.
  https://www.mediaoffice.ae/en/news/2026/may/04-05/hamdan-bin-mohammed-launches-dubai-private-sector-shift-to-agentic-ai-within-two-years
- **No application process yet** (as of 2026-08-25): confirmed; only
  developments since June are the Dubai Chambers Executive Committee for
  Agentic AI and the Nasscom MoU (Aug 19).
  https://www.thenationalnews.com/business/2026/08/19/dubai-accelerates-india-deal-to-adopt-agentic-ai-in-private-sector/

## Corrections applied

1. **Misattribution (the one real error)**: the "revising code over several
   rounds made it worse" finding was credited to Veracode. It is actually
   Shukla, Joshi & Syed, arXiv:2506.11022 (IEEE ISTAS 2025): critical
   vulnerabilities +37.6% after five iterations. Split into its own sentence
   with the correct link (vibe-safe-to-launch post).
2. **"Approved" vs "reviewed"**: the Higher Committee *reviewed* the agentic
   AI executive plan on June 11; the programme was *launched* May 4 by Sheikh
   Hamdan. Dubai post and myths post reworded; primary links added.
3. **Gartner reasons**: "mostly over cost and unclear value" dropped
   Gartner's third co-equal reason. Now cites all three, with link.
4. **Deloitte named**: the anonymous "major consultancy" is now named with
   date, amount and link (stronger, still accurate).
5. **Overstatements softened**: "every forum" → "wherever they compare
   notes"; "the most asked question" → "among the most asked"; "most agent
   projects" → "many/so many"; "every extra second" → "extra seconds";
   "most common serious hole" → "most common serious hole *we find*";
   "abused within minutes" now attributed to researchers' planted-key tests.
6. **Consistency**: "thirteen of its last sixteen runs" now identical in all
   four files that tell the story. Decision-rule wording in the
   agent-vs-automation article aligned with the interactive tool (tidy-inputs
   condition added to question 1).
7. **Calculator edge**: all-zero input now gets a sensible verdict.

## For Amit to confirm (internal claims, one pass)

These appear across the posts and only you can vouch for them: 9,000 tests
in the largest system; 42-question evaluation suite; eight-case price
regression suite; scheduler wiped three times + watchdog; 13-of-16 failed
runs / three weeks; the four incidents list; "removed AI five times" and the
five cases; three named products and their human-approval points; "we run
three of our own"; symbolic maths + grammar engines in Learning; the
two-week fixed-fee assessment promise (every post); "named person within one
working day" (contact page, CTA band, llms.txt); "we usually decline
headcount-removal projects".

## Standing maintenance

- "Five months" of paper-account runtime (myths, production-ready posts)
  decays monthly. Reword to a dated form or update on edit.
- The Dubai post promises updates "as the details land". Re-check Dubai
  Chamber announcements when touching the site, or monthly.
