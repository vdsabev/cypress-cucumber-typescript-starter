import { $, Page } from '../utils';

const BasePage = {
  baseUrl: 'https://duckduckgo.com',

  searchInput() {
    return $.get('[name="q"]');
  },
};

export const HomePage = Page.create({
  ...BasePage,
  name: 'DuckDuckGo Home',
  url: '/',
});

export const SearchResultsPage = Page.create({
  ...BasePage,
  name: 'DuckDuckGo Search Results',
  url: '/search?q={query}',

  searchResults: {
    container() {
      return $.get('.results').find('.result');
    },

    titles() {
      return this.container().find('h2');
    },
  },
});
