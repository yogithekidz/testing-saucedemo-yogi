import {$} from '@wdio/globals'

class checkOut{
    // Element Locator
    get atcButton()      {return $('button[data-test="add-to-cart-sauce-labs-backpack"]')}
    get yourCartButton() {return $('a[data-test="shopping-cart-link"]')}
    get checkOutButton() {return $('button[data-test="checkout"]')}
    get firstName()      {return $('input[data-test="firstName"]')}
    get lastName()       {return $('input[data-test="lastName"]')}
    get zipCode()        {return $('input[data-test="postalCode"]')}
    get continueButton() {return $('input[data-test="continue"]')}

    // Element Action
    async atcProcess() {
        await this.atcButton.click()
        await this.yourCartButton.click()
        await this.yourCartButton.waitForStable()
        await this.checkOutButton.click()
        await browser.pause(500)
    }

    async fillDataCustomer(firstname, lastname, zipcode){
        await this.firstName.setValue(firstname)
        await browser.pause(500)
        await this.lastName.setValue(lastname)
        await browser.pause(500)
        await this.zipCode.setValue(zipcode)
        await browser.pause(500)
        await this.continueButton.click()
        await browser.pause(1000)
    }
}
export default new checkOut()