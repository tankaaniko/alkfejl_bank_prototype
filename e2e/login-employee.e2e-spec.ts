import { browser, by, element } from 'protractor';

describe('Bank App', () => {
  beforeEach(() => {
    browser.get('/employee/login');
  });

  it('should display employee Login', () => {
    expect(element(by.css('h1')).getText()).toEqual('Alkalmazott Bejelentkezés');
  });

  it('should fail writing wrong credentails', () => {
    element(by.css('[name=username]')).sendKeys('q');
    element(by.css('[name=password]')).sendKeys('q');
    
    element(by.css('[type=submit]')).click();

   expect(element(by.css('h1')).getText()).toEqual('Alkalmazott Bejelentkezés');
  });

  it('should login after writing good credentails', () => {
      
    element(by.css('[name=username]')).sendKeys('aa');
    element(by.css('[name=password]')).sendKeys('aa');
    element(by.css('[type=submit]')).click();
    browser.get('/');
    
    expect(element(by.css('h1')).getText()).toEqual('Üdvözöllek!');
  });
});