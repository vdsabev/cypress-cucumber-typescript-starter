import SearchResult from '../elements/SearchResult';
import BasePage from './BasePage';

class HomePage extends BasePage {
  public readonly name = 'Amazon Home';
  protected readonly url = '/';

  public get firstSearchResult() {
    return new SearchResult(0);
  }
}

const homePage = new HomePage();

export default homePage;
