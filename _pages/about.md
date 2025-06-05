---
permalink: /
title: "Hi, I'm Daniel"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

Welcome! I'm Daniel Precioso, a Data Scientist with a PhD in Machine Learning and over <span id="yearsOfExperience">X</span> years of experience turning data into real-world impact. I specialize in applied AI, optimization, and analytics, with projects spanning healthcare, energy, and insurance.

My career bridges academic research and industry, combining rigorous modeling with product-oriented thinking. I've helped industrial teams deploy machine learning models, built tools for decision-making, and designed solutions that translate scientific insight into action. As COO of a climate-tech startup, I led our data strategy and secured €93K in grant funding through a competitive call from [Missions València 2030](https://danielprecioso.com/posts/2023/valencia-grant). Our solution was ranked top by the jury. Alongside this, I represented the project at multiple public events, including a pitch at the [European Parliament](https://danielprecioso.com/posts/2023/european-parliament/), helping build visibility and institutional trust.

One of my proudest contributions was developing a "Google Maps of the Sea": a weather-optimized routing system to reduce GHG emissions in maritime logistics. I'm equally passionate about teaching: as a university professor, I mentor students in programming and AI literacy, and explore how tools like [ChatGPT](https://danielprecioso.com/posts/2024/chatgpt-bam) can enhance learning and critical thinking.

If you're interested in data-driven decision-making, innovation, or applied AI, feel free to explore my [papers](https://danielprecioso.com/papers/) and [posts](https://danielprecioso.com/posts/). I'm always open to new ideas and collaborations.

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
