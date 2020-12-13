---
layout: default
title: Thoughts
---

## Thoughts

A place to share unpolished thoughts abouth everything.

<ul class="posts">
  {% for thought in site.categories.thoughts %}
    <li class="post">
      <a href="{{ thought.url }}">{{ thought.title }}</a>
      <time class="publish-date" datetime="{{ thought.date | date: '%F' }}">
        {{ thought.date | date: "%B %-d, %Y" }}
      </time>
    </li>
  {% endfor %}
</ul>