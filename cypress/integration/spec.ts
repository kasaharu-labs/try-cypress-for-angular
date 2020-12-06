it('loads examples', () => {
  cy.visit('/');
  cy.get('app-root .content span').should('contain', 'try-cypress-for-angular app is running!')
});
