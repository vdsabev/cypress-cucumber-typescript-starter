import { Then, When } from '../common/steps';
import HomePage from './HomePage';

When(`(the customer) searches for {string}`, (query: string) => {
  HomePage.searchInput.type(`${query}{enter}`);
});

Then(`the first result's title should be {string}`, (title: string) => {
  HomePage.firstResult.title.should('contain', title);
});

Then(`the first result's badge should be {string}`, (badge: string) => {
  HomePage.firstResult.badge.should('contain', badge);
});

Then(
  `the first result should have a {string} edition with a price of {string}`,
  (edition: string, price: string) => {
    HomePage.firstResult.getPrice(edition).should('contain', price);
  }
);
