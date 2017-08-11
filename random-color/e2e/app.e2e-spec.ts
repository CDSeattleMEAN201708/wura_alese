import { RandomColorPage } from './app.po';

describe('random-color App', () => {
  let page: RandomColorPage;

  beforeEach(() => {
    page = new RandomColorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
