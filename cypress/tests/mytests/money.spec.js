import userData from '../../fixtures/userData.json'
import LoginPage from '../../pages/loginPage.js'
import MoneyPage from '../../pages/moneyPage.js'

const loginPage = new LoginPage()
const moneyPage = new MoneyPage()

describe ('Enviar dinheiro com saldo suficiente', () => {
  });
    it('Login-Sucess', () => {
      loginPage.acessLoginPage()
      loginPage.loginWithUser(userData.userSucess.username,userData.userSucess.password)
      moneyPage.clickNewSendButton()
      moneyPage.selectorContactList()
      moneyPage.sendContactMoney('15000','teste01')
    });
 