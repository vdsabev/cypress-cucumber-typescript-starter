import browser from './browser';

export default abstract class BasePage {
  protected abstract url: string;

  public open() {
    browser.visit(this.url);
  }
}
