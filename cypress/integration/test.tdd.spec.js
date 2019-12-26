context('Actions', () => {

    it('DOM element', () => {
        cy.visit('https://www.google.com');
        cy.get('input[type=text]').type('cypress document');
        cy.get('input[type=submit]').contains('Google').click();
        cy.url().should('include', 'search?source')
    });
});
