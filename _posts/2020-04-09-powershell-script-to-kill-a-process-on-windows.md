---
layout: post
title: PowerShell script to kill a process on Windows
---

A couple of weeks ago I faced an interesting challenge. I had to figure out a way to programmatically start and stop a Node.js server between some tests. The flow was like this: spawn a server before a test, wait for it to respond to a request, run the test, kill the server after the test completes. Repeat the same steps for the next test.

This was something completely new to me so I explored a few different options. One of them was to write a PowerShell script that would look for a specific port and kill the process related to it. That way, I reasoned, I can kill the server after each test. But there was one problem - I had never written PowerShell scripts before. This didn’t discourage me, though! I decided to give it a try.

In this post I’d like to share the script that I wrote together with some improvements compared to the initial version. I think it was a really fun experiment, in which I challenged myself to try something new.

Most blog posts related to killing a process on Windows show the following solution:

#### Step 1 - Get the process id using port number

```shell
C:\> netstat -ano | findstr "PID :PortNumber"
```

<figure>
  <img src="/assets/img/2020/04/09/powershell-find-process-by-port.png" alt="List of processes using a particular port">
  <figcaption>List of processes using a particular port</figcaption>
</figure>

#### Step 2 - Kill the process using PID

```shell
C:\> taskkill /PID pidNumber /F
```

<figure>
  <img src="/assets/img/2020/04/09/powershell-kill-process.png" alt="Terminating a process by PID">
  <figcaption>Terminating a process by PID</figcaption>
</figure>

This solution works fine but **it’s manual**, the commands are **hard to remember** and **easy to get wrong**. I wanted to see whether I can write a PowerShell script to automate it. I broke down the problem to the following steps:

- take a port number as input
- find the first process that listens to the port
- find the PID number of that process
- kill the process

Lets first see the script I ended up with, then we’ll go over it line by line:

```shell
param ($port)

$foundProcesses = netstat -ano | findstr :$port
$activePortPattern = ":$port\s.+LISTENING\s+\d+$"
$pidNumberPattern = "\d+$"

IF ($foundProcesses | Select-String -Pattern $activePortPattern -Quiet) {
  $matches = $foundProcesses | Select-String -Pattern $activePortPattern
  $firstMatch = $matches.Matches.Get(0).Value

  $pidNumber = [regex]::match($firstMatch, $pidNumberPattern).Value

  taskkill /pid $pidNumber /f
}
```

Note: To try it yourself, save it in a file called `kill-port.ps1` and run it from PowerShell, passing a port number, e.g. `./kill-port.ps1 8080`. Remember to use a port of a process you’ve started. Don’t try to kill system processes.

There’s a lot going on in that script. Let’s brake it down.

### Part 1

```shell
param ($port)
```

The first thing is a [`param`](https://ss64.com/ps/syntax-args.html) statement used to define a variable that holds the port number send as an input. If I save just that in a script on its own and run it:

```shell
C:\> ./kill-port.ps1 8080
```

`$port` will contain the number 8080.

### Part 2

```shell
$foundProcesses = netstat -ano | findstr :$port
$activePortPattern = ":$port\s.+LISTENING\s+\d+$"
$pidNumberPattern = "\d+$"
```

These are some helper variables. The most interesting one is `$foundProcesses`. It contains a list of all processes that use the specified port. You probably notice that it’s the same command used for listing the processes. Here, I save the output to a variable. `$activePortPattern` and `$pidNumberPattern` contain regular expressions that will be needed in a moment.

### Part 3

```shell
IF ($foundProcesses | Select-String -Pattern $activePortPattern -Quiet) {
  ...
}
```

`Select-String` searches each line of the `$foundProcesses` variable for a specific pattern defined by the `-Pattern` parameter. Normally, this returns a `MatchInfo` object representing the result of a match. However, when used with the `-Quiet` parameter, the return is a boolean where `True` means that the pattern is found and `False` otherwise.

If the pattern is not found, then skip the rest of the script. Easy exit.

But why exactly that pattern?

Processes can be in different states. So the regular expression will only look for the line containing the exact port number, is in a `LISTENING` state and ends with a number. So given the following line, 

```text
TCP    0.0.0.0:8080    0.0.0.0:0    LISTENING    14320
```

the `$activePortPattern` pattern will match the `:8080    0.0.0.0:0    LISTENING    14320` part.

### Part 4

```shell
$matches = $foundProcesses | Select-String -Pattern $activePortPattern
```

This is almost the same as the previous step. The difference here is that I save the resulting `MatchInfo` object in a variable. When inspected, it looks like this:

<figure>
  <img src="/assets/img/2020/04/09/matchinfo-object-in-powershell.png" alt="MatchInfo object">
  <figcaption>`MatchInfo` object</figcaption>
</figure>

in this case, the `MatchInfo` object contains only one match which can be accessed by index `0`.

### Part 5

```shell
$firstMatch = $matches.Matches.Get(0).Value
```

Here I assign the value of the first match to the `$firstMatch` variable.

### Part 6

```shell
$pidNumber = [regex]::match($firstMatch, $pidNumberPattern).Value
```

In this step I’m using the static `match` method to find the PID number, which is at the end of the string. Using `.Value` gives me the value found by the regular expression.

Given the following string,

```text
:8080           0.0.0.0:0              LISTENING       14320
```

the `$pidNumberPattern` pattern will match `14320`.

### Part 7

```shell
taskkill /pid $pidNumber /f
```

The only thing left now is to kill the process using the PID number. 

<figure>
  <img src="/assets/img/2020/04/09/kill-port-script.gif" alt="Kill port script">
  <figcaption>Kill port script</figcaption>
</figure>

---

Phew, that was a lot!

I really enjoyed taking this experiment. Before starting it, I felt intimidated by the thought of writing a PowerShell script. I thought it was really complicated. Now I’m glad I tried it. Definitely learned quite a lot. I recently came across this [tweet by David Khourshid](https://mobile.twitter.com/DavidKPiano/status/1246534121859493889).

<figure>
  <img src="/assets/img/2020/04/09/david-khourshid-tweet.png" alt="Tweet by David Khourshid">
  <figcaption>Don’t feel comfortable trying something new</figcaption>
</figure>

I totally agree with him! We should give ourselves room for experimentation and trying new things without feeling afraid to fail. It’s part of the process.

---

As for my initial problem, I ended up not using the PowerShell script. A colleague of mine showed me how to use the [`spawn`](https://nodejs.org/api/child_process.html#child_process_child_process_spawn_command_args_options) method in Node.js to start and kill the server so I went in that direction. Learning one more thing never hurts, I guess.