describe("Message testing", () => {
  before(() => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.initializeAuth();
    cy.visit("http://localhost:3000", { failOnStatusCode: false });
  });
  // Generate a random number for message content
  var randomNumber = Math.floor(Math.random() * 100);
  var message = "Test message #" + randomNumber;
  it("message sending", () => {
    // Should be default on the correct server
    cy.get("[data-test-id='server-name']").should("have.text", "Test Server");

    // Send the message
    cy.get("[data-test-id='chat-input']").type(message + "{enter}");

    // Verify that the message displays
    var chatMessage = cy.get("[data-cy='message']:first-child [data-cy='message-content']");
    chatMessage.should("have.text", message);
  });
  it("message editing", () => {
    // Edit the message
    cy.get("[data-cy='message']:first-child [data-cy='edit-button']").click({ force: true });

    message = "Test message #" + (randomNumber - 1);
    cy.get("[data-cy='message']:first-child [data-cy='editing-message']").clear().type(message + "{enter}");

    cy.visit("http://localhost:3000");

    // Verify the message is edited
    cy.get("[data-cy='message']:first-child [data-cy='message-content']").should("have.text", message + "(edited)");
  });
  it("message deletion", () => {
    // Click delete button
    cy.get("[data-cy='message']:first-child [data-cy='delete-button']").click({ force: true });

    // Confirm on delete message modal
    cy.get("[data-test-id='confirm-delete-message-modal']").click();

    cy.visit("http://localhost:3000");
    // Verify the message is deleted
    cy.get("[data-cy='message']:first-child [data-cy='message-content']").should("have.text", "This message has been deleted.");
  });
});