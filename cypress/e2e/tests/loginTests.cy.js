//  referans kodu yazılır-> /// ifadesi ile başlamalı
/// <reference types="cypress" />

import LoginPage from "../pages/loginPage";

//describe-> testraildaki sectiona, it-> test case'e karşılık gelir.
describe("Login Test", () => {
  

   //interfaceler burada tanımlanır
   const loginPage=new LoginPage();

    it("Login Successful", () => { //it.only ile sadece bu testi çalıştırabiliriz
      loginPage.visit("https://demo.opencart.com/en-gb?route=account/login")
               .fillEmail("ecemnazgorusuk@gmail.com");
      cy.wait(1000);
      loginPage.fillPassword("Ecem123")
               .clickLoginButton()
               .controlAccount("Account");
    });

   
    it("Login Unsuccessful", () => {
      loginPage.visit("https://demo.opencart.com/en-gb?route=account/login")
               .fillEmail("ecemnazgorusuk@gmail.com");
      cy.wait(1000);
      loginPage.fillPassword("dgdfgf")
               .clickLoginButton()
      //kaybolan toast error mesajları için:
               .errorAlert();
    });
 
    it("Login IncorrectEmail", () => {
      loginPage.visit("https://demo.opencart.com/en-gb?route=account/login")
               .fillEmail("1ecemnazgorusuk@gmail.com");
      cy.wait(1000);
      loginPage.fillPassword("Ecem123")
               .clickLoginButton()
      //kaybolan toast error mesajları için:
               .errorAlert();
    });

   
    it("Login maximumCharacterControlForEmail", () => {
      loginPage.visit("https://demo.opencart.com/en-gb?route=account/login")
               .fillEmail("fmfmgfkmfkmfkmfkmfkvmfckmvkmvkcmvckmkmckmvkcvmkcmkcmvkcmvkcmkmvkcmvk@gmail.com");
      cy.wait(1000);
      loginPage.fillPassword("Ecem123")
               .clickLoginButton()
      //kaybolan toast error mesajları için:
               .errorAlert();
    });

    it("Login maximumCharacterControlForPassword", () => {
      loginPage.visit("https://demo.opencart.com/en-gb?route=account/login")
               .fillEmail("ecemnazgorusuk@gmail.com");
      cy.wait(1000);
      loginPage.fillPassword("fmfmgfkmfkmfkmfkmfkvmfckmvkmvkcmvckmkmckmvkcvmkcmkcmvkcmvkcmkmvkcmvk")
               .clickLoginButton()
        //kaybolan toast error mesajları için:
               .errorAlert();
    });
});
