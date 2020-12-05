import ProductDetails from '../elements/ProductDetails';
import BasePage from './BasePage';

class BookDetailsPage extends BasePage {
  public readonly name = 'Book Details';
  protected readonly url =
    '/Harry-Potter-Cursed-Child-Playscript-ebook/dp/B073P9348D';

  public readonly book = new ProductDetails();
}

const bookDetailsPage = new BookDetailsPage();

export default bookDetailsPage;
