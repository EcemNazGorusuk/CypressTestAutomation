//  referans kodu yazılır-> /// ifadesi ile başlamalı
/// <reference types="cypress" />

//describe-> testraildaki sectiona, it-> test case'e karşılık gelir.
describe("Login Test", () => {
//id ya da name yerine data-uia alanı da verebiliriz

  it("Login Successful", () => { //it.only ile sadece bu testi çalıştırabiliriz
    cy.visit("https://www.trendyol.com/giris"); //test edilecek siteye yönlendirme işlemi
    cy.get("[id='login-email']").type("ecemnazgorusuk@gmail.com",{delay:300}); //delay:300 ms bekleme
    cy.get("[id='login-password-input']").type("."); 
    cy.get("[class='q-layout login'] button").click();
    cy.get("[class='link account-user'] p").should('have.text',"Hesabım");
  });

  it("Login Unsuccessful", () => { 
    cy.visit("https://www.trendyol.com/giris"); 
    cy.get("[id='login-email']").type("ecemnazgorusuk@gmail.com",{delay:300}); 
    cy.get("[id='login-password-input']").type("hatali"); 
    cy.get("[class='q-layout login'] button").click();
    cy.wait(3000); 
    cy.get("[class='link account-user'] p").should('have.text',"Hesabım");
  });
});
