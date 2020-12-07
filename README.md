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
- [`integration`](/cypress/integration/README.md)
  - [`utils`](/cypress/integration/utils/README.md) - utility functions and classes for creating pages, controlling the browser, and selecting DOM elements. Code specific to your tests is not meant to live here - instead, think of this folder as containing the core test framework.
  - [`Amazon`](/cypress/integration/Amazon/README.md) - a more complex and structured example using multiple pages, inheritance, access modifiers, and extracted element classes
  - [`common`](/cypress/integration/common/README.md) - contains functionality used by all features; feel free to add more step definitions, before / after hooks, or common modules to import in other tests
  - [`DuckDuckGo`](/cypress/integration/DuckDuckGo/README.md) - an example of the simplified object-based API - no classes or access modifiers necessary, just specify the page configuration options and write element selectors

## Resources
- Writing Cucumber expressions: https://cucumber.io/docs/cucumber/cucumber-expressions
- Cypress API documentation: https://docs.cypress.io/api
- Configuration options: https://github.com/TheBrainFamily/cypress-cucumber-preprocessor
