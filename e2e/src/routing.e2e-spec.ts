import { AppPage } from './app.po';
import { browser, logging , by, element} from 'protractor';


describe('workspace-project App', () => {
  let page: AppPage;
  var subpageTitle = element(by.id('subpageTitle'));
  var registrationLink =  element(by.id('registration-navbar'));
  var bracketsLink =  element(by.id('brackets-navbar'));
  var contestant0 = element(by.id('contestant0'));
  var contestant1 = element(by.id('contestant1'));
  var contestant2 = element(by.id('contestant2'));
  var contestant3 = element(by.id('contestant3'));
  var contestant4 = element(by.id('contestant4'));
  var contestant5 = element(by.id('contestant5'));
  var contestant6 = element(by.id('contestant6'));
  var contestant7 = element(by.id('contestant7'));
  var registerButton = element(by.id('registerbtn'));
  var registerMessage = element(by.id('registermessage'));
  var autofilltwoButton = element(by.id('autofilltwo'));
  var autofillfourButton = element(by.id('autofillfour'));
  var autofilleightButton = element(by.id('autofilleight'));



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

   it('should register 2 contestants', function() {
    page.navigateTo();
    browser.get('/');
    registrationLink.click();

contestant0.sendKeys('Ajna');
contestant1.sendKeys('Lewis');
registerButton.click();
    
    expect(registerMessage.getText()).toEqual('Ajna,Lewis');
    
        
   });

it('should register 4 contestants', function() {
    page.navigateTo();
    browser.get('/');
    registrationLink.click();

contestant0.sendKeys('Ajna');
contestant1.sendKeys('Lewis');
contestant2.sendKeys('Orsega');
contestant3.sendKeys('Alex');
registerButton.click();
    
    expect(registerMessage.getText()).toEqual('Ajna,Lewis,Orsega,Alex');
    
        
   });

it('should register 8 contestants', function() {
    page.navigateTo();
    browser.get('/');
    registrationLink.click();

contestant0.sendKeys('Ajna');
contestant1.sendKeys('Lewis');
contestant2.sendKeys('Orsega');
contestant3.sendKeys('Alex');
contestant4.sendKeys('Li');
contestant5.sendKeys('Yang');
contestant6.sendKeys('Yorder');
contestant7.sendKeys('Kyle');
registerButton.click();
    
    expect(registerMessage.getText()).toEqual('Ajna,Lewis,Orsega,Alex,Li,Yang,Yorder,Kyle');
    
        
   });

it('cannot register 3 contestants', function() {
    page.navigateTo();
    browser.get('/');
    registrationLink.click();

contestant0.sendKeys('Ajna');
contestant1.sendKeys('Lewis');
contestant2.sendKeys('Orsega');

registerButton.click();
    
    expect(registerMessage.getText()).toEqual('Should be 2, 4, or 8 contestants');
    
        
   });

it('cannot register 5 contestants', function() {
    page.navigateTo();
    browser.get('/');
    registrationLink.click();

contestant0.sendKeys('Ajna');
contestant1.sendKeys('Lewis');
contestant2.sendKeys('Orsega');
contestant3.sendKeys('Alex');
contestant4.sendKeys('Li');

registerButton.click();
    
    expect(registerMessage.getText()).toEqual('Should be 2, 4, or 8 contestants');
    
        
   });

it('cannot register 7 contestants', function() {
    page.navigateTo();
    browser.get('/');
    registrationLink.click();

contestant0.sendKeys('Ajna');
contestant1.sendKeys('Lewis');
contestant2.sendKeys('Orsega');
contestant3.sendKeys('Alex');
contestant4.sendKeys('Li');
contestant5.sendKeys('Yang');
contestant6.sendKeys('Yorder');

registerButton.click();
    
    expect(registerMessage.getText()).toEqual('Should be 2, 4, or 8 contestants');
    
        
   });

it('cannot register 6 contestants', function() {
    page.navigateTo();
    browser.get('/');
    registrationLink.click();

contestant0.sendKeys('Ajna');
contestant1.sendKeys('Lewis');
contestant2.sendKeys('Orsega');
contestant3.sendKeys('Alex');
contestant4.sendKeys('Li');
contestant5.sendKeys('Yang');

registerButton.click();
    
    expect(registerMessage.getText()).toEqual('Should be 2, 4, or 8 contestants');
    
        
   });

it('should autofill 2 contestants', function() {
    page.navigateTo();
    browser.get('/');
    registrationLink.click();
    autofilltwoButton.click();
    
registerButton.click();
    
    expect(registerMessage.getText()).toEqual('Zoe,Kaylee');
    
        
   });

it('should autofill 4 contestants', function() {
    page.navigateTo();
    browser.get('/');
    registrationLink.click();
    autofillfourButton.click();
    
registerButton.click();
    
    expect(registerMessage.getText()).toEqual('John,Paul,George,Ringo');
    
        
   });

it('should autofill 8 contestants', function() {
    page.navigateTo();
    browser.get('/');
    registrationLink.click();
    autofilleightButton.click();
    
registerButton.click();
    
    expect(registerMessage.getText()).toEqual('Leia,Luke,Lando,Han,Chewy,R2D2,C3P0,Vader');
    
        
   });
});
