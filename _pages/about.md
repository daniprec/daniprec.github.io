---
permalink: /
title: "Hi, I'm Daniel"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I'm Daniel Precioso, a data scientist, researcher, and teacher. I hold a PhD in machine learning and have <span id="yearsOfExperience">7</span>+ years of experience across academia and industry.

## Applied work

I work on predictive models, optimization, and decision support systems. My projects span healthcare, logistics, energy, maritime transport, and climate risk. I like working across domains and tend to get up to speed quickly. The technical foundations transfer well, and learning the context of a new problem is usually the most interesting part.

## Communication and design

Communication and design run through most of what I do. I have presented research to specialists at the [ICMS Climate Change and Insurance workshop in Edinburgh](https://danielprecioso.com/posts/2025/edinburgh), pitched in front of a [funding jury in Valencia](https://danielprecioso.com/posts/2023/valencia-grant) that ranked our project first, spoken at the [European Parliament](https://danielprecioso.com/posts/2023/european-parliament/), and been invited onto [The Conversation Weekly](https://danielprecioso.com/posts/2025/the-conversation) podcast to discuss maritime decarbonization for a general audience. I also design talks, web content, and project materials to make technical work easier to understand.

## Teaching

Teaching is one of the parts of my job I am most invested in. At IE University I deliver courses in computer programming, time series analysis, and applied mathematics. My students awarded me a [Teaching Excellence Award](https://danielprecioso.com/posts/2025/teaching-excellence-award) in 2025, which I'm genuinely proud of.

## Current research

My research focuses on weather routing for ships and climate risk modeling for insurance. I co-founded [Canonical Green](https://canonicalgreen.com), a climate-tech startup developing maritime routing software, and currently own and deliver Phase 1 (climate and mortality) of a climate impact modeling project for the insurance sector at [IE University](https://www.ie.edu/ieresearchdatalab/), with results presented regularly to Vienna Insurance Group.

Browse my [projects](/portfolio/), [papers](/papers/), [posts](/posts/), and [creative work](/creative-work/), or get in touch if you would like to collaborate on an applied data or modeling problem.

<h2>Selected Work</h2>
<div class="selected-work-grid">
  <a class="selected-work-card" href="/portfolio/green-navigation/">
    <img src="/images/2025-01-01-hadad.jpg" alt="Visualization of a weather-optimized maritime route" loading="lazy">
    <span class="selected-work-body">
      <strong>Weather Routing</strong>
      <span>Optimization methods for safer, lower-emission shipping routes.</span>
    </span>
  </a>
  <a class="selected-work-card" href="/portfolio/climate-risk-insurance/">
    <img src="/images/2025-07-10-vig-sign.jpg" alt="Climate risk collaboration with Vienna Insurance Group" loading="lazy">
    <span class="selected-work-body">
      <strong>Climate Risk</strong>
      <span>Climate-adjusted mortality models and decision support for insurance.</span>
    </span>
  </a>
  <a class="selected-work-card" href="/creative-work/">
    <img src="https://img.youtube.com/vi/QCDRiB7Nfos/hqdefault.jpg" alt="Still from El Ruido del Silencio" loading="lazy">
    <span class="selected-work-body">
      <strong>Creative Work</strong>
      <span>Short films and playful interactive experiments.</span>
    </span>
  </a>
</div>

<!-- Add this section to display the three latest news articles horizontally -->
<h2>Latest News</h2>
<div class="latest-news-container">
  {% for post in site.posts limit:3 %}
    <div class="news-item">
      <a href="{{ post.url }}">
        <img src="{{ post.featured_image }}" alt="{{ post.title }}">
        <h3>{{ post.title }}</h3>
      </a>
    </div>
  {% endfor %}
</div>

<style>
  .selected-work-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 18px;
    margin: 18px 0 30px;
  }
  .selected-work-card {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-radius: 6px;
    background: #f7f7f7;
    color: inherit;
    text-decoration: none;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  .selected-work-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 7px 18px rgba(0, 0, 0, 0.14);
    text-decoration: none;
  }
  .selected-work-card img {
    display: block;
    width: 100%;
    aspect-ratio: 16 / 10;
    object-fit: cover;
  }
  .selected-work-body {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 6px;
    padding: 15px;
    font-size: 0.88em;
  }
  .selected-work-body strong {
    color: #007bff;
    font-size: 1.08em;
  }
  @media (max-width: 760px) {
    .selected-work-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
