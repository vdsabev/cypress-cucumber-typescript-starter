import '../../support/customParameterTypes';
import { Then, When } from '../../support';
import { HomePage, SearchResultsPage } from './pages';

// Search for book
When(`(the customer )searches for {string}`, (query: string) => {
  HomePage.searchInput().type(`${query}{enter}`);
});

Then(
  `the {ordinal} result's title should be {string}`,
  (index: number, title: string) => {
    SearchResultsPage.searchResults
      .titles()
      .eq(index - 1)
      .should('contain', title);
  }
);
