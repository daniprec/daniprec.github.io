---
title: "Thresholding methods in non-intrusive load monitoring"
collection: papers
permalink: /publication/2023-04-01-nilm-thresholding
excerpt: 'Non-Intrusive Load Monitoring (NILM) aims to predict the status or consumption of domestic appliances in a household only by knowing the aggregated power load.'
date: 2023-04-01
venue: 'The Journal of Supercomputing (Q2)'
paperurl: 'https://doi.org/10.1007/s11227-023-05149-8'
featured_image: "https://media.springernature.com/full/springer-static/image/art%3A10.1007%2Fs11227-023-05149-8/MediaObjects/11227_2023_5149_Fig3_HTML.png"
---
Non-intrusive load monitoring (NILM) is the problem of predicting the status or consumption of individual domestic appliances only from the knowledge of the aggregated power load. NILM is often formulated as a classification (ON/OFF) problem for each device. However, the training datasets gathered by smart meters do not contain these labels, but only the electric consumption at every time interval. This paper addresses a fundamental methodological problem in how a NILM problem is posed, namely how the different possible thresholding methods lead to different classification problems. Standard datasets and NILM deep learning models are used to illustrate how the choice of thresholding method affects the output results. Some criteria that should be considered for the choice of such methods are also proposed. Finally, we propose a slight modification to current deep learning models for multi-tasking, i.e. tackling the classification and regression problems simultaneously. Transfer learning between both problems might improve performance on each of them.

[Download paper here]({{ page.paperurl }})

Recommended citation: Precioso, D., & Gómez-Ullate, D. (2023). Thresholding methods in non-intrusive load monitoring. The Journal of Supercomputing.
