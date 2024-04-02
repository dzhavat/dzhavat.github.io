---
layout: post
title: Creating an empty commit in Git
category: posts
---

Does this sounds familiar - a Continuous integration (CI) pipeline is stuck and you need to push a new commit to restart it?

So now you’re looking for a place where you can make a dummy change like deleting/adding an empty line, adding/deleting a dot in a comment - any change, so you can make a new commit and push it upstream.

“There must be a way to create empty commits” you tell yourself but you’re too busy looking for a place to make that dummy change instead of searching for a solution to your problem.

Well, there is a better way!

Git allows you to create an empty commit by simply adding the `--allow-empty` flag to the `commig` command. Here 👇

```shell
git commit -m "chore: empty commit" --allow-empty
```

Your job is done. 🎉

Thanks for reading. See you in the next post 😎

---

Thanks to my colleague [Morten Hansen](https://twitter.com/mvhmimo) for showing me this tip.
