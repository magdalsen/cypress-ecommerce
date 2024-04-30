
Cypress.Commands.add('goToMainPage', () => {
    cy.visit(Cypress.env('BASE_URL'));
})

Cypress.Commands.add('goToRegistrationPage', () => {
    cy.get('[data-box-name="allegro.metrumHeader"] nav > :nth-child(6) button').click();
    cy.get('[data-box-name="allegro.user.menu"] a[href="/rejestracja"]').click();
})