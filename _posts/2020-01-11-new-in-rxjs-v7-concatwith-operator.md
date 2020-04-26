---
layout: post
title: "New in RxJS v7: concatWith operator"
last_updated: 2020-04-26
---

[RxJS v7-alpha.1](https://github.com/ReactiveX/rxjs/blob/master/CHANGELOG.md#700-alpha1-2019-12-27) was released a couple of weeks ago and while it’s exciting to see v7 slowing coming along, this release came with only one new feature. It’s an operator called `concatWith`.

In this short post I’m going to show you how this operator works.

Unfortunately the only available documentation about `concatWith` right now is in the [source code](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/concatWith.ts). Here’s how it works:

> Emits all of the values from the source observable, then, once it completes, subscribes to each observable source provided, one at a time, emitting all of their values, and not subscribing to the next one until it completes.

Let’s translate this to an example ([StackBlitz](https://stackblitz.com/edit/rxjs-cqhd42)):

```ts
import { of } from 'rxjs';
import { concatWith } from 'rxjs/operators';

const source = of('RxJS', 'is').pipe(concatWith(of('awesome!')));

source.subscribe(x => console.log(x));

// Output:
// RxJS
// is
// awesome!
```

If you’ve used the [`concat`](https://rxjs.dev/api/operators/concat) operator before this might look somehow familiar to you. This is not a coincidence. `concatWith` is actually not a completely new operator. It’s only meant to replace the `concat` operator which is currently marked as **deprecated** and **will be removed in v8**.

There’s one subtle difference between the two, though. `concatWith` **only accepts** inputs of type [`ObservableInput`](https://rxjs.dev/api/index/type-alias/ObservableInput), whereas `concat` can also take a scheduler.

If you want to schedule the observable provided to `concatWith`, you need pass it to the [scheduled](https://rxjs.dev/api/index/function/scheduled) function and also specify a scheduler. ([StackBlitz](https://stackblitz.com/edit/rxjs-vqcyun))

Hope you learned something new. Happy RxJS-ing!

---

Thanks to [Jan-Niklas Wortmann](https://twitter.com/niklas_wortmann) and [Lars Gyrup Brink Nielsen](https://twitter.com/LayZeeDK) for the review.