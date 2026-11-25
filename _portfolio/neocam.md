---
title: "NeoCam: contactless monitoring of premature babies"
layout: case-study
collection: portfolio
sort_order: 4
permalink: /portfolio/neocam/
date: 2021-01-01
excerpt: "Edge-cloud platform for contactless monitoring of premature infants in neonatal intensive care. Second global prize in the OpenCV AI Competition 2021."
category: Health
tags: [computer vision, edge computing, deep learning, healthcare, OpenCV]
paperurl: "https://doi.org/10.1109/JBHI.2023.3240245"
featured_image: "/images/projects/neocam/neocam-device.png"
period: "2021 prototype and competition. Utility model in 2023. Paper in 2023."
origin: "The OpenCV AI Competition 2021, sponsored by Intel and Microsoft Azure, built around the Luxonis OAK-D camera."
role: "Part of the AI team at UCA Datalab. I built part of the Python library and proposed how to read a baby's movement."
problem: "Doctors watch premature babies closely, but sensors on the skin are a burden and many signs, such as movement, are noted by eye or not at all."
contribution: "I built part of the Python library the device runs. I proposed reading the baby's movement with two bounding boxes, one on the head and one on the body, because pose models made for adults work badly on babies. I helped with breathing from the depth camera. That idea was not mine. The team built the rest."
result: "Second global prize and first prize in Europe, Russia and Australasia among more than 1,400 projects. A proof of concept ran in the neonatal unit of Hospital Puerta del Mar. Paper in IEEE JBHI, 2023."
partners:
  - name: Caleta Team, University of Cádiz
    url: https://imeymat.uca.es/noticia/neocam-de-caleta-team-obtiene-el-segundo-puesto-a-nivel-global-en-la-opencv-ai-competition-2021/
    role: Interdisciplinary team led by Lionel Cervera Gontard (IMEYMAT). It built the device and the platform.
  - name: UCA Datalab
    role: The AI and image analysis group where I worked.
  - name: Hospital Universitario Puerta del Mar
    role: Neonatal specialists who guided the design and hosted the tests.
---

<figure>
  <img src="/images/projects/neocam/neocam-device.png" alt="The NeoCam device on an articulated arm, a white box with an OAK-D camera on top. The text reads: NeoCam by Caleta Team, non-contact tele monitorization of neonates" loading="lazy">
  <figcaption>The NeoCam prototype. Frame from the Caleta Team presentation video.</figcaption>
</figure>

<h2>Who needed the work and why</h2>
<p>Premature babies in intensive care need constant observation. Conventional monitors use sensors attached to the body. Movement and behaviour also carry information, but they are hard to follow all day and are often recorded by eye. The question was whether a camera could measure some of this without touching the baby.</p>

<h2>My role and the collaboration</h2>
<p>NeoCam was built by Caleta Team, a group at the University of Cádiz led by Lionel Cervera Gontard. It combined engineers, computer scientists and the neonatal team at Hospital Puerta del Mar. I worked in the AI part, at UCA Datalab, as one of several people. I am second author of the paper.</p>

<h2>What I contributed</h2>
<table class="cs__facts">
  <tr><th>Python library</th><td>I built a part of the library that runs on the device.</td></tr>
  <tr><th>Movement</th><td>My idea. Pose models made for adults do not fit a newborn's proportions. I proposed two bounding boxes, one for the head and one for the body, and reading the baby's movement from how they shift.</td></tr>
  <tr><th>Breathing</th><td>I helped with estimating breathing from the depth camera. The idea was not mine.</td></tr>
  <tr><th>The rest</th><td>Hardware, cloud platform, mobile app, clinical testing and the other models were done by the team.</td></tr>
</table>

<h2>Challenge and approach</h2>
<p>The analysis runs on the camera itself, an OAK-D that does colour imaging, stereo depth and neural network inference on the device. This keeps latency low and lets the images be anonymised before anything leaves the incubator. The published platform runs several tasks in parallel at 20 to 30 frames per second: breathing rate, movement and an experimental stress indicator. A Raspberry Pi 4 collects the outputs and sends them to a cloud platform and a mobile app.</p>
<figure>
  <img src="/images/projects/neocam/prototype-views.png" alt="Four views of the NeoCam prototype: the OAK-D camera, a 5G antenna, a power plug, the camera turned 90 degrees and a seven inch touchscreen" loading="lazy">
  <figcaption>The prototype: a compact housing with an adjustable OAK-D camera, an antenna and a seven inch touchscreen. Images from the project presentation.</figcaption>
</figure>
<figure>
  <img src="/images/projects/neocam/edge-cloud-architecture.png" alt="NeoCam system diagram linking the camera unit to cloud services and a mobile app" loading="lazy">
  <figcaption>The edge-cloud architecture. Diagram from the project presentation.</figcaption>
</figure>

<h2>What was delivered</h2>
<ul>
  <li>A working prototype with on-device models, a cloud platform and a mobile app.</li>
  <li>A test in the neonatal intensive care unit of Hospital Puerta del Mar in Cádiz.</li>
  <li>A Spanish utility model for the device, granted to the team in 2023.</li>
  <li>A paper in the IEEE Journal of Biomedical and Health Informatics (2023).</li>
</ul>
<figure class="cs__fig--small">
  <img src="/images/projects/neocam/hospital-installation.png" alt="Two stages of hospital testing: a camera connected to a laptop, then the integrated NeoCam unit mounted above an incubator" loading="lazy">
  <figcaption>Testing at Hospital Puerta del Mar. The first camera-and-laptop setup, then the integrated unit. Images from the project presentation.</figcaption>
</figure>

<h2>Results and limits</h2>
<ul>
  <li>The paper reports agreement between video-based breathing estimates and reference methods under suitable lighting and imaging conditions.</li>
  <li>The stress indicator is experimental. It uses a face image classifier trained to tell stress from calm.</li>
  <li>NeoCam is a research prototype. It is not a certified medical device.</li>
  <li>Development continued after my involvement ended.</li>
</ul>

<h2>Evidence and links</h2>
<div class="cs__links">
  <a class="s-btn s-btn--ghost" href="{{ page.paperurl }}">IEEE JBHI paper</a>
  <a class="s-btn s-btn--ghost" href="https://opencv.org/announcing-the-grand-prize-winners-of-opencv-ai-competition-2021/">OpenCV prize announcement</a>
  <a class="s-btn s-btn--ghost" href="https://www.youtube.com/watch?v=cQ-Q-4QGRCo">OpenCV Weekly interview (video)</a>
</div>
