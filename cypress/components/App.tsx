import React from "react";
import App from "../../src/App";

describe("<App />", () => {
  it("should mount app", () => {
    cy.mount(<App />);
  });
});
