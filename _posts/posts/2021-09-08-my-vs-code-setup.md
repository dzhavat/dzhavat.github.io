---
layout: post
title: My VS Code setup
category: posts
updated: 2023-06-23
---

I got a new work laptop recently and part of the setup process was installing and configuring VS Code to match my preferences. This usually takes a bit of time because I cannot always remember all the settings and extensions that I tweak or install. I’m aware that VS Code supports syncing of settings, extensions, etc. across devices but it’s not always possible to login with my GitHub/Microsoft account. So here are the settings and extensions that I usually change/add to a brand new VS Code installation.

### Settings

```json
{
  "editor.fontLigatures": true,
  "extensions.autoUpdate": false,
  "git.autofetch": true,
  "git.confirmSync": false,
  "editor.fontFamily": "'JetBrains Mono'",
  "workbench.editor.untitled.labelFormat": "name",
  "diffEditor.ignoreTrimWhitespace": false,
  "githubIssues.queries": [
    {
      "label": "My Issues",
      "query": "default"
    },
    {
      "label": "All Issues",
      "query": "state:open repo:${owner}/${repository} sort:created-desc"
    }
  ],
  "editor.rulers": [120],
  "editor.wordWrap": "wordWrapColumn",
  "editor.wordWrapColumn": 120,
  "screencastMode.onlyKeyboardShortcuts": true,
  "gitlens.hovers.currentLine.over": "line",
  "editor.fontSize": 14,
  "editor.lineHeight": 21,
  "terminal.integrated.fontFamily": "monospace",
  "editor.tabSize": 2,
  "workbench.colorTheme": "Dracula",
  "workbench.startupEditor": "none",
  "typescript.updateImportsOnFileMove.enabled": "always",
  "editor.bracketPairColorization.enabled": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.guides.bracketPairs": true,
  "[markdown]": {
    "editor.wordWrap": "wordWrapColumn",
    "editor.wordWrapColumn": 120
  },
  "editor.unicodeHighlight.ambiguousCharacters": false,
  "explorer.fileNesting.enabled": true,
  "explorer.fileNesting.patterns": {
    "package.json": "package-lock.json, .npmrc, yarn.lock, .yarnrc, .editorconfig, .prettier*, .gitignore, .eslintrc.json, jest.*.js, nx.json, tsconfig.*.json"
  },
  "git.mergeEditor": true,
  "window.commandCenter": true,
  "editor.minimap.showSlider": "always",
  "emmet.useInlineCompletions": true,
  "editor.quickSuggestions": {
    "other": "inline"
  },
  "githubPullRequests.createOnPublishBranch": "never",
  "screencastMode.onlyKeyboardShortcuts": true,
  "editor.experimental.stickyScroll.enabled": true
}
```

### Extensions

- [Angular Language Service](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template)
- [Bracket Pair Colorization Toggler](https://marketplace.visualstudio.com/items?itemName=dzhavat.bracket-pair-toggler)
- [CSS Flexbox Cheatsheet](https://marketplace.visualstudio.com/items?itemName=dzhavat.css-flexbox-cheatsheet)
- [CSS Initial Value](https://marketplace.visualstudio.com/items?itemName=dzhavat.css-initial-value)
- [CSS Stacking Contexts](https://marketplace.visualstudio.com/items?itemName=felixfbecker.css-stacking-contexts)
- [Dracula Official](https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula)
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [es6-string-html](https://marketplace.visualstudio.com/items?itemName=Tobermory.es6-string-html)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [File Utils](https://marketplace.visualstudio.com/items?itemName=sleistner.vscode-fileutils)
- [Git Cheatsheet](https://marketplace.visualstudio.com/items?itemName=dzhavat.git-cheatsheet)
- [GitHub Pull Requests and Issues](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github)
- [GitHub Repositories](https://marketplace.visualstudio.com/items?itemName=GitHub.remotehub)
- [GitLens — Git supercharged](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
- [Image preview](https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-gutter-preview)
- [Jest Runner](https://marketplace.visualstudio.com/items?itemName=firsttris.vscode-jest-runner)
- [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
- [NPM Imported Package Links](https://marketplace.visualstudio.com/items?itemName=MainaWycliffe.view-package-on-npm)
- [Nx Console](https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Project Manager](https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager)
- [Remote Repositories](https://marketplace.visualstudio.com/items?itemName=ms-vscode.remote-repositories)
- [RxJS Cheatsheet](https://marketplace.visualstudio.com/items?itemName=dzhavat.rxjs-cheatsheet)
- [RxJS Debugging for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=manuelalabor.rxjs-debugging-for-vs-code)
- [Test Focus Highlighter](https://marketplace.visualstudio.com/items?itemName=dzhavat.test-focus-highlighter)
- [Turbo Console Log](https://marketplace.visualstudio.com/items?itemName=ChakrounAnas.turbo-console-log)
- [webhint](https://marketplace.visualstudio.com/items?itemName=webhint.vscode-webhint)

### Keybindings

```json
[
  {
    "key": "ctrl+space",
    "command": "workbench.action.terminal.runRecentCommand",
    "when": "terminalFocus"
  }
]
```

### Git

```bash
git config --global user.name "My Name"
git config --global user.email "email@domain.com"

git config --global --add push.autoSetupRemote true
```

### Fonts

- [JetBrains Mono](https://github.com/JetBrains/JetBrainsMono)
- [Fira Code](https://github.com/tonsky/FiraCode) (alternative)
