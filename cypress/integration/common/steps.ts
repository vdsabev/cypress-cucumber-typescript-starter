import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

import browser from './browser';
import pages from './pages';

export * from 'cypress-cucumber-preprocessor/steps';

Given(`(the customer) is on the {string} page`, (name: string) => {
  for (const page of pages) {
    if (page.name === name) {
      page.open();
      return;
    }
  }

  throw new Error(`Couldn't find page with name "${name}"!`);
});

Then(`the page title should be {string}`, (title: string) => {
  browser.title().should('include', title);
});
