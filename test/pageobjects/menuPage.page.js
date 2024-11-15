import {$} from '@wdio/globals'

class menuPage {
    // Element Locator
    get sideMenu() {return $('button=Open Menu')}
    get iconCart() {return $('a[data-test="shopping-cart-link"]')}


    // Element Action
    async openMenu() {
        await this.sideMenu.click()
        await this.sideMenu.waitForStable()
    }
}

export default new menuPage()