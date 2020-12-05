import browser from '../utils/browser';
import Page from '../utils/Page';
import { Given, Then } from '../utils/steps';

Given(`(the customer )is on the {string} page`, (name: string) => {
  Page.find(name).open();
});

Then(`the page title should be {string}`, (title: string) => {
  browser.title().should('include', title);
});
