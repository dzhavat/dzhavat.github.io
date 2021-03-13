---
layout: post
title: Adding an RSS feed to GitHub Pages
updated: 2021-03-13
category: posts
---

Yesterday I decided to add an RSS feed to this blog. I hoped that it was going to be easy since the blog is built with Jekyll and hosted on GitHub Pages. There must be something already build-in, right? 

Well, it turned out there was! The setup was a piece of cake 🍰

Here’s how I did it in just three steps:

#### Step 1

I added the following lines to `_config.yml`:

```yml
plugins:
  - jekyll-feed
title: Dzhavat Ushev Blog
description: Welcome to my blog
author: Dzhavat Ushev
```

GitHub Pages support a [list of plugins](https://pages.github.com/versions/) but not all of them are enabled by default. [`jekyll-feed`](https://github.com/jekyll/jekyll-feed) is one of those. To enable it, the only thing I had to do was add it to `plugins`.

After pushing this to GitHub, the site was rebuild and a `feed.xml` file was generated. I could access it at `<website-name>.github.io/feed.xml`.

The properties `title`, `description` and `author` are optional. I added them because I wasn’t happy with the defaults. For more settings, check out the [`jekyll-feed`](https://github.com/jekyll/jekyll-feed) repo.

#### Step 2

The next step was to add this line in the `head` of all HTML layout files:

```html
<link rel="alternate" type="application/atom+xml" title="{% raw %}{{ site.title }}{% endraw %}" href="/feed.xml">
```

Note: `{% raw %}{{ site.title }}{% endraw %}` refers to the `title` property set  in `_config.yml`.

This helps if someone wants to subscribe to my blog using a feed reader, like [Feedly](https://feedly.com).

#### Step 3

The final step was to make a link to the feed that is accessible from each page. In my case this looked like this:

```html
<a class="btn btn-rss" href="/feed.xml" target="_blank">RSS</a>
```

That’s it! This took me a few minutes to figure this out and now I have an [RSS feed of my posts](https://dzhavat.github.io/feed.xml). Subscribe if you want to read them. 😊