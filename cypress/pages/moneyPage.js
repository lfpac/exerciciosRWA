class MoneyPage {
    selectorList (){

        const selectors = {
            newSendMoneyButton : "[data-test='nav-top-new-transaction']",
            selectorSearchList : '[placeholder="Search..."]',
            userListItem: '[data-test="user-list-item-uBmeaz5pX"]',
            fillValueSend:'[placeholder="Amount"]',
            fillDetailSend:'[placeholder="Add a note"]', 
            payButton : '[data-test="transaction-create-submit-payment"]',
            confirmSendMoney : '[data-test="alert-bar-success"]'

        }

        return selectors
    }

    clickNewSendButton() {
        cy.get(this.selectorList().newSendMoneyButton).click()
    }

    selectorContactList() {
        cy.get(this.selectorList().selectorSearchList).click({force : true})
        cy.get(this.selectorList().selectorSearchList).type('Ted')
        cy.get(this.selectorList().userListItem).click()
}
    sendContactMoney(money, note) {
        cy.get(this.selectorList().fillValueSend).type(money)
        cy.get(this.selectorList().fillDetailSend).type(note)
        cy.get(this.selectorList().payButton).click()
        cy.get(this.selectorList().confirmSendMoney)

    }
}

export default MoneyPage