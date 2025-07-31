class UserPage {
    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            confPasswordField: "[name='confirmPassword']",
            submitButton: "[type='submit']"
        }
        return selectors
    }

    acessUserPage(){
        cy.visit('/signup')
    }

    signUpUser(firstName,lastName,username,password,confirmPassword){
        cy.get(this.selectorsList().firstNameField).type(firstName)
        cy.get(this.selectorsList().lastNameField).type(lastName)
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().confPasswordField).type(confirmPassword)
    }

    signButton(){
        cy.get(this.selectorsList().submitButton).click()
    }

    checkSignUpInvalid(){
        cy.get(this.selectorsList().submitButton).should("be.disabled");
        
    }

}

export default UserPage