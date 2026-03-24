# Copilot Repository-Wide Custom Instructions

This repository is the personal academic and portfolio website of Daniel Precioso, a data scientist with a PhD in machine learning. The site presents his professional experience, research publications, teaching work, talks, and news posts. Its audience includes potential employers, academic collaborators, students, and the general public. Content should be credible, technically grounded, and readable without being dry or corporate.

## Who Daniel Is

- Data scientist with a PhD in machine learning and experience across academia and industry since 2018.
- Strong in predictive modeling, optimization, decision support, and applied machine learning.
- Works on weather routing for ships, climate risk modeling for insurance, and related domains.
- Teaches programming, data analysis, and AI at IE University.
- Comfortable presenting to technical and executive audiences.
- Individual contributor with growing exposure to coordination, stakeholder communication, and institutional settings.

## Positioning Rules

When writing or editing any content on this site:

- Position Daniel as a strong individual contributor, not as a team leader or manager.
- Do not imply he leads teams, owns delivery end to end, or drives company strategy unless explicitly stated in source material.
- Prefer verbs: developed, designed, contributed to, collaborated on, implemented, presented, supported, coordinated, worked on.
- Avoid: led, owned, managed, scaled, drove, spearheaded, architected (unless the evidence is explicit and precise).
- Every strong claim must be backed by a project, publication, award, talk, or collaboration.
- Do not imply formal people management experience, production ownership at scale, or deep expertise in LLMs or multimodal systems unless Daniel provides explicit evidence.

When describing specific contributions:
- Avoid filler openers. Do not write "Responsible for" or "Assisted with." Say what was built, designed, or presented.
- Show the result of the work where possible. "Built a dashboard used daily by the team" is stronger than "helped with data visualization."
- Avoid vague obligation language. "Responsible" implies assignment; concrete verbs imply action.

## Writing Style

Write in a way that feels human, natural, and professional.

FOLLOW these rules:
* Use clear, direct language.
* Keep sentences short and sharp.
* Write in active voice.
* Include data, numbers, or concrete examples when possible.
* The output should read clean, concise, and natural, like something a human wrote.
* Before finalizing, review and ensure there are no em dashes.
* Tone should be strong but modest, technical but readable, energetic without being boastful.

DO NOT:
* Use em dashes (only commas, periods, or semicolons are allowed).
* Add filler phrases that connect ideas too loosely.
* Use constructions like "not just X, but Y."
* Use metaphors, analogies, or clichés.
* Make vague or sweeping claims.
* Use phrases like "in conclusion," "to sum up," or "closing."
* Overuse adjectives or adverbs.
* Use hashtags, markdown, or asterisks in prose content.

AVOID these words and phrases:
Elevate, Delve, Hustle and bustle, Revolutionize, Foster, Realm, Remnant, Subsequently, Nestled, Enigma, Whispering, Sights unseen, Sounds unheard, A testament to, Dance, Metamorphosis, Indelible, Leverage, Synergy, Scalable, Optimize, Empower, Innovative, Disruptive, Robust, Seamless, Holistic, Cutting-edge, Next-generation, User-centric, Agile, Dynamic, Frictionless, Scalability, Mission-critical, Thought leadership, Turnkey, Paradigm shift, Game-changer, Ecosystem, Deep dive, Move the needle, Circle back, Actionable insights, Driving impact, Transforming industries, Bridging academia and industry, and other corporate AI buzzwords.

## Accuracy and Credibility

Before writing or editing any content:
* Check that every factual claim (a metric, a result, an award, a presentation venue) is grounded in something Daniel has explicitly provided.
* If a claim cannot be defended with a concrete example, rewrite or remove it.
* Do not upgrade collaboration into leadership.
* Do not infer expertise in a technology or domain that has not been mentioned.
* Prioritize rigorous, academically sound references when citing external sources.
* Ensure cited datasets and links are reliably accessible online.

## Site Structure

- `_pages/about.md`: Homepage bio. Entry point for all visitors. Should explain who Daniel is in 10 seconds.
- `_pages/cv.html`: Timeline of professional and academic experience. Keep entries factual, specific, and linked to evidence.
- `_posts/`: News and updates. Conversational tone. First person. Short and direct.
- `_papers/`: Research publication entries. Include abstract and download link.
- `_teaching/`: Teaching experience entries.
- `_talks/`: Talk and presentation entries.
- Never use enumerations in section titles or headings.

## Local Development

To run the site locally:

1. Make sure you have ruby-dev, bundler, and nodejs installed: `sudo apt install ruby-dev ruby-bundler nodejs`
1. Run `bundle clean` to clean up the directory.
1. Run `bundle install` to install ruby dependencies. If you get errors, delete Gemfile.lock and try again.
   - If you see `cannot load such file -- webrick (LoadError)`, run `bundle add webrick`.
1. Run `bundle exec jekyll liveserve` to serve the site from `localhost:4000`. The server will rebuild and refresh automatically on changes.

