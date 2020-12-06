import BasePage from './BasePage';

class AddedToBasketPage extends BasePage {
  public readonly name = 'Basket';
  protected readonly url = 'https://www.amazon.co.uk/gp/huc/view.html';

  public get notification() {
    return this.document.get('#huc-v2-order-row-confirm-text');
  }

  public get numberOfItems() {
    return this.document.get('.huc-subtotal');
  }
}

const addedToBasketPage = new AddedToBasketPage();

export default addedToBasketPage;
