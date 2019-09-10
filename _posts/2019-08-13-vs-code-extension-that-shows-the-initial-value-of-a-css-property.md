---
layout: post
title: VS Code extension that shows the initial value of a CSS property
updated_date: 2019-09-10
---

I few days ago I got an idea for a VS Code extension that shows the initial (default) value of a given CSS property on hover. This solves a real problem for me because most of the time I use the default value to “reset” a property.

What this means is if I have `background-color: tomato` on an element and want to set it to its initial value, I’d probably use `transparent` instead of `initial`, `unset` or something else. So instead of remembering the initial values of all CSS properties, I created myself an extension.

With that in mind I present you [CSS Initial Value](https://marketplace.visualstudio.com/items?itemName=dzhavat.css-initial-value).

Here’s a small demo:

<figure>
  <img src="/assets/img/2019/08/13/demo.gif" alt="demo">
  <figcaption>“CSS Initial Value” extension</figcaption>
</figure>

The extension is quite simple and there are probably cases where it display something weird but I’d like to share it with the world in order to get feedback. It’s also my first extension so I’m pretty sure there are things that can be improved. The code is [open-sourced](https://github.com/dzhavat/css-initial-value) if anyone wants to take a look or contribute.

If you work with CSS, please give it a try. I hope you find it useful.

**Update**: Since the release of this extension, I’ve built two more. The first one lets you [open the MDN docs of a CSS property](https://dzhavat.github.io/2019/08/19/vs-code-extension-that-lets-you-open-the-mdn-docs-of-a-css-property.html), which, as of v1.38 of VS Code, is supported natively as well. The second one lets you [open a flexbox cheatsheet inside VS Code](https://dzhavat.github.io/2019/09/04/flexbox-cheatsheet-inside-vs-code.html).
