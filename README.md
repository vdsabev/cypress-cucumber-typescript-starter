# Cypress + Cucumber + Typescript Starter
A structured template for using Cypress with Cucumber and TypeScript.

## Setup
Install Node.js (version LTS recommended) from https://nodejs.org

Then run the following command in the root folder:
```sh
npm install
```

## Commands
After the packages install successfully we can run any of the following commands.

### `npm start`
Opens the Cypress UI. Used to execute individual feature files or inspect the browser.

### `npm test`
Runs all tests in the console. Used in CI or to quickly execute all feature files.

## Folder structure
- `cypress`
  - `integration`
    - `common` - contains functionality used by all features; feel free to add more step definitions, before / after hooks, or common modules to import in other tests
    - `Amazon` - a more complex and structured example using multiple pages, inheritance, access modifiers, and extracted element classes
    - `DuckDuckGo` - an example of the simplified object-based API - no classes or access modifiers necessary, just specify the page configuration options and write element selectors
  - `support` - utility functions and classes for creating pages, controlling the browser, and selecting DOM elements
    - `customParameterTypes` - defines custom parameter types like `{ordinal}`. **Only import once per feature!** Can't be used in `common` because those step definitions get imported after every feature's step definitions and so will produce a conflict.

## Resources
- Cypress API documentation: https://docs.cypress.io/api
- Writing Cucumber expressions: https://cucumber.io/docs/cucumber/cucumber-expressions
- Configuration options: https://github.com/TheBrainFamily/cypress-cucumber-preprocessor
