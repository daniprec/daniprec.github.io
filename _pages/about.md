---
permalink: /
title: "Hi, I'm Daniel"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

Welcome to my website! I am Daniel Precioso, a highly experienced and passionate Ph.D. data scientist. My current research revolves around utilizing data science to achieve sustainable development goals and promote ecological transitions. With a degree in Physics, I bring a unique perspective to my work that enables me to develop innovative solutions to complex problems.

Throughout my [<span id="yearsOfExperience">X</span>+ years of career](https://danielprecioso.com/cv/) on industry, I have gained extensive experience in analyzing and interpreting data, implementing machine learning algorithms, and creating models that help organizations optimize their operations and make informed decisions.

As a data scientist, I am passionate about using my skills and expertise to make a positive impact on society. I believe that data science has the potential to transform the world for the better, and I am dedicated to exploring new ways to leverage this technology for the greater good.

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
