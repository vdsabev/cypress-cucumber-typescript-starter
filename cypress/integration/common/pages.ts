import Page from './Page';

const pages: Page[] = [];

export function registerPage(page: Page) {
  const pageAlreadyRegistered = pages.some(
    (registeredPage) => registeredPage.name === page.name
  );

  if (pageAlreadyRegistered) {
    throw new Error(`A page with name "${name}" has already been registered!`);
  }

  pages.push(page);
}

export function findPage(name: string): Page {
  const page = pages.find((page) => page.name === name);

  if (!page) {
    throw new Error(`Couldn't find a page with name "${name}"!`);
  }

  return page;
}
