describe('movies-ui: Card component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=card--primary&knob-onClick'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to movies-ui!');
    });
});
