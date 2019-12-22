context('Actions', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    });

    it('DOM element', () => {
        cy.get('li');
        cy.find('li');
    });
});
