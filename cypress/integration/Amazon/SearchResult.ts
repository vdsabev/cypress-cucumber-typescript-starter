import { WebElement } from '../utils';

export default class SearchResult extends WebElement {
  constructor(private readonly index: number) {
    super();
  }

  private get element() {
    // We get the element by the `data-component-type` attribute instead of the `s-search-result` class
    // because before the actual search results Amazon renders sponsored content that uses the same class.
    return this.document
      .get('[data-component-type="s-search-result"]')
      .eq(this.index);
  }

  get title() {
    return this.element.find('h2');
  }

  get badge() {
    return this.element.find('.a-badge-text');
  }

  getEditionLink(edition: string) {
    return this.element.contains('a', edition);
  }

  getEditionPrice(edition: string) {
    return this.element.contains('.a-section', edition).find('.a-price');
  }
}
