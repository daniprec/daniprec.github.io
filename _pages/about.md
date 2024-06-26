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

Throughout my over <span id="yearsOfExperience">X</span> years of career on industry, I have gained extensive experience in analyzing and interpreting data, implementing machine learning algorithms, and creating models that help organizations optimize their operations and make informed decisions.

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

Experience
----

<details open>
    <summary>Chief Operations Officer (COO), Canonical Green [Apr 2023 - Present]</summary>
    <i>Madrid, Spain</i>
    <p>At Canonical Green, we offer data science-based solutions for the ecological transition of the Industry 4.0. My role in this company consists of:</p>
    <ul>
        <li>Leading the implementation of innovative AI solutions that enhance the operational efficiency of our clients.</li>
        <li>Designing, developing, and implementing machine learning models and mathematical optimization to improve the competitiveness of our processes.</li>
        <li>Conducting commercial and technical presentations to generate interest in our products as well as to secure funding.</li>
    </ul>
</details>

<details>
    <summary>Postdoctoral Researcher & Adjunct Professor, IE University [Sep 2023 - Present]</summary>
    <i>Madrid and Segovia, Spain</i>
    <p>Professor of "Computer Programming I" with Python (1st-year course) in the Bachelor's Degree in Applied Mathematics.</p>
    <ul>
        <li>Specialize in teaching students from the ground up.</li>
        <li>Create custom exercises tailored for mathematical applications.</li>
    </ul>
</details>

<details>
    <summary>Data Scientist, Komorebi AI [Sep 2022 - Apr 2023]</summary>
    <i>Madrid, Spain</i>
    <ul>
        <li>Data cleaning, manipulation and visualization.</li>
        <li>Design, train and deployment of machine learning and deep learning models with scikit-learn, including GB and CNN.</li>
        <li>Development of a dashboard to guide industrial decision making with Streamlit.</li>
    </ul>
</details>

<details>
    <summary>Predoctoral Research Staff, University of Cádiz [Sep 2019 - Aug 2022]</summary>
   <i>Cádiz, Spain</i>
    <ul>
        <li>Collaboration with various industrial partners to conduct cutting-edge research in healthcare, energy and blue economy.</li>
        <li>Presentation of research findings to both technical and non-technical audiences.</li>
        <li>Publication of research papers in peer-reviewed journals.</li>
    </ul>
</details>

<details>
    <summary>Junior Data Scientist, Foqum [Jan 2019 - Jun 2019]</summary>
    <i>Madrid, Spain</i>
</details>

Education
----

- PhD in Data Science, "Applications of Machine Learning and Data Science to the Blue Economy: Sustainable Fishing and Weather Routing" done under the supervision of [David Gómez-Ullate](https://orcid.org/0000-0002-6890-6584). [University of Cádiz](https://www.uca.es/), Spain.

- MSc in Data Science. [Universidad Politécnica de Madrid](https://www.upm.es/), Spain.

- Bachelor's Degree in Physics. [University Complutense of Madrid](https://www.ucm.es/), Spain.

Related websites
----

- [Canonical Green](https://canonicalgreen.com) is the start-up I'm part of, along with my co-founders David Gómez-Ullate and Javier Jiménez.

- [Green Navigation](https://greenavigation.com) is the eco-friendly Google Maps of the sea! We are developing this tool in Canonical Green to help with the decarbonization of the shipping industry.

<!-- [GOAL](https://tic259.uca.es/) (Graphical Methods, Optimization, and Learning) is the research group at UCA I am currently member of. -->

<!-- [UCA Datalab](http://datalab.uca.es/) is a small all-in-one team from UCA - described as "the swiss knife of data science projects" - which I am very proud to be part of. I am also the admin their website! -->
