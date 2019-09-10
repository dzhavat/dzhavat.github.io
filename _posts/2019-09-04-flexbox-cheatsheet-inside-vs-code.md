---
leyout: post
title: Flexbox cheatsheet inside VS Code
updated_date: 2019-09-10
---

Another week, another VS Code extension. I’ve published [two](https://marketplace.visualstudio.com/publishers/dzhavat) so far and this is my third in just a month. I’m not participating in any sort of “30 VS Code extensions” challenge. It’s just the ideas that keep popping up in my head and I can’t help myself but try to make something out of them.

It’s needless to say that I enjoy doing this quite a lot because these extensions are something I’ve been missing in my work. So by building them, I benefit directly and they make my work as a front-end developer a little bit easier.

Over the last few years [flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox) got more and more popular. And rightly so, because it helps us build one-dimensional layouts much faster. Have you tried positioning something in the middle of an element using flexbox? It’s fun, right?

But there’s just one problem! Remembering all flexbox properties can be hard. I know it’s hard for me! Should I use `justify-content` or `align-items` to do X? What values does `justify-content` accept? There are quite many of them and we’re not always sure which one does what. That’s why we have our favorite articles, guides, cheatsheets, etc., to consult during those times. But they all “live” outside of the code editor and that forces us to switch context.

A week ago I asked myself “Why not have a flexbox cheatsheet inside VS Code where I can quickly look up what I need and continue my work? Why do I need to switch context? Why isn’t there a tool that lets me do that?”. That’d be great, right? 

I think so too, so I built it! 🚀

I’m thrilled to share my new extension [“CSS Flexbox Cheatsheet”](https://marketplace.visualstudio.com/items?itemName=dzhavat.css-flexbox-cheatsheet). Here’s a little demo:

<figure>
  <img src="/assets/img/2019/09/04/demo-hover.gif" alt="Demo">
  <figcaption>“CSS Flexbox Cheatsheet” extension</figcaption>
</figure>

Currently there are two ways to open the cheatsheet:

* By pressing `Ctrl+Shift+P` (Win) / `Cmd+Shift+P` (Mac) and searching for the `Open Flexbox Cheatsheet` command.
* Hovering any `display: flex` declaration and clicking the `Open Flexbox Cheatsheet` link in the popup (as shown in the demo).

I have a few ideas for future improvements but I’d like to share it with the world in order to get feedback. So if you work with CSS, please [give it a try](https://marketplace.visualstudio.com/items?itemName=dzhavat.css-flexbox-cheatsheet). I hope you find it useful.

**Update**: The cheatsheet used in the extension is available [online](https://darekkay.com/dev/flexbox-cheatsheet.html) as well and is done by [Darek Kay](https://darekkay.com/).
