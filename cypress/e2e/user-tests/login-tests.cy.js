//  referans kodu yazılır-> /// ifadesi ile başlamalı
/// <reference types="cypress" />

//describe-> testraildaki sectiona, it-> test case'e karşılık gelir.
describe("Login Test", () => {
  //beforeEach(() => {});

  it("Login Successful", () => {
    cy.visit("https://www.netflix.com/login"); //test edilecek siteye yönlendirme işlemi
    cy.get("[name='userLoginId']").type("ecemnazgorusuk@gmail.com"); //e-posta input alanı alınır ve input alanı doldurulur
    cy.get("[data-uia='password-field']").type("ecemnaz12345"); // name yerine data-uia alanı da verebiliriz
  });

});
