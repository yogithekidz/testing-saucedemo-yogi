import { browser, expect, $ } from '@wdio/globals'
import productPage from '../pageobjects/productPage.page.js'
import menuPage from '../pageobjects/menuPage.page.js'

describe('Fitur Side Bar Swag Labs', function () {
    it('Open Menu', async function () {
        await productPage.openPage()
        await productPage.login('standard_user', 'secret_sauce')
        await menuPage.openMenu()

        const validSideBar = $('a[data-test="inventory-sidebar-link"]')
        await expect(validSideBar).toHaveText('All Items')
        await browser.pause(3000)
    })
    it('Logout', async function () {
        const logoutButton = $('a[data-test="logout-sidebar-link"]')
        await logoutButton.click()

        const validLogout = $('.login_logo')
        await expect(validLogout).toHaveText('Swag Labs')
        await browser.pause(3000)
    })
})