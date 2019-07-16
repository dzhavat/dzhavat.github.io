---
layout: post
title: "Reading from Table storage inside Azure Functions running in Node.js"
---

I spent a lot of time last week figuring out how to read a single value from a storage table inside an Azure Function running in Node.js. I don‘t know if it was me, the tutorials I found or just the concept in general but the things were not working. At some point I figured it out but it took me more time than necessary for such a simple task.

So I‘m writing this guide primarily for myself but also for other people who struggle with a similar problem.

Before I start, though, I need to set some boundaries. The steps bellow describe how I managed to make this work by using the Azure portal. If you want to read from Table storage while working in VS Code, check out [this tutorial](https://docs.microsoft.com/en-us/azure/cosmos-db/table-storage-how-to-use-nodejs). I‘m also diving the article in two parts - reading a single value and reading multiple values. Believe it or not, there‘s a difference between the two. Furthermore, the steps will be based on on the following table:

<figure>
  <img src="/assets/img/reading-from-table-storage-inside-azure-functions-running-in-nodejs/Example-Table.jpg" alt="Example Table">
  <figcaption>Example Table</figcaption>
</figure>

Let‘s get started.

### Reading a single value

##### Step 1

Create a new Azure function. If you already have one, feel free to skip this step.

<figure>
  <img src="/assets/img/reading-from-table-storage-inside-azure-functions-running-in-nodejs/creating-a-new-azure-function.jpg" alt="Creating a new Azure Function">
  <figcaption>Creating a new Azure Function</figcaption>
</figure>

1. Click on the + next to “Functions”.
2. Click on “HTTP trigger”.
3. Input a name.
4. Click the “Create” button.

##### Step 2

Once the functions is created, you‘ll be redirected to a `index.js` file which is the actual function. We‘ll come back to this page a bit later. Now click on to the “Integrate” tab.

##### Step 3

<figure>
  <img src="/assets/img/reading-from-table-storage-inside-azure-functions-running-in-nodejs/select-storage-table-binding.jpg" alt="Creating an Azure Table storage binding">
  <figcaption>Creating an Azure Table storage binding</figcaption>
</figure>

1. Click on the “New Input” button under “Inputs”.
2. Select “Azure Table Storage” from the list.
3. Click “Select”.

##### Step 4

Next, you‘ll be presented with a page where you can set some settings.

<figure>
  <img src="/assets/img/reading-from-table-storage-inside-azure-functions-running-in-nodejs/setting-up-azure-storage.jpg" alt="Setting up Azure Table storage">
  <figcaption>Setting up Azure Table storage</figcaption>
</figure>

1. “Table parameter name” is used for indentifying the binding in the code. It‘s already set to `inputTable`. You can leave it as is or change it to whatever you want.
2. “Table name”, as the name suggest, is the name of the storage table that will be used. In my case it‘s `example`.
3. “Partition key” is the name of the partition key column in the table. In my case that‘s `Users`.
4. “Row key” is the name of the row key column in the table. In my case that‘s `1`.
5. Finally, don‘t forget to “Save” everything.

It‘s important to note here that even though “Partition key” and “Row key” fields are optional, inputting a value in any of them makes the other one required.

##### Step 5

Now‘s time to come back to the `index.js` file you saw in step 2. Open it and replace its content with the following code:

```js
module.exports = async function (context, req) {
    context.log(context.bindings.inputTable.FirstName);
};
```

* The `bindings` property contains all input and output bindings set up either in the “Integrate’ tab or in code.
* `inputTable` is how we named our table parameter. This reffers to `example` table in the storage account.
* `FirstName` is just a column name in my table.

Press the “Save and run” button. While the function is executing you‘ll see some logs in the Logs tab underneath. If things are set up correctly you‘ll see the `FirstName` value for this entity.

<figure>
  <img src="/assets/img/reading-from-table-storage-inside-azure-functions-running-in-nodejs/setting-up-azure-storage.jpg" alt="Setting up Azure Table storage">
  <figcaption>Setting up Azure Table storage</figcaption>
</figure>



