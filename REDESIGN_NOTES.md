# Redesign notes (branch redesign-industry-2026)

Not deployed. Review locally with `bundle exec jekyll serve`.

## What changed
- Homepage (`_layouts/home.html`, `_data/home.yml`): hero, three strengths as circles with evidence and example panels, three case study previews, career map, news, creative work, contact.
- Case studies at their existing URLs: `/portfolio/tun-ai/`, `/portfolio/green-navigation/`, `/portfolio/climate-risk-insurance/` (`_layouts/case-study.html`).
- Career map (`_data/career.yml`, `_includes/home/career-map.html`). Content is a readable list without JavaScript.
- Experience page with three views (`_data/experience.yml`, `_pages/cv.html`). Without JavaScript all entries show.
- Design system in `_sass/_site.scss`. Fonts (Fraunces, Public Sans, OFL) are self-hosted in `assets/fonts/site/`.
- JavaScript in `assets/js/site/site.js`. No new dependencies.
- Both CV PDFs rebuilt from `cv/*.tex` to match the site.
- No URLs were removed. `/about/` still redirects to `/`.

## Claims that depend on your statements (24 Nov 2026)
Co-founder, board member, CTO; you lead the temperature and air quality package alone; Tun-AI split (dashboard 100%, data 100%, models about 20%); Boluda pilot was a simulation you ran; NeoCam head and body boxes; routing idea proposed by D. Gómez-Ullate and developed together.

## Open questions (kept out of public pages)
See the final message of the session.

## Not touched
`_posts/2020-04-16-covid.md` and `images/2020-06-01-covid.jpg` changed on disk during the work. They are not part of this branch's commit.
