
describe('Search and filter functionality', () => {
    beforeEach(() => {
        cy.goToMainPage();
        cy.viewport(1224, 604);
        cy.cookiesPopupBox().click();
      })

    it('Should search for electronics and apply filters', () => {
      // Search for electronics
      cy.searchBox().type('electronics').type('{enter}');
  
      // Apply filters
      cy.get('[data-box-name="Filtry"]').within(() => {
        cy.contains('Cena').click();
        cy.get('[data-value="200-500"]').click();
        cy.contains('Zastosuj').click();
      });

      // Verify that displayed products match search criteria and filters applied
      cy.get('.listing-item').each(($product) => {
        cy.wrap($product).within(() => {
          // Check if product contains "electronics" in its title or category
          cy.get('.listing-item-title').should('contain', 'electronics');
          // Check if product price is within the specified range
          cy.get('.listing-item-price').invoke('text').then((priceText) => {
            const price = parseFloat(priceText.replace(',', '.').replace(' zł', ''));
            expect(price).to.be.within(200, 500);
          });
        });
      });
    });
  });
  