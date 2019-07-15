---
layout: post
title: "Reading from Table Storage inside Azure Functions running in Node.js"
---

I spent a lot of time over the past few days figuring out how to read a single value from a Storage Table inside an Azure Function running in Node.js I don‘t know if the reason was me, the tutorials I found or just the concept in general but something was not working. Eventually I figured it out but it probably took me more time than necessary for such a simple task.

So I‘m writing this guide primarily for myself but also for other people who struggle with a similar problem.

Before I start, I need to set some restrictions. The steps bellow describe how I managed to make this work by using the Azure portal. I‘m also diving the article in two parts - reading a single value and reading multiple values. Believe it or not, there‘s a difference between the two. Furthermore, the the steps will be baseon on the following table:

<figure>
  <img src="/assets/img/reading-from-table-storage-inside-azure-functions-running-in-nodejs/Example-Table.jpg" alt="Example Table in Storage account">
  <figcaption>Example Table</figcaption>
</figure>

Ok, let‘s get started.

### Reading a single value

##### Step 1

Create a new Azure function. If you already have one, feel free to skip this step.

##### Step 2

Once the functions is created, go to the “Integrate” tab.

##### Step 3

Here, click on the “New Input” button under “Inputs”, select “Azure Table Storage” from the lis and click “Select”.

##### Step 4

You‘ll be presented with a page where you can set some settings.

* “Table parameter name” is used for indentifying the binding in the code. It‘s already set to `inputTable`. You can leave it as is or change it to whatever you want.
* “Table name”, as the name suggest, is the name of the storage table that will be used. In my case it‘s `example`.
* “Partition key” is the name of the partition key column in the table. In my case that‘s `Users`.
* “Row key” is the name of the row key column in the table. In my case that‘s `1`.

It‘s important to note here that even though “Partition key” and “Row key” fields are optional, inputting a value in any of them makes the other one required.
