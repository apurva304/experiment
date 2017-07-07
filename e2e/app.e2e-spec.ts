import { JatinPage } from './app.po';

describe('jatin App', () => {
  let page: JatinPage;

  beforeEach(() => {
    page = new JatinPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
