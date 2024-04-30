/// <reference types="cypress-mailslurp" />

// Navigation

declare namespace Cypress {
    interface Chainable {
        goToMainPage(): Chainable<void>
    }
}

declare namespace Cypress {
    interface Chainable {
        goToRegistrationPage(): Chainable<void>
    }
}

// E-mail

declare namespace Cypress {
    interface Chainable {
        generateEmail(): Promise<void>
    }
}

declare namespace Cypress {
    interface Chainable {
        confirmEmail(): Promise<void>
    }
}

// Return statements

declare namespace Cypress {
    interface Chainable {
        getGetInTouchButton(): string
    }
}

//

declare namespace Cypress {
    interface Chainable {
        cookiesPopup(): Chainable<void>
    }
}

// Buttons

declare namespace Cypress {
    interface Chainable {
        submitButton(): Chainable<void>
    }
}

declare namespace Cypress {
    interface Chainable {
        logoutButton(): Chainable<void>
    }
}

declare namespace Cypress {
    interface Chainable {
        confirmBox(): Chainable<void>
    }
}

declare namespace Cypress {
    interface Chainable {
        loginButton(): Chainable<void>
    }
}

// Inputs

declare namespace Cypress {
    interface Chainable {
        loginEmailBox(): Chainable<void>
    }
}

declare namespace Cypress {
    interface Chainable {
        loginPasswordBox(): Chainable<void>
    }
}