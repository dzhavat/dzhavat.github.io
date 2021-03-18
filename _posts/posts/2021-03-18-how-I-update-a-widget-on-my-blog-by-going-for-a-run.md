---
layout: post
title: How I update a widget on my blog by going for a run
category: posts
---

I enjoy running. Every Sunday morning I put on the shoes and go out for a run. Most weeks I run only once but enjoy every single step. It’s a hobby that I have besides programming.

I’m also a front-end developer. I enjoy writing blog posts and building stuff. But even though I spend a good amount of time programming, I’m more than just a developer.

When I made this blog a couple of years ago, I wanted to highlight that fact by doing something different. I decided to build a small widget that shows my latest run from Strava. I recently expanded it to include an image and some stats to make it look more fun.

<figure>
  <img src="/assets/img/2021/03/18/Strava-widget-on-my-blog.jpg" alt="">
  <figcaption>Strava widget on my blog</figcaption>
</figure>

Ever since I built that widget I’ve been wanting to write a post about it. So in this post I’ll try to summarize the main building blocks and how the whole thing works.

### Step 1 - Going for a run 🏃‍♂️

This is the most enjoyable part. Here’s how it usually goes:

1. I go out for a run and snap a picture
2. I come back home
3. My watch automatically uploads the run to Garmin Connect
4. Strava API gets notified and uploads the run to its servers
5. I upload a picture that I have taken during my run on Strava

<figure>
  <img src="/assets/img/2021/03/18/Step-1-Strava-integration-widget.jpg" alt="">
  <figcaption>Visual representation of the steps in Step 1</figcaption>
</figure>

### Step 2 - Visiting the blog

My part is done. It’s your turn now to visit my blog. When you do that:

1. An HTTP request is send to an Azure Function
2. The Azure Function gets an “access_token” from a database
3. A couple of HTTP requests are send to Strava API using the access token and return some data
4. The Azure Function completes the initial HTTP request sent from my blog with data that is shown in the widget

<figure>
  <img src="/assets/img/2021/03/18/Step-2-Strava-integration-widget.jpg" alt="">
  <figcaption>Visual representation of the steps in Step 2</figcaption>
</figure>

### Step 3 - Refreshing the access token

A valid access token is required when making requests to the Strava API. In order to ensure the validity of the access token, an Azure Function runs automatically every two hours and refreshes it. The process goes like this:

1. Get “client_id”, “client_secret” and “refresh_token” secrets from a database
2. Use these secrets to make a request to Strava API. Get new “refresh_token” and “access_token” secrets
3. Save new “refresh_token” and “access_token” secrets in the database

<figure>
  <img src="/assets/img/2021/03/18/Step-3-Strava-integration-widget.jpg" alt="">
  <figcaption>Visual representation of the steps in Step 3</figcaption>
</figure>

One important thing to note is that I have created my own Strava app where I have authenticated my Strava user. This is where the initial “refresh_token” and “access_token” secrets came from. This is also how I can make requests to Strava on my user’s behalf. 

I hope you enjoyed this post. Hopefully it inspired you to build something of your own 🙂

---

If you’re interested in the code behind the Azure Functions, I’ve uploaded it on GitHub Gist:

- [HTTP triggered Azure Function for getting Strava activities](https://gist.github.com/dzhavat/ea1f11f61edb2a7a4a4abc83af44edbb)
- [Timer triggered Azure Function for renewing an access token](https://gist.github.com/dzhavat/ae3bda9b997680834a6f4cdcedc89e09)