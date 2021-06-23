import { AppPage } from './app.po';
import { browser, logging , by, element} from 'protractor';


describe('workspace-project App', () => {
  let page: AppPage;
  var subpageTitle = element(by.id('subpageTitle'));

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('8-Player Tournament Bracket!');
  });

  it('should have a h1', function() {
    page.navigateTo();
    browser.get('/');
    expect(subpageTitle.getText()).toEqual('Brackets App');
        
   });

});
