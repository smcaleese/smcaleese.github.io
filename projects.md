---
layout: default
title: Projects
permalink: /projects/
---

<section class="page-shell projects-page">
  <header class="section-header page-heading">
    <h1>Projects</h1>
  </header>

  <div class="work-list project-work-list">
    {% for project in site.data.projects %}
      <article class="work-row project-row">
        <a class="project-shot" href="{{ project.github }}" target="_blank" rel="noopener noreferrer" aria-label="Open {{ project.title }} on GitHub">
          <img src="{{ project.image }}" alt="{{ project.title }} screenshot">
        </a>

        <div class="work-copy">
          <h2>{{ project.title }}</h2>
          <p>{{ project.description }}</p>
        </div>

        {% if project.github %}
          <a class="row-link" href="{{ project.github }}" target="_blank" rel="noopener noreferrer">GitHub</a>
        {% endif %}
      </article>
    {% endfor %}
  </div>
</section>
