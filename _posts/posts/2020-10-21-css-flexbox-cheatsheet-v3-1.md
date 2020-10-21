---
layout: post
title: “CSS Flexbox Cheatsheet” v3.1
category: posts
---

I’m really excited to share a new minor update to my [“CSS Flexbox Cheatsheet”](https://marketplace.visualstudio.com/items?itemName=dzhavat.css-flexbox-cheatsheet) VS Code extension! 🎉

The main change in this version is adding support for selecting the **directionality** to be used in the interactive demos.

I think it’s important to have developer tools that support changing of writing direction because there are a ton of websites and apps out there using languages that are written from right-to-left. Assuming everyone is using English or another left-to-right language is not inclusive enough. We need to think more broadly.

Here’s how the new setting works:

<figure>
  <img src="/assets/img/2020/10/21/changing-directionality.gif" alt="Changing directionality demo">
  <figcaption>Demo showing how directionality works</figcaption>
</figure>

In case you need a quick refresher, directionality refers to the writing direction of the element’s text. It is specified by using the global `dir` attribute which can be added to any HTML element. The `dir` attribute can take `ltr`, `rtl` and `auto` as values.

The `rtl` value, which means right-to-left, is to be used for languages that are written from the right to the left (like Arabic).

To learn more about directionality, check out this [MDN article](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir).

This is a first iteration of the functionality. It’s not perfect but it makes the point. I’m now looking forward to your feedback! Tell me what you like about it and what you would like to see more of. I’ll make sure to add it in a future update 🙂

Go [grab it](https://marketplace.visualstudio.com/items?itemName=dzhavat.css-flexbox-cheatsheet) while it’s hot 🔥