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

Throughout my over 4 years of career on industry, I have gained extensive experience in analyzing and interpreting data, implementing machine learning algorithms, and creating models that help organizations optimize their operations and make informed decisions.

As a data scientist, I am passionate about using my skills and expertise to make a positive impact on society. I believe that data science has the potential to transform the world for the better, and I am dedicated to exploring new ways to leverage this technology for the greater good.

Thank you for taking the time to read my profile smile I encourage you to take a look at my [papers](https://daniprec.github.io/papers/) and [posts](https://daniprec.github.io/posts/) to know about the projects I am enrolled in!

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

<style>
  /* Adjusts the layout of the news container */
  .latest-news-container {
    display: flex;
    justify-content: space-between; /* Space evenly between items */
  }

  /* Style specifications for each news item */
  .news-item {
    text-align: center;
    max-width: 30%; /* Adjust the maximum width as needed */
    position: relative; /* Create a relative positioning context */
    overflow: hidden; /* Ensure nothing spills out of the box */
  }

  /* Styles for the image of the news item */
  .news-item img {
    width: 100%;
    display: block; /* Removes any gaps below the image */
    object-fit: cover; /* Crop the image to fit the container */
    border-radius: 10px; /* Add rounded borders */
    transition: transform 0.3s; /* Smooth zoom on hover for a more interactive effect */
  }

  /* Add a zoom effect when hovering over the news item */
  .news-item:hover img {
    transform: scale(1.05); /* Slight zoom effect on hover */
  }

  /* Center the title over the image */
  .news-item h3 {
    position: absolute;
    bottom: 0; /* Position the title at the bottom of the image */
    width: 100%; /* Use the full width of the parent */
    background-color: rgba(0, 0, 255, 0.6); /* Blue background with 60% opacity for readability */
    color: white; /* Text color set to white for visibility against the blue */
    padding: 10px 0; /* Padding at top and bottom */
    margin: 0; /* Remove any default margins */
    border-radius: 0 0 10px 10px; /* Rounded borders only at the bottom of the title */
    text-align: center; /* Center align the text */
  }
</style>

Education
----

- PhD in Data Science, "Applications of Machine Learning and Data Science to the Blue Economy: Sustainable Fishing and Weather Routing" done under the supervision of [David Gómez-Ullate](https://orcid.org/0000-0002-6890-6584). [University of Cádiz](https://www.uca.es/), Spain.

- MSc in Data Science. [Universidad Politécnica de Madrid](https://www.upm.es/), Spain.

- Bachelor's Degree in Physics. [University Complutense of Madrid](https://www.ucm.es/), Spain.

Related websites
----

- [Canonical Green](https://canonicalgreen.com) is the start-up I'm part of, along with my co-founders David Gómez-Ullate and Javier Jiménez.

- [Green Navigation](https://greenavigation.com) is the eco-friendly Google Maps of the sea! We are developing this tool in Canonical Green to help with the decarbonization of the shipping industry.

- [GOAL](https://tic259.uca.es/) (Graphical Methods, Optimization, and Learning) is the research group at UCA I am currently member of.

- [UCA Datalab](http://datalab.uca.es/) is a small all-in-one team from UCA - described as "the swiss knife of data science projects" - which I am very proud to be part of. I am also the admin their website!
