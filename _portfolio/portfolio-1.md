---
title: "Non-Intrusive Load Monitoring"
collection: portfolio
permalink: /portfolio/nilm/
date: 2019-04-01
excerpt: "Data-driven methods for appliance-level electricity monitoring from smart-meter signals, developed during PhD research at UCA Datalab."
category: Energy
tags: [deep learning, energy, time series, smart meters]
paperurl: "https://doi.org/10.1007/s11227-023-05149-8"
featured_image: "https://media.springernature.com/full/springer-static/image/art%3A10.1007%2Fs11227-023-05149-8/MediaObjects/11227_2023_5149_Fig3_HTML.png"
---

Non-Intrusive Load Monitoring (NILM) identifies the activity of individual household appliances using only the aggregated electricity reading from a smart meter. No per-device sensors are needed, making it a scalable approach to energy analytics, demand response, and integration of renewable energy into the grid.

This project addressed a fundamental methodological problem in how NILM models are built: the choice of thresholding method used to convert continuous power readings into ON/OFF appliance states. Different thresholding strategies produce different learning problems, and the choice substantially affects model performance even when the underlying deep learning architecture is the same. We proposed objective criteria for selecting thresholding methods based on signal reconstruction error, and introduced a multi-task learning extension that jointly tackles the classification and regression problems, improving results for several appliance types through transfer learning between the two tasks.

This was the first research project I worked on after joining UCA Datalab at the University of Cádiz to begin my industrial PhD. The work was presented at the Bilbao Data Science Workshop (BCAM, 2019) and IEEE PowerTech Madrid (2021), and published in The Journal of Supercomputing.

[Read the paper]({{ page.paperurl }})
