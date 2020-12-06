import $ from '../../utils';

export default class SearchResults {
  private element() {
    // We get the element by the `data-component-type` attribute instead of the `s-search-result` class
    // because Amazon renders sponsored content that uses the same class before the actual search results.
    return $.get('[data-component-type="s-search-result"]');
  }

  public titles() {
    return this.element().find('h2');
  }

  public badges() {
    return this.element().find('.a-badge-text');
  }

  public editionLink(edition: string) {
    return this.element().contains('a', edition);
  }

  public editionPrice(edition: string) {
    return this.element().contains('.a-section', edition).find('.a-price');
  }
}
