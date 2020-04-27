---
layout: post
title: “Test Focus Highlighter” VS Code extension
---

I’m really excited to share a new VS Code extension called [“Test Focus Highlighter”](https://marketplace.visualstudio.com/items?itemName=dzhavat.test-focus-highlighter). 🎉

It’s an extension that visually highlights focused tests in spec files. Here’s a demo:

<figure>
  <img src="/assets/img/2020/04/27/test-focus-highlighter-demo.gif" alt="Test Focus Highlighter Demo">
  <figcaption>[“Test Focus Highlighter”](https://marketplace.visualstudio.com/items?itemName=dzhavat.test-focus-highlighter) in action</figcaption>
</figure>

Why did I build it?

Primarily for myself. I started writing tests for my code a few months ago and mistakenly committed focused tests in a couple of occasions. They were, fortunately, catched during pull request (PR) review but that is already too late in the process. I saw this as an opportunity to make a small tool that can help me identify focused tests during development by visually highlighting them. And when I say visually, I mean really making them stand out.

The extension does this in three ways:

1. Shows a warning icon in the gutter for each line covered by a focused test.
2. Shows a warning message when a focused test is hovered.
3. Shows a color in the overview ruler that makes it easy to see any focus tests in a big spec file.

<figure>
  <img src="/assets/img/2020/04/27/test-focus-highlighter-features.jpg" alt="Test Focus Highlighter features">
  <figcaption>“Test Focus Highlighter” features</figcaption>
</figure>

The extension will not prevent one from committing focused tests. It only aims to increase ones chances of catching such tests as early as possible.

I hope you will find the [extension](https://marketplace.visualstudio.com/items?itemName=dzhavat.test-focus-highlighter) beneficial as well!