import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

// Pages
const pageUrlsByName = {
  'Amazon Home': 'https://www.amazon.co.uk/',
};

// Common
Given(`(the customer) is on the {string} page`, (pageName: string) => {
  cy.visit(pageUrlsByName[pageName]);
});

Then(`the page title should be/equal {string}`, (title: string) => {
  cy.title().should('equal', title);
});

Then(`the page title should contain/include {string}`, (title: string) => {
  cy.title().should('include', title);
});

// Home Page
// When(`(the customer) searches for {string}`, (query: string) => {
//   elements.searchInput.type(`${query}{enter}`);
// });

// Then(`the first result's title should contain {string}`, (title: string) => {
//   elements.firstResult.title.should('include', title);
// });

// Elements
// const elements = {
//   get searchInput() {
//     return cy.get('[aria-label="Search"]');
//   },
//   get firstResult() {
//     const firstResult = cy.get('.s-result-item').eq(0);
//     const editions = firstResult.get(); // TODO
//     return {
//       title: firstResult.get('h2'),
//       badge: firstResult.get('.a-badge-text'),
//       edition: {
//         name: firstResult.get('h2'),
//         price: firstResult.get('h2'),
//       },
//     };
//   },
// };
