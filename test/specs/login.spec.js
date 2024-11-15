import { expect, $ } from '@wdio/globals'
import productPage from '../pageobjects/productPage.page.js'

describe('Testing Fitur Login', function() {
    beforeEach(async function() {
        await productPage.openPage()
    })
    it('Login with Valid Username and Password', async function() {
        await productPage.login('standard_user', 'secret_sauce')

        const productTitle = $('span[data-test="title"]')
        await expect(productTitle).toExist()
    })
    it('Login with Invalid Password', async function() {
        await productPage.login('standard_user', '111111')

        const errorMessage = $('h3[data-test="error"]')
        await expect(errorMessage).toExist()
    })
    it('Login with Invalid Username', async function() {
        await productPage.login('111111', 'secret_sauce')

        const errorMessage = $('h3[data-test="error"]')
        await expect(errorMessage).toExist()
    })
    it('Login with Invalid Username', async function() {
        await productPage.login('111111', '111111')

        const errorMessage = $('h3[data-test="error"]')
        await expect(errorMessage).toExist()
    })
    
})