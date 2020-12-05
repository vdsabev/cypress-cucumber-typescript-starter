import { Given, Page, Then } from '../utils';

Given(`(the customer )is on the {string} page`, (name: string) => {
  Page.find(name).open();
});

Then(`the page title should be {string}`, (title: string) => {
  Page.document.title().should('include', title);
});