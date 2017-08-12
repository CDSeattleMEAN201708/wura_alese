import { RegisterFormPage } from './app.po';

describe('register-form App', () => {
  let page: RegisterFormPage;

  beforeEach(() => {
    page = new RegisterFormPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
