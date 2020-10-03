---
layout: post
title: "Tip: Stashing selected files in git"
category: posts
---

One of my favorite git commands is `git stash`. I use it all the time. I like how it helps me clean my working directory but still save my work for later.

One downside of using `git stash`, though, is that it stashes away **all** files. What I need in some cases is to stash only a few selected files or a single directory. I’ve needed this in several occasions but never really tried to research it (yeah, call me lazy).

Until a couple of days ago - that’s how stories unfold - when I finally visited the [official docs for stash](https://git-scm.com/docs/git-stash)! I found an option called `<pathspec>`. This option can be used with the `push` command to specify a path. Git will then stash all files that match the path.

How does it look in practice? Say I have the following files in my working directory:

```bash
js/custom.js
css/custom.css
```

Here are a few use cases I might have:

```bash
# to stash just the `custom.js` file
git stash push js/custom.js

# to stash the `custom.js` file with a custom message
git stash push js/custom.js -m "Best feature ever"

# to stash only the files in the `js` directory
git stash push js/
```

I’m quite happy about discovering this. I’ll definitely use it in my work. Hope you learned something new today as well. 😉

P.S. I’ve created a [Git Cheatsheet extension for VS Code](https://marketplace.visualstudio.com/items?itemName=dzhavat.git-cheatsheet) that can help you with remembering some common git commands.