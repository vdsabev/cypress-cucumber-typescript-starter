import SearchResults from '../elements/SearchResults';
import BasePage from './BasePage';

class HomePage extends BasePage {
  public readonly name = 'Amazon Home';
  protected readonly url = '/';

  public readonly searchResults = new SearchResults();
}

const homePage = new HomePage();

export default homePage;
