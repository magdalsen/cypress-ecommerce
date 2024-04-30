/// <reference types="cypress" />
/// <reference types="cypress-mailslurp" />

Cypress.Commands.add('cookiesPopup', () => {
    cy.get(getAcceptCookies());
})

Cypress.Commands.add('submitButton', () => {
    cy.get(getSubmitButton());
})

Cypress.Commands.add('logoutButton', () => {
    cy.get(getLogoutButton());
})

Cypress.Commands.add('confirmBox', () => {
    cy.get(getConfirmBox());
})

Cypress.Commands.add('loginButton', () => {
    cy.get(getLoginButton());
})

Cypress.Commands.add('loginEmailBox', () => {
    cy.get(getLoginEmailBox());
})

Cypress.Commands.add('loginPasswordBox', () => {
    cy.get(getLoginPasswordBox());
})
