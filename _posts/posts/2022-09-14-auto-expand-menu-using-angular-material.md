---
layout: post
title: Auto-expand menu using Angular Material
category: posts
updated: 2022-09-21
---

This post is going to be a bit longer than usual so bear with me 🙂

I was working on a task at work where one of the requirements was to make a menu auto-expand whenever the user navigates to a sub-page that is part of a menu group. To give you a visual idea, take a look at the following video:

<video controls>
  <source src="/assets/img/2022/09/14/final-demo.mp4" type="video/mp4">
</video>

Pages 3 and 4 are grouped under “Nested menu” and the menu auto-expands when the user navigates to one of those pages.

Looks nice, doesn’t it? 😎

In this post I’ll show you how I built it. It’s not hard to achive but there’s one disclaimer.

The disclaimer: The solution I’m going to share in this post is specific to our components architecture. If you want to achieve the same in your project, the final solution might be different. So let me tell you a bit more about our setup before diving into the code.

### Components architecture

The application I’m working on is made up of two parts:

1. Application specific components
2. Design System components

#### Design System components

As you might’ve guessed it, the Design System consists of small components focused on particular UI needs. They are used in the application.

As part of the Design System, we’ve got components like `nav-list` and `nav-list-item`, and an `expand-on-active-link` directive where the real magic happens 🪄

##### `nav-list-item` component

This component is a wrapper around `mat-list-item` from Material and has two requirements:

1. Should support internal links
2. Should support external links

The component class has a `link` Input and some logic that decides whether the link is internal or external. That’s not important for this post but you can see it in the final GitHub repo.

Here’s its template at this point:

```html
<!-- nav-list-item.component.html -->
<a
  *ngIf="isExternalLink; else internalLink"
  mat-list-item
  mat-ripple
  [href]="link"
  [attr.target]="target"
  ><ng-container *ngTemplateOutlet="templateContent"></ng-container
></a>

<ng-template #internalLink>
  <a mat-list-item mat-ripple [routerLink]="link" routerLinkActive="active"
    ><ng-container *ngTemplateOutlet="templateContent"></ng-container
  ></a>
</ng-template>

<ng-template #templateContent>
  <ng-content></ng-content>
</ng-template>
```

##### `nav-list` component

`nav-list` is a wrapper around `mat-nav-list` from Material. The component has an `expandable` Input property that, when set to `true`, places a `mat-nav-list` (and its projected content) inside a `mat-expansion-panel`, otherwise it displays `mat-nav-list` directly.

Here’s its template at this point:

```html
<!-- mat-nav-list.component.html -->
<ng-container *ngIf="expandable; else navListTemplate">
  <mat-expansion-panel class="mat-elevation-z0">
    <mat-expansion-panel-header>
      <mat-panel-title>{% raw %}{{ title }}{% endraw %}</mat-panel-title>
    </mat-expansion-panel-header>
    <ng-container *ngTemplateOutlet="navListTemplate"></ng-container>
  </mat-expansion-panel>
</ng-container>

<ng-template #navListTemplate>
  <mat-nav-list><ng-content></ng-content></mat-nav-list>
</ng-template>
```

We’ll come back to the `expand-on-active-link` directive later.

#### Application specific components

The application specific components is where components from the Design System are used.

### `sidebar-nav` component

The component simply puts `nav-list` and `nav-list-item` together. Its template is as follows:

```html
<!-- sidebar-nav.component.html -->
<nav-list>
  <nav-list-item link="/page-1">Page 1</nav-list-item>
  <nav-list-item link="/page-2">Page 2</nav-list-item>
  <nav-list-item link="https://angular.io/">Angular</nav-list-item>
</nav-list>

<nav-list [expandable]="true" [title]="'Nested menu'">
  <nav-list-item link="/page-3">Page 3</nav-list-item>
  <nav-list-item link="/page-4">Page 4</nav-list-item>
</nav-list>
```

From the code above, the first `nav-list` displays a list of links while the second `nav-list` displays an expandable list of links grouped under the “Nested menu” title. Demo time ⌚

<video controls>
  <source src="/assets/img/2022/09/14/no-auto-expand-functionality.mp4" type="video/mp4">
</video>

The expandable menu must be opened manually. Any highlighted menu item is hidden until the menu is expanded which can be confusing for the user. We want to fix that by adding auto-expand capabilities. Let’s see how.

### Making the menu auto-expand

First let’s define some requirements:

1. An expandable menu should automatically expand when the user navigates to a sub-page that is part the menu.
2. An already expanded menu should stay open when the user navigates to another top level page.

