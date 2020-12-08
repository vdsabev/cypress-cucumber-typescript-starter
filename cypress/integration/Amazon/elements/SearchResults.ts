import $ from '../../../support';

export default class SearchResults {
  private container() {
    // We get the element by the `data-component-type` attribute instead of the `s-search-result` class
    // because Amazon sometimes renders sponsored content that uses the same class before the actual search results.
    return $.get('[data-component-type="s-search-result"]');
  }

  public titles() {
    return this.container().find('h2');
  }

  public badges() {
    return this.container().find('.a-badge-text');
  }

  public editionLink(edition: string) {
    return this.container().contains('a', edition);
  }

  public editionPrice(edition: string) {
    return this.editionLink(edition)
      .closest('.a-row')
      .next('.a-row')
      .find('.a-price');
  }
}
