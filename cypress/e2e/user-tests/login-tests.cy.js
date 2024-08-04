//  referans kodu yazılır-> /// ifadesi ile başlamalı
/// <reference types="cypress" />

//describe-> testraildaki sectiona, it-> test case'e karşılık gelir.
describe("Login Test", () => {
  //beforeEach(() => {});

  it("Login Successful", () => {
    cy.visit("https://www.netflix.com/login");
  });
  
});
