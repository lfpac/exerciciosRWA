class TransactionPage {

    selectorList() {

        const selector = {
            selectMineCamp : '[data-test="nav-personal-tab"]',
            confirmTransactionCarried : '.MuiPaper-elevation1',
            transactionDetailButton: '.TransactionTitle-title',
            confirmTransactionDetailCarried : '.TransactionDetail-paper',
            confirmWithoutDetail: '.MuiPaper-elevation1'
        }

        return selector
    }

    personalMinePage() {
        cy.get(this.selectorList().selectMineCamp).click()
        cy.location('pathname').should('equal', '/personal')
        }
    confirmTransaction() {
        cy.get(this.selectorList().confirmTransactionCarried).contains(/paid|charged/).should('exist')
    }
    transactionDetail() {
        cy.get(this.selectorList().transactionDetailButton).eq(0).click({force : true})
        cy.get(this.selectorList().confirmTransactionDetailCarried).contains(/paid|charged|Transaction Detail/).should('exist')
        cy.visit('/personal')
    }
    transactionWhitoutDetail() {    
        cy.get(this.selectorList().confirmWithoutDetail).contains(/No Transactions/).should('exist')
    }
}

export default TransactionPage