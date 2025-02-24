---
layout: default
title: Home
---

<main class="main-content">
  <section class="about-section">
    <h2>About Me</h2>
    <p>Hi, my name is Stephen. I live in Dublin, Ireland. I am currently working as a software engineer at Kreoh.</p>
    <p>Previously I worked as a software engineer at AWS and studied Computer Science at University College Dublin and Dublin City University.</p>
    <p>I am interested in software engineering and AI.</p>
    <div class="links-container">
      {% for link in site.data.social_media %}
        <a
          href="{{ link.link }}"
          class="link-item"
          target="_blank"
        >
          <i class="fab fa-{{ link.icon }}"></i>
        </a>
      {% endfor %}
    </div>
  </section>
</main>