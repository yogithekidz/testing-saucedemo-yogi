import {$} from '@wdio/globals'

class button {
    get iconCart() {return $('a[data-test="shopping-cart-link"]')}
    get checkout() {return $('button[data-test="checkout"]')}
    get remove()   {return $('button[data-test="remove-sauce-labs-bike-light"]')}

    async openCart() {
        await this.iconCart.click()
    }

    async checkOutButton() {
        await this.checkout.click()
    }

    async removeButton(){
        await this.remove.click()
    }
}
export default new button()