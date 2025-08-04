import userData from '../../fixtures/userData.json'
import LoginPage from '../../pages/loginPage.js'
import TransactionPage from '../../pages/transactionPage.js'

const loginPage = new LoginPage ()
const transactionPage = new TransactionPage ()

describe('Visualizar histórico de transações com sucesso', () => {

     it('Deve exibir o histórico de transações de um usuário corretamente', () => {
        loginPage.acessLoginPage()
        loginPage.loginWithUser(userData.userSucess.username,userData.userSucess.password)
        transactionPage.personalMinePage()
        transactionPage.confirmTransaction()
        transactionPage.transactionDetail()
    }
  )
    
});

describe('Tentar visualizar o histórico de transações sem transações anteriores', () => {

  it('Deve exibir uma mensagem indicando que o usuário não possui transações anteriores', () => {
        loginPage.acessLoginPage()
        loginPage.loginWithUser(userData.userTransaction.username,userData.userTransaction.password)
        transactionPage.personalMinePage()
        transactionPage.transactionWhitoutDetail()
    }
  )
});