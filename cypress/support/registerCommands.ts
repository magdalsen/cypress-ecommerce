const password = Cypress.env('PASSWORD');

Cypress.Commands.add('registerNewUser', function() {
    cy.registrationEmailBox().type(this.emailAddress);
    cy.registrationPasswordBox().type(password);
    cy.get('[role="radiogroup"] > :nth-child(2)').click();
    cy.get('div > label:nth-child(5)').click();
    cy.submitButton().click();
})
