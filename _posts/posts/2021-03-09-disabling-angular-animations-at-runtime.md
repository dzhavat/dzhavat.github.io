---
layout: post
title: Disabling Angular animations at runtime
category: posts
---

A nice new feature is coming to Angular v12 - support for disabling Angular animations at runtime 🎉

*Note*: This feature was added in [v12.0.0-next.3](https://github.com/angular/angular/blob/master/CHANGELOG.md#1200-next3-2021-03-03).

Up until now, the only way to disable Angular animations was to provide [`NoopAnimationsModule`](https://angular.io/api/platform-browser/animations/NoopAnimationsModule). But this approach has one big limitation - it completely disables all animations during build time. So you either build your app with or without animations. It was not possible to postpone this decision to a later point, say when the app bootstraps.  

Fortunately this is changing. In v12 you can pass a [config](https://next.angular.io/api/platform-browser/animations/BrowserAnimationsModuleConfig) to [`BrowserAnimationsModule`](https://next.angular.io/api/platform-browser/animations/BrowserAnimationsModule). The config object currently supports only one property - `disableAnimations`. Setting it to `true` will disable animations. The awesome thing is that you can do that at runtime, while your app bootstraps!

### Why would you use it?

You might already have some uses cases for disabling animations in your app. That’s great!

One other use case that comes to my mind is making your app more accessible by respecting your users’ preferences for minimizing the amount of non-essential motion.

There’s an operating system (OS)/browser setting that the user can toggle, which notifies your app that the user prefers reduced motion. You can capture that signal using the [`prefers-reduced-motion`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) CSS media query.

“But I have a TypeScript file and this is a CSS media query. How do I combine them?”, I hear you say. Fear not! You can use [`matchMedia`](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) method to check whether a string matches a specific media query. `matchMedia` returns a [`MediaQueryList`](https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList) that has a [`matches`](https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/matches) property set to `true` if the document currently matches the media query list, or `false` if not.

Let’s see it in action (also check out this [StackBlitz](https://stackblitz.com/edit/angular-ivy-r8rni5?file=src/app/app.module.ts)):

```ts
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

export function prefersReducedMotion(): boolean {
  const mediaQueryList = window.matchMedia('(prefers-reduced-motion)');

  return mediaQueryList.matches;
}

@NgModule({
  imports: [
    BrowserAnimationsModule.withConfig({
      disableAnimations: prefersReducedMotion()
    })
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

Here’s a demo of how this works on Windows:

<figure>
  <img src="/assets/img/2021/03/09/disabling-animations-on-windows.gif" alt="">
  <figcaption>Disabling animations in Windows and verifying that Angular animations are also disabled during bootstrap</figcaption>
</figure>

To see how to disable animations on other OSs, checkout the [`prefers-reduced-motion`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) article on MDN.

One thing to keep in mind is that once the app is done bootstrapping, it’s no longer possible to disable/enable animations again.

Thanks to [Kristiyan Kostadinov](https://twitter.com/_crisbeto) for this [contribution]((https://github.com/angular/angular/pull/40731)).