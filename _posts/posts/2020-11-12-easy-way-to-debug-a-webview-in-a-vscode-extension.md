---
layout: post
title: Easy way to debug a Webview in a VS Code extension
category: posts
updated: 2021-10-18
---

VS Code’s [Extension API](https://code.visualstudio.com/api) lets you build all sorts of interesting extensions. One example is an extension that uses the [Webview API](https://code.visualstudio.com/api/extension-guides/webview) to display a custom webpage built with HTML, CSS and JavaScript right into the editor.

I’ve used this API for building [my own extensions](https://marketplace.visualstudio.com/publishers/dzhavat) and it’s a lot of fun. But sometimes things can get annoying when trying to debug/inspect a Webview.

One approach I’ve used in the past was to run the extension in debug mode, open the Webview to see how it looks, then go back to the code and make small adjustments in the HTML/CSS/JavaScript. Then repeat the steps. This certainly works but the whole process is tedious and takes a lot of trial and error to get the right results.

Fortunately, there’s an easier way!

VS Code is build with Electron which comes with a Chrome browser built-in. Not only that but Chrome’s DevTools follow along as well! This allows you to debug both VS Code itself and Webviews. Here’s how:

1. Run your extension in debug mode
2. Open the Webview you’d like to debug
3. Press `Ctrl + Shift + P` (Win/Linux), `Cmd + Shift + P` (Mac) to open the command panel
4. Search for the `Open Webview Developer Tools` command

Once you go through the steps, you’ll get an DevTools instance in a separate window. You can use it to select HTML elements, tweak CSS styles or put breakpoints in JavaScript, much like the way you are used to when debug a normal webpage.

**Update**: As of VS Code v1.56 (April 2021 release), it is also possible to debug/inspect Webviews using the standard DevTools (i.e. by running the `Developer: Toggle Developer Tools` command). Read more in the [release notes](https://code.visualstudio.com/updates/v1_56#_easier-inspecting-of-webviews).

That’s all! Happy debugging.

Oh, if you prefer video, I’ve made a short clip showing the steps above.

<iframe width="560" height="315" src="https://www.youtube.com/embed/YSxSzRp6s4o" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
