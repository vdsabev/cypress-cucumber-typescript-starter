import AmazonPage from './AmazonPage';
import SearchResult from './SearchResult';

class HomePage extends AmazonPage {
  public readonly name = 'Amazon Home';
  protected readonly url = '/';

  public get firstSearchResult() {
    return new SearchResult(0);
  }
}

const homePage = new HomePage();

export default homePage;
