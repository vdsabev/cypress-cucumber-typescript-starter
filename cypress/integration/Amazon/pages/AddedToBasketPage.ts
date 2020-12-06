import $ from '../../utils';
import BasePage from './BasePage';

class AddedToBasketPage extends BasePage {
  public readonly name = 'Added to Basket';
  protected readonly url = '/gp/huc/view.html';

  public notification() {
    return $.get('#huc-v2-order-row-confirm-text');
  }

  public numberOfItems() {
    return $.get('.huc-subtotal');
  }
}

const addedToBasketPage = new AddedToBasketPage();

export default addedToBasketPage;
