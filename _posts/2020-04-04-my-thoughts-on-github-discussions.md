---
layout: post
title: My thoughts on GitHub Discussions
---

It’s not a secret anymore that GitHub is working on a new feature called “Discussions”. It’s a new place where people can have discussions or ask questions à la StackOverflow. It’s in beta right now and can only be seen in a few selected open source projects like [Tailwind CSS](https://github.com/tailwindcss/tailwindcss/discussions), [Next.js](https://github.com/zeit/next.js/discussions) and [Office 365 CLI](https://github.com/pnp/office365-cli/discussions). There are probably others as well.

<figure>
  <img src="/assets/img/2020/04/04/github-discussions.jpg" alt="GitHub Discussions">
  <figcaption>GitHub Discussions in Tailwind CSS’ repo</figcaption>
</figure>

In this post I’m going to share my initial thoughts and expectations of this feature. As a normal GitHub user, I think it will be interesting to come back to this post in a year and see what has changed. 

Ok, lets start with what I think will be positive about Discussions.

### It can be enabled from Settings

When this feature is released I think it will be disabled by default with the possibility of enabling it from Settings. It doesn’t make sense to have it on for every project.

### It will integrate nicely with the rest of the repo

When users participate in discussions, they will be able to reference issues, pull requests, other discussions, etc. Right now the references go only one way, i.e., they don’t appear on the page being referenced. This will probably be added at some point.

### It will bring the community back to the project

This one is quite important.

Right now the community around a project is scattered around the internet. There’s [Gitter](https://gitter.im/) for chat, [StackOverflow](https://stackoverflow.com/) for help and general questions, forums for discussions, etc. 

With Discussions, we’ll see some of this activity back on GitHub. Instead of asking questions on StackOverflow, people will prefer (and be encouraged to use) Discussions. Instead of Gitter, people can have some of their conversations there as well.

We can already see this with Office 365 CLI. They recently [announced on Twitter](https://mobile.twitter.com/office365cli/status/1243829613282893825) that they will be decommissioning their public Gitter channel in favor of Discussions. I expect more projects to do something similar.

### Issues for bugs and new features, Discussions for everything else

With this new place, we can have such separation. Next.js is already going in that direction. They recently opened an [RFC (Request for Comments) thread](https://github.com/zeit/next.js/discussions/11106) under Discussions, whereas this was under Issues before.

One might argue that feature requests belong to Discussions as well but the current implementation is not ready yet. Issues provide labels and milestones which can be quite helpful to categorize and group stuff.

### It will make the project feel “alive”

It’s a good thing I guess because one of the factors that we use to decide whether a project is still active is how “alive” it feels. If people are engaging, it will mean that the project is still used.

### It will be used for “Thank you” messages (hopefully) 

This might sound unrelated but it actually [comes from GitHub themselves](https://mobile.twitter.com/becca__z/status/1241789221242880007).

A couple of weeks ago I tweeted [an idea for a “Thank you”](https://mobile.twitter.com/dzhavatushev/status/1241619880736182273) page on GitHub where people can share their appreciation for the project. Because we don’t have a specific page for this, many people use the Issues or don’t share at all. Some projects have a [“Thank You” Issue template](https://github.com/xlayers/xlayers/issues/new/choose) for this purpose. There’s a lot of positive words buried in the Issues that deserve to be more visible.

So when Discussions appears in your favorite open source project, be sure to be the first to create the “Thank you” thread. Project maintainers and contributors need to hear these positive words! They make a difference!

### It will encourage more people to contribute

With threads like “First time contributors” or “How to get started”, there’s a really good opportunity to encourage, motivate and help people get involved with the project and open source in general.

---

These are, what I think, the positive sides of Discussions. They sound great. Definitely something many people will appreciate. But what about the negative sides? Will there be any negative consequences of having Discussions enabled?

### It will put more pressure on the maintainers

To be honest, I only have a few open source projects with very little going on around them. So this point is mostly a prediction based on observation rather than an extensive experience as a maintainer.

For a lot of maintainers, working on open source is voluntary and without financial support. This work is usually done in their free time like early in the morning, late in the evening, during lunch breaks or during the weekend. On the other hand, the demand for fixing bugs, releasing new features, answering questions and providing support is constantly there. This puts the maintainers in an unfair position and brings a lot of pressure and stress on them because they are expected to handle this.

What I’ve seen in many open source projects is whenever an issue is opened that looks like a general question or support, the author is asked to take that in another place, usually StackOverflow.

When Discussions arrives, that “other place” will probably be there. With this new activity, the project maintainers will be extra hit because it is still them who will be expected to answer some of these questions or get involved in the discussions whereas this was partially left to the community before. On top of that, they will get notifications for everything that is happening. And you know, if something is going on in your house, you better know about it or at least be aware of it.

Again, this is a prediction. I hope this point will turn out positive.

### It will be confused with Issues

Just like people will be asked to take certain topics in Discussions, they will also be asked to open an Issue from a discussion. This might sound as a natural flow but not everyone will follow it. People generally want solutions to their problems. It doesn’t matter to them where the problem is reported. That’s important only for the maintainers. So they should still keep an eye on Discussions for bug reports. And that just emphasizes the previous point.

---

I’m actually quite excited about Discussions. I think it has the potential to bring the community closer to the project, make the project feel “alive” and increase the engagement. There are a couple of pain points but I’m, optimistic that we can turn them positive. I’m looking forward to it.

What do you think about it?