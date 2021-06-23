import { AppPage } from './app.po';
import { browser, logging , by, element} from 'protractor';


describe('workspace-project App', () => {
  let page: AppPage;
  var subpageTitle = element(by.id('subpageTitle'));
  var registrationLink =  element(by.id('registration-navbar'));
  var bracketsLink =  element(by.id('brackets-navbar'));

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
  
  it('testing routes', () => {
    browser.sleep(2000).then(function(){
      checkNavbarTexts();
      
    });
  }); 

  function checkNavbarTexts(){
    element(by.id('hello-navbar')).getText().then(function(text){ // Promise
      expect(text).toEqual('Welcome');
    });

    element(by.id('registration-navbar')).getText().then(function(text){ // Promise
      expect(text).toEqual('Registration');
    });

    element(by.id('brackets-navbar')).getText().then(function(text){ // Promise
      expect(text).toEqual('Brackets');
    });
  }

  it('should go to Registration page', function() {
    page.navigateTo();
    browser.get('/');
    registrationLink.click();
    
    expect(element(by.css('h2')).getText()).toEqual('Register Players');
    
        
   });

   it('should go to Brackets page', function() {
    page.navigateTo();
    browser.get('/');
    bracketsLink.click();
    
    expect(element(by.css('h2')).getText()).toEqual('Brackets');
    
        
   });

});
