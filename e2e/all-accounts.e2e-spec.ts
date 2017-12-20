import { browser, by, element } from 'protractor';

describe('Bank App', () => {
    beforeEach(() => {
        browser.get('/accounts');
    });

    it('should display all accounts', () => {
        expect(element(by.css('h1')).getText()).toEqual('Összes számlaszám:');
    });

});