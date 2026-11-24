---
title: "Climate risk for Vienna Insurance Group"
layout: case-study
collection: portfolio
permalink: /portfolio/climate-risk-insurance/
date: 2025-06-01
excerpt: "Climate-adjusted mortality models and a dashboard for life and health insurance, built at IE University with Vienna Insurance Group."
category: Insurance
tags: [climate-risk, insurance, actuarial-modeling, mortality, dashboards, forecasting]
featured_image: "/images/2026-03-01-climate-life-tables.png"
period: "2025 to the present. Phase 1 in 2025/26, phase 2 in 2026/27."
origin: "The VIG-IE Insurance and Tech Lab, set up by Vienna Insurance Group and IE University in July 2025."
role: "Researcher in phase 1. In phase 2 I lead the package on mortality related to temperature and air quality."
partners:
  - name: Vienna Insurance Group
    logo: /images/logos/vig-crop.png
    url: https://group.vig/en/
    role: Client. Brings insurance and actuarial expertise.
  - name: IE University
    url: https://www.ie.edu/school-science-technology/
    role: Hosts the lab and the Climate Change and Insurance conference.
  - name: Heriot-Watt University
    role: Co-author Carmen Boado-Penas, actuarial science.
problem: "Life and health insurers need climate projections expressed as quantities they can test, stress and discuss with decision makers."
contribution: "I build the climate and mortality models, the code, the dashboard and the reports, and I present the results. In phase 2 I lead the temperature and air quality package."
result: "A 2026 open working paper, a dashboard demo, and a VIG board decision in May 2026 to extend the project by one year."
---

<h2>Who needed the work and why</h2>
<p>Vienna Insurance Group (VIG) is a large insurance group in Central and Eastern Europe. Warmer weather affects mortality and health, which changes the assumptions behind life and health products and reserves. VIG and IE University set up the IE Insurance and Tech Lab in July 2025. Its first project is called "Climate Change Effects on Life and Health Insurance".</p>

<h2>My role and the collaboration</h2>
<p>This is an industry contract run as a research project inside my appointment at IE University. VIG is the client. David Gómez-Ullate, Vice Dean at IE University, works with me on the project. Phase 1 ran in 2025/26 and I was a member of the research team. Phase 2 runs in 2026/27, after the VIG board approved it in May 2026.</p>
<p>In phase 2, I lead the package on mortality related to temperature and air quality. I take responsibility for it. I develop the code, the dashboard, the reports and the presentations. I work on it as an individual contributor, with nobody reporting to me.</p>

<h2>What I contributed</h2>
<ul>
  <li>Climate and mortality models that use distributed lag non-linear models and relative risk curves.</li>
  <li>Analysis pipelines that turn climate scenarios into mortality projections by region, age and year.</li>
  <li>An interactive dashboard for exploring scenarios. I demonstrated it at the Climate Change and Insurance workshop in Edinburgh in September 2025.</li>
  <li>Presentations to the VIG steering committee and to the VIG board in Vienna in May 2026.</li>
  <li>A member of the organising committee of the Climate Change and Insurance Conference 2026 at IE University.</li>
</ul>

<h2>Main challenge and approach</h2>
<figure>
  <img src="/images/projects/vig/climate-insurance-framework.png" alt="Four linked stages: climate pathways, temperature-related mortality, climate-adjusted life tables and financial impact" loading="lazy">
  <figcaption>The framework in four steps. From a presentation at the Climate Change and Insurance Collider, September 2026.</figcaption>
</figure>
<p>Insurers already have actuarial methods for life tables. The challenge is to add a temperature effect without breaking those methods, and to be clear about how uncertain it is. Our working paper adds the climate effect as a transparent multiplier on baseline mortality, by age and year, under climate scenarios. Uncertainty from the epidemiological estimates, the climate models and adaptation assumptions is carried through a Monte Carlo simulation to annuities, life insurance values and technical provisions.</p>
<figure>
  <img src="/images/2026-03-01-climate-life-tables.png" alt="Chart of the mortality multiplier by age for heat and cold in Bucharest in 2050, 2075 and 2099" loading="lazy">
  <figcaption>Mortality multiplier by age in the illustrative Bucharest example, for 2050, 2075 and 2099.</figcaption>
</figure>

<h2>The dashboard</h2>
<p>The public dashboard lets people explore temperature data and projections under moderate and high emissions pathways, air quality layers and the mortality multiplier, by place and week. The preview below is still until you press play.</p>
<figure data-gif="/images/projects/vig/dashboard-preview.gif">
  <img src="/images/projects/vig/dashboard-poster.png" alt="Climate dashboard showing temperature related mortality projections for Austria" loading="lazy">
  <figcaption>An excerpt of the dashboard demonstration. <a href="https://dashboard.climateinsure.tech/">Open the live dashboard</a>.</figcaption>
</figure>

<h2>What was delivered</h2>
<ul>
  <li>An open working paper, "Incorporating Temperature-Dependent Mortality into Projected Life Tables" (IE University, 2026). I am the first author, with F. J. Suárez Pedraza, S. Lloyd, C. Boado-Penas and D. Gómez-Ullate.</li>
  <li>A public interactive dashboard, and results presented to VIG's steering committee several times and to its board once.</li>
</ul>

<h2>Results and limits</h2>
<ul>
  <li>The method is shown on one city, Bucharest, as an illustration. It is not a prediction for a portfolio.</li>
  <li>The paper is a working paper. It has not been peer reviewed.</li>
  <li>The board approved a one-year extension. Phase 2 adds air quality and mental health to the temperature work. Those results do not exist yet.</li>
</ul>
<figure>
  <img src="/images/2026-01-28-steering-committee.jpg" alt="Participants of a steering committee meeting of the IE Insurance and Tech Lab with Vienna Insurance Group" loading="lazy">
  <figcaption>Steering committee of the IE Insurance and Tech Lab, January 2026.</figcaption>
</figure>

<h2>Evidence and links</h2>
<div class="cs__links">
  <a class="s-btn s-btn--ghost" href="https://doi.org/10.63537/144174297">Working paper</a>
  <a class="s-btn s-btn--ghost" href="https://dashboard.climateinsure.tech/">Dashboard</a>
  <a class="s-btn s-btn--ghost" href="https://climateinsure.tech/">Project website</a>
  <a class="s-btn s-btn--ghost" href="/posts/2026/vig-vienna-board">VIG board in Vienna</a>
  <a class="s-btn s-btn--ghost" href="/posts/2025/edinburgh">Edinburgh workshop</a>
</div>
