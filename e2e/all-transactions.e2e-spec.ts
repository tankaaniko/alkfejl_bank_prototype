import { browser, by, element } from 'protractor';

describe('Bank App', () => {
    beforeEach(() => {
        browser.get('/transactions');
    });

    it('should display all transactions', () => {
        expect(element(by.css('h1')).getText()).toEqual('Összes tranzakció:');
    });

});