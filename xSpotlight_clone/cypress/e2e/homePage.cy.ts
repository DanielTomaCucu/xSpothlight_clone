describe('testHomepage', () => {
  it('test menu', () => {
    cy.visit('https://x-spothlight-clone.vercel.app/');
    cy.url().should('include', 'x-spothlight-clone.vercel.app');
  });

  it(' have title', () => {
    cy.visit('https://x-spothlight-clone.vercel.app/');
    cy.get('p.relative')
      .should('have.text', ' The MultiversX ')
      .and('have.class', 'text-white')
      .and('have.class', 'text-4xl')
      .and('have.class', 'sm:text-4xl')
      .and('have.class', 'md:text-7xl')
      .and('have.class', 'font-extrabold');
  });
  it('get text', () => {
    cy.visit('https://x-spothlight-clone.vercel.app/');
    cy.contains('Web3 Culture Hub');
    cy.contains(
      'Join creators, founders, builders, collectors and fellow enthusiasts from all over the world in this life changing journey of exploration.'
    );
  });
  it('redirect to welcome page', () => {
    cy.visit('https://x-spothlight-clone.vercel.app/');
    cy.get('button:contains("Read More")').click();
    cy.url().should('include', 'x-spothlight-clone.vercel.app/welcome');
  });

});
