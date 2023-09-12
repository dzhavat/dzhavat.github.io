---
layout: post
title: Fully expand PR status checks on GitHub
category: posts
updated: 2023-09-12
---

One thing I absolutely love about working on the Web is that I can literally tweak any web page according to my preferences.

You know, I can build a browser extension that changes colors, font sizes, improves accessibility, moves boxes, removes things I don’t need, etc. I can also write a [bookmarklet](https://www.freecodecamp.org/news/what-are-bookmarklets/) for doing the same thing, though with some limitations.

This is what I did recently after patiently enduring what I consider to be an annoying limitation on the PR (Pull Request) status checks widget on GitHub.

PR status checks is a list of checks that show the status of all pipeline runs related to a PR. They are usually the last section on the PR page right before the “Merge” button and the comments section.

What annoys me about this list is that it can’t be fully expanded. There’s a toggle to either hide all checks or show them but the list is set to a specific height that limits how many items can be shown at a time. And sometimes the list can be quite long. If a run fails, it becomes quite annoying to scroll up and down to find what has failed.

So I built my own bookmarklet that simply removes the height, so the list expands fully. Needless to say, I use it all time now 😎

Oh, as a bonus, the same PR status checks widget is also present on the main repo page (there’s an icon right besides the last commit). The code bolow can be used to expand that widget as well.

<details>
  <summary>Here’s a video of how it works on a PR page 👇</summary>

  <video controls>
    <source src="/assets/video/2022/11/01/fully-expand-status-checks-on-github.mp4" type="video/mp4">
  </video>
</details>

<details>
  <summary>Here’s a video of how it works on the main repo page 👇</summary>

  <video controls>
    <source src="/assets/video/2023/09/12/fully-expand-status-checks-widget-on-main-repo-on-github.mp4" type="video/mp4">
  </video>
</details>

In case you want to use it, here’s the source code:

```js
javascript: (() => {
  // Expand PR status checks widget on PR page
  const elemInPrPage = document.querySelector(
    '.merge-status-list.js-updatable-content-preserve-scroll-position'
  );
  if (elemInPrPage != null) {
    elemInPrPage.style.maxHeight = 'none';
  }

  // Expand PR status checks widget on main repo page
  const elemInMainRepoPage = document.querySelector(
    'div[class*="Dialog__Body-"] div[class*="Box-sc-"]'
  );
  if (elemInMainRepoPage != null) {
    elemInMainRepoPage.style.maxHeight = 'none';
  }
})();
```

Happy coding 😉
