const HomePage = require('../pageobjects/home.page')
const SecurePage = require('../pageobjects/secure.page')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await HomePage.open('Google');

        // await browser.debug();
    })
})


