---
permalink: /
title: "Hi, I'm Daniel"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

Welcome to my website! I am Daniel Precioso, Ph.D. in Data Science. I have over <span id="yearsOfExperience">X</span> years of experience in machine learning and Python. My journey has taken me through both academic research and industry roles, where I participated in projects related to healthcare, energy, and logistics. My main skills include problem-solving, automating tasks and simplifying complex ideas.

I am enthusiastic about working with others, mentoring team members, and exchanging ideas. One of my most exciting projects was creating the "Google Maps of the Sea", which utilized mathematical optimization and weather data to minimize GHG emissions from shipping routes. I had the honor of [presenting this work to the European Parliament](https://danielprecioso.com/posts/2023/european-parliament/)! Additionally, I love teaching at the university, where I bring the latest technologies to my students, such as using [prompt engineering](https://danielprecioso.com/posts/2024/chatgpt-bam) to teach programming.

Thank you for taking the time to read my profile smile I encourage you to take a look at my [papers](https://danielprecioso.com/papers/) and [posts](https://danielprecioso.com/posts/) to know about the projects I am enrolled in!

<!-- Add this section to display the three latest news articles horizontally -->
<h2>Latest News</h2>
<div class="latest-news-container">
  {% for post in site.posts limit:3 %}
    <div class="news-item">
      <a href="{{ post.url }}">
        <img src="{{ post.featured_image }}" alt="{{ post.title }}" style="max-width: 100%; height: auto;">
        <h3>{{ post.title }}</h3>
      </a>
    </div>
  {% endfor %}
</div>