There are probably a few solutions here. One could be to listen for the [`NavigationEnd`](https://angular.io/api/router/NavigationEnd) router event and somehow figure out which `nav-list` to expand based on routes. Another could be to listen for the [`isActiveChange`](<(https://angular.io/api/router/RouterLinkActive#properties)>) event on each [`routerLink`](https://angular.io/api/router/RouterLink) and expand the closest `nav-list`. This is the approach I used.

So there are a few changes that needs to be made.

#### Modifying the `nav-list-item` component

Remember how this component supports internal and external links? Well, each internal link uses the `routerLink` directive, which conveniently has an `isActiveChange` Output property that emits `true` every time a link becomes active and `false` when it becomes inactive. For now we’ll simply forward the emitted value to another Output property on the `nav-list` component class. We’ll see why later.

So the component class and its template now look like this:

```html
<!-- nav-list-item.component.html -->
<!-- ... -->
<a [routerLink]="link" (isActiveChange)="isActive.emit($event)" ...>...</a>
```

```ts
// nav-list-item.component.ts
@Component({
  // ...,
  selector: 'nav-list-item',
})
export class NavListItemComponent {
  // ...

  @Output() isActive = new EventEmitter<boolean>();
}
```

#### Modifying the `nav-list` component

What we want to do here is query the template for all the projected `nav-list-item` components. We can use the `@ContentChildren` decorator for that.

```ts
// nav-list.component.ts
@Component({
  // ...
  selector: 'nav-list',
})
export class NavListComponent {
  // ...

  @ContentChildren(NavListItemComponent)
  navListItemComponents: QueryList<NavListItemComponent> | null = null;
}
```

Once we have all `nav-list-item` components we’re going to send them to a custom directive (shown below) that will listen for the `isActive` event on each link within a sub-menu and expand the related `mat-expansion-panel` component in case any of the links emit `true`.

Let’s modify the `nav-list` template first, then we’ll look at the custom directive.

```html
<!-- nav-list.component.html -->
<!-- ... -->
<mat-expansion-panel
  expandOnActiveLink
  [navListItemComponents]="navListItemComponents"
  ...
>
  <!-- ... -->
</mat-expansion-panel>
```

As you can see, a custom `expandOnActiveLink` directive is added only on the `mat-expansion-panel`. The directive has one Input called `navListItemComponents` which takes a list of `nav-list-item` components.

#### `expand-on-active-link` directive

Here’s the power of Angular’s directives. When you add a directive to a component, you can inject an instance of that component in the directive’s `constructor`. We’re going to use that for our advantage.

The plan is to inject an instance of [`MatExpansionPanel`](https://material.angular.io/components/expansion/api#MatExpansionPanel) in the directive and use its `open` method to expand the panel whenever one of the projected `nav-list-item` components emits `true` from its `isActive` Output.

Let’s first see the directive, then we’ll talk about the code:

```ts
// expand-on-active-link.directive.ts
@Directive({
  selector: '[expandOnActiveLink]',
  exportAs: 'expandOnActiveLink',
  standalone: true,
})
export class ExpandOnActiveLinkDirective implements AfterContentInit {
  @Input()
  navListItemComponents: QueryList<NavListItemComponent> | null = null;

  constructor(private panel: MatExpansionPanel) {}

  ngAfterContentInit(): void {
    const navListItems = this.navListItemComponents?.toArray();

    if (navListItems) {
      from(navListItems)
        .pipe(
          mergeMap((item) => item.isActive),
          filter((isActive) => isActive)
        )
        .subscribe(() => {
          // Looks like there’s a bug in `mat-drawer` component
          // that prevents `mat-expansion-panel` from expanding
          // This littl fella fixes it :)
          setTimeout(() => this.panel.open(), 0);
        });
    }
  }
}
```

A few things to note here. First, `navListItemComponents` are accessed in the [`ngAfterContentInit`](https://angular.io/api/core/AfterContentInit) lifecycle hook because [`ContentChildren`](https://angular.io/api/core/ContentChildren) queries are set right before it. Second, the [`from`](https://rxjs.dev/api/index/function/from) function takes an array of `nav-list-item` components and sends each component to the [`mergeMap`](https://rxjs.dev/api/index/function/mergeMap) operator. `mergeMap` picks up the `isActive` Output property of each component and merges their events into a single stream. The `filter` operator afterwards makes sure that only `true` events will continue down the stream. At the end, the injected `panel` instance is used to open the `MatExpansionPanel` component. `setTimeout` is used because at the time of this writing, apparently there’s a bug in Material that prevents `mat-expansion-panel` from expanding if it is placed inside a `mat-drawer` 🤷‍♂️.

### Final demo

Wow, that was a lot! Here’s a final [StackBlitz demo](https://stackblitz.com/github/dzhavat/angular-material-auto-expand-sidebar-menu?file=src/app/sidebar-nav.component.ts). Also a [GitHub repo](https://github.com/dzhavat/angular-material-auto-expand-sidebar-menu).

<div id="stackblitz-demo"></div>

### Conclusion

I hope you liked this post. It’s very specific to a particular component setup but an interesting challenge nonetheless.

Oh, but we’re not done yet! This is the part where **you** come in. Do you have a suggestion for improving the solution? What can be done differently? Let me know on [Twitter](https://twitter.com/dzhavatushev).

<script src="https://unpkg.com/@stackblitz/sdk@1/bundles/sdk.umd.js"></script>
<script>
  StackBlitzSDK.embedGithubProject(
    'stackblitz-demo',
    'dzhavat/angular-material-auto-expand-sidebar-menu',
    {
      clickToLoad: true,
      newWindow: false,
      height: 500,
      view: 'preview',
      openFile: 'src/app/sidebar-nav.component.ts'
    });
</script>
