import userData from '../../fixtures/userData.json'
import UserPage from '../../pages/userPage.js'

const userPage = new UserPage()


describe('Login com sucesso', () => {

  it('Registro de novo usuário com sucesso', () => {
    userPage.acessUserPage()
    userPage.signUpUser(userData.userSucess.firstName,userData.userSucess.lastName,userData.userSucess.username,userData.userSucess.password,userData.userSucess.confirmPassword)
    userPage.signButton()
})

  it('Registro de novo usuário incompleto', () => {
    userPage.acessUserPage()
    userPage.signUpUser(userData.userFail.firstName,userData.userFail.lastName,userData.userFail.username,userData.userFail.password,userData.userFail.confirmPassword)
    userPage.checkSignUpInvalid()
})
})