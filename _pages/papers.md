---
description: "Research papers by Daniel Precioso on maritime routing, climate risk, machine learning and healthcare."
layout: archive
title: "Papers"
permalink: /papers/
author_profile: true
---

<p><a href="{{ site.author.googlescholar }}">Google Scholar profile &rarr;</a></p>

{% include base_path %}

{% for post in site.papers reversed %}
  {% include archive-single.html %}
{% endfor %}
