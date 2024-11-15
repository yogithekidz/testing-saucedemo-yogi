import {$} from '@wdio/globals'

class validPrice {
    get subTotalLabel() { return $('.summary_subtotal_label')}
    get taxLabel() { return $('.summary_tax_label')}
    get totalLabel() { return $('.summary_total_label')}
    
    async getSubTotal() {
        await this.subTotalLabel.getText()
        return parseFloat(this.subTotalLabel.replace('Item total: $',''))
    }

    async getTax(){
        await this.taxLabel.getText()
        return parseFloat(this.taxLabel.replace('Tax: $', ''))
    }

    async getTotal(){
        await this.totalLabel.getText()
        return parseFloat(this.totalLabel.replace('Total: $', ''))
    }
}

export default new validPrice()