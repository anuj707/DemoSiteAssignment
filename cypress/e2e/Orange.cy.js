import LoginPage from "../page-objects/LoginPage"
import DashboardPage from "../page-objects/Dashboard"

describe('Login and Logout Tests', () => {
  const loginPage = new LoginPage()
  const dashboardPage = new DashboardPage()

  beforeEach(() => {
    loginPage.visit()
  })

  it('Logs in and out of OrangeHRM website with valid credentials', () => {
    loginPage.fillUsername('Admin')
    loginPage.fillPassword('admin123')
    loginPage.submit()
    dashboardPage.assertLoggedIn()
    dashboardPage.logout()
  })

  it('Fails to login with invalid credentials', () => {
    loginPage.fillUsername('Admin')
    loginPage.fillPassword('invalidpassword')
    loginPage.submit()
    loginPage.assertFailure()
  })
})


