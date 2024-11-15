import { browser, $} from '@wdio/globals'

class productPage {
    // Element Locator
    get pageTitle()     {return $('.login_logo')}
    get usernameInput() {return $('#user-name')}
    get passwordInput() {return $('#password')}
    get loginButton()   {return $('#login-button')}
    get widthSelect()   {return $('select[data-test="product-sort-container"]')}

    // Element Action
    async openPage() {
        await browser.maximizeWindow()
        await browser.url('https://www.saucedemo.com')
        await this.pageTitle.waitForDisplayed()
    }

    async login(username, password){
        await this.usernameInput.setValue(username)
        await this.passwordInput.setValue(password)
        await this.loginButton.click()
    }
}

export default new productPage()