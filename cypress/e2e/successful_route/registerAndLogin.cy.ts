
describe('User Registration and Login functionality', () => {
    const password = Cypress.env('PASSWORD');

    beforeEach(() => {
      cy.goToMainPage();
      cy.viewport(1224, 604);
      cy.cookiesPopupBox().click();
    })

    it('Register new user', async function() {
      cy.goToRegistrationPage();
      cy.generateEmail();
      cy.registerNewUser();
      cy.confirmEmail();
      cy.confirmBox().should('contain', 'Dziękujemy za założenie konta.');
      cy.logoutButton().click();
    })

    it('Login with new credentials', function() {
      cy.url().should('eq', Cypress.env('BASE_URL'));
      cy.loginButton().click();
      cy.loginEmailBox().clear().type(this.emailAddress);
      cy.loginPasswordBox().clear().type(password);
      cy.submitButton().click();
      cy.get('div[class="user-menu-panel2"] > span').should('contain', `Cześć ${this.emailAddress}`);
    })

})