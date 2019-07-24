---
layout: post
title: Quickly switching between branches
updated_date: 2019-07-24
---

It seems like my post from yesterday about [getting productive with `git checkout`](https://dzhavat.github.io/2019/07/22/getting-productive-with-git-checkout.html) resonated with a lot of people. Some even wrote to tell me that they found the tip useful. Hopefully they will use it in their work as well.

Right now I’m sitting in the train on my way home and have a bit of time for another tiny tip. It’s something very simple and easy to do but at the same time gives me joy every time I use it. It’s how I switch between branches.

Say I’ve just switched to `new-feature` from `master`. I’ve done some work there and want to go back. They usual way to do this is:

```bash
git checkout master
```

Turns out, if I use `-` (dash) instead of the branch name, `git` will switch to the branch I’ve last visited. So the above becomes:

```bash
git checkout -
```

Running the same command again will bring me back to `new-feature`. Obviously, using this command will only switch between these two branches. If I want to go to a third one, I still need to write its name.
