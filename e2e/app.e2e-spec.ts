import { AotStarterPage } from './app.po';

describe('aot-starter App', function() {
  let page: AotStarterPage;

  beforeEach(() => {
    page = new AotStarterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
