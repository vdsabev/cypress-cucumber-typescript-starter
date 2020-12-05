import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

import document from './document';
import { findPage } from './pages';

export * from 'cypress-cucumber-preprocessor/steps';

Given(`(the customer) is on the {string} page`, (name: string) => {
  findPage(name).open();
});

Then(`the page title should be {string}`, (title: string) => {
  document.title().should('include', title);
});
