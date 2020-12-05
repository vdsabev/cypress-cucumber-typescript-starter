import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

import browser from './browser';
import pages from './pages';

export * from 'cypress-cucumber-preprocessor/steps';

Given(`(the customer) is on the {string} page`, (pageName: string) => {
  const pagesByName = {
    'Amazon Home': pages.amazon.home,
  };

  pagesByName[pageName].open();
});

Then(`the page title should be {string}`, (title: string) => {
  browser.title().should('include', title);
});
