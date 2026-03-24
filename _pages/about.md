---
permalink: /
title: "Hi, I'm Daniel"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I'm Daniel Precioso, a data scientist with a PhD in machine learning and more than <span id="yearsOfExperience">X</span> years of experience across academia and industry.

I work on predictive models, optimization, and decision support systems for sectors including healthcare, logistics, energy, and climate. My focus is on building technically sound solutions and communicating results clearly to both technical and non-technical audiences.

At Canonical Green, a climate-tech startup, I contributed to maritime route optimization and helped secure €93K in competitive funding from [Missions València 2030](https://danielprecioso.com/posts/2023/valencia-grant), with our project ranked top by the jury. I also presented this work at the [European Parliament](https://danielprecioso.com/posts/2023/european-parliament/).

One project I worked on extensively: a weather-optimized routing system for ships that reduces fuel use and GHG emissions without modifying vessels. The system uses real-time weather data and graph-based optimization to compute efficient routes at sea.

I also teach. I deliver courses in programming, data analysis, and AI at university level, and have explored tools like [ChatGPT in the classroom](https://danielprecioso.com/posts/2024/chatgpt-bam) to support student learning.

Explore my [papers](https://danielprecioso.com/papers/) and [posts](https://danielprecioso.com/posts/), or get in touch if you work on applied data problems in the areas I cover.

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
