import browser from './browser';
import { registerPage } from './pages';

export default abstract class Page {
  public abstract readonly name: string;
  protected abstract readonly url: string;

  constructor() {
    registerPage(this);
  }

  public open() {
    browser.visit(this.url);
  }
}
