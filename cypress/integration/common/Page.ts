import browser from './browser';

export default abstract class Page {
  public abstract readonly name: string;
  protected abstract readonly url: string;

  public open() {
    browser.visit(this.url);
  }
}
