
describe('Product selection and cart functionality', () => {
    beforeEach(() => {
        cy.goToMainPage();
        cy.viewport(1224, 604);
        cy.cookiesPopupBox().click();
      })

    it('Should select a product, add it to cart, and verify cart updates', () => {
      // Search for a product
      cy.searchBox().type('smartphone').type('{enter}');
  
      // Select a product from the search results
      cy.get('.listing-item').first().click();
  
      // Wait for the product details page to load
      cy.get('.product-details').should('exist');
  
      // Get product details
      let productName, productPrice;
      cy.get('.product-details').within(() => {
        productName = cy.get('.product-title').invoke('text');
        productPrice = cy.get('.product-price').invoke('text');
      });
  
      // Add the product to the shopping cart
      cy.contains('Do koszyka').click();
  
      // Verify that the cart updates correctly with the selected item
      cy.get('.cart-info').within(() => {
        cy.contains(productName).should('exist');
        cy.contains(productPrice).should('exist');
      });
  
      // Navigate to the cart page
      cy.contains('Koszyk').click();
  
      // Verify that the product is in the cart
      cy.get('.cart-content').within(() => {
        cy.contains(productName).should('exist');
        cy.contains(productPrice).should('exist');
      });
    });
  });
  