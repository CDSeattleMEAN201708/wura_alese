import { QuoteRankPage } from './app.po';

describe('quote-rank App', () => {
  let page: QuoteRankPage;

  beforeEach(() => {
    page = new QuoteRankPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
