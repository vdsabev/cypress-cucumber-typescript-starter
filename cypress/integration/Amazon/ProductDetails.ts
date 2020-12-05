import { WebElement } from '../utils';

export default class ProductDetails extends WebElement {
  public get title() {
    return this.document.get('#productTitle');
  }

  public get badge() {
    return this.document.get('.badge-link');
  }

  public get selectedEdition() {
    return this.document.get('.a-button-selected').find('.a-button-text');
  }

  public get selectedPrice() {
    return this.document.get('.a-button-selected').find('.a-button-text');
  }
}
