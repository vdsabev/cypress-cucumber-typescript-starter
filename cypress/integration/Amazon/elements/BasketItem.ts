import $ from '../../utils';

export default class BasketItem {
  private element() {
    return $.get('.sc-list-item-content');
  }

  public title() {
    return this.element().find('.sc-product-title');
  }

  public edition() {
    return this.element().find('ul').find('li').eq(2);
  }

  public quantity() {
    return this.element().find('.quantity').find('.a-dropdown-prompt');
  }

  public price() {
    return this.element().find('.sc-price');
  }
}
