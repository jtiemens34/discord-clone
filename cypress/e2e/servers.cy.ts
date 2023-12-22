describe("Channel testing", () => {
  before(() => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    //cy.initializeAuth();
    cy.visit("http://localhost:3000", { failOnStatusCode: false });
  });
  var randomNumber = Math.floor(Math.random() * 100);
  var serverName = "Server #" + randomNumber;
  it("server creation", () => {
    // Click create server button
    cy.get("[data-test-id='create-server-button']").click();

    // Type in randomized server name
    cy.get("[data-test-id='create-server-name']").type(serverName);

    // Upload server image
    cy.fixture("server-image.png", null).as("serverImageFixture");
    cy.get("input[type=file]").selectFile("@serverImageFixture", { force: true });
    // Click upload confirmation
    cy.get("[data-test-id='create-server-image'] button").click();
    // Wait for upload to finish before
    cy.get("[data-test-id='uploaded-server-image']").should("exist");
    // Clicking confirm
    cy.get("[data-test-id='create-server-confirm']").click();

    // Assert proper creation
    // Wait a couple seconds for the server to process
    cy.wait(5000);
    // Click first server in list
    cy.get("[data-cy='server-icon']:first-child button").click();
    // Assert that it has the correct name
    cy.get("[data-test-id='server-name']").should("have.text", serverName);
  });
  it("server renaming", () => {
    // Click server dropdown
    cy.get("[data-test-id='server-name']").click();

    // Click server settings option
    cy.get("[data-test-id='server-settings']").click();

    // Rename in modal
    serverName = "Channel #" + (randomNumber - 1);
    cy.get("[data-test-id='edit-server-name']").clear().type(serverName);

    // Confirm modal
    cy.get("[data-test-id='edit-server-confirm']").click();

    // Assert changes
    cy.get("[data-test-id='server-name']").should("have.text", serverName);
  });
  it("server deletion", () => {
    // Click server dropdown
    cy.get("[data-test-id='server-name']").click();

    // Click delete server option
    cy.get("[data-test-id='delete-server']").click();

    // Confirm modal
    cy.get("[data-test-id='delete-server-confirm']").click();

    // Confirm redirection to Test Server
    cy.get("[data-test-id='server-name']").should("have.text", "Test Server");
  });
});