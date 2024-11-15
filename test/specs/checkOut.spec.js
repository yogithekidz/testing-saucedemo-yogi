import { browser, expect, $ } from '@wdio/globals'
import productPage from '../pageobjects/productPage.page.js'
import checkOut from '../pageobjects/checkOutProcess.page.js'
import validPrice from '../pageobjects/validPriceProcess.page.js'
import button from '../pageobjects/button.page.js'


describe('Fitur CheckOut', function() {
    beforeEach(async function() {
        await productPage.openPage()
        await productPage.login('standard_user', 'secret_sauce')
    })
    it('Testing Checkout Success', async function() {
        await checkOut.atcProcess()
        await checkOut.fillDataCustomer('Sanggito', 'Ariyogi', '14350')

        const subTotal = await validPrice.getSubTotal()
        const tax = await validPrice.getTax()
        const total = await validPrice.getTotal()

        const validPriceItemTotal = (subTotal + tax)
        await expect(total).toEqual(validPriceItemTotal)

        const finishButton = $('button[data-test="finish"]')
        await finishButton.click()

        const validFinishCO = $('h2[data-test="complete-header"]')
        await expect(validFinishCO).toHaveText('Thank you for your order!')

        const backhomeButton = $('button[data-test="back-to-products"]')
        await backhomeButton.click()
        await browser.pause(3000)
    })
    it('Testing Checkout with Invalid First Name', async function() {
        await checkOut.atcProcess()
        await checkOut.fillDataCustomer('1111111111111111111111111', 'Ariyogi', '14350')

        const subTotal = await validPrice.getSubTotal()
        const tax = await validPrice.getTax()
        const total = await validPrice.getTotal()

        const validPriceItemTotal = (subTotal + tax)
        await expect(total).toEqual(validPriceItemTotal)

        const finishButton = $('button[data-test="finish"]')
        await finishButton.click()

        const validFinishCO = $('h2[data-test="complete-header"]')
        await expect(validFinishCO).toHaveText('Thank you for your order!')

        const backhomeButton = $('button[data-test="back-to-products"]')
        await backhomeButton.click()
        await browser.pause(3000)
    })
    it('Testing Checkout with Invalid Last Name', async function() {
        await checkOut.atcProcess()
        await checkOut.fillDataCustomer('Sanggito', '1111111111111111111111111', '14350')

        const subTotal = await validPrice.getSubTotal()
        const tax = await validPrice.getTax()
        const total = await validPrice.getTotal()

        const validPriceItemTotal = (subTotal + tax)
        await expect(total).toEqual(validPriceItemTotal)

        const finishButton = $('button[data-test="finish"]')
        await finishButton.click()

        const validFinishCO = $('h2[data-test="complete-header"]')
        await expect(validFinishCO).toHaveText('Thank you for your order!')

        const backhomeButton = $('button[data-test="back-to-products"]')
        await backhomeButton.click()
        await browser.pause(3000)
    })
    it('Testing Checkout with Invalid Zip Code', async function() {
        await checkOut.atcProcess()
        await checkOut.fillDataCustomer('Sanggito', 'Ariyogi', 'Jakarta')

        const subTotal = await validPrice.getSubTotal()
        const tax = await validPrice.getTax()
        const total = await validPrice.getTotal()

        const validPriceItemTotal = (subTotal + tax)
        await expect(total).toEqual(validPriceItemTotal)

        const finishButton = $('button[data-test="finish"]')
        await finishButton.click()

        const validFinishCO = $('h2[data-test="complete-header"]')
        await expect(validFinishCO).toHaveText('Thank you for your order!')

        const backhomeButton = $('button[data-test="back-to-products"]')
        await backhomeButton.click()
        await browser.pause(3000)
    })
    it('Testing Checkout with Empty First Name', async function() {
        await checkOut.atcProcess()
        await checkOut.fillDataCustomer('', 'Ariyogi', '14350')

        const errorMessage = $('h3[data-test="error"]')
        await expect(errorMessage).toExist()
        await browser.pause(3000)
    })
    it('Testing Checkout with Empty Last Name', async function() {
        await button.openCart()
        await button.checkOutButton()
        await checkOut.fillDataCustomer('Sanggito', '', '14350')

        const errorMessage = $('h3[data-test="error"]')
        await expect(errorMessage).toExist()
        await browser.pause(3000)
    })
    it('Testing Checkout with Empty Last Name', async function() {
        await button.openCart()
        await button.checkOutButton()
        await checkOut.fillDataCustomer('Sanggito', 'Ariyogi', '')

        const errorMessage = $('h3[data-test="error"]')
        await expect(errorMessage).toExist()
        await browser.pause(3000)
    })
})