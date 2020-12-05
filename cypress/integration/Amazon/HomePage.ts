import document from '../common/document';
import Page from '../common/Page';

class HomePage extends Page {
  public readonly name = 'Amazon Home';
  protected readonly url = 'https://www.amazon.co.uk';

  public get searchInput() {
    return document.get('[aria-label="Search"]');
  }

  public get firstResult() {
    // We use the `data-component-type` attribute instead of the `s-search-result` class
    // because Amazon renders sponsored content with that class.
    const firstResult = document
      .get('[data-component-type="s-search-result"]')
      .first();

    return {
      get title() {
        return firstResult.find('h2');
      },
      get badge() {
        return firstResult.find('.a-badge-text');
      },
      getPrice(edition: string) {
        return firstResult.contains('.a-section', edition).find('.a-price');
      },
    };
  }
}

const homePage = new HomePage();

export default homePage;
