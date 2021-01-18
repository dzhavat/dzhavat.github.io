---
layout: post
title: Quick way to see how many times change detection was triggered in Angular
category: posts
---

Do you sometimes need to know how many times change detection is triggered in Angular? Maybe you’re trying to debug a performance issue or want to see whether a button click is triggering too many change detection cycles.

I just came across a really good tip by [Alexey Zuev](https://twitter.com/yurzui) in his article [Simple Angular context help component or how global event listener can affect your performance](https://indepth.dev/posts/1410/simple-angular-context-help-component-or-how-global-event-listener-can-affect-your-performance) where he uses a logpoint in DevTools to log a message every time [ApplicationRef.tick()](https://angular.io/api/core/ApplicationRef#tick) method is triggered.

It looks like this:

<figure>
  <img src="/assets/img/2021/01/18/adding-a-logpoint-to-inspect-change-detection-in-angular.gif" alt="">
  <figcaption>Adding a logpoint in DevTools to log a message when change detection runs</figcaption>
</figure>

In order to add a similar logpoint:

1. Start your Angular app in dev mode
1. Open the browser’s DevTools
1. Open the “Debugger” panel (Firefox) / “Sources” panel (Chrome/Edge)
1. Find the “vendor.js” file in the list of files on the left and open it
1. Search for the `tick()` method
1. Add a logpoint on the line where you want to log your message
1. Trigger a change detection cycle (could be by clicking on a button) and verify that the log message is output in the console

The logpoint doesn’t tell which part of the code triggered the change detection cycle. Whether it was a button click, a `setTimeout()` function, an HTTP request, or another listener on the page, you wouldn’t know for sure. The logpoint will only tell you how often the method was called. But this is still useful when trying to find out if change detection runs too many times without you expecting it to do so.

I hope you can use this tip. I definitely will.