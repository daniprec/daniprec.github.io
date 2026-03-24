---
permalink: /
title: "Hi, I'm Daniel"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I'm Daniel Precioso, data scientist, researcher, and teacher. I hold a PhD in machine learning and have more than <span id="yearsOfExperience">X</span> years of experience across academia and industry.

I work on predictive models, optimization, and decision support systems. My projects span healthcare, logistics, energy, maritime transport, and climate risk. I like working across domains and tend to get up to speed quickly. The technical foundations transfer well, and learning the context of a new problem is usually the most interesting part.

Communication runs through most of what I do. I have presented research to specialists at the [ICMS Climate Change and Insurance workshop in Edinburgh](https://danielprecioso.com/posts/2025/edinburgh), pitched in front of a [funding jury in Valencia](https://danielprecioso.com/posts/2023/valencia-grant) that ranked our project first, spoken at the [European Parliament](https://danielprecioso.com/posts/2023/european-parliament/), and been invited onto [The Conversation Weekly](https://danielprecioso.com/posts/2025/the-conversation) podcast to talk about maritime decarbonization for a general audience. Explaining things clearly to people with different backgrounds is something I actively work on.

Teaching is one of the parts of my job I am most invested in. At IE University I deliver courses in computer programming, time series analysis, and applied mathematics. My students awarded me a [Teaching Excellence Award](https://danielprecioso.com/posts/2025/teaching-excellence-award) in 2025, which I'm genuinely proud of.

My research focuses on weather routing for ships and climate risk modeling for insurance. I contribute to [Canonical Green](https://canonicalgreen.com), a climate-tech startup developing maritime routing software, and work on climate impact models for the insurance sector at [IE University](https://www.ie.edu/ieresearchdatalab/), with results presented regularly to Vienna Insurance Group.

Browse my [papers](https://danielprecioso.com/papers/) and [posts](https://danielprecioso.com/posts/), or reach out if you work on applied data or modeling problems.

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
