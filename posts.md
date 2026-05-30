---
layout: default
title: Posts
permalink: /posts/
---

<section class="page-shell writing-index">
  <header class="section-header page-heading">
    <h1>Writing</h1>
  </header>

  <ol class="writing-list">
    {% for post in site.posts %}
      <li>
        <a class="writing-row" href="{{ post.url }}">
          <span class="writing-year">{{ post.date | date: "%d %B, %Y" }}</span>
          <span class="writing-title">{{ post.title }}</span>
          <span class="writing-excerpt">{{ post.excerpt | strip_html }}</span>
        </a>
      </li>
    {% endfor %}
  </ol>
</section>
