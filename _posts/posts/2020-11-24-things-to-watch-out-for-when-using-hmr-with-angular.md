---
layout: post
title: Things to watch out for when using HMR with Angular
category: posts
---

[Angular v11](https://blog.angular.io/version-11-of-angular-now-available-74721b7952f7) was released a couple of weeks ago. One of the highlights in this release is making it easier to enable [Hot Module Replacement (HMR)](https://webpack.js.org/guides/hot-module-replacement/) during the development of our apps. All we need to do is use the `--hmr` flag:

`ng serve --hmr`

To quote the [release post](https://blog.angular.io/version-11-of-angular-now-available-74721b7952f7): 

> Now during development the latest changes to components, templates and styles will be instantly updated into the running application. All without requiring a full page refresh. Data typed into forms are preserved as well as scroll position providing a boost to developer productivity.

I was excited to try it! I quickly installed the newest [Angular CLI](https://github.com/angular/angular-cli) and generated a fresh new app.

My initial reaction was [quite positive](https://twitter.com/dzhavatushev/status/1329904127728623618). **HMR works like magic!**

But then I began to wonder how will a more complex app behave with HMR enabled? I asked this question in the [Angular’s Discord channel](https://discord.com/invite/angular) and got a [really good explanation by Lars Gyrup Brink Nielsen](https://discord.com/channels/748677963142135818/749343618128412751/779472002535915580). To quote:

> If the application hasn’t been built with Hot Module Replacement in mind from the beginning, it might need some work. The issue with HMR is when application state gets stale or memory leaks occur. This can happen for application- and platform-wide dependencies. We usually don’t think about cleaning up resources such as RxJS subscriptions, open Websockets, and so on at this level. But when we use HMR, the AppModule and all singleton services are asked to be destroyed. If the code doesn’t account for this, the same side effects can be triggered/active multiple times which causes different things to get out of sync.

Really good point!

Enabling HMR requires a **different mindset**. It emphasizes the need to be careful with long-lived RxJS subscriptions, `setInterval` functions, WebSockets connections, etc., while developing our apps. On top of that, we must also keep in mind that this behaviour occurs only in development.

Let’s illustrate the problem.

Say I have this code in `AppComponent` (which is a long-lived component that doesn’t get destroyed throughout the “live” of the app):

```ts
@Component({ ... })
export class AppComponent {
  ngOnInit() {
    interval(1000).subscribe(value => {
      console.log('value', value);
    });
  }
}
```

Running the app with `--hmr` enabled will result in this:

<figure>
  <img src="/assets/img/2020/11/24/console-log-hmr.gif" alt="Enabling HMR and inspecting the console on initial load">
  <figcaption>Enabling HMR and inspecting the console on initial load (<a href="/assets/img/2020/11/24/console-log-hmr.gif">bigger size</a>)</figcaption>
</figure>

Here I have an RxJS subscription that logs values to the console. The subscription is not cleared but that shouldn’t be a problem since the component is never going to get destroyed. So far everything works as expected. 

Now, if I change the code a bit and save the file, the app will not rebuild again and force a full page refresh in the browser, as we’re used to. Rather, it will only rebuild the parts that were modified and replace them in the running app:

<figure>
  <img src="/assets/img/2020/11/24/console-log-hmr-with-save-issue.gif" alt="Issue when making changes to the code (HMR enabled)">
  <figcaption>Issue when making changes to the code (HMR enabled) (<a href="/assets/img/2020/11/24/console-log-hmr-with-save-issue.gif">bigger size</a>)</figcaption>
</figure>

But now the console shows logs from multiple subscriptions. Why is that? It is because of old subscriptions that are still active in the background, effectively creating a memory leak. This would not have been a problem without HMR because the app would’ve been rebuild again and forced full browser page refresh (which in turn destroys all previous subscriptions).

It’s important to emphasize here again that the code above will run as expected in production. There will be only one active subscription. This problem occurs only in development with HMR turned on.

To fix the issue, we must remember to clear the subscription in the `ngOnDestroy` hook for that component.

```ts
@Component({ ... })
export class AppComponent {
  sub: Subscription | undefined;

  ngOnInit() {
    this.sub = interval(1000).subscribe(value => {
      console.log('value', value);
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
```

<figure>
  <img src="/assets/img/2020/11/24/console-log-hmr-with-save-fixed.gif" alt="Fixing the issue by clearing the subscription (HMR enabled)">
  <figcaption>Fixing the issue by clearing the subscription (HMR enabled) (<a href="/assets/img/2020/11/24/console-log-hmr-with-save-fixed.gif">bigger size</a>)</figcaption>
</figure>

After this change, saving the file multiple times doesn’t result in old subscriptions logging to the console because they are properly cleared.

### Summary

I love HMR!

It’s exciting, works great and improves the developer experience. However, it doesn’t come without a cost. Enabling HMR requires a slight change in mindset when developing our applications. We must remember to:

- clear long-lived RxJS subscriptions
- clear `setInterval` functions
- close WebSocket connections
- properly manage app- and platform-wide dependencies (like componens and services)

Failing to do so, might result in unexpected results and memory leaks, which can be hard to debug.

Is there something else we should be aware of when HMR is turned on?