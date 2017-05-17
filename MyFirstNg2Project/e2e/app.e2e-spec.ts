import { MyFirstNg2ProjectPage } from './app.po';

describe('my-first-ng2-project App', function() {
  let page: MyFirstNg2ProjectPage;

  beforeEach(() => {
    page = new MyFirstNg2ProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
