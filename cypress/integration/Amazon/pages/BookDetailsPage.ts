import ProductDetails from '../elements/ProductDetails';
import BasePage from './BasePage';

class BookDetailsPage extends BasePage {
  public readonly name = 'Book Details';
  protected readonly url =
    '/Harry-Potter-Cursed-Child-Playscript/dp/0751565369';

  public readonly book = new ProductDetails();
}

const bookDetailsPage = new BookDetailsPage();

export default bookDetailsPage;
