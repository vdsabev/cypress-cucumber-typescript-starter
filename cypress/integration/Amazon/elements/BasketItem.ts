import { WebElement } from '../../utils';

export default class BasketItem extends WebElement {
  private get element() {
    return this.document.get('.sc-list-item-content');
  }

  public get title() {
    return this.element.find('.sc-product-title');
  }

  public get edition() {
    return this.element.find('ul').find('li').eq(2);
  }

  public get quantity() {
    return this.element.find('.quantity').find('.a-dropdown-prompt');
  }

  public get price() {
    return this.element.find('.sc-price');
  }
}
