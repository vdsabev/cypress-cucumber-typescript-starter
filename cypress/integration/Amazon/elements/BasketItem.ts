import $ from '../../../support';

export default class BasketItem {
  private container() {
    return $.get('.sc-list-item-content');
  }

  public title() {
    return this.container().find('.sc-product-title');
  }

  public edition() {
    return this.container().find('ul').find('li').eq(2);
  }

  public quantity() {
    return this.container().find('.quantity').find('.a-dropdown-prompt');
  }

  public price() {
    return this.container().find('.sc-price');
  }
}
