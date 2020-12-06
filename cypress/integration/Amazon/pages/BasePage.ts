import { $, Page } from '../../utils';

export default abstract class BasePage extends Page {
  protected readonly baseUrl = 'https://www.amazon.co.uk';

  public searchInput() {
    return $.get('[aria-label="Search"]');
  }
}
