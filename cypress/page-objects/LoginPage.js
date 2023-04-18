class LoginPage {
    visit() {
      cy.visit('https://opensource-demo.orangehrmlive.com/')
    }
  
    fillUsername(value) {
      const field = cy.get('[name="username"]')
      field.clear()
      field.type(value)
      return this
    }
  
    fillPassword(value) {
      const field = cy.get('[name="password"]')
      field.clear()
      field.type(value)
      return this
    }
  
    submit() {
      const button = cy.contains('button', 'Login')
      button.click()
    }
  
    assertSuccess() {
      cy.url().should('include', '/dashboard')
    }
  
    assertFailure() {
      cy.get('.oxd-alert-content-text').should('contain.text', 'Invalid credentials')
    }
  }
  
  export default LoginPage
  