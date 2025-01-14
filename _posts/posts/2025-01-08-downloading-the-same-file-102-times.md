---
layout: post
title: Downloading the same file 102+ times
category: posts
updated: 2025-01-14
---

Have YOU ever tried downloading the same file 102+ times in your favorite browser? Do you know what happens on the 102nd time? 🙃

I do. The answer is ... it depends 😋 It varies between browsers and it’s a bit of a surprise.

Before I show you the screenshots, let me first tell you a short story about how I ended up in the _“lets-download-this-file-102-times”_ rabbit hole so bear with me.

I work as a software developer and one day I got a message from a colleague asking something about a new feature. She sent me a link to an issue. There was a screenshot that caught my attention. It looked very much like the one below.

<figure>
  <img src="/assets/img/2025/01/08/list-of-files-in-download-folder.webp" alt="">
  <figcaption>List of recently downloaded files similar to the screenshot in our project</figcaption>
</figure>

At the time the file’s name was hardcoded to _“Report.zip”_. So seeing _“Report.zip”_, _“Report (1).zip”_ or _“Report (42).zip”_ was to be expected. Instead of a counter, I was suprised to see a timestamp. Where did that come from? It was absolutely not in the code. My colleague didn’t manually add it either. Something was not right. And from here on the rabbit hole got deeper and deeper. 🐰

_“A browser setting!”_ - I thought. It was rulled out quite quickly because she didn’t remember changing any settings. We were looking in Edge because that’s the browser she uses. Besides, such a setting does not exist, I later found out.

_“Well, then maybe the browser added it automatically. But at what point?”_ I started searching on Google, going through different web pages, StackOverflow posts and forums. The more I searched, the more curious I became to figure this out. Then finally - FINALLY - [a reply to a Reddit post](https://www.reddit.com/r/techsupport/comments/t49u0p/comment/jgldchp/) gave me a pretty strong hint.

But was that still the case? There was only one way to find out. 🚀

Fired up Edge and started downloading.

1, 2, 3, ... 10, ... 42, ... 99 times.

Then something magical 🪄 happened the 102nd time! Instead of bumping a number, Edge added a timestamp 😯 Bingo! 🎉 The mystery was solved. That explained it.

So to make this more scientific, and for the purpose of this post, I decided to repeat the exercise in other browsers. Here are some screenshots.

### Edge

<figure>
  <img src="/assets/img/2025/01/08/recent-download-history-Edge.webp" alt="">
  <figcaption>Downloading the same file 102+ times in Edge</figcaption>
</figure>

### Chrome

<figure>
  <img src="/assets/img/2025/01/08/recent-download-history-Chrome.webp" alt="">
  <figcaption>Downloading the same file 102+ times in Chrome. Same as Edge</figcaption>
</figure>

### Firefox

Firefox just continues with bumping the counter. No timestamp here. Also note that there’s no space between the file’s name and the counter in parenthesis, as is the case in Edge/Chrome.

<figure>
  <img src="/assets/img/2025/01/08/recent-download-history-Firefox.webp" alt="">
  <figcaption>Downloading the same file 102+ times in Firefox</figcaption>
</figure>

---

### Update 2025-01-14

After publishing this post I got curious about the behaviour in Edge/Chrome. Since both browsers are Chromium-based, which is open source, I could, in theory, just look it up in the code. I didn’t know what to look for. So I [asked on Bluesky](https://bsky.app/profile/dzhavat.bsky.social/post/3lfngxmjkzs2f). Kevin Doyon [replied with a link](https://bsky.app/profile/kevindoyon.com/post/3lfnkc5rr5s2g) to a method which is responsible for generating a unique filename. Using the [“Blame”](https://github.com/chromium/chromium/blame/f48040f342e02408247e2d0644326380e1d08154/components/download/internal/common/download_path_reservation_tracker.cc#L157) button at the top of the file revealed where each line of code came from. That led me to [this commit](https://github.com/chromium/chromium/commit/e40c631a5f311d449e8c6e136f0d70e5d548b987) which describes why the timestamp is added to the filename.

Seems like this is the end of it. Finally peace 🕊️

<figure>
  <img src="/assets/img/2025/01/08/commit-description-explaining-why-timestamp-is-used-in-filename.webp" alt="">
  <figcaption>Commit description explaining why timestamp is used in filename</figcaption>
</figure>

---

What a TIL!

Thanks for reading thus far. Hope you learned something new. See you in another post 😊

---

P.S. If you want to try it yourself, I’ve prepared [a zip with an empty text file](/assets/other/empty.zip). Go ahead and download it. 102 times, of course.

Or you can quickly put together a simple demo by linking to a local file.

```html
<a href="./fancy.zip" download>Download</a>
```
