---
layout: post
title: VS Code extension that lets you open the MDN docs of a CSS property
updated: 2022-01-01
category: posts
---

**Update 2**: After the extension was deprecated almost two years ago, it was time to move on. I removed it from the Marketplace and archived the repo. All links to it from this post were also removed. A heartfelt thank you to everyone who used the extension ❤️

**Update 1**: As of [v1.38](https://code.visualstudio.com/updates/v1_38), VS Code supports the functionality provided by this extension natively as well! I’m quite happy about it because I didn’t know they were going to implement something similar. And what’s even better is that they also show a link to MDN for HTML elements! Now go and update to the latest version of VS Code. It’s worth it! 😎

---

After releasing [my first VS Code extension](https://dzhavat.github.io/2019/08/13/vs-code-extension-that-shows-the-initial-value-of-a-css-property.html) last week, I got an idea for another one. This one lets you open the MDN docs of a CSS property. Quite simple! The link appears on hover.

The extension is conveniently called “_CSS to MDN_”.

Here’s a demo:

<figure>
  <img src="/assets/img/2019/08/19/demo.gif" alt="demo">
  <figcaption>“CSS to MDN” extension</figcaption>
</figure>

Before making the extension, if I wanted to open the docs of `background-size`, for example, I’d switch to a browser, open a new tab, search for something like “mdn bkg size”, then click on the first result.

With this extension I don’t have to go through these steps. I can hover a property and click on the link. Nice, isn’t it? 😉

If you work with CSS, please give it a try. I hope you find it useful.
