---
layout: post
title: Lazy-loading the animations package in Angular
category: posts
---

We recently upgraded Angular to v17 at work. One of the first things we did after the upgrade was to lazy-load the animations package. This shaved 62.48 kB (16.51 kB gzipped) off off the `main` bundle. Not bad for changing two lines of code!

Here’s how to do it in your app:

```typescript
// ...
- import { provideAnimations } from '@angular/platform-browser/animations';
+ import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

bootstrapApplication(AppComponent, {
  providers: [
-   provideAnimations(),
+   provideAnimationsAsync(),
    // ...,

    // to disable animations
    // provideAnimationsAsync("noop"),
});
```

<figure>
  <img src="/assets/img/2024/01/07/production-build-of-an-angular-application.webp" alt="">
  <figcaption>Production build - Angular animations moved to a lazy chunk</figcaption>
</figure>

_The 1.75 MB `main` bundle (😱) is a story for another day 😊_

Done with the changes already? Nice! Should we call it a day? Well, .. not so fast!

Lazy-loading the animations comes with a couple of side-effects!

The main one is that during bootstrap, animations will not be applied until after the package has loaded. The second one is that you must remember to only import from `@angular/animation` in lazy-loaded components. Importing anything from `@angular/animation` in an eagerly-loaded component will disable the lazy-loading of this package.

If you want to learn more about the side-effects, how to check if lazy-loading works correctly, and how this feature was implemented, check out this [excellent post](https://riegler.fr/blog/2023-10-04-animations-async#current-implementation) from Matthieu Riegler.

See you in the next post 🙂
