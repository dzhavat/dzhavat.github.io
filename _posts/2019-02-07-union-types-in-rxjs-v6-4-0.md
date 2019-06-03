---
layout: post
title: "Union types in RxJS v6.4.0"
---

# Union types in RxJS v6.4.0

A few days ago I published a short [post about a tiny new feature in v6.4.0](https://medium.com/@dzhavat/a-tiny-new-feature-in-rxjs-v6-4-0-292a463e27c9) of RxJS. In today’s post, I’m going to take a look at some of the bug fixes, how they made RxJS more flexible and the integration with TypeScript a little better.

If you open the [changelog](https://github.com/ReactiveX/rxjs/blob/master/CHANGELOG.md#640-2019-01-30), you’ll see a list of similar looking lines. Here’s a couple of them:

```
...
from: support passing union types (eb1d596)
...
switchMap: support union type returns (32d35fd)
...
```

There are two things you might notice about those messages:

* Some of them mention Observable creation functions, others — flattening operators
* All of them include the words “union type(s)”

So I thought that by understanding how the fix applied just one of each type, I could understand the rest as well. I was also curious to find out what was the behaviour before the fix and whether the fix was going to impact my code in some way going forward.

One obvious place to look for this kind of information is, of course, a [related PR](https://github.com/ReactiveX/rxjs/pull/4461). Already in the very [first comment](https://github.com/ReactiveX/rxjs/pull/4461#issue-243244247), I found what I needed to know — what was the bug, how to reproduce it and what is the solution.

As it turned out, the bug appeared in cases where an Observable creation function (like `from`) was called with a union typed parameter or when a union type was being returned from the projection function of a flattening operator. (Yeah, it sounds complicated)

(If you are not sure what “union types” means, check out [TypeScript docs](https://www.typescriptlang.org/docs/handbook/advanced-types.html#union-types))

So, let’s have a look at both cases.

## Passing union types to Observable creation function

An example of would be ([StackBlitz](https://stackblitz.com/edit/rxjs-from-example-1)):

```ts
import { from } from 'rxjs';

const arg = Math.random() > 0.5 ? [3, 2, 1] : ['Time to learn!'];

const source$ = from(arg);

source$.subscribe(value => console.log(value));
```

The problem here is that `arg` is of type `number[] | string[]` but `from` expects a single type.

<figure>
  <img src="/assets/union-types-in-rxjs-v6-4-0/example-1.jpg" alt="Code example">
  <figcaption>The compiler is not happy :(</figcaption>
</figure>

How to go around this?

One easy way to trick the compiler would be to make `org` of type `any`. But that eliminates the benefits of having types in first place.

```ts
...
// Don't do this ↓
const arg: any = ...;
...
```

<figure>
  <img src="/assets/union-types-in-rxjs-v6-4-0/example-2.jpg" alt="Code example">
  <figcaption>`value` of type `{ }` doesn’t say much</figcaption>
</figure>

## Returning union types from a flattening operator

An example of would be ([StackBlitz](https://stackblitz.com/edit/rxjs-from-example-2)):

```ts
import { from, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

const source = from([3, 2, 1, 'Time to learn!']).pipe(
  switchMap(x => {
    if (typeof x === 'string') {
      return of(`${x} And it's fun!`);
    }
    
    return of(x);
  })
);

source.subscribe(x => console.log(x));
```

The problem here is that the projection function returns a union type `Observable<string> | Observable<number>` but it expects a single type.

<figure>
  <img src="/assets/union-types-in-rxjs-v6-4-0/example-3.jpg" alt="Code example">
  <figcaption>The compiler is not happy :(</figcaption>
</figure>

How to go around this?

Again, an easy way would be to mark `x` as `any`. But you’ll lose valuable type information. Another way would be to manually specify the function’s return type but that can get complicated depending on what you want to return.

```ts
...
  // No need to do this ↓
  switchMap((x: any) => {
...
```

<figure>
  <img src="/assets/union-types-in-rxjs-v6-4-0/example-4.jpg" alt="Code example">
  <figcaption>What is `any` anyway…</figcaption>
</figure>

## There’s a fix for that! 🎉

In v.6.4.0 there’s no need to rely on `any` tricks! Observable creation functions got smart enough to recognize union types. The same for the projection functions of flattening operators.

So after updating to this new version, removing any `any` and running the code again… Ta-da! 🐣

Observable creation function ([StackBlitz](https://stackblitz.com/edit/rxjs-from-example-3)):

<figure>
  <img src="/assets/union-types-in-rxjs-v6-4-0/example-5.jpg" alt="Code example">
  <figcaption>Types are back :)</figcaption>
</figure>

Flattening operator ([StackBlitz](https://stackblitz.com/edit/rxjs-from-example-4)):

<figure>
  <img src="/assets/union-types-in-rxjs-v6-4-0/example-6.jpg" alt="Code example">
  <figcaption>Types are back :)</figcaption>
</figure>

Voilà! The expected types are back.

But that’s not all! Remember the list of similar looking bug fixes from the [changelog](https://github.com/ReactiveX/rxjs/blob/master/CHANGELOG.md#640-2019-01-30)?

The same fix has been applied to all those functions/operators as well. So `combineLatest`, `from`, `withLatestFrom`, `zip`, `multicast`, `exhaustMap`, `merge`, `catchError`, `switchMap`, and `defer` will, from now on, properly support union types.

Hope you enjoyed this short exploration and learned something new. I certainly did.

Until next time.

<div class="text-center>
  <figure>
    <img src="/assets/rocket.png" alt="A rocket">
    <figcaption>A [rocket](https://www.smashingmagazine.com/2018/02/freebie-hand-drawn-space-icons/).</figcaption>
  </figure>
</div>
