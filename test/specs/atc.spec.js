import { browser, expect, $ } from '@wdio/globals'
import productPage from '../pageobjects/productPage.page.js'
import button from '../pageobjects/button.page.js'

describe('FITUR ADD TO CART', function () {
    beforeEach(async function() {
        await productPage.openPage()
        await productPage.login('standard_user', 'secret_sauce')
    })
    it('Add To Cart Item SL Backpack', async function () {
        const atcButton = $('button[data-test="add-to-cart-sauce-labs-backpack"]')
        await atcButton.click()

        const atcBadge = $('span[data-test="shopping-cart-badge"]')
        await expect(atcBadge).toHaveText('1')
        await browser.pause(3000)
    })
    it('Add To Cart Item SL Bike Light', async function () {
        const atcButton = $('button[data-test="add-to-cart-sauce-labs-bike-light"]')
        await atcButton.click()

        const atcBadge = $('span[data-test="shopping-cart-badge"]')
        await expect(atcBadge).toHaveText('2')
        await browser.pause(2000)
    })
    it('Add To Cart Item SL Bolt T-Shirt', async function () {
        const atcButton = $('button[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]')
        await atcButton.click()

        const atcBadge = $('span[data-test="shopping-cart-badge"]')
        await expect(atcBadge).toHaveText('3')
        await browser.pause(2000)
    })
    it('Add To Cart Item SL Fleece Jacket and remove it', async function () {
        const atcButton = $('button[data-test="add-to-cart-sauce-labs-fleece-jacket"]')
        await atcButton.click()

        const removeButton = $('button[data-test="remove-sauce-labs-fleece-jacket"]')
        await removeButton.click()

        const atcBadge = $('span[data-test="shopping-cart-badge"]')
        await expect(atcBadge).toHaveText('3')
        await browser.pause(2000)
    })
    it('Remove Carted Item SL Bolt T-Shirt', async function () {
        const removeItem = $('button[data-test="remove-sauce-labs-bolt-t-shirt"]')
        await removeItem.click()

        const atcBadge = $('span[data-test="shopping-cart-badge"]')
        await expect(atcBadge).toHaveText('2')
        await browser.pause(2000)
    })
    it('Open Your Cart and Remove 1 item', async function () {
        await button.openCart()
        await browser.pause(1000)

        await button.removeButton()

        const validItemPrice = $('.inventory_item_price')
        await expect(validItemPrice).toHaveText('$29.99')
        await browser.pause(3000)
    })
})