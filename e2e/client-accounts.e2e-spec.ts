import { browser, by, element } from 'protractor';

describe('Bank App', () => {
    beforeEach(() => {
        browser.get('/client/accounts');
    });

    it('should display  client\'s accounts', () => {
        expect(element(by.css('h1')).getText()).toEqual('Saját számlaszámok:');
    });

});