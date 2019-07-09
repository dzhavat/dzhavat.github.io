---
layout: post
title: "Making HTTP requests inside Azure Functions"
---

## Making HTTP requests inside Azure Functions

{% include published.html %}

I have an idea for a feature that I want ot add to this blog. It‘s something I wanted to try but never found the time. That‘s probably how most ideas are. Anyway, this past weekend I finally found a couple of hours.

The feature is something I‘m going implement soon but what I needed was to make an HTTP call to a third-party service and get some results. Obviously, I can‘t just do that from the front-end since I have to include private keys in the request. What I needed to do instead was to spin up a server, expose an endpoint, call the third-party service from there and return the result.

My first thought was to use Node.js. I made it work locally but then realized that I had to host it somewhere, make sure it‘s running, etc. It was too much hasle. Finally, I decided to give Azure Functions a try. They seemed to be a good fit for this case. I hadn‘t tried them before so it was also an opportunity to experiment with something new. Yay!

I signed up for Azure and in just 5 min everything was up and running. Except that the HTTP request to the third-party didn‘t work! Then I spent the next couple of hours trying to figure out why. Eventually, I [“complained”](https://mobile.twitter.com/dzhavatushev/status/1147740207988596736) about it on Twitter and with some help, managed to find the issue.

Here‘s the code that worked for me. I‘ll also go through some of key points underneath:

```ts
const fetch = require("node-fetch");

module.exports = async function (context, req) {
    const url = "https://api.github.com/users/octocat";

    await fetch(url)
        .then(response => response.json())
        .then(response => context.res.json(response));
};
```

1. I‘m using [`node-fetch`](https://www.npmjs.com/package/node-fetch) to make the request. The reason for this is because it has an API similar to the [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) that runs in the browser. You can use whatever other package you like or even the native http(s) implementation in Node.js.
2. It‘s **important** to note that exported function is marked as `async`. This was something I overlooked initially and that was probably the reason for wasting those precious hours. This means that you don‘t have to call `context.done()` explicitly to indicate that the function has completed. This happens implicitly whenever the exported `async` function completes. I found lot of code examples on the Internet that don‘t declare the export function as `async`. In this case `context.done()` **must be called**. Generating Azure Functions v2.x automatically declares them as `async`. 
3. I‘m using `await` to kick off the request. Another alternative would‘ve been to just return the Promise. It would work just fine.
4. `context.res.json(...)`, as it turns out, is a nice little method for setting both the `Content-Type` to `application/json` and `body` to whatever the response is at the same time.

So this was my first experience working with HTTP triggered Azure Functions. Looking back, it‘s really not that complicated. I could‘ve had my endpoint ready in just a few minutes. Now I‘m struggling with Timer triggered functions but that‘s probably a subject for another post.
