---
layout: post
title: The “good first issue” myth
category: thoughts
---

More and more people are getting involved with open source. Some would like to contribute code, other improve documentation, third test new features and report bugs, fourth build developer tools, etc. Whatever the intention, being part of an open source project gives a sense of belonging, can be fun, can have a positive impact on ones career and gives a feeling of contributing to something meaningful.

It’s not a surprise, then, that there are many articles, guides, videos, events, etc., on this topic. Initiatives like [Hacktoberfest](https://hacktoberfest.digitalocean.com/) are also great at motivating people to create their first pull request. I’ve participated as well during the last two years.

Also at conferences, people would often ask “How do I get started with open source?” or “How do I get involved with the project?”

The answer quite often is “Look for Issues tagged with the ‘good first issue’ label”.

This answer sounds quite promising. It gives hope that there are in fact Issues tagged with such label and they can pick one of them and slowly make their first contribution.

The reality, however, is quite different. Many of the popular open source projects either don’t use such label(s) or the Issues are so few and so old, that no one wants to take them.

Let’s say I’m a front-end developer wanting to make my first contribution. I’m using one of the popular frameworks these days and I know that the project is on GitHub. I can fork the project and make it work locally. What should I do next? Can I fix something? What would be a good first issue to work on?

I open the Issues tab and start looking through the lis. Is there something for me? I remember X mentioning the “good first issue” label. Let’s see.

## Angular

There are currently 2,685 open issues. Only [one of them](https://github.com/angular/angular/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22) is tagged as “good first issue”. It’s also from 2018 so I wonder whether it’s still relevant.

## React

There are currently 494 open issues. [4 of them](https://github.com/facebook/react/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22) are tagged as “good first issue”. Two of those are from two years ago or older. They also have a “good first issue (taken)” label. Unfortunately, these issues, as the name suggests, are already taken.

## Vue

There are currently 324 open issues. [10 of them](https://github.com/vuejs/vue/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22) are tagged as “good first issue”. By looking closely, all of them also have a “has PR” tag, which means that the issue is effectively solved. It’s only a matter of merging the related PR before the issue is closed.

## Ember.js

There are currently 262 open issues. Only [one of them](https://github.com/emberjs/ember.js/issues?q=is%3Aopen+is%3Aissue+label%3A%22Good+for+New+Contributors%22) is tagged as “Good for New Contributors”. It’s also from a year ago. Could it already be fixed?

## Svelte

There are currently 419 open issues. [7 of them](https://github.com/sveltejs/svelte/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22) are tagged as “good first issue”. Most of them are from this year.

## Node.js

There are currently 844 open issues. [13 of them](https://github.com/nodejs/node/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22) are tagged as “good first issue”. Most of them are from this year.

## Bootstrap

There are currently 315 open issues. They don’t use the “good first issue” tag.

## jQuery

There are currently 65 open issues. They don’t use the “good first issue” tag.

## VS Code

There are currently more than 5,000 open issues. [31 of them](https://github.com/microsoft/vscode/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22) are tagged as “good first issue”. Most of them are from this year.

---

So is the “good first issue” a myth?

We know the label exists, we mention it on different occasions but it’s not really used.

Maybe there are issues that are suitable for first time contributors which are not tagged yet? Or people take them so fast that there’s no time for the first time contributor to get involved?

If that is the case, can we restrict the “good first issue” to first time contributors only? Nowadays GitHub shows a nice “*Opened this pull request (their first in @repo)*” label whenever a first-time controbutor makes their first PR in a repo. So if anyone else opens a pull request for an issue labeled as “good first issue” and they are not a first-time contributor, can we politely reject it? Will this make it more likely for first-time contributors to work on the issue?

Welcoming first-time contributors to a project is important because that gives them the opportunity to join the community, grow as developers, learn new things and meet new people. And who knows, some of them might become regular contributors, maintainers or even core members. It might all start with the simple “good first issue” label. Please use it.