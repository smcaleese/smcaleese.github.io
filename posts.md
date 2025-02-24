---
layout: default
title: Posts
---
<div class="posts-header">
  <h1>Latest Posts</h1>
</div>

<ul class="posts-list">
  {% for post in site.posts %}
    <li class="post-item">
      <a href="{{ post.url }}">
        <h2 class="post-title">
          {{ post.title }}
        </h2>
        <div class="post-excerpt">
          {{ post.excerpt }}
        </div>
      </a>
    </li>
  {% endfor %}
</ul>