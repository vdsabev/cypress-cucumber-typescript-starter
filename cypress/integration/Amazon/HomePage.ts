import BasePage from '../common/BasePage';

export default class HomePage extends BasePage {
  protected url = 'https://www.amazon.co.uk';

  public get searchInput() {
    return cy.get('[aria-label="Search"]');
  }

  public get firstResult() {
    // We use the `data-component-type` attribute instead of the `s-search-result` class
    // because Amazon renders sponsored content with that class.
    const firstResult = cy
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
