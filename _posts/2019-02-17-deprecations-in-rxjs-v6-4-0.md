---
layout: post
title: Deprecations in RxJS v6.4.0
last_updated: 2020-04-26
---

I’ve been trying to cover some of the things that came along this new version of RxJS. So, after writing about a [tiny new feature]({{ site.baseurl }}{% post_url 2019-02-02-a-tiny-new-feature-in-rxjs-v6-4-0 %}) and a [bugfix]({{ site.baseurl }}{% post_url 2019-02-07-union-types-in-rxjs-v6-4-0 %}), now is time to look at the deprecations.

### Deprecate `null` parameter signatures for `subscribe`

([PR](https://github.com/ReactiveX/rxjs/pull/4202) that introduced the deprecation)

Do you often find yourself using `null` (or `undefined`) instead of callback functions when subscribing to an Observable? Do you find that annoying? Well, starting from this release, that practice is now discouraged. The recommended way is to use an “`observer`”.

What is an “`observer`” you might be asking? It’s an object that has three properties  —  `next`, `error` and `complete`. Each property is used for the corresponding callback function.

With that in mind, here’s a list of all deprecated signatures and their recommended alternative ([StackBlitz](https://stackblitz.com/edit/rxjs-deprecated-null-subscribe)):

```ts
import { of } from 'rxjs';

const source = of(3, 2, 1);

// Deprecated
source.subscribe(
  null,
  null,
  () => console.log('Complete. Cookie time.')
);

// Recommended
source.subscribe({
  complete: () => console.log('Complete. Cookie time.')
});

// ---

// Deprecated
source.subscribe(
  null,
  error => console.error(error),
  () => console.log('Complete. Cookie time.')
);

// Recommended
source.subscribe({
  error: error => console.error(error),
  complete: () => console.log('Complete. Cookie time.')
});

// ---

// Deprecated
source.subscribe(
  value => console.log(value),
  null,
  () => console.log('Complete. Cookie time.')
);

// Recommended
source.subscribe({
  next: value => console.log(value),
  complete: () => console.log('Complete. Cookie time.')
});
```

One thing you might have noticed is that by using the “`observer`” object, you can specify only the callbacks you’re interested in. Yes, it’s true. And it’s quite flexible. No more `null` (`undefined`)!

### Deprecate `null` parameter signatures for `tap`

([PR](https://github.com/ReactiveX/rxjs/pull/4202) that introduced the deprecation)

Did you know that `tap` can take `next`, `error` and `complete` callbacks? Honestly, I didn’t. I always thought `tap` takes only one function. So seeing this deprecation surprised me a bit but in a positive way because I discovered something new.

Anyway, since `tap` takes the same type of callbacks as `subscribe`, that means the deprecation is the same as well.

Because of that, I’m not going to repeat the same examples from above. Instead, I’m going to show you just one. You can figure out the rest yourself ([StackBlitz](https://stackblitz.com/edit/rxjs-deprecated-null-tap)):

```ts
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

const source = of(3, 2, 1);

source.pipe(
  // Deprecated
  tap(null, null, () => console.log('Complete. Cookie time.'))
).subscribe(...);

source.pipe(
  // Recommended
  tap({
    complete: () => console.log('Complete. Cookie time.')
  })
).subscribe(...);
```

### Deprecate create method

([PR](https://github.com/ReactiveX/rxjs/pull/4080) that introduced the deprecation)

Are you using the `create` method to create new `Observable`s/`Subject`s? The recommended way now is to use the `new` keyword ([StackBlitz](https://stackblitz.com/edit/rxjs-deprecated-create-method)):

```ts
// Deprecated
const o = Observable.create(...);
const s = Subject.create();

// Recommended
const o = new Observable(...);
const s = new Subject();
```

So there it is. Things to keep in mind (and avoid) when working with RxJS.

Hope you learned something new today. I certainly did.

Until next time :)
