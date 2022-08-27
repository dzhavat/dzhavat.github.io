---
layout: post
title: Timezone date pipe in Angular using Intl.DateTimeFormat
category: posts
updated: 2020-12-13
---

A few months ago I worked on a date pipe in Angular. One of its main requirements was to always display the date/time values according to a specific timezone. No matter from where a user opens the app, the dates/times must always be in that specific timezone. How would you build that? It was a really interesting task. I learned a lot about dates and how to format them.

The final solution ended up using [Moment Timezone](https://momentjs.com/timezone/). Shortly after, I started to wonder whether the same can be achieved with native JavaScript APIs. Sure enough, it can. In this post, I'm going to show you how to use the Intl.DateTimeFormat object to display dates/times in a specific timezone.

### What about Angular's DatePipe?

Before I continue, you might be wondering if this is supported by the [DatePipe](https://angular.io/api/common/DatePipe) that comes with Angular. Yes, partially. Angular's DatePipe can take a `timezone` parameter but its power is very limitted. It supports a *time zone offset from GMT (such as '+0430'), or a standard UTC/GMT or continental US time zone abbreviation*.

This is not ideal. If we want to show the time according to the time in Copenhagen, we have to use a UTC offset. The problem is that the offset changes if the date is in a DST or not. During the winter months the offset will be "+0100", whereas during the summer months, the offset will be "+0200". So if we want to use the native DatePipe, we should also make sure that we're using the correct offset value depending on the date we want to format. This is tedious, easy to mess up and basically unnecessary. It's way easier to specify a timezone abbreviation and let the library/framework/browser take care of the calculating the correct offset.

### Timezone date pipe

Let's see some code. Will explain how it works afterwards.

```ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ngDanishTime'
})
export class NgDanishTimePipe implements PipeTransform {
  locale = 'da-DK'; // [1]

  dateTimeOptions = {
    hour: 'numeric',
    minute: 'numeric',
    timeZone: 'Europe/Copenhagen', // [2]
  };
  
  dateTimeFormat = new Intl.DateTimeFormat(this.locale, this.dateTimeOptions); // [3]

  transform(value: string): string { // [4]
    return this.dateTimeFormat.format(new Date(value)); // [5]
  }
}
```

Looking at the code, there are a few things worth mentioning. [1] specifies the locale that will be used for formatting the date. It's useful when you want to not only display dates according to a timezone, but also according to the format of a specific country/region. The value can come from different places. You can hardcode it as shown here or get it by injecting the [`LOCALE_ID`](https://angular.io/api/core/LOCALE_ID) token.

[2] is 

 The value will take precedence over the user's default locale.  The locale value can come from several places. 



