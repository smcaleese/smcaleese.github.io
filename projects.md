---
layout: default
title: Projects
---
<div class="projects-header">
  <h1>My Projects</h1>
</div>

<div class="projects-list">
  {% for project in site.data.projects %}
    <div class="project-item">
      <div class="project-container">
        <div class="project-image">
          <img src="{{ project.image }}" alt="{{ project.title }}">
        </div>
        <div class="project-details">
          <h2 class="project-title">{{ project.title }}</h2>
          <div class="project-description">
            {{ project.description }}
          </div>
          {% if project.github %}
            <a href="{{ project.github }}" class="project-github" target="_blank">
              <i class="fab fa-github"></i> GitHub
            </a>
          {% endif %}
        </div>
      </div>
    </div>
  {% endfor %}
</div> 