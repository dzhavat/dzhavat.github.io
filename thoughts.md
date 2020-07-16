---
layout: default
title: Thoughts
---

## Thoughts

A place to share unpolished thoughts abouth everything.

<ul class="posts">
  {% for thought in site.categories.thoughts %}
    <li>
      <div class="publish-date">
        <time datetime="{{ thought.date | date: '%F' }}">{{ thought.date | date: "%B %-d, %Y" }}</time>
      </div>
      <a href="{{ thought.url }}">{{ thought.title }}</a>
    </li>
  {% endfor %}
</ul>