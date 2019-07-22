---
layout: post
title: "Getting productive with git checkout"
---

As a developer, I use [git](https://git-scm.com/) on a daily basis. It has become an essential tool for my work. It‘s great and I love it.

I also enjoy interacting with it directly in the Terminal. There‘s something magical in writing a command and seeing it do something. I‘ve tried using [GitHub Desktop](https://desktop.github.com/) for some time but always come back to the Terminal.

### The problem

There‘s one command, though, that I used to like and hate at the same time. It‘s `git checkout`.

I like it because of its simplicity and effectiveness. With it, I can create a new branch and switch to it all at once. Just like this:

```bash
git checkout -b new-feature
```

Beautiful.

But, in some cases, I hated it too because of the way it works. Using it as above creates a branch that is based off of the one I‘m currently on and that isn‘t something I always want.

Here‘s a use case that I might have during my work.

Say I‘m on a `new-feature` branch and have some changes, not related to the current task, I want to transfer to a new branch. Simply using `git checkout -b new-awesome-feature` will not help me because all commits made thus far will follow as well. In those scenarios my workflow was:

1. Stash everything.
2. Switch to the branch I want to base the new one off.
3. Use `git checkout` command to create a new branch and switch to it.
4. Pop the changes from the stash and continue working with them.

In code that looks like this:

```bash
git stash
git checkout master
git checkout -b new-awesome-branch
git stash pop
```

Definitely not the best workflow. Is there a way to improve this?

### The solution

About a month ago I decided to see if I could streamline this process because I wasn‘t quite happy with its current form. So I opened the [`git checkout`](https://git-scm.com/docs/git-checkout) docs and started to dig in. Fortunately, the solution was right there! Among the many options on that page, there‘s one called [`<start_point>`](https://git-scm.com/docs/git-checkout#Documentation/git-checkout.txt-ltstartpointgt). By using it, I can specify a starting point for the new branch. It says that I can use “*the name of a commit*” but there‘s actually more to it. Following the link to [`git branch`](https://git-scm.com/docs/git-branch) reveals that ”[[`<start-point>`](https://git-scm.com/docs/git-branch#Documentation/git-branch.txt-ltstart-pointgt)] ***may be given as a branch name, a commit-id, or a tag***”. This was exactly what I was looking for!

So now, whenever I want to transfer changes to a new branch that must have a different starting point than the current one, I use:

```bash
git checkout -b <branch-name> <start-point>
```

All four steps from above are down to just one! Pure enjoyment!

Ever since I found this, I‘m at peace with the `checkout` command. I live it even more. Hope you do as well!

<div class="text-center">
  <figure>
    <img src="/assets/img/lightbulb.svg" alt="A lightbulb">
    <figcaption>My lightbulb moment | <a href="https://www.smashingmagazine.com/2017/12/32-friendly-office-icons/">Source</a></figcaption>
  </figure>
</div>
