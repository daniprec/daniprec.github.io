---
title: "Weather Routing Bench and SWOPP3"
collection: portfolio
permalink: /portfolio/weather-routing-benchmark/
date: 2026-06-01
excerpt: "Open benchmarks to compare weather-routing methods on the same problems: Weather Routing Bench 1.0 and the SWOPP3 phase 2 benchmark."
category: Maritime
featured_image: "https://danielprecioso.com/images/2026-06-02-goteborg.jpeg"
tags: [benchmark, weather routing, optimization, open science]
---

Every group that works on weather routing tests its algorithms on its own data. That makes it very hard to say which method is better. So we build shared test problems.

**Weather Routing Bench 1.0** was the first open benchmark for maritime weather routing. The benchmark in the HADAD paper has 1,560 instances over a full year, with different origin-destination pairs, vessel speeds and ocean conditions.

In June 2026 I launched the **SWOPP3 phase 2 benchmark** on CodaBench. Eight teams took part, with very different methods: graph search, dynamic programming, evolutionary algorithms and variational approaches. I presented the results, and our own method BERS, at the SWOPP3 workshop at RISE/SSPA in Gothenburg. 
Next, I want to turn the benchmark into a standalone tool that the industry can use as a standard, and to add harder cases such as optimization under uncertainty and Arctic routes.

[BERS preprint](https://arxiv.org/abs/2605.31533) (under review at Ocean Engineering)
