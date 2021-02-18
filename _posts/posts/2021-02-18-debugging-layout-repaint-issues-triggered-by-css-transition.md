---
layout: post
title: Debugging layout repaint issues triggered by CSS Transition
category: posts
---

A couple of weeks ago I was randomly checking the performance of a CSS Transition here on my blog. I was expecting to see a butter smooth animation but ended up surprised 😲. The transition was triggering repaint on pretty much the whole page every time it ran.

The element being animated is a `span` wrapping some text placed inside an `h1`. The `h1` itself is in the upper left corner on the page and contains my name. Initially, only the letter “D” is shows. The remaining part fades-in on hover.

<figure>
  <img src="/assets/img/2021/02/18/css-transition-causing-repaint.webp" alt="">
  <figcaption>CSS Transition causing a repaint on the whole page (in Edge with “Paint flashing” enabled)</figcaption>
</figure>

I was quite surprised to see the whole page flashing green given the transition was scoped to a very isolated element. I didn’t really see any connection between animating a `span` and causing repaint on the whole page.

So I went down a rabit hole in attempt to figure this out.

### What exactly am I animating?

My first stop was to double check the properties being animated:

```css
h1 span {
  display: inline-block;
  opacity: 0;
  transform: translateY(-20px);
  transition: opacity 0.15s ease-out, transform 0.3s ease-out;
}

h1:hover span {
  opacity: 1;
  transform: translateY(0px);
}
```

As seen from the code, the transition is applied to `opacity` and `transform`, which are the [recommended properties](https://web.dev/animations-guide/) to use when moving and showing/hiding elements. Because of that, my first reaction was to dismiss the possibility that these properties are causing the problem.

There must be something else going on. 🤔

### Could it be “layers”?

The next step was to see whether the page’s content was split in any “layers”. This is usually not something I even think about but remembered that browsers can decide to place an item on a different “layer” in order to optimize the repaint of that element without requiring the rest of the layout to be repainted.

I used the “Layer borders” option in Edge DevTools for that but didn’t really understand it. Also tried to use the `will-change` property to [force a new layer creation](https://web.dev/animations-guide/#force) but that didn’t help much either.

<figure>
  <img src="/assets/img/2021/02/18/displaying-layer-borders.png" alt="">
  <figcaption>Displaying layer borders</figcaption>
</figure>

### What about “stacking context”?

Next on the list was [“stacking context”](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context).

The MDN article explains this concept in more details but basically elements can be placed in different *stacking contexts* which are then stacked on top of each other. A new *stacking context* can be created by applying some special properties to an element. Some of those properties are `position: relative`, `opacity` value less than 1, `transform`, etc.

In my case, the `span` element contained `opacity` and `transform`. Other elements on the page with special properties were `li` items used for wrapping each post link. They had `position: relative` applied to them.

💡

Once I realized that the repaint issue might be due to a *stacking context*, I opened the 3D View panel in Edge DevTools to check:

<figure>
  <img src="/assets/img/2021/02/18/3D-View-panel-in-Edge-DevTools-z-index-auto.png" alt="">
  <figcaption>3D View panel in Edge DevTools</figcaption>
</figure>

By looking at the visualization, I could clearly see that the `span` element (marked with `z-index: auto` on the screenshot) was “below” some other elements. What this meant in practice was whenever the element in the “lower” stacking context was repainted, the browser had to repaint the elements in the “higher” stacking contexts as well.

### Solution

At this point the solution was a bit more obvious. I could either remove the `position: relative` from the `li` items, or add `position: relative` and a `z-index` to the `span` element.

```css
h1 span {
  display: inline-block;
  opacity: 0;
  transform: translateY(-20px);
  transition: opacity 0.15s ease-out, transform 0.3s ease-out;

  position: relative;
  z-index: 2;
}
```

After adding these two properties, the repainting issue was gone:

<figure>
  <img src="/assets/img/2021/02/18/css-transition-problem-fixed.webp" alt="">
  <figcaption>CSS Transition optimized to repaint a single element</figcaption>
</figure>

Sure enough, the 3D View in Edge DevTools also confirmed that the `span` was moved to the topmost stack (marked with `z-index: 2` in the screenshot below):

<figure>
  <img src="/assets/img/2021/02/18/3D-View-panel-in-Edge-DevTools-z-index-2.png" alt="">
  <figcaption>3D View panel in Edge DevTools</figcaption>
</figure>

I’m glad that I got to the bottom of this. This small optimization probably didn’t make a huge performance difference on the page but it was definitely an interesting journey with a lot of learnings.

So, at the end it wasn’t the CSS transition itself that was causing the issue, but the elements and their stacking order.

---

I also [asked on Twitter](https://twitter.com/dzhavatushev/status/1360653689703301128) for help to understand the problem better. Thankfully, [Adam Argyle](https://twitter.com/argyleink) and [@flackrw](https://twitter.com/flackrw) replied to my question and helped me a lot with their explanations.