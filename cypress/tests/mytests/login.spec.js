import userData from '../../fixtures/userData.json'
import LoginPage from '../../pages/loginPage.js'

const loginPage = new LoginPage()

describe('Login com sucesso', () => {

  it('Login - Sucess', () => {
  loginPage.acessLoginPage()
  loginPage.loginWithUser(userData.userSucess.username,userData.userSucess.password)
})

  it('Login - Fail', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userFail.username,userData.userFail.password)
    loginPage.checkAcessInvalid()
})
})