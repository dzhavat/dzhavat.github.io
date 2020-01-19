---
layout: post
title: Adding an RSS feed to GitHub Pages 
---

Yesterday I decided to add an RSS feed to this blog. I hoped that it was going to be easy since the blog is build with Jekyll and hosted on GitHub Pages. There must be something already build-in, right? 

Well, it turned out that there was! And the setup was a piece of cake 🍰

Here are the steps that I took:

* Opened the `_config.yml` file and added the following lines:

```yml
plugins:
  - jekyll-feed
title: Dzhavat Ushev’s blog
description: Welcome to my blog
author: Dzhavat Ushev
```

Apparently, GitHub Pages support a [list of plugins](https://pages.github.com/versions/) but not all of them are enabled by default. [`jekyll-feed`](https://github.com/jekyll/jekyll-feed) is one of them. To enable it, the only thing I had to do was add it to `plugins` array in the `_config.yml` file.

After pushing this to GitHub, the site was rebuild and a `feed.xml` file was generated. I could access at `site.github.io/feed.xml`.

The properties `title`, `description` and `author` are optional. I added them because I wasn’t happy with the defaults. For more settings, check out the [`jekyll-feed`](https://github.com/jekyll/jekyll-feed) repo.

* The next step was to add this line in the `head` of all HTML layout files:

```html
<link rel="alternate" type="application/atom+xml" title="\{\{ site.title \}\}" href="/feed.xml">
```

This helps if someone wants to subscribe to my blog using a feed reader, like [Feedly](https://feedly.com).

* The final step was to make a link to the feed that is accessible from each page. In my case this looked like this:

```html
<a class="btn btn-rss" href="/feed.xml" target="_blank">RSS</a>
```

That’s it! This took me just a few minutes to figure this out and now I have an [RSS feed of my posts](https://dzhavat.github.io/feed.xml). Subscribe if you want to read them. 😊