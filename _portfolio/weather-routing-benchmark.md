---
title: "Weather Routing Benchmark"
collection: portfolio
permalink: /portfolio/weather-routing-benchmark/
date: 2026-06-01
excerpt: "The first open benchmark for maritime weather routing, created by IE University and RISE (Research Institutes of Sweden). Its first edition ran with the SWOPP3 workshop."
category: Maritime
featured_image: "https://danielprecioso.com/images/2026-06-02-goteborg.jpeg"
tags: [benchmark, weather routing, optimization, open science]
---

Every group that works on weather routing tests its algorithms on its own data. That makes it very hard to say which method is better. So we build shared test problems.

The [**Weather Routing Benchmark**](https://weatherrouting.org) is the first open benchmark for maritime weather routing. It is a joint initiative of IE University and RISE, the Research Institutes of Sweden, with open datasets and a public leaderboard. Our earlier benchmark in the HADAD paper had 1,560 instances over a full year, with different origin-destination pairs, vessel speeds and ocean conditions.

The first edition, launched in 2026 on CodaBench and run with the SWOPP3 workshop, is the **SWOPP3 phase 2 benchmark**. Eight teams took part, with very different methods: graph search, dynamic programming, evolutionary algorithms and variational approaches. I presented the results, and our own method BERS, at the SWOPP3 workshop at RISE/SSPA in Gothenburg. 
Next, I want to turn the benchmark into a standalone tool that the industry can use as a standard, and to add harder cases such as optimization under uncertainty and Arctic routes.

[BERS preprint](https://arxiv.org/abs/2605.31533) (under review at Ocean Engineering)
