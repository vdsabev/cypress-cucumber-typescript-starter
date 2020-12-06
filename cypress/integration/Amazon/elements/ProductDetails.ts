import $ from '../../utils';

export default class ProductDetails {
  public title() {
    return $.get('#productTitle');
  }

  public badge() {
    return $.get('.badge-link');
  }

  public selectedEdition() {
    return $.get('.a-button-selected').find('.a-button-text');
  }

  public selectedPrice() {
    return $.get('.a-button-selected').find('.a-button-text');
  }
}
