class DashboardPage {
    visit() {
      cy.visit('https://opensource-demo.orangehrmlive.com/dashboard')
    }
  
    assertLoggedIn() {
      cy.get('.oxd-userdropdown-name').click()
      cy.contains('a', 'Logout')
    }
  
    logout() {
      cy.get('.oxd-userdropdown-name').click()
      cy.contains('a', 'Logout').click()
      cy.url().should('include', '/auth/login')
    }
  }
  
  export default DashboardPage
  