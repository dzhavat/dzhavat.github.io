---
layout: post
title: Incremental migration to Angular’s new control flow syntax
category: posts
---

Angular v17 introduced [a new control flow syntax](https://blog.angular.io/meet-angulars-new-control-flow-a02c6eee7843) that is built into the framework. The new syntax is about so-called “blocks” which are available in the template out of the box - meaning you don’t have to import anything to use them. These blocks are `@if`, `@else if`, `@else`, `@for`, `@empty`, `@switch`, `@case` and `@default`. I’m not going to explain them in details here. You can read more about each block in the [official documentation](https://angular.io/guide/control_flow).

The new syntax is currently in developer preview. Once it becomes stable, it’ll most likely become the recommended way to handle control flow in the template, thus deprecating the `NgIf`, `NgFor` and `NgSwitch` directives.

But despair not! Both options will be available for at least a few major versions, so nothing is going away overnight. You have planty of time to plan the migration.

Speaking of which, the Angular team has an official schematic to help you migrate 🎉

It’s also quite easy to run ...

```shell
# Using Angular CLI
ng g @angular/core:control-flow

# Using Nx
nx g @angular/core:control-flow
```

The command proceeds to ask for a path to be migrated. The default is `./` (root) but you can set it to whatever you want. **So you can either migrate the whole workspace at once or incrementally — step-by-step — one folder, feature or domain at a time.**

<figure>
  <img src="/assets/img/2024/02/28/angular-schematic-to-migrate-to-the-new-control-flow-syntax.webp" alt="">
  <figcaption>Angular schematic to migrate to the new control flow syntax</figcaption>
</figure>

**Important**: The schematic works amazingly well but you should absolutely go through the changes afterwards to be sure that everything is at it should.

Now go ahead and start using the new syntax. It’s great, I promise.

Thanks for reading. See you in the next post 😎
