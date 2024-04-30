import { MailSlurp } from "mailslurp-client";

Cypress.Commands.add('generateEmail', async function() {
    await cy.mailslurp()
    .then((mailslurp: MailSlurp) => mailslurp.createInboxWithOptions({}))
    .then(inbox => {
      expect(inbox.emailAddress).to.contain("@mailslurp");
      // save the inbox values for access in other tests
      cy.wrap(inbox.id).as('inboxId');
      cy.wrap(inbox.emailAddress).as('emailAddress');
    })
})

Cypress.Commands.add('confirmEmail', async function() {
    await cy.mailslurp().then({
        // set a long timeout when waiting for an email to arrive
        timeout: 60_000,
      }, (mailslurp: MailSlurp) => mailslurp.waitForLatestEmail(this.inboxId, 60_000, true))
        .then(email => email.body.match(/https:\/\/t\.allegro\.pl\/rejestracja\/[^\s"]+/)[0]
        ).then(($confirmationLink) => {
          cy.visit($confirmationLink);
      })
})
