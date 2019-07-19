---
layout: post
title: "Making HTTP requests inside Azure Functions"
updated_date: 2019-07-14
---

I have an idea for a feature that I want ot add to this blog. It‘s something I wanted to try but never found the time. That‘s probably how most ideas are. Anyway, this past weekend I finally found a couple of hours.

The feature is something I‘m going to ~~implement soon~~. <strong>It‘s already implemented!</strong> Check out the [front page]({{ site.url }}). It‘s about showing some information from a third-party service. In order to call the service, I have to make an HTTP request and include some tokens. Obviously, it‘s not safe doing that directly from the front-end since the tokens are supposed to be private. What I need to do instead is expose my own endpoint on a server and call the service from there.

My first choice was to use Node.js. I made it work locally but then realized that I had to host it somewhere, make sure it‘s running, etc. It was too much hasle. At this point I decided to give Azure Functions a try. They seemed to be a good fit for this case. I hadn‘t tried them before so it was also an opportunity to experiment with something new. Yay!

I signed up for Azure and in just 5 min everything was up and running. Except that the HTTP request to the third-party didn‘t work! Then I spent the good couple of hours trying to figure out why. Eventually, I [“complained”](https://mobile.twitter.com/dzhavatushev/status/1147740207988596736) about it on Twitter and, with some help, managed to make it work.

Here‘s an example of the code I ended up with. I‘ll go through some key points underneath:

```ts
const fetch = require("node-fetch");

module.exports = async function (context, req) {
    const accessToken = '...';

    const url = 'https://api.github.com/user';
    const headers = {
        'Authorization': `token ${accessToken}`
    };

    await fetch(url, { headers })
        .then(response => response.json())
        .then(response => context.res.json(response));
};
```

1. I‘m using [`node-fetch`](https://www.npmjs.com/package/node-fetch) to make the request. The reason for this is because it has an API similar to the [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) that runs in the browser. You can use whatever other package you like or even the native http(s) implementation in Node.js.
2. It‘s **important** to note that the exported function is marked as `async`. This was something I overlooked initially and that was probably the reason for wasting some precious time. Having the `async` in there means that you don‘t have to call `context.done()` to indicate that the function has completed. This happens implicitly. I found a lot of code examples on the Internet that don‘t declare the export function as `async`. In this case, `context.done()` **must be called**. Generating Azure Functions v2.x automatically declares them as `async`. 
3. Using the `async`/`await` combination is a [recommended pattern](https://docs.microsoft.com/en-us/azure/azure-functions/functions-reference-node#use-async-and-await). Another alternative would‘ve been to return the Promise. It would work just fine.
4. `context.res.json(...)` is a nice method for setting both the `Content-Type` to `application/json` and `body` to whatever the response is at the same time.

This was my first experience working with HTTP triggered Azure Functions. Looking back, it‘s really not that complicated. I could‘ve had my endpoint ready in just a few minutes. Now I‘m struggling with Timer triggered functions but that‘s a subject for another post.
