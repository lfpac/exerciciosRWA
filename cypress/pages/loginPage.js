class LoginPage {
    selectorsList() {
        const selectors = {
            usernameField: '#username',
            passwordField: '#password',
            loginButton: "[type='submit']",
            wrongCredentialAlert: "[role='alert']",
        }
        return selectors
    }

    acessLoginPage(){
        cy.visit('/signin')
    }

    loginWithUser(username,password){
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
    }

    checkAcessInvalid(){
        cy.get(this.selectorsList().wrongCredentialAlert)
    }

}

export default LoginPage