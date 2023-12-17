describe("Channel testing", () => {
  before(() => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.initializeAuth();
    cy.visit("http://localhost:3000", { failOnStatusCode: false });
  });
  var randomNumber = Math.floor(Math.random() * 100);
  var channelName = "Channel #" + randomNumber;
  it("channel creation", () => {
    // Click Plus button on Text Channels
    cy.get("[data-test-id='text-channels-label'] [data-cy='create-channel']").click();

    // Type channel name into modal
    cy.get("[data-test-id='create-channel-name']").type(channelName);
    // Confirm modal
    cy.get("[data-test-id='create-channel-confirm']").click();

    // Confirm the channel exists on the sidebar
    cy.get("[data-test-id='text-channels-content'] [data-cy='channel-label']:last-child p").should("have.text", channelName);
    // Click on new channel
    cy.get("[data-test-id='text-channels-content'] [data-cy='channel-label']:last-child").click();

    // Confirm channel welcome is displayed
    cy.get("[data-test-id='channel-welcome']").should("have.text", "Welcome to #" + channelName);
  });
  it("channel renaming", () => {

  });
  it("channel deletion", () => {
    // Click delete button
    cy.get("[data-test-id='text-channels-content'] [data-cy='channel-label']:last-child [data-cy='delete-button']").click({ force: true });

    // Confirm channel delete modal
    cy.get("[data-test-id='delete-channel-confirm").click();

    // Confirm redirection to general
    cy.get("[data-test-id='current-channel-name']").should("have.text", "general");
  });
});