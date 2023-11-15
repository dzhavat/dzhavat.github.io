---
layout: post
title: Lint rule for self-closing tags in Angular
category: posts
updated: 2023-11-15
---

Self-closing tags were introduced in [Angular v15.1](https://github.com/angular/angular/blob/main/CHANGELOG.md#compiler-17). This added a small but welcomed improvement to the developer experience (DX) when working with components. This feature allows us to use self-closing tag syntax for components without content or components where the content might be optional.

As a refresher, the self-closing tag syntax looks like this:

```html
<!-- Normal syntax -->
<my-component></my-component>

<!-- Self-closing tag syntax -->
<my-component />
```

After upgrading to Angular v15.1 at work, we started using the self-closing tag syntax here and there but not consistently. There wasn’t really a way to enforce it with a tool, so it was up to the developer to remember it.

Until I recently discovered that [angular-eslint](https://github.com/angular-eslint/angular-eslint) had added a new lint rule in [v16.2](https://github.com/angular-eslint/angular-eslint/releases/tag/v16.2.0) called [`prefer-self-closing-tags`](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin-template/docs/rules/prefer-self-closing-tags.md) that can be used to enforce this syntax partially or throughout a project.

Since we had the `angular-eslint` package already in our `package.json`, the configuration was as simple as adding the rule to an ESLint config file.

A couple of things worth mentioning about our project setup is that we have a monorepo managed by [Nx](https://nx.dev/), where we have two main apps and more than hundred libs (all of which have their own ESLint configs that inherit from root). We ended up adding the lint rule to the root ESLint config.

The configuration itself ended up like this:

```ts
{
  ...
  "files": ["*.component.html"],
  "extends": ["plugin:@nx/angular-template"],
  "rules": {
    "@angular-eslint/template/prefer-self-closing-tags": ["error"]
  }
  ...
},
```

The `*.component.html` pattern used in the `files` array is intentionally like that because we wanted to only target the templates of Angular components and not “regular” HTML files.

Every Angular project has a main `index.html` that is a regular HTML file where a top-level Angular component is included, i.e. `<my-app></my-app>`. Writing `<my-app />` here would mean invalid HTML according to the specification because custom components, which Angular components are, cannot be self-closing. So the pattern above aims to avoid that file from being checked for self-closing tags.

But how are self-closing tags still allowed in the Angular components? Wouldn’t that be invalid too? Well, the Angular compiler still transforms them to their normal syntax during build. So writing `<my-component />` becomes `<my-component></my-component>` after build.

Another thing you probably noticed is that the pattern ends with `.html`. This targets HTML files but what about inline templates? No worries! Even though the pattern specifically targets HTML files, `angular-eslint` checks for self-closing tags in inline templates too.

The best part about this lint rule is that it supports autofix. This means that - after adding the config - you can run your lint command with a `--fix` flag. `angular-eslint` will find all places where self-closing tags can be used, then it will fix your code automatically. You only need to review the changes. Awesome!

If you’re using Prettier in your project, make sure to be on [v2.8.2](https://github.com/prettier/prettier/blob/main/CHANGELOG.md#283) (or later) so Prettier also formats self-closing components correctly.

Self-closing tags in Angular improve the DX by allowing us to write less code. Let Angular do the rest for you.

You now know how to enforce self-closing tags in your Angular project using ESLint. Go ahead and start using them.

See you in the next post 🙂

---

Thanks to [Lars Gyrup Brink Nielsen](https://www.linkedin.com/in/larsgbn/) for reviewing the post.
