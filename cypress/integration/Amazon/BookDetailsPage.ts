import { Page } from '../utils';

class BookDetailsPage extends Page {
  public readonly name = 'Book Details';
  protected readonly url =
    'https://www.amazon.co.uk/Harry-Potter-Cursed-Child-Playscript-ebook/dp/B073P9348D';

  public get bookTitle() {
    return this.document.get('#productTitle');
  }

  public get bookBadge() {
    return this.document.get('.badge-link');
  }

  public get bookSelectedEdition() {
    return this.document.get('.a-button-selected').find('.a-button-text');
  }

  public get bookPrice() {
    return this.document.get('.a-button-selected').find('.a-button-text');
  }
}

const bookDetailsPage = new BookDetailsPage();

export default bookDetailsPage;
