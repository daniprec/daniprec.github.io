---
permalink: /
title: "Hi, I'm Daniel"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

Welcome! I'm Daniel Precioso, a Data Scientist with a PhD in Machine Learning and more than <span id="yearsOfExperience">X</span> years of experience turning data into real-world solutions. I focus on applied AI, optimization, and analytics. My projects span healthcare, energy, insurance, and the spaces where science meets decision-making.

My career bridges academic research and industry practice. I've built forecasting tools, decision systems, and machine learning models that don't just work in notebooks: they're used by real teams to solve real problems. As COO of a climate-tech startup, I led our data strategy and secured €93K in competitive funding from [Missions València 2030](https://danielprecioso.com/posts/2023/valencia-grant). Our solution was ranked top by the jury.

Along the way, I've pitched ideas at high-level forums, including the [European Parliament](https://danielprecioso.com/posts/2023/european-parliament/), helping raise visibility and trust in data-driven innovation.

One of the projects I'm proudest of? Building the "Google Maps for the Sea": a weather-optimized routing system for ships that cuts fuel use and reduces GHG emissions, without retrofitting a single vessel.

I also teach. At the university, I mentor students in programming and AI literacy, and experiment with new tools like [ChatGPT](https://danielprecioso.com/posts/2024/chatgpt-bam) to help learners think more clearly, not just code faster.

If you're interested in data-driven decision-making, applied AI, or collaborations at the edge of science and society, feel free to explore my [papers](https://danielprecioso.com/papers/) and [posts](https://danielprecioso.com/posts/). Let's build something useful!

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
