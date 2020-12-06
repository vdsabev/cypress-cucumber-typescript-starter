import $ from '../../utils';
import BasketItem from '../elements/BasketItem';
import BasePage from './BasePage';

class BasketPage extends BasePage {
  public readonly name = 'Basket Page';
  protected readonly url = '/gp/cart/view.html';

  public readonly basketItem = new BasketItem();

  public totalPrice() {
    return $.get('#sc-subtotal-amount-buybox');
  }
}

const basketPage = new BasketPage();

export default basketPage;
