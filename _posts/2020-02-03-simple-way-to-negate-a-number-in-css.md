---
layout: post
title: Simple way to negate a number in CSS
---

I was experimenting with [Custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) a.k.a CSS variables last night. I was trying to create a simple card design for fun to see how things work. At one point I wanted to negate a variable that held a positive number.

My first attempt was:

```css
:root {
  --base-padding: 1rem;
}

.card-image {
  margin: -var(--base-padding);
}
```

Nice try, weirdo, but this doesn’t work! Come up with something smarter. 😝

Well, the “trick” was to use the [`calc()`](https://developer.mozilla.org/en-US/docs/Web/CSS/calc) function and multiply the value of the variable by `-1`.

```css
:root {
  --base-padding: 1rem;
}

.card-image {
  margin: calc(var(--base-padding) * -1);
  /* results to margin: -1rem */
}
``` 

This is actually not a “trick” at all. It’s how math works. Hurray for math! 🎉

The same technique works the other way around as well - converting a negative number to a positive one.

```css
:root {
  --base-top-position: -1rem;
}

.card-image {
  top: calc(var(--base-top-position) * -1);
  /* results to top: 1rem */
}
```

Is there another way to negate numbers in CSS? Let me know on [Twitter](https://twitter.com/dzhavatushev/).

Hope you learned something new.

Oh, and if you’re curious how I used that in my card design...

<p class="codepen" data-height="265" data-theme-id="default" data-default-tab="result" data-user="dzhavat" data-slug-hash="rNaXwYX" data-preview="true" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Convert positive to negative number">
  <span>See the Pen <a href="https://codepen.io/dzhavat/pen/rNaXwYX">
  Convert positive to negative number</a> by Dzhavat (<a href="https://codepen.io/dzhavat">@dzhavat</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
