export default abstract class Page {
  // Static
  public static readonly document = cy;

  private static readonly pages: Page[] = [];

  private static register(page: Page) {
    const duplicatePage = this.pages.find(
      (registeredPage) => registeredPage.constructor === page.constructor
    );

    if (duplicatePage != null) {
      // NOTE: We log the dupplicate page's name because the new page doesn't have a name assigned yet
      throw new Error(
        `A page with name "${duplicatePage.name}" has already been registered`
      );
    }

    this.pages.push(page);
  }

  public static find(name: string) {
    const page = this.pages.find((page) => page.name === name);

    if (!page) {
      throw new Error(`Couldn't find a page with name "${name}"`);
    }

    return page;
  }

  // Instance
  public abstract readonly name: string;

  protected readonly baseUrl?: string;
  protected abstract readonly url: string;

  public readonly document = cy;

  constructor() {
    Page.register(this);
  }

  public open() {
    const url = (this.baseUrl || '') + this.url;
    this.document.visit(url);
  }
}
