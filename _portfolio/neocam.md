---
title: "NeoCam: Neonatal Monitoring with Edge AI"
collection: portfolio
permalink: /portfolio/neocam/
date: 2021-01-01
excerpt: "Edge-cloud platform for contactless real-time monitoring of premature infants in neonatal ICUs, second global prize in the OpenCV AI Competition 2021."
category: Health
tags: [computer vision, edge computing, deep learning, healthcare, OpenCV]
paperurl: "https://doi.org/10.1109/JBHI.2023.3240245"
featured_image: "https://ieeexplore.ieee.org/ielx7/6221020/10144459/10034792/graphical_abstract/jbhi-gagraphic-3240245.jpg"
---

Premature infants require continuous clinical monitoring, but many relevant indicators, including motor activity, pain response, and breathing rate, are assessed subjectively or not captured at all. NeoCam is an open-source edge-cloud platform that uses a depth-field camera to perform real-time, contactless video analysis directly at the incubator. Most processing runs on the device itself, reducing latency and improving compliance with patient privacy regulations.

The system runs multiple analysis tasks in parallel at 20 to 30 frames per second. I contributed to the AI algorithms responsible for estimating breathing rate, detecting motor activity, and inferring stress indicators from video streams. The complete proof of concept, including a cloud platform and mobile app, was deployed at the Neonatal Intensive Care Unit of Hospital Puerta del Mar in Cádiz.

Developed at UCA Datalab as part of the OpenCV AI Competition 2021, NeoCam won the first regional prize (Europe) and second global prize out of more than 1400 submitted projects. The system was published in the IEEE Journal of Biomedical and Health Informatics (Q1).

[Read the paper]({{ page.paperurl }})
