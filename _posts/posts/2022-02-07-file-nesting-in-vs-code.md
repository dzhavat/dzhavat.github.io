---
layout: post
title: File nesting in VS Code
category: posts
---

[VS Code v1.64](https://code.visualstudio.com/updates/v1_64) was released a few days ago and it’s once again packaged with nice new features and improvements. An excitig new feature is the [Side Panel](https://code.visualstudio.com/updates/v1_64#_new-side-panel) that can be opened oposite to the Side Bar, i.e. the “other side of the screen”, giving you the option to have more views open at once. I can see how that can be useful on bigger screens.

Another new feature that catched my interest was the **experimental** support for [file nesting](https://code.visualstudio.com/updates/v1_64#_explorer-file-nesting). This feature lets you visually “nest”/group related files under a “root” file in the same directory. For example, say you have a `main.ts` file and next to it you have `main.js`, `main.d.ts` and `main.js.map`. After enabling the file nesting feature and configuring it, VS Code will visually group the `main.*` files under the `main.ts` file, as shown in the following screenshot:

![Visually nested files in VS Code](/assets/img/2022/02/07/visually-nested-files-in-vs-code.jpg)

You can now “collapse” the `main.ts` file and reduce the “clutter”. Note that the files are still in the same directory, they are just visually “nested” under `main.ts`.

### How to enable and configure file nesting

There are three new settings:

- `explorer.experimental.fileNesting.enabled` - Controls whether file nesting is enabled.
- `explorer.experimental.fileNesting.expand` - Controls whether file nests show as expanded by default.
- `explorer.experimental.fileNesting.patterns` - Controls how files get nested.

Note: The above description is taken from the release blog post.

After you update VS Code to v1.64, file nesting is not enabled by default. Go ahead and do it by toggling the “File Nesting: Enabled” setting. If you do it while you have a project open, you might notice that the files `package-lock.json`, `.npmrc`, `yarn.lock` and `.yarnrc` files get nested under `package.json`. That is because VS Code has a default list of patterns that it uses to nest/group files. The `package.json` pattern is part of that list, as is the `main.ts` example described earlier. Can you find the patterns in the screenshot below?

![File Nesting settings in VS Code](/assets/img/2022/02/07/file-nesting-settings-in-vs-code.jpg)

### Creating your own patters

Well, now you know how file nesting works. I think by using the examples provided in the Patterns list, you can come up your own patters.

In the next section I’m going to show one pattern suitable for Angular developers in particular.

#### Nesting files for Angular developers

When working with Angular components we often follow the [file structure convention](https://angular.io/guide/styleguide#file-structure-conventions) where a component is represented by several similarly named files. For example, next to `button.component.ts`, we might also have `*.component.html|css|scss|spec` and `button.module.ts`. So for a single component we might end up with four or five different files in the same directory. Wouldn’t it be nice to group most if not all of them under the main `*.component.ts` file and declutter the folder? Well, we can certaintly do that now.

Open the file nesting settings and a new pattern under the Patterns list. You can either copy the following example, or modify it to your preferences:

```js
// Item           // Value
"*.component.ts": "$(capture).component.html, $(capture).component.scss, $(capture).module.ts, $(capture).component.spec.ts"
```

VS Code will now visually nest any `*.component.html`, `*.component.scss`, `*.component.spec.ts` and `*.module.ts` files under `*.component.ts`, as seen bellow:

![File nesting for Angular developers](/assets/img/2022/02/07/file-nesting-for-Angular-developers.gif)

I hope you learned a nice little tip. 🎉
