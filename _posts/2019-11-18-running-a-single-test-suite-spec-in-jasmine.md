---
leyout: post
title: Running a single test suite/spec in Jasmine
last_updated: 2020-04-26
---

Every developer knows that writing tests is important. To me, tests are like an evidence that I present to my team (or my future self) that the code I’ve written actually works the way I claim it be. This sounds nice and stuff but it wasn’t until recently that I started writing actual tests.

Something I’ve noticed, even with my little testing experience, is that test suites can grow pretty fast. It’s not long before you end up with a bunch of suites each containing a lot of specs. This can make the execution very slow. And when you’re developin, there’s no point of running all tests, when you work with a certain single file. Then you ask yourself “How can I run only a single suite/spec instead of the whole thing?”

I’ve already asked myself this question. And there’s a simple solution:

### Running a single suite

This should look familiar.

```js
describe("A suite", function() {
  // ... specs here
});
```

Well, if you use `fdescribe` instead of `describe`, Jasmine will only run that particular test suite.

```js
fdescribe("A suite", function() {
  // ... specs here
});
```

### Running a single spec

The usual stuff here...

```js
describe("A suite", function() {
  it("should check whether `true` is really `true`", function() {
    expect(true).toBe(true);
  });
});
```

But if you use `fit` instead of `it`, Jasmine will run only that particular spec.

```js
describe("A suite", function() {
  fit("should check whether `true` is really `true`", function() {
    expect(true).toBe(true);
  });
});
```

So here you go. If, for whatever reason, you need to run a single suite/spec, you can quickly do so by using `fdescribe` and `fit`. You can find this in the official docs as well. So I’ve definitely not given you the hottest tip out there, but I find it useful. Hope you do as well!

Oh, and before I forget! When you’re done with your tests, don’t commit the `fdescribe`/`fit` because that will give you a false confidence that your tests are successful when in reality it’s only one suite/spec that is being executed.
