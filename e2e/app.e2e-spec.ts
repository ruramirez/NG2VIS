import { Ng2visPage } from './app.po';

describe('ng2vis App', function() {
  let page: Ng2visPage;

  beforeEach(() => {
    page = new Ng2visPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
