---
layout: post
title: Using Observable in APP_INITIALIZER
category: posts
---

An exciting new feature is coming to Angular v12 - support for Observables in [`APP_INITIALIZER`](https://angular.io/api/core/APP_INITIALIZER) 🎉

*Note*: This feature was added in [v12.0.0-next.2](https://github.com/angular/angular/blob/master/CHANGELOG.md#1200-next2-2021-02-24).

Up until now, if you wanted to execute something asynchronous as part of `APP_INITIALIZER`, say an HTTP request to get some configuration, your only option was to convert it to a Promise. Often times using `toPromise()` (which, btw, is [deprecated](https://github.com/ReactiveX/rxjs/commit/aa9ab6b555203529a699b3a79531a57b7d78fefa) in the upcoming RxJS v7).

This is no more! In v12 you will be able to directly return an Observable. Let’s see how:

```ts
import { APP_INITIALIZER, FactoryProvider } from '@angular/core';
import { ConfigService } from "./config.service";

function loadConfigFactory(configService: ConfigService) {
  // Easy as pie 🥧
  return () => configService.getConfig(); // 👈

  // How you might've done it “before”
  // return () => configService.getConfig().toPromise();
}

export const loadConfigProvider: FactoryProvider = {
  provide: APP_INITIALIZER,
  useFactory: loadConfigFactory,
  deps: [ConfigService],
  multi: true
};
```

An important thing to note is that the Observable **must complete**, otherwise the bootstrap process will not continue.

Now, place the `loadConfigProvider` variable in the `providers` array of a Module and everything should be working fine. Check out this [Stackblitz](https://stackblitz.com/edit/angular-ivy-vv7v74?devtoolsheight=33&file=src/app/app-initializer/app.initializer.ts) to see it in action.

Oh, and don’t forget to add error handling to that request. 😎

Thanks to [Yadong Xie](https://twitter.com/yadong_xie) for this wonderful [contribution]((https://github.com/angular/angular/pull/33222)).