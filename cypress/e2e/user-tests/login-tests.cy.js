//  referans kodu yazılır-> /// ifadesi ile başlamalı
/// <reference types="cypress" />

//describe-> testraildaki sectiona, it-> test case'e karşılık gelir.
describe("Login Test", () => {
 
  it("Login Successful", () => { //it.only ile sadece bu testi çalıştırabiliriz
    cy.visit("https://www.netflix.com/login"); //test edilecek siteye yönlendirme işlemi
    cy.get("[name='userLoginId']").type("ecemnazgorusuk@gmail.com"); //e-posta inputu tespit edilir ve input alanı doldurulur
    cy.get("[data-uia='password-field']").type("ecemnaz12345"); // name yerine data-uia alanı da verebiliriz
    cy.get("[data-uia='login-submit-button']").click();
    cy.wait(3000); //sleep thread ile aynı işlev
    //başarılı giriş yapılınca home sayfasında bunu kanıtlayan metin ya da ögeyi görmek için:
    cy.get("[id='signOut']").should("have.text", "Sign Out"); //have.text->actual result , diğer metin ->expected result
  });

  it("Failed Login", () => {
    cy.visit("https://www.netflix.com/login"); 
    cy.get("[name='userLoginId']").type("ecemnazgorusuk@gmail.com"); 
    cy.get("[data-uia='password-field']").type("ecemnaz");
    cy.get("[data-uia='login-submit-button']").click();
    cy.wait(3000);
    cy.get("[data-uia='error-message-container+header']").should('have.text',"Incorrect password for ecemnazgorusuk@gmail.com");
});
});
