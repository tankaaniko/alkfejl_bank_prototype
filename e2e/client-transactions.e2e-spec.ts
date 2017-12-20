import { browser, by, element } from 'protractor';

describe('Bank App', () => {
    beforeEach(() => {
        browser.get('/client/transactions');
    });

    it('should display client\'s transactions', () => {
        expect(element(by.css('h1')).getText()).toEqual('Saját tranzakciók:');
    });

});