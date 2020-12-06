import { Given, Page, Then, When } from '../utils';

Given(`(the customer/user )is on the {string} page`, (name: string) => {
  Page.find(name).open();
});

When(`(the customer )clicks on the {string} button`, (buttonText: string) => {
  Page.document.contains(buttonText, { matchCase: false }).click();
});

Then(`the page title should be {string}`, (title: string) => {
  Page.document.title().should('include', title);
});
