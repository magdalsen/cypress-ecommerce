/// <reference types="cypress" />
/// <reference types="cypress-mailslurp" />

Cypress.Commands.add('goToMainPage', () => {
    cy.visit(Cypress.env('BASE_URL'));
})

// Return statements

const getLoginBox = () => {
    return '.empikNav__userText.ta-login-link';
}

const getUserEmailInput = () => {
    return '[id="user-email"]';
}

// Buttons

Cypress.Commands.add('loginBox', () => {
    cy.get(getLoginBox());
})

Cypress.Commands.add('userEmailInput', () => {
    cy.get(getUserEmailInput());
})

