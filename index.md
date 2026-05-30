---
layout: default
title: Home
---

<section class="home-section about-section page-shell" id="about">
  <header class="section-header">
    <h1>About</h1>
  </header>

  <div class="about-grid">
    <div class="about-copy">
      <p>
        I am currently working as a software engineer at Kreoh. Previously I worked at AWS and studied Computer Science at University College Dublin and Dublin City University.
      </p>
      <nav class="inline-links" aria-label="Elsewhere">
        {% for link in site.data.social_media %}
          <a href="{{ link.link }}" target="_blank" rel="noopener noreferrer">{{ link.name }}</a>
        {% endfor %}
      </nav>
    </div>

    <dl class="timeline-list">
      <div>
        <dt>Current</dt>
        <dd>
          <strong>Kreoh</strong>
          <span>Software engineer</span>
        </dd>
      </div>
      <div>
        <dt>Previously</dt>
        <dd>
          <strong>AWS</strong>
          <span>Software engineering</span>
        </dd>
      </div>
      <div>
        <dt>Education</dt>
        <dd>
          <strong>UCD &amp; DCU</strong>
          <span>Computer Science</span>
        </dd>
      </div>
      <div>
        <dt>Location</dt>
        <dd>
          <strong>Dublin</strong>
          <span>Ireland</span>
        </dd>
      </div>
    </dl>
  </div>
</section>

<section class="home-section page-shell" id="writing">
  <header class="section-header">
    <h2>Writing</h2>
  </header>

  <ol class="writing-list">
    {% for post in site.posts limit:3 %}
      <li>
        <a class="writing-row" href="{{ post.url }}">
          <span class="writing-year">{{ post.date | date: "%d %B, %Y" }}</span>
          <span class="writing-title">{{ post.title }}</span>
          <span class="writing-excerpt">{{ post.excerpt | strip_html }}</span>
        </a>
      </li>
    {% endfor %}
  </ol>

  <a class="section-link" href="/posts">Read more</a>
</section>

<section class="home-section page-shell" id="work">
  <header class="section-header">
    <h2>Projects</h2>
  </header>

  <div class="work-list">
    {% for project in site.data.projects limit:3 %}
      <article class="work-row">
        <div class="work-copy">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description | truncate: 190 }}</p>
        </div>
        {% if project.github %}
          <a class="row-link" href="{{ project.github }}" target="_blank" rel="noopener noreferrer">GitHub</a>
        {% endif %}
      </article>
    {% endfor %}
  </div>

  <a class="section-link" href="/projects">View all work</a>
</section>
