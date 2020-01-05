---
layout: post
title: Getting started with contributing to RxJS docs
last_updated: 2020-01-05 
---

I use RxJS a lot during my work. One great place to learn more about it is, of course, the [official docs](https://rxjs.dev/). I visit them multiple times a day to look up things. This includes stuff like operators, Observable creation functions, descriptions, marble diagrams, signatures, examples and so on. The examples in particular are quite useful because they help me understand how something is working in practice.

By looking at all that content, I sometimes notice small things that can be improved. It might be a missing dot, a typo, a duplicated word, an outdated example, an extra import, you name it.

I call these “small opportunities”. They give me a reason to get involved with the project and give something back to the community. Sending a fix takes just a few minutes but it improves the state of the docs for everyone. And I certainly feel happy when my pull request (PR) gets merged!

Are you motivated to contribute to RxJS, but feel overwhelmed by it and don’t know where to start? The docs are a good place. Have you come across something recently that caught your attention? Maybe that’s your “small opportunity”! Did you consider sending a fix? If not immediately then later, when you have a few spare minutes. It doesn’t take long.

To help you with that, here’s a quick guide on how to get started.

## Running the docs locally

1. Fork the project and clone it to your machine.
2. Open a PowerShell/Terminal window and navigate to `rxjs/docs_app` folder.
3. Run `npm run setup` to install the dependencies and generate the docs.
4. Run `npm run start` to start a development server.

At this point, you can open the docs by navigating to `http://localhost:4200` in your browser. Nice!

Now on to finding the thing you wanted to improve...

## Where to make your change?

The RxJS docs are a combination of two things:

1. The **API docs** which are generated directly from source code. The source code lives under `rxjs/src`. If you want to change something related to stuff like [`of`](https://rxjs.dev/api/index/function/of), [`from`](https://rxjs.dev/api/index/function/from), [`switchMap`](https://rxjs.dev/api/operators/switchMap), etc., look here. The actual documentation is in the form of a comment, containing JSDoc tags and some content. 
2. **General content** like guides, tutorials, marketing materials, etc. This content is spread across different Markdown files each representing a separate page. The files live under `rxjs/docs_app/content`. Pages like [overview](https://rxjs.dev/guide/overview), [installation](https://rxjs.dev/guide/installation), [migration](https://rxjs.dev/guide/v6/migration), [deprecations](https://rxjs.dev/api/deprecations), etc., are part of it.

**Note**: There’s also a `rxjs/docs` folder. This one contains the **old** documentation. Don’t bother changing anything in there.

## Making your change

Now that you know how to run the docs locally and how to identify where to make your change, it’s time to open the file and take action.

This should be straightforward since your goal is to fix something very specific. So go ahead and put that dot, close that bracket, fix that misspelled word, update that example, rephrase that sentence, add that extra line. You can do it!

## Previewing your change

Depending on your change, you might want to see how it looks in the docs. Here’s what I usually do:

1. Stop the dev server, if it’s running.
2. Run `npm run docs` to re-generate the docs.
3. Run `npm run start` to start the dev server again.
4. Open `http://localhost:4200` in the browser.

If this sounds annoying, there’s an `npm run serve-and-sync` command that watches the docs for changes, auto-generates them and runs the dev server all at the same time. Unfortunately this command doesn’t work for me that’s why I use the steps above.

## Preparing to commit

Once you’re done with your changes, it’s a good idea to run a lint check to make sure the build will compile. This is especially important for changes related to the API docs.

Do that by running `npm run lint` from the root `rxjs` folder. If you don’t get any errors, you’re good to go.

## Making a Pull Request (PR)

The lint passes and docs look just about right?

Now create a new branch and commit your changes. Push the branch to your fork. Finally, go to either your fork or RxJS’ repo on GitHub and follow the notification to open a PR.

## Congrats! 🎉

Thanks for taking the time to contribute! You’re making the docs a better place not only for yourself but for everyone else as well. The docs are getting better because of contributions like yours.

You don’t have to fix nasty bugs in order to contribute with something meaningful! So go ahead make that small fix you’ve been thinking about. It’s worth it! And it’s appreciated too!
