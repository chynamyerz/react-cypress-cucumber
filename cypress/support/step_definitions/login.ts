import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

Given("I navigate to the app login page", () => {
  cy.visit("/");
});

When("I enter username {word}", (username: string) => {
  cy.get('[data-cy="username"]').type(username);
});

When("I enter password {word}", (password: string) => {
  cy.get('[data-cy="password"]').type(password);
});

When("I click login", () => {
  cy.get('[data-cy="login-btn"]').click();
});

Then(
  "I should be presented with {word} {word} {word}",
  (word1: string, word2: string, word3: string) => {
    const expectedMessege = `${word1} ${word2} ${word3}`;
    cy.get('[data-cy="message"]').should("contain.text", expectedMessege);
  }
);
