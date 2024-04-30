import { MailSlurp } from "mailslurp-client";

describe('User Registration and Login', () => {
    const password = Cypress.env('PASSWORD');

    beforeEach(() => {
      cy.visit('https://allegro.pl/');
      cy.viewport(1224, 604);
      cy.get('[data-testid="accept_home_view_action"]').click();
      cy.get('[data-box-name="allegro.metrumHeader"] nav > :nth-child(6) button').click();
      cy.get('[data-box-name="allegro.user.menu"] a[href="/rejestracja"]').click();
    })

    it.only('Register', async () => {
      await cy.mailslurp()
        .then((mailslurp: MailSlurp) => mailslurp.createInboxWithOptions({}))
        .then(inbox => {
          expect(inbox.emailAddress).to.contain("@mailslurp")
          // save the inbox values for access in other tests
          cy.wrap(inbox.id).as('inboxId')
          cy.wrap(inbox.emailAddress).as('emailAddress')
          console.log(inbox.emailAddress)
          cy.wait(10000);
          cy.get('input#email').type(inbox.emailAddress);
          cy.get('input#password').type(password);
          cy.get('[role="radiogroup"] > :nth-child(2)').click();
          cy.get('div > label:nth-child(5)').click();
        })
        cy.wait(1000);
        cy.get('[data-testid="submit-btn"]').click();

        // E-mail confirmation
        cy.get('@inboxId').then(async (inboxId) => {
          await cy.mailslurp().then({
            // set a long timeout when waiting for an email to arrive
            timeout: 60_000,
        }, (mailslurp: MailSlurp) => mailslurp.waitForLatestEmail(inboxId, 60_000, true))
            .then(email => email.body.match(/https:\/\/t\.allegro\.pl\/rejestracja\/[^\s"]+/)[0]
            ).then((link) => {
              // cy.visit(link);
              return link = Cypress.env('LINK_TO_ACCEPT');
            })
        })
    })

    it('Login', () => {
      // cy.visit(Cypress.env('LINK_TO_ACCEPT'))
      // cy.loginBox().click({ force: true });
      // cy.userEmailInput().type(emailLogin);
      // cy.get('[class="buttons-group show"]').click();
    })
    
    it('Check redirection', ()=> {
      cy.financeESGButton().click();
      cy.esgKpiButton().click({ force: true });

      cy.url().should('eq', Cypress.env('ESGKPI_URL'));
      cy.url().then(url => cy.log('Current URL is', url));
    })
})