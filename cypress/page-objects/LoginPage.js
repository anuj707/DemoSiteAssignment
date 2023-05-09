class LoginPage {
    visit() {
      cy.visit('https://opensource-demo.orangehrmlive.com/')
    }

    elements = {

    username:() => cy.get('[name="username"]'),
    password:() => cy.get('[name="password"]'),
    submit :() => cy.contains('button', 'Login'),
    assertFailure:() => cy.get('.oxd-alert-content-text')

    }
  
    fillUsername(value) {
      // const field = cy.get('[name="username"]')
      // field.type(value)
      // return this
      this.elements.username().type(value)
    }
  
    fillPassword(value) {
      // const field = cy.get('[name="password"]')
      // field.type(value)
      // return this
      this.elements.password().type(value)

    }
  
    submit() {
      // const button = cy.contains()
      // button.click()
      this.elements.submit().click()
    }
  
    assertSuccess() {
      cy.url().should('include', '/dashboard')
    }
  
    assertFailure() {
      //cy.get('.oxd-alert-content-text').should('contain.text', 'Invalid credentials')
      this.elements.assertFail.should('contain.text', 'Invalid credentials')
    }
  }
  
  export default LoginPage
  