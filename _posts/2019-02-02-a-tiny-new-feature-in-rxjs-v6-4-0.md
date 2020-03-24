---
layout: post
title: A tiny new feature in RxJS v6.4.0
last_updated: 2019-07-25
---

I’ve been following the development of RxJS over the last few months. It’s exciting to see how the library evolves. So seeing the [release](https://github.com/ReactiveX/rxjs/blob/master/CHANGELOG.md#640-2019-01-30) of this new version made me curious to see what’s new.

In this short post I’d like to share a small improvement that was made to the [`range`](https://rxjs.dev/api/index/function/range) function.

If you’ve used the `range` function before, you know that you have to pass two arguments in order to create an Observable that emits a sequence of numbers.

Here’s a quick refresh on how it works ([StackBlitz](https://stackblitz.com/edit/range-two-arguments?devtoolsheight=60)):

```ts
import { range } from 'rxjs';

const numbers = range(0, 5);
numbers.subscribe(x => console.log(x));

// Output:
// 0
// 1
// 2
// 3
// 4
```

Now, here’s the new part.

As of v6.4.0, the `range` function can also accept only one argument. In this case, the range will start from zero and will emit until it reaches the specified number.

So the above example can be shorten like this ([StackBlitz](https://stackblitz.com/edit/range-one-argument?devtoolsheight=60)):

```ts
import { range } from 'rxjs';

const numbers = range(5);
numbers.subscribe(x => console.log(x));

// Output:
// 0
// 1
// 2
// 3
// 4
```

So there it is. A small improvement that makes it a bit easier to create a range of numbers.
