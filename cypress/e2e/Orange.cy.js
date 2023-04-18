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
            .fillPassword('admin123')
            .submit()
    dashboardPage.assertLoggedIn()
    dashboardPage.logout()
  })

  it('Fails to login with invalid credentials', () => {
    loginPage.fillUsername('Admin')
            .fillPassword('invalidpassword')
            .submit()
    loginPage.assertFailure()
  })
})


