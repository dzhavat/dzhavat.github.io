---
layout: post
title: How to add curves to your website
---

As front-end developers we’re usually the ones responsible for translating a design into code. And sometimes the designer wants to try something creative  that breaks out of the rectangular shapes we’re so used to. So he/she decides to add some curves. It’s our job now to do magic and make them appear on the page.

A couple of weeks ago I got a design that roughly resembled this one:

<figure>
  <img src="/assets/img/how-to-add-curves-to-your-website/mockup.jpg" alt="Example mockup">
  <figcaption>Example mockup (excuse my basic <a href="https://www.photopea.com/" target="_blank">Photopea</a> skills)</figcaption>
</figure>

In this post I’m going to show you how to add curves to the top and bottom of an element. I’m going share **my solution**. You might have a different one. That’s fine! If you do, let me know on [Twitter](https://twitter.com/dzhavatushev).

### Before writing any code

It’s important to spend a bit of time thinking about the design. Try to come up with a strategy for how you’re going to approach it. What challenges are you possibly going to face? How will it look on mobile? On desktop? On wide screens? Can you make it flexible and reusable in other places? Are the techniques you want to use well supported or should you consider having a fallback?

Let’s briefly analyze the current task:

* The mockup can be divided in three parts - top curve, content, bottom curve. The top and bottom curves are purely for decoration. In case something happens and they don’t appear, the main content element should end up with straight lines. Nothing else should break.
* Looking at the curves more closely, I can see that they are in fact the same. The only difference is that one of them is flipped vertically. This helps me a lot here because I can export the curve only once and reuse it in both top and the bottom. We’ll see how in a bit.

<figure>
  <img src="/assets/img/how-to-add-curves-to-your-website/curves.jpg" alt="Top and bottom curves">
  <figcaption>Top and bottom curves</figcaption>
</figure>

* On wider screens the curves must go from edge-to-edge while the content can be centered.

Nice! Now let’s look at some code.

### Adding the main content

This one is pretty straightforward and you’ve probably done it many times already. There’s a wrapper `.container` that goes full width and can be used for setting a background color and adding the curves. The `.tabs-container` is used for holding the content. This element will be centered on wider screens.

```html
<div class="container">
  <div class="tabs-container">
    <!-- Some content here -->
  </div>
</div>
```

```css
.container {
  background-color: #026b96;
}

.tabs-container {
  color: white;
  padding: 1.5rem;
}

@media (min-width: 980px) {
  .tabs-container {
    margin-left: auto;
    margin-right: auto;
    padding: 3rem 2rem;
    width: 800px;
  }
}
```

Here’s the result so far ([CodePen](https://codepen.io/dzhavat/full/WVEJva)):

<figure>
  <img src="/assets/img/how-to-add-curves-to-your-website/step-1.jpg" alt="Step 1">
  <figcaption>Step 1</figcaption>
</figure>

That’s a good baseline for now. Even if I don’t add the curves, everything still looks fine.

### Adding the top curve

I already said that the curves are there only for decoration and making the element look more organic. So instead of adding them as `img` elements, which I’ve seen out in the wild, I’m going to add them using [::before](https://developer.mozilla.org/en-US/docs/Web/CSS/::before) and [::after](https://developer.mozilla.org/en-US/docs/Web/CSS/::after) pseudo elements. In order to have a curve that goes edge-to-edge on wider screens, I’ve exported it as a 3000x103px SVG image. This will still cause issues on super wide screens but it’s enough to illustrate the purpose of this post.

What is left now is adding the curve to the element:

```css
.container {
  /* ... */
  position: relative;
}

.container::before {
  background: url("path/to/curve.svg") center bottom no-repeat;
  content: '';
  height: 103px;
  position: absolute;
  top: -102px;
  width: 100%;
}

```

There are a couple of points here:

* Because the `::before` element has `position: absolute` it’s a good idea to set the `position: relative` on the `.container`. This will make the `::before` element stay inside the `.container` and thus becomes easier to move around.
* The `background` declaration is interesting. There are a few things but the positioning (defined by `center bottom`) is the key. This specifies where to place the image relative to edges of the element. `center` will center the image on the x-axis, while `bottom` will place it on the bottom of the y-axis. You can play with different combinations. `left bottom` or `right bottom` are also valid. You can specify [background-size](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size) as well. Try it and see the effect.
* The `content: ''` is quite important. Without it the element will not be generated.
* `height: 103px` is the height of the SVG image. In your case that number might be different.
* `top: -102px` moves the element 102px upwards from the top of the `.container`. There’s 1px difference between this value and the height and the reason for this is to make sure that the background image always appears glued to the `.container` element.

Here’s the result so far ([CodePen](https://codepen.io/dzhavat/full/NQarrp)):

<figure>
  <img src="/assets/img/how-to-add-curves-to-your-website/step-2.jpg" alt="Step 2">
  <figcaption>Step 2</figcaption>
</figure>

### Adding the bottom curve

Time for the final part. This is going to be fun.

I already said in the beginning that the bottom curve is the same as the top. The difference is that the bottom one is flipped. Luckily there’s a CSS property that can help us achieve that. Let’s have a look.

```css
.container::before,
.container::after {
  background: url("path/to/curve.svg") center bottom no-repeat;
  content: '';
  height: 103px;
  position: absolute;
  width: 100%;
}

.container::before {
  top: -102px;
}

.container::after {
  bottom: -102px;
  transform: scaleY(-1);
}
```

Much of the code from the previous step is repeated here as well. I’ve put all common declarations between the `::before` and `::after` elements together. That way I can make adjustments in only one place.

The most important code here is the `transform` property in the `::after` element.

Using the [`scaleY()`](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scaleY) function I can transform the image along the y-axis. So specifying `-1` as a value will flip it. The same can be achieved by using `rotateX(180deg)`.

There’s one weird thing worth mentioning here. You might’ve noticed that the background image of the `::after` element is set to `center bottom`. This is kinda strange because one would think the correct positioning should be `center top` since we move the element down but want to place its background image as close to the top as possible. `center bottom` is actually correct in this case because the element is flipped (remember `scaleY(-1)`?), so its bottom is now on the top. You can observe this by setting the `height` and `bottom` to say 150px so the element is bigger than the size of the background image.

Here’s the final result ([CodePen](https://codepen.io/dzhavat/full/jgGrgv)):

<figure>
  <img src="/assets/img/how-to-add-curves-to-your-website/step-3.jpg" alt="Final result">
  <figcaption>Final result</figcaption>
</figure>

That’s it! Now you know how to add curves or other weird shapes to your website. Now go and get creative! Here are a couple of examples I found for inspiration.

##### Firefox Developer Edition ([link](https://www.mozilla.org/en-US/firefox/developer/))

<figure>
  <img src="/assets/img/how-to-add-curves-to-your-website/Firefox-Dev-Edition-curve.jpg" alt="Firefox Developer Edition">
  <figcaption>Firefox Developer Edition</figcaption>
</figure>

##### Atlassian ([link](https://www.atlassian.com/))

<figure>
  <img src="/assets/img/how-to-add-curves-to-your-website/Atlassian-curve.jpg" alt="Atlassian">  
  <figcaption>Atlassian</figcaption>
</figure>

Do you have other techniques for adding curves/shapes? Let me know on [Twitter](https://twitter.com/dzhavatushev).
