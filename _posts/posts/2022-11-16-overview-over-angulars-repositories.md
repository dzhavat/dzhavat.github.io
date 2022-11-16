---
layout: post
title: Overview over Angular’s repositories
category: posts
---

I’ve been working with Angular for around 6 years now. It’s a great framework that I enjoy working with. It’s also quite a broad framework that includes a lot of things. The ecosystem around it is pretty big as well.

A lot of times while working on a task, I go to Angular’s main repo and look at the source code to get a sense of how a particular feature works. I do that for Angular Material too. It’s quite exciting being able to do that. This gives one a feeling of mastery over one’s tools.

I wondered how many \[official\] Angular repos and packages are there?

In this post I’d like to create some kind of an overview over the many Angular repos and what they contain. The aim is to get an overview, of course, but also to see how far Angular stretches, and appreciate the work done by the Angular’s team and all of the amazing contributors.

### Main Angular repo ([link](https://github.com/angular/angular))

Contains the following packages:

- [`@angular/animations`](https://github.com/angular/angular/tree/main/packages/animations)
- [`@angular/bazel`](https://github.com/angular/angular/tree/main/packages/bazel)
- [`@angular/benchpress`](https://github.com/angular/angular/tree/main/packages/benchpress)
- [`@angular/common`](https://github.com/angular/angular/tree/main/packages/common)
- [`@angular/compiler-cli`](https://github.com/angular/angular/tree/main/packages/compiler-cli)
- [`@angular/core`](https://github.com/angular/angular/tree/main/packages/core)
- [`@angular/elements`](https://github.com/angular/angular/tree/main/packages/elements)
- [`@angular/forms`](https://github.com/angular/angular/tree/main/packages/forms)
- [`@angular/language-service`](https://github.com/angular/angular/tree/main/packages/language-service)
- [`@angular/localize`](https://github.com/angular/angular/tree/main/packages/localize)
- [`angular-in-memory-web-api`](https://github.com/angular/angular/tree/main/packages/misc/angular-in-memory-web-api)
- [`@angular/platform-browser-dynamic`](https://github.com/angular/angular/tree/main/packages/platform-browser-dynamic)
- [`@angular/platform-browser`](https://github.com/angular/angular/tree/main/packages/platform-browser)
- [`@angular/platform-server`](https://github.com/angular/angular/tree/main/packages/platform-server)
- [`@angular/router`](https://github.com/angular/angular/tree/main/packages/router)
- [`@angular/service-worker`](https://github.com/angular/angular/tree/main/packages/service-worker)
- [`@angular/upgrade`](https://github.com/angular/angular/tree/main/packages/upgrade)
- [`zone.js`](https://github.com/angular/angular/tree/main/packages/zone.js)

It also contains:

- [aio](https://github.com/angular/angular/tree/main/aio) - documentation for the [https://angular.io](https://angular.io) website
- [examples](https://github.com/angular/angular/tree/main/packages/examples) - small examples used in the API docs
- [devtools](https://github.com/angular/angular/tree/main/devtools) - Angular DevTools browser extension
- [integration](https://github.com/angular/angular/tree/main/integration) - end-to-end and integration tests that mimic how Angular works

### Angular Components repo ([link](https://github.com/angular/components))

Contains the following packages:

- [`@angular/cdk-experimental`](https://github.com/angular/components/tree/main/src/cdk-experimental) - experimental components for Angular CDK
- [`@angular/cdk`](https://github.com/angular/components/tree/main/src/cdk) - main Angular CDK package
- [`@angular/google-maps`](https://github.com/angular/components/tree/main/src/google-maps) - Angular Google Maps component
- [`@angular/material-date-fns-adapter`](https://github.com/angular/components/tree/main/src/material-date-fns-adapter) - Angular Material date-fns Adapter
- [`@angular/material-experimental`](https://github.com/angular/components/tree/main/src/material-experimental) - Experimental components for Angular Material
- [`@angular/material-luxon-adapter`](https://github.com/angular/components/tree/main/src/material-luxon-adapter) - Angular Material Luxon Adapter
- [`@angular/material-moment-adapter`](https://github.com/angular/components/tree/main/src/material-moment-adapter) - Angular Material Moment Adapter
- [`@angular/material`](https://github.com/angular/components/tree/main/src/material) - main Angular Material package
- [`@angular/youtube-player`](https://github.com/angular/components/tree/main/src/youtube-player) - Angular YouTube Player component

It also contains:

- [guides](https://github.com/angular/components/tree/main/guides) - guides found in [Guides page](https://material.angular.io/guides) on [Angular Material](https://material.angular.io)

### Angular Components website repo ([link](https://github.com/angular/material.angular.io))

The Angular app for the [https://material.angular.io](https://material.angular.io) website.

### Angular Components Docs repo ([link](https://github.com/angular/material2-docs-content))

Auto-generated docs content used in the [https://material.angular.io](https://material.angular.io) website.

### Angular CLI repo ([link](https://github.com/angular/angular-cli))

Contains the following packages:

- [`@angular/cli`](https://github.com/angular/angular-cli/tree/main/packages/angular/cli) - main Angular CLI package
- [`@angular/create`](https://github.com/angular/angular-cli/tree/main/packages/angular/create) - create an Angular CLI workspace
- [`@angular/pwa`](https://github.com/angular/angular-cli/tree/main/packages/angular/pwa) - a schematic for adding Progress Web App (PWA) support to an Angular app
- [`@angular-devkit/architect`](https://github.com/angular/angular-cli/tree/main/packages/angular_devkit/architect)
- [`@angular-devkit/architect-cli`](https://github.com/angular/angular-cli/tree/main/packages/angular_devkit/architect_cli)
- [`@angular-devkit/benchmark`](https://github.com/angular/angular-cli/tree/main/packages/angular_devkit/benchmark) - Angular Devkit Benchmark. **Note: Not stable**
- [`@angular-devkit/build-angular`](https://github.com/angular/angular-cli/tree/main/packages/angular_devkit/build_angular)
- [`@angular-devkit/build-webpack`](https://github.com/angular/angular-cli/tree/main/packages/angular_devkit/build_webpack)
- [`@angular-devkit/core`](https://github.com/angular/angular-cli/tree/main/packages/angular_devkit/core)
- [`@angular-devkit/schematics`](https://github.com/angular/angular-cli/tree/main/packages/angular_devkit/schematics)
- [`@angular-devkit/schematics-cli`](https://github.com/angular/angular-cli/tree/main/packages/angular_devkit/schematics_cli)
- [`@ngtools/webpack`](https://github.com/angular/angular-cli/tree/main/packages/ngtools/webpack) - Angular Compiler Webpack Plugin
- [`@schematics/angular`](https://github.com/angular/angular-cli/tree/main/packages/schematics/angular) - Schematics specific to Angular

### Angular Universal repo ([link](https://github.com/angular/universal))

Contains the following packages:

- [`@nguniversal/builders`](https://github.com/angular/universal/tree/main/modules/builders)
- [`@nguniversal/common`](https://github.com/angular/universal/tree/main/modules/common)
- [`@nguniversal/express-engine`](https://github.com/angular/universal/tree/main/modules/express-engine)

### Angular Language Service repo ([link](https://github.com/angular/vscode-ng-language-service))

Angular extension for Visual Studio Code.

### ng-packagr repo ([link](https://github.com/ng-packagr/ng-packagr))

Compile and package Angular libraries in Angular Package Format (APF).

### AngularFire repo ([link](https://github.com/angular/angularfire))

The official Angular library for Firebase.

### Angular Upgrade Guide (update.angular.io) repo ([link](https://github.com/angular/angular-update-guide))

An interactive guide to updating the version of Angular in your apps.

### NGCC Validation repo ([link](https://github.com/angular/ngcc-validation))

Angular Ivy library compatibility validation project.

### Angular Contributor Code of Conduct repo ([link](https://github.com/angular/code-of-conduct))

A code of conduct for all Angular projects.

### Angular Flex-Layout repo ([link](https://github.com/angular/flex-layout))

**Note: Deprecated. Under LTS support.**

### Protractor repo ([link](https://github.com/angular/protractor))

**Note: Deprecated. End of development as of Angular v15.**

---

What a list 😮 The Angular team is doing an awesome job maintaining these repos, working on new features, fixing bugs and moving Angular forward.

---

Thanks to [Lars Gyrup Brink Nielsen](https://twitter.com/LayZeeDK) for reviewing this post.
