import { Page } from '../utils';

export default abstract class AmazonPage extends Page {
  protected readonly baseUrl = 'https://www.amazon.co.uk';

  public get searchInput() {
    return this.document.get('[aria-label="Search"]');
  }
}
