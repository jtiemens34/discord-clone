Cypress.Commands.add(`signOut`, () => {
  cy.log(`sign out by clearing all cookies.`);
  cy.clearAllCookies();
});
Cypress.Commands.add(`initializeAuth`, () => {
  var username = Cypress.env(`test_email`);
  var password = Cypress.env(`test_password`);
  cy.session([username, password], () => {
    cy.log(`Initializing auth state.`);

    cy.visit(`http://localhost:3000`, { failOnStatusCode: false });

    cy.window()
      .should((window) => {
        expect(window).to.not.have.property(`Clerk`, undefined);
        expect(window.Clerk.isReady()).to.eq(true);
      })
      .then(async (window) => {
        await window.Clerk.signOut();
        await window.Clerk.client.signIn.create({
          identifier: username,
          password: password,
        });
      });
  },
  {
    cacheAcrossSpecs: true
  });
});