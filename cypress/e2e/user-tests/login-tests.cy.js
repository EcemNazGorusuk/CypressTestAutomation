//  referans kodu yazılır-> /// ifadesi ile başlamalı
/// <reference types="cypress" />

//describe-> testraildaki sectiona, it-> test case'e karşılık gelir.
describe("Login Test", () => {
  //id ya da name yerine data-uia alanı da verebiliriz

    it("Login Successful", () => { //it.only ile sadece bu testi çalıştırabiliriz
      cy.visit("https://demo.opencart.com/en-gb?route=account/login", { failOnStatusCode: false }); //test edilecek siteye yönlendirme işlemi
      cy.get("[id='input-email']").type("ecemnazgorusuk@gmail.com",{delay:200}); //delay:200 ms bekleme
      cy.wait(1000);
      cy.get("[id='input-password']").type("Ecem123");
      cy.get("[id='form-login'] button").click();
      cy.get("[class='breadcrumb'] li").eq(1).should('have.text',"Account");
    });

   
    it("Login Unsuccessful", () => {
        cy.visit("https://demo.opencart.com/en-gb?route=account/login", { failOnStatusCode: false }); //test edilecek siteye yönlendirme işlemi
        cy.get("[id='input-email']").type("1ecemnazgorusuk@gmail.com",{delay:200}); //delay:200 ms bekleme
        cy.wait(1000);
        cy.get("[id='input-password']").type("dgdfgf");
        cy.get("[id='form-login'] button").click();
        //kaybolan toast error mesajları için:
        cy.get("[id='alert']",
             { timeout: 10000 })
             .should('be.visible')
             .and('contain.text', 'Warning: No match for E-Mail Address and/or Password.'); //mesajın içeriğini doğrula
    });
 
    it("Login IncorrectPassword", () => {
        cy.visit("https://demo.opencart.com/en-gb?route=account/login", { failOnStatusCode: false }); //test edilecek siteye yönlendirme işlemi
        cy.get("[id='input-email']").type("ecemnazgorusuk@gmail.com",{delay:200}); //delay:200 ms bekleme
        cy.wait(1000);
        cy.get("[id='input-password']").type("dgdfgf");
        cy.get("[id='form-login'] button").click();
        //kaybolan toast error mesajları için:
        cy.get("[id='alert']",
             { timeout: 10000 })
             .should('be.visible')
             .and('contain.text', 'Warning: No match for E-Mail Address and/or Password.');
    });

   
    it("Login maximumCharacterControlForEmail", () => {
        cy.visit("https://demo.opencart.com/en-gb?route=account/login", { failOnStatusCode: false }); //test edilecek siteye yönlendirme işlemi
        cy.get("[id='input-email']").type("fmfmgfkmfkmfkmfkmfkvmfckmvkmvkcmvckmkmckmvkcvmkcmkcmvkcmvkcmkmvkcmvk@gmail.com",{delay:100}); //delay:200 ms bekleme
        cy.wait(1000);
        cy.get("[id='input-password']").type("Ecem123");
        cy.get("[id='form-login'] button").click();
        //kaybolan toast error mesajları için:
        cy.get("[id='alert']",
             { timeout: 10000 })
             .should('be.visible')
             .and('contain.text', 'Warning: No match for E-Mail Address and/or Password.'); 
    });

    it("Login maximumCharacterControlForPassword", () => {
        cy.visit("https://demo.opencart.com/en-gb?route=account/login", { failOnStatusCode: false }); //test edilecek siteye yönlendirme işlemi
        cy.get("[id='input-email']").type("ecemnazgorusuk@gmail.com",{delay:100}); //delay:200 ms bekleme
        cy.wait(1000);
        cy.get("[id='input-password']").type("fmfmgfkmfkmfkmfkmfkvmfckmvkmvkcmvckmkmckmvkcvmkcmkcmvkcmvkcmkmvkcmvk");
        cy.get("[id='form-login'] button").click();
        //kaybolan toast error mesajları için:
        cy.get("[id='alert']",
             { timeout: 10000 })
             .should('be.visible')
             .and('contain.text', 'Warning: No match for E-Mail Address and/or Password.'); 
    });
});
