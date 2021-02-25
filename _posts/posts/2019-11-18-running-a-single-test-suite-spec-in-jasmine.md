---
leyout: post
title: Running a single test suite/spec in Jasmine
updated: 2021-02-25
category: posts
---

Every developer knows that writing tests is important. To me, tests are like an evidence that I present to my team (or my future self) that the code I’ve written actually works the way I claim it be. This sounds nice and stuff but it wasn’t until recently that I started writing actual tests.

Something I’ve noticed, even with my little testing experience, is that test suites can grow quite big. It’s not long before you end up with a bunch of suites each containing a lot of specs. This can make the execution very slow. And while you’re developing, there’s no point of running all tests, when you only work in single spec file. Then you ask yourself “How can I run only a single suite/spec instead of the whole thing?”

I’ve already asked myself this question. And there’s a simple solution:

### Running a single suite

By using `fdescribe` instead of `describe`, Jasmine will only run that particular test suite.

```js
fdescribe("Awesome feature", function() {
  // ... specs here
});
```

### Running a single spec

By using `fit` instead of `it`, Jasmine will run only that particular spec.

```js
describe("Awesome feature", function() {

  fit("should check whether `true` is really `true`", function() {
    expect(true).toBe(true);
  });

});
```

So here you go. If you need to run a single suite/spec, you can quickly do so by using `fdescribe` and `fit`.

But beware! When you’re done with your tests, don’t commit the `fdescribe`/`fit` because that will give you a false confidence that your tests are successful when in reality it’s only one suite/spec that is being executed.

**Update**: I built a [VS Code extension](https://marketplace.visualstudio.com/items?itemName=dzhavat.test-focus-highlighter) that will visually highlight tests using `fdescribe`/`fit` so you don’t miss them.

<figure>
  <img src="/assets/img/2020/04/27/test-focus-highlighter-demo.gif" alt="Test Focus Highlighter Demo">
  <figcaption><a href="https://marketplace.visualstudio.com/items?itemName=dzhavat.test-focus-highlighter" target="_blank" rel="noopener">“Test Focus Highlighter”</a> in action</figcaption>
</figure>
