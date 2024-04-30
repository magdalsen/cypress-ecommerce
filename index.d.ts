/// <reference types="cypress-mailslurp" />

declare namespace Cypress {
    interface Chainable {
        goToMainPage(): Chainable<void>
    }
}

// Return statements

declare namespace Cypress {
    interface Chainable {
        getGetInTouchButton(): string
    }
}

// Buttons

declare namespace Cypress {
    interface Chainable {
        loginBox(): Chainable<void>
    }
}

declare namespace Cypress {
    interface Chainable {
        userEmailInput(): Chainable<void>
    }
}
