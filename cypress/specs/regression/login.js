
describe("login page elements", () => {
  before(() => {
    cy.visit("/");
  });

  it("should have a logo matching to desing", () => {
    const height = 1080;
    const width = 1920;
    cy.viewport(width, height);
    cy.log("**assert logo has proper CSS**")
      .get("#logo")
      .should("have.css", "height", `${height * 0.3}px`)
      .and("have.css", "max-width", "100%")
      .and("have.css", "text-align", "center");
  });

  it("should have email field", () => {
    const emailInput = "not.real@email.com";
    const hundrenLengthString =
      "LrfDucxXbFF2n9ppCzqZquYKg8wXaTqTiRQMahsk1FlOA0jP3u6z8fSO5tDONfHq4sGnOZvCVB1QUEeGgyLcN9ztglQ5kQigDyq1!!";
    cy.log(
      "**assert email field contains a placeholder when the field is empty 3.1**"
    )
      .get("#username")
      .invoke("attr", "value")
      .should("be.empty");
    cy.get("#username")
      .invoke("attr", "placeholder")
      .should("contain", "Email *");
    cy.get("#username").type(emailInput);
    cy.get("#username").invoke("attr", "value").should("contain", emailInput);
    cy.get("#username").type("{enter}");
    cy.contains("Please specify email and password");
    cy.get("#username").type(hundrenLengthString);
    cy.get("#username").invoke("attr", "value").should("have.length", 100);

    /** add cy.log for each requirements
     * cover the password, login btn, remind password
     * split the tests between yourself
     */
  });
});
