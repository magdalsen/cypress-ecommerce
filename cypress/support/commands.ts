/// <reference types="cypress" />
/// <reference types="cypress-mailslurp" />

// Buttons

Cypress.Commands.add('cookiesPopupBox', () => {
    cy.get(getAcceptCookiesBox());
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

// Inputs

Cypress.Commands.add('loginEmailBox', () => {
    cy.get(getLoginEmailBox());
})

Cypress.Commands.add('loginPasswordBox', () => {
    cy.get(getLoginPasswordBox());
})

Cypress.Commands.add('searchBox', () => {
    cy.get(getSearchBox());
})
