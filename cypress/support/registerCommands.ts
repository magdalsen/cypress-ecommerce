const password = Cypress.env('PASSWORD');

Cypress.Commands.add('registerNewUser', function() {
    cy.get('input#email').type(this.emailAddress);
    cy.get('input#password').type(password);
    cy.get('[role="radiogroup"] > :nth-child(2)').click();
    cy.get('div > label:nth-child(5)').click();
    cy.submitButton().click();
})