import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

import browser from './browser';
import Page from './Page';

export * from 'cypress-cucumber-preprocessor/steps';

Given(`(the customer )is on the {string} page`, (name: string) => {
  Page.find(name).open();
});

Then(`the page title should be {string}`, (title: string) => {
  browser.title().should('include', title);
});
