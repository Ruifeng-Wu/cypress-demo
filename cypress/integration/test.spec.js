context('Actions', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    });

    it('DOM element', () => {
        cy.get('li');
        cy.get('#list',{timeout:8000}).find('#a');
    });
});
