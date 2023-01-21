describe('Login functionality', () => {
    it('takes user input', () => {
        cy.visit('/login')
        cy.get('#email').type('test@gmail.com')
        cy.get('#password').type('test1234')
        cy.get('#login-btn').click()
    });
});