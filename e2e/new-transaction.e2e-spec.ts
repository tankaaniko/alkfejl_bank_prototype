import { browser, by, element } from 'protractor';

describe('Bank App', () => {
  beforeEach(() => {
    browser.get('/transactions/new');
  });

  it('should display new transaction form', () => {
    expect(element(by.css('h1')).getText()).toEqual('Új tranzakció');
  });

   it('should redirect to transactions after add new transaction', () => {
       
    element(by.css('[name=sourceAccountNumber]')).sendKeys('1111');
    element(by.css('[name=targetAccountNumber]')).sendKeys('2222');
    element(by.css('[name=targetClientName]')).sendKeys('bb');
    element(by.css('[name=amount]')).sendKeys('100');    

    element(by.css('[type=submit]')).click();
    browser.get('/transactions');
    
    expect(element(by.css('h1')).getText()).toEqual('Összes tranzakció:');
  });
});