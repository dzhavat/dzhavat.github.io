---
layout: post
title: My VS Code setup
category: posts
updated: 2023-11-29
---

I got a new work laptop recently and part of the setup process was installing and configuring VS Code to match my preferences. This usually takes a bit of time because I cannot always remember all the settings and extensions that I tweak or install. I’m aware that VS Code supports syncing of settings, extensions, etc. across devices but it’s not always possible to login with my GitHub/Microsoft account. So here are the settings and extensions that I usually change/add to a brand new VS Code installation.

### Settings

```json
{
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
  "editor.fontSize": 16,
  "editor.lineHeight": 1.5,
  "terminal.integrated.fontFamily": "monospace",
  "editor.tabSize": 2,
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
    "other": "off"
  },
  "githubPullRequests.createOnPublishBranch": "never",
  "rxjsDebugging.enableUsageAnalytics": false,
  "githubPullRequests.pullBranch": "never",
  "editor.stickyScroll.enabled": true,
  "remoteHub.uncommittedChangesOnEntry": "none",
  "markdownlint.config": {
    "MD033": false
  },
  "javascript.updateImportsOnFileMove.enabled": "always",
  "editor.accessibilitySupport": "off",
  "gitlens.defaultDateFormat": null,
  "editor.inlineSuggest.enabled": true,
  "terminal.integrated.defaultProfile.windows": "PowerShell",
  "nxConsole.showNodeVersionOnStartup": false
}
```

### Extensions

- [Angular Language Service](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template)
- [Bracket Pair Colorization Toggler](https://marketplace.visualstudio.com/items?itemName=dzhavat.bracket-pair-toggler)
- [Copy Json Path](https://marketplace.visualstudio.com/items?itemName=Malo.copy-json-path)
- [CSS Flexbox Cheatsheet](https://marketplace.visualstudio.com/items?itemName=dzhavat.css-flexbox-cheatsheet)
- [CSS Initial Value](https://marketplace.visualstudio.com/items?itemName=dzhavat.css-initial-value)
- [CSS Stacking Contexts](https://marketplace.visualstudio.com/items?itemName=felixfbecker.css-stacking-contexts)
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [es6-string-html](https://marketplace.visualstudio.com/items?itemName=Tobermory.es6-string-html)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [File Utils](https://marketplace.visualstudio.com/items?itemName=sleistner.vscode-fileutils)
- [Git Cheatsheet](https://marketplace.visualstudio.com/items?itemName=dzhavat.git-cheatsheet)
- [GitHub Actions](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-github-actions)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- [GitHub Pull Requests and Issues](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github)
- [GitHub Repositories](https://marketplace.visualstudio.com/items?itemName=GitHub.remotehub)
- [GitLens — Git supercharged](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
- [Image preview](https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-gutter-preview)
- [Jest Runner](https://marketplace.visualstudio.com/items?itemName=firsttris.vscode-jest-runner)
- [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)
- [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
- [MDX](https://marketplace.visualstudio.com/items?itemName=unifiedjs.vscode-mdx)
- [NPM Imported Package Links](https://marketplace.visualstudio.com/items?itemName=MainaWycliffe.view-package-on-npm)
- [Nx Console](https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console)
- [PowerShell](https://marketplace.visualstudio.com/items?itemName=ms-vscode.PowerShell)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Pretty TypeScript Errors](https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors)
- [Project Manager](https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager)
- [Remote Repositories](https://marketplace.visualstudio.com/items?itemName=ms-vscode.remote-repositories)
- [RxJS Cheatsheet](https://marketplace.visualstudio.com/items?itemName=dzhavat.rxjs-cheatsheet)
- [RxJS Debugging for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=manuelalabor.rxjs-debugging-for-vs-code)
- [Test Focus Highlighter](https://marketplace.visualstudio.com/items?itemName=dzhavat.test-focus-highlighter)
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
