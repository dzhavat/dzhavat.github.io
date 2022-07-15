---
layout: post
title: Quickly find a recent command in Terminal in VS Code
category: posts
---

VS Code [v1.69](https://code.visualstudio.com/updates/v1_69) was released last week. As with any of the previous releases, it came packed with new features. I found some of them to be quite useful and have already used them to tweak [my VS Code setup](https://dzhavat.github.io/2021/09/08/my-vs-code-setup.html).

In this short post I’m going to show you one new feature that I like in particular - the “**Terminal: Run Recent Command**” command.

Before we look into what this command does, how often do you use the up arrow key in the Terminal to find a previously executed command? Quite often, right? You remember that you ran one particular command yesterday but you can’t really remember which was it. So you use the up arrow key to go trough the recent commands, one at a time, to find the one you need. I do that all the time too.

What if there was a way to see a list of recent commands and quickly find the one you need. That would be so much better, wouldn’t it?

Here’s where the “**Terminal: Run Recent Command**” command comes in. When you run it, you get a list of recent commands in a Quick Pick-like panel similar to the Command Palette or Quick Open panel. It looks like this 👇

![Run Recent Command panel in VS Code](/assets/img/2022/07/15/run-recent-commands-panel-vs-code.jpg)

Go ahead and try it. Open a Terminal, then open the Command Palette (`Ctrl/Cmd+Shift+P`) and run the “**Terminal: Run Recent Command**” command. Selecting a command from the list will automatically run it.

Here’s me trying it 👇

<video controls>
  <source src="/assets/img/2022/07/15/demo-running-terminal-run-recent-command.mp4" type="video/mp4">
</video>

### But wait, there’s more

If you hold the `Alt` key while selecting a command, the text will be written in the Terminal without running it. This way you can modify it if you need to. You can also seach for a command in the input field.

#### Assigning a key keybinding

The “**Terminal: Run Recent Command**” command doesn’t have a keybinding assigned by default. In the release post, an example is given where `Ctrl+Space` is used for hooking up the command to a keybinding. I used that suggestion in my setup. Works quite well.

If you too want to use it, run the `Preferences: Open Keyboard Shortcuts` command, then click on the “Open Keyboard Shortcuts (JSON)” icon (looks like a “file-with-an-arrow-pointing-right”) all the way to the right to open a file with your personal keybinding combinations. Then paste the following snippet 👇

```json
{
  "key": "ctrl+space",
  "command": "workbench.action.terminal.runRecentCommand",
  "when": "terminalFocus"
}
```

You can now use `Ctrl+Space` to open the list of recent commands when the Terminal is in focus.

I hope you learned a little tip today. Happy coding 😎
