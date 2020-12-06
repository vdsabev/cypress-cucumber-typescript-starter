import { Then, When } from '../utils';
import { HomePage, SearchResultsPage } from './pages';

// Search for book
When(`(the customer )searches for {string}`, (query: string) => {
  HomePage.searchInput().type(`${query}{enter}`);
});

Then(`the first result's title should be {string}`, (title: string) => {
  SearchResultsPage.searchResultTitles().eq(0).should('contain', title);
});
