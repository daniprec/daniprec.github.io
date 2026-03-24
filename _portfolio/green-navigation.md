---
title: "Green Navigation: Weather-Optimized Shipping Routes"
collection: portfolio
permalink: /portfolio/green-navigation/
date: 2022-09-01
excerpt: "Mathematical optimization of maritime shipping routes using real-time weather and ocean data; developed HADAD, an algorithm achieving up to 27% fuel savings in extreme weather."
category: Maritime
tags: [optimization, weather routing, maritime, A-star, variational methods, decarbonization]
paperurl: "https://doi.org/10.1016/j.oceaneng.2024.120050"
featured_image: "https://danielprecioso.com/images/2025-01-01-hadad.jpg"
---

Maritime transport accounts for more than 80% of global trade. Weather routing, the practice of choosing ship routes that account for ocean currents, wind, and waves, can reduce fuel consumption and emissions without requiring changes to vessels or fuels. The challenge is to do this rigorously, at scale, and in real time.

As part of the Green Navigation project, funded by Fundación BBVA and the Spanish Ministry of Science and developed in collaboration with Navantia, I developed HADAD (Hexagonal A-Star with Differential Algorithm Designed for weather routing). HADAD combines a global search on a hexagonal grid with a local variational refinement step that fine-tunes the route in continuous space using a Newton-Jacobi method. The hexagonal grid improves directional flexibility compared to standard rectangular graph searches, and the local refinement step adds 4% in fuel savings on average over a pure graph search, reaching 27% savings in extreme weather conditions.

I also contributed to a hybrid global-local search method for Zermelo's navigation problem, extending an existing algorithm to support more complex vector fields and obstacle avoidance.

To support reproducible benchmarking in this field, the project released Weather Routing Bench 1.0, the first open benchmark for maritime weather routing. The work led to publications in Ocean Engineering and Computational and Applied Mathematics.

[Read the HADAD paper]({{ page.paperurl }})
