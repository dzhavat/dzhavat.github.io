---
layout: post
title: Easy way to debug a webview in a VS Code extension
category: posts
---

VS Code’s [Extension API](https://code.visualstudio.com/api) lets you build all sorts of interesting extensions. One example is an extension that uses the [Webview API](https://code.visualstudio.com/api/extension-guides/webview) to display a custom webpage built with HTML, CSS and JavaScript right into the editor.

I’ve used this API for building [my own extensions](https://marketplace.visualstudio.com/publishers/dzhavat) and it’s a lot of fun. But sometimes things can get annoying when trying to debug a webview. 

One approach I’ve used in the past was to run the extension in debug mode, open the webview to see how it looks, then go back to the code and make small adjustments in the HTML/CSS/JavaScript if something looks wrong. Then repeat the steps. This certainly works but the whole process is tedious and takes a lot of trial and error to get the right results.

Fortunately, there’s an easier way!

VS Code is build with Electron which comes with a Chrome browser built-in. Not only that but Chrome’s DevTools follow along as well! This allows you to debug both VS Code itself and webviews. Here’s how:

1. Run your extension in debug mode
2. Open the webview you’d like to debug
3. Press `Ctrl + Shift + P` (Win/Linux), `Cmd + Shift + P` (Mac) to open the command panel
4. Search for the `Open Webview Developer Tools` command

That’s all! Once you do that, you’ll get an instance of DevTools in a separate window. You can use it to select HTML elements, tweak CSS styles or put breakpoints in JavaScript, much like the way you are used to debug a normal webpage.

That’s all! Happy debugging. Oh, and if you prefer video, I’ve made a short clip of the steps above.

<iframe width="560" height="315" src="https://www.youtube.com/embed/YSxSzRp6s4o" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>