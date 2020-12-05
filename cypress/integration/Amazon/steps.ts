import { Then, When } from '../common/steps';
import pages from './pages';

When(`(the customer) searches for {string}`, (query: string) => {
  pages.home.searchInput.type(`${query}{enter}`);
});

Then(`the first result's title should be {string}`, (title: string) => {
  pages.home.firstResult.title.should('contain', title);
});

Then(`the first result's badge should be {string}`, (badge: string) => {
  pages.home.firstResult.badge.should('contain', badge);
});

Then(
  `the first result should have a {string} edition with a price of {string}`,
  (edition: string, price: string) => {
    pages.home.firstResult.getPrice(edition).should('contain', price);
  }
);
