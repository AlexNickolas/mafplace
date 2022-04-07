import { login, assertButtonName } from "../../utils/login-helper";

describe("Login page", () => {
  before(() => {
    cy.visit("/");
  });

  it.only("should have Page title", () => {
    cy.title().should("eq", "The Maf Place");
    assertButtonName("Login");
    assertButtonName("Remind Password");
    login("mafplaceqauser@gmail.com", "mafplace2021");
    // cy.login('mafplaceqauser@gmail.com','mafplace2021')
  });

  it("should have Page URL", () => {
    cy.url().should("eq", "http://qa.maf.place/");
    cy.login("mafplaceqauser@gmail.com", "mafplace2021");

    cy.visit("url");
    cy.get("selector").click();
    cy.contains("text");
    cy.get("selector").type("value");
    cy.url().should("eq",
     "expected-url");
    cy.title().should("eq", 
    "expected-title");

    cy.get("selector")
    
    .should("be.visible");
    cy.get("selector").should("not.exist");
    cy.get("selector").should("have.attr", "attributeName", "value");
    cy.get("selector").should("have.text", "expected-value");
    cy.get("selector").should("contain.text", "expected-value");
    expect(value).to.equal(expected);
  });
});
