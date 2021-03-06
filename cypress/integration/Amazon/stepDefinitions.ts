import '../../support/customParameterTypes';
import { Then, When } from '../../support';
import AddedToBasketPage from './pages/AddedToBasketPage';
import BasketPage from './pages/BasketPage';
import BookDetailsPage from './pages/BookDetailsPage';
import HomePage from './pages/HomePage';

// Search for book
When(`(the customer )searches for {string}`, (query: string) => {
  HomePage.searchInput().type(`${query}{enter}`);
});

Then(
  `the {ordinal} result's title should be {string}`,
  (index: number, title: string) => {
    HomePage.searchResults
      .titles()
      .eq(index - 1)
      .should('contain', title);
  }
);

Then(
  `the {ordinal} result's badge should be {string}`,
  (index: number, badge: string) => {
    HomePage.searchResults
      .badges()
      .eq(index - 1)
      .should('contain', badge);
  }
);

Then(
  `the {ordinal} result should contain a {string} edition with a price of {string}`,
  (index: number, edition: string, price: string) => {
    HomePage.searchResults
      .editionPrice(edition)
      .eq(index - 1)
      .should('contain', price);
  }
);

// Navigate to book details
When(
  `(the customer )clicks on the {ordinal} result's {string} edition`,
  (index: number, edition: string) => {
    HomePage.searchResults
      .editionLink(edition)
      .eq(index - 1)
      .click();
  }
);

Then(`the book's title should be {string}`, (title: string) => {
  BookDetailsPage.book.title().should('contain', title);
});

Then(`the book's badge should be {string}`, (badge: string) => {
  BookDetailsPage.book.badge().should('contain', badge);
});

Then(`the book's selected edition should be {string}`, (edition: string) => {
  BookDetailsPage.book.selectedEdition().should('contain', edition);
});

Then(`the book's price should be {string}`, (price: string) => {
  BookDetailsPage.book.selectedPrice().should('contain', price);
});

// Add to basket
Then(
  `the added item should display a notification {string}`,
  (notification: string) => {
    AddedToBasketPage.notification().should('contain', notification);
  }
);

Then(`there should be {int} item(s) in the basket`, (numberOfItems: number) => {
  AddedToBasketPage.numberOfItems().should(
    'contain',
    `${numberOfItems} ${numberOfItems === 1 ? 'item' : 'items'}`
  );
});

// Edit basket
Then(`the basket item's title should be {string}`, (title: string) => {
  BasketPage.basketItem.title().should('contain', title);
});

Then(`the basket item's edition should be {string}`, (edition: string) => {
  BasketPage.basketItem.edition().should('contain', edition);
});

Then(`the basket item's quantity should be {int}`, (quantity: string) => {
  BasketPage.basketItem.quantity().should('contain', quantity);
});

Then(`the basket item's price should be {string}`, (price: string) => {
  BasketPage.basketItem.price().should('contain', price);
});

Then(`the basket's total price should be {string}`, (price: string) => {
  BasketPage.totalPrice().should('contain', price);
});
