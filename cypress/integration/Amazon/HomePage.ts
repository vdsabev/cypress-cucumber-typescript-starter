import { Page } from '../utils';

class HomePage extends Page {
  public readonly name = 'Amazon Home';
  protected readonly url = 'https://www.amazon.co.uk/';

  public get searchInput() {
    return this.document.get('[aria-label="Search"]');
  }

  public get firstResult() {
    // We get the element by the `data-component-type` attribute instead of the `s-search-result` class
    // because Amazon renders sponsored content that uses the same class.
    const firstResult = this.document
      .get('[data-component-type="s-search-result"]')
      .first();

    return {
      get title() {
        return firstResult.find('h2');
      },
      get badge() {
        return firstResult.find('.a-badge-text');
      },
      getEditionLink(edition: string) {
        return firstResult.contains('a', edition);
      },
      getEditionPrice(edition: string) {
        return firstResult.contains('.a-section', edition).find('.a-price');
      },
    };
  }
}

const homePage = new HomePage();

export default homePage;
