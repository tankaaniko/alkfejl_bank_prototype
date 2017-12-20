import { browser, by, element } from 'protractor';

describe('Bank App', () => {
  beforeEach(() => {
    browser.get('/client/login');
  });

  it('should display client Login', () => {
    expect(element(by.css('h1')).getText()).toEqual('Felhasználó Bejelentkezés');
  });

  it('should fail writing wrong credentails', () => {
    element(by.css('[name=username]')).sendKeys('q');
    element(by.css('[name=password]')).sendKeys('q');
    element(by.css('[name=pin]')).sendKeys('q');
    
    element(by.css('[type=submit]')).click();

   // expect(element(by.css('form')).getText()).toContain('Login failed!');
   expect(element(by.css('h1')).getText()).toEqual('Felhasználó Bejelentkezés');
  });

  it('should login after writing good credentails', () => {
   // browser.get('/');
    //expect(element(by.css('h2')).getText()).toEqual('Üdvözöllek!');
    //browser.get('/client/login');
    
    element(by.css('[name=username]')).sendKeys('a');
    element(by.css('[name=password]')).sendKeys('a');
    element(by.css('[name=pin]')).sendKeys('0000');
    element(by.css('[type=submit]')).click();
    browser.get('/');
    
    expect(element(by.css('h1')).getText()).toEqual('Üdvözöllek!');
  });
});