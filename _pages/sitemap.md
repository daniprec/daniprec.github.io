---
layout: archive
title: "Sitemap"
permalink: /sitemap/
description: "Find Daniel Precioso's projects, publications, teaching and writing."
---
<h2>Explore</h2>
<ul>{% for link in site.data.navigation.main %}<li><a href="{{ link.url }}">{{ link.title }}</a></li>{% endfor %}</ul>
{% for collection in site.collections %}
{% if collection.output %}
<h2>{{ collection.label | capitalize }}</h2>
<ul>{% for entry in collection.docs reversed %}<li><a href="{{ entry.url }}">{{ entry.title }}</a></li>{% endfor %}</ul>
{% endif %}
{% endfor %}
