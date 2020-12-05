import { Then, When } from '../utils';
import BookDetailsPage from './BookDetailsPage';
import HomePage from './HomePage';

// Search for book
When(`(the customer )searches for {string}`, (query: string) => {
  HomePage.searchInput.type(`${query}{enter}`);
});

Then(`the first result's title should be {string}`, (title: string) => {
  HomePage.firstSearchResult.title.should('contain', title);
});

Then(`the first result's badge should be {string}`, (badge: string) => {
  HomePage.firstSearchResult.badge.should('contain', badge);
});

Then(
  `the first result should contain a {string} edition with a price of {string}`,
  (edition: string, price: string) => {
    HomePage.firstSearchResult
      .getEditionPrice(edition)
      .should('contain', price);
  }
);

// Navigate to book details
When(
  `(the customer )clicks on the first result's {string} edition`,
  (edition: string) => {
    HomePage.firstSearchResult.getEditionLink(edition).click();
  }
);

Then(`the book's title should be {string}`, (title: string) => {
  BookDetailsPage.book.title.should('contain', title);
});

Then(`the book's badge should be {string}`, (badge: string) => {
  BookDetailsPage.book.badge.should('contain', badge);
});

Then(`the book's selected edition should be {string}`, (edition: string) => {
  BookDetailsPage.book.selectedEdition.should('contain', edition);
});

Then(`the book's price should be {string}`, (price: string) => {
  BookDetailsPage.book.selectedPrice.should('contain', price);
});
