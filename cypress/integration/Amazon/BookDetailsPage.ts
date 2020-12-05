import browser from '../utils/browser';
import Page from '../utils/Page';

class BookDetailsPage extends Page {
  public readonly name = 'Book Details';
  protected readonly url =
    'https://www.amazon.co.uk/Harry-Potter-Cursed-Child-Playscript-ebook/dp/B073P9348D';

  public get bookTitle() {
    return browser.get('#productTitle');
  }

  public get bookBadge() {
    return browser.get('.badge-link');
  }

  public get bookSelectedEdition() {
    return browser.get('.a-button-selected').find('.a-button-text');
  }

  public get bookPrice() {
    return browser.get('.a-button-selected').find('.a-button-text');
  }
}

const bookDetailsPage = new BookDetailsPage();

export default bookDetailsPage;
