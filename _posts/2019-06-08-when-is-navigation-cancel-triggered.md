---
layout: post
title: "When is `NavigationCancel` triggered?"
---

Over the past couple of days, I was working on an Angular component that depended on a stream of [router events](https://angular.io/api/router/RouterEvent). There are quite a few of them but I was particulary looking at `NavigationCancel`. A question that came up was “When is this event triggered?”

The [documentation](https://angular.io/api/router/NavigationCancel) didn’t really answer my question. Here’s what it currently says:

> Represents an event triggered when a navigation is canceled.

While this was somewhat helpful, I was hoping for more details. In this short post I’d like to share my findings for cases in which `NavigationCancel` is triggered.

### When a route guard returns `false`

This is probably the most obvious one. If you have a [route guard](https://angular.io/guide/router#milestone-5-route-guards) that returns `false` during navigation, you’ll get a `NavigationCancel` event. It doesn’t matter if the return value is `false`, a `Promise` that resolves to `false` or an `Observable` that emits `false`. The end result will be the same.

```ts
canActivate() {
  // Case 1
  return false;

  // Case 2
  return Promise.resolve(false);

  // Case 3
  return new Observable<boolean>(observer => {
    observer.next(false);
    observer.complete();
  });
}
```

[StackBlitz example](https://stackblitz.com/edit/angular-zysw4m)

### On redirect initiated by a route guard

There are a couple of cases here. As of v7.1, a `CanActivate` guard can also return an [`UrlTree`](https://angular.io/api/router/UrlTree) object. In that case, the current navigation **will be canceled** and a new navigation will start based off the returned `UrlTree`.

```ts
canActivate() {
  // Case 1
  // Manually start a new navigation and cancel the current one by returning `false`
  this.router.navigateByUrl('/hello-new');
  return false;

  // Case 2
  // The router will automatically cancel the current navigation and start a new one 
  return this.router.parseUrl('/hello-new');
}
```

[StackBlitz example](https://stackblitz.com/edit/angular-7a4pty)

That’s it. These are the cases where `NavigationCancel` will be triggered. Do you know more? Let me know on [Twitter](https://twitter.com/dzhavatushev).
