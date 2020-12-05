import AmazonPage from './AmazonPage';
import ProductDetails from './ProductDetails';

class BookDetailsPage extends AmazonPage {
  public readonly name = 'Book Details';
  protected readonly url =
    '/Harry-Potter-Cursed-Child-Playscript-ebook/dp/B073P9348D';

  public readonly book = new ProductDetails();
}

const bookDetailsPage = new BookDetailsPage();

export default bookDetailsPage;
