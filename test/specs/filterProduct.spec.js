import { browser, expect, $ } from '@wdio/globals'
import productPage from '../pageobjects/productPage.page.js'

describe('Filter Product Width Select', function (){
    beforeEach(async function() {
        await productPage.openPage()
        await productPage.login('standard_user', 'secret_sauce')
    })
    it('Filter Descending Name Item Product', async function () {
        const widthSelect = $('select[data-test="product-sort-container"]')
        await widthSelect.selectByVisibleText('Name (Z to A)')
        await browser.pause(1000)
        
        const validSelect = $('span[data-test="active-option"]')
        await expect(validSelect).toBeDisplayed('Name (Z to A)')
        await browser.pause(2000)
    })
    it('Filter Name Item Product by Price Low to High', async function () {
        const widthSelect = $('select[data-test="product-sort-container"]')
        await widthSelect.selectByVisibleText('Price (low to high)')
        await browser.pause(1000)
        
        const validSelect = $('span[data-test="active-option"]')
        await expect(validSelect).toBeDisplayed('Price (low to high)')
        await browser.pause(2000)
    })
    it('Filter Name Item Product by Price High to Low', async function () {
        const widthSelect = $('select[data-test="product-sort-container"]')
        await widthSelect.selectByVisibleText('Price (high to low)')
        await browser.pause(1000)
        
        const validSelect = $('span[data-test="active-option"]')
        await expect(validSelect).toBeDisplayed('Price (high to low)')
        await browser.pause(2000)
    })
})