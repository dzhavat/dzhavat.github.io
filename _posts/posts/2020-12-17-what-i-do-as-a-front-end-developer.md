---
layout: post
title: What I do as a front-end developer
category: posts
---

I recently started on a new project at work. As exciting as this can be, it also made me stop for a second to reflect on the past project and all the various task I’ve been involved in. In this post, I will try to summarize the responsibilities I’ve had, tasks I’ve worked with, meetings I’ve participated in and technologies I’ve used during my time on the project. Why do I do this? For a few reasons:

- To document for myself all the different types of tasks I’ve worked on (before I forget them)
- To show that front-end developers can do a lot more than write HTML, CSS and JavaScript
- To show how diverse the work of a front-end developer can be
- To (hopefully) give you an idea of what front-end developers do in case you’re getting into that field*

Some context:

- I was on the project for a little over a year
- We were two front-end developers working on the UI
- There were five teams with five-six developers each

### Main responsibilities

- Laying out the UI foundation of an Angular app so other teams can focus on business features
- Developing the first business features following best practices so other teams can use them as guidelines
- Layout out the foundation of a solid and scalable architecture usin [Nx tools](https://nx.dev/angular) so multiple teams can work simultaneously without blocking each other
- Laying out the foundation for working with automated end-to-end (e2e) tests using a Behavior Driven Development (BDD) process
- Building a Design System in collaboration with a UI/UX designer
- Building a few standardized UI components documented in Storybook so other developers can just use them
- Setting up the necessary infrastructure (CI/CD) for successfully deploying the app to production

### Technologies

#### Fundamentals

- HTML
- CSS
- JavaScript

#### On top of that

- Angular, including:
  - [Single Component Angular Modules](https://dev.to/this-is-angular/angular-revisited-tree-shakable-components-and-optional-ngmodules-36d2) (SCAMs)
  - [Presentational components / Container components](https://dev.to/this-is-angular/model-view-presenter-with-angular-533h)
  - Custom Pipes
  - Custom async form validators
- Angular Material, including:
  - A custom theme
  - Minor style tweaks of native Angular Material components
- Nx tools for working with a monorepo containing Angular apps and their backends
  - [Tiny Angular application projects in Nx workspaces](https://indepth.dev/posts/1185/tiny-angular-application-projects-in-nx-workspaces)
- TypeScript
- NgRx
- RxJS
- Sass
- Storybook
- Nest.js (for building microservice stubs used in e2e tests)
- Moment.js and Moment Timezone
- ng2-charts
- Other smaller 3rd party dependencies

### Tasks

#### General

- Implementing new features
- Debugging
- Reading documentation
- Communicating with an API
- Collaboration with back-end developers. Giving feedback on the API
- Going deep into the source code of some open-source projects to better understand how they work
- Asking other team members for help 
- Helping other team members with their questions
- Surfing the Web trying to find solution to my problems
- Trying new ideas and proof-of-concepts (PoCs)
- Performance profiling and optimization using DevTools
- Setting up my development environment

#### Custom tooling

- Setting up tooling for automatic code analysis during a CI build
- Setting up tooling for linting, consistent code style, etc.

#### Knowledge sharing

- Onboarding new team members
- Pair programming
- Workshops
- Writing wiki guides and documentation

#### Testing

- Unit and integration tests using Jasmine, Chai, Sinon
- Using Angular’s `TestBed`
- Using Angular component harnesses
- Setting up tooling to support Behavior Driven Development (BDD)
- Collaborating with a tester in specifying BDD tests using Gherkin language
- End-to-end tests using Protractor and Cucumber.js
- Setting up tooling to be used in tests
- Debugging e2e tests by manually starting the necessary app, APIs and microservices

#### Design System

- Collaboration with a UI/UX designer
- Light work in Figma
- Building standardized components to be used in the app (by wrapping native Angular Material components)
- Setting up tooling to export design tokens from Figma
- Using design tokens to build an Angular Material theme
- Setting up Storybook (with some addons)
- Writing Storybook stories

#### Meetings

- Architectural discussions related to the front-end
- Discussions related to new and existing API endpoints
- Discussions about API conventions

#### Operations and Maintenance

- Refactoring and minimizing technical debt
- Performing minor dependency updates
- Performing major dependency updates
- A week long on-call duty every X weeks
- Keeping an eye on operational dashboards
- Investigating errors for possible bugs and system/performance degradation
- Coordinating dependency updates across teams

#### Azure DevOps

- Creating Pull Requests (PRs)
- Reviewing PRs
- Keeping an eye on continuous integration/continuous deployments (CI/CD) pipeline
- Triggering manual builds
- Light work on writing build scripts
- Workflow management (features, backlog, tasks, bugs, boards, etc.)

### Non-technical

#### General

- Keeping up with Teams notifications
- Searching for the perfect gif

#### Meetings

- Daily standups
- Sprint planning (work refinement, estimates, work assignments)
- Sprint demos (also doing demos myself)
- Retrospectives
- Meetings to gain deeper knowledge on the domain I was working with
- Bigger work planning sessions (usually planning the work for the next three months)
- Cross-team meetings (mostly for clarifying dependencies)
- Online social meetings (It’s 2020. You know why)

\* This is very subjective. It only describes my work in my unique situation. Other front-end developers might have more or less responsibilities depending on the project requirements, team size, experience, etc.