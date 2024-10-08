//  referans kodu yazılır-> /// ifadesi ile başlamalı
/// <reference types="cypress" />

import HomePage from "../pages/homePage";
import LoginPage from "../pages/loginPage";

//describe-> testraildaki sectiona, it-> test case'e karşılık gelir.
describe("Login Test", () => {
  
   //interfaceler burada tanımlanır
   const loginPage=new LoginPage();
   const homePage=new HomePage();

    it("Login Successful", () => { //it.only ile sadece bu testi çalıştırabiliriz
      loginPage.visit("https://demo.opencart.com/en-gb?route=account/login")
               .fillEmail("ecemnazgorusuk@gmail.com");
      cy.wait(1000);
      loginPage.fillPassword("Ecem123")
               .clickLoginButton();
      homePage.controlAccount("Account");
    });

   
    it("Login Unsuccessful", () => {
      loginPage.visit("https://demo.opencart.com/en-gb?route=account/login")
               .fillEmail("ecemnazgorusuk@gmail.com");
      cy.wait(1000);
      loginPage.fillPassword("dgdfgf")
               .clickLoginButton()
      //kaybolan toast error mesajları için:
               .errorAlertDisplayedControl();
    });
 
    it("Login Incorrect Email", () => {
      loginPage.visit("https://demo.opencart.com/en-gb?route=account/login")
               .fillEmail("1ecemnazgorusuk@gmail.com");
      cy.wait(1000);
      loginPage.fillPassword("Ecem123")
               .clickLoginButton()
      //kaybolan toast error mesajları için:
               .errorAlertDisplayedControl();
    });

    it("Login Required Control", () => {
      loginPage.visit("https://demo.opencart.com/en-gb?route=account/login")
               .fillEmail(" ");
      cy.wait(1000);
      loginPage.fillPassword(" ")
               .clickLoginButton()
               .errorAlertDisplayedControl()
               .fillEmail("ecemnazgorusuk@gmail.com")
               .clickLoginButton()
               .errorAlertDisplayedControl()
               .fillPassword("Ecem123")
               .clickLoginButton();
      homePage.controlAccount("Account");
    });


    it("Login Maximum Character Control For Email", () => {
      loginPage.visit("https://demo.opencart.com/en-gb?route=account/login")
               .fillEmail("fmfmgfkmfkmfkmfkmfkvmfckmvkmvkcmvckmkmckmvkcvmkcmkcmvkcmvkcmkmvkcmvk@gmail.com");
      cy.wait(1000);
      loginPage.fillPassword("Ecem123")
               .clickLoginButton()
      //kaybolan toast error mesajları için:
               .errorAlertDisplayedControl();
    });

    it("Login Maximum Character Control For Password", () => {
      loginPage.visit("https://demo.opencart.com/en-gb?route=account/login")
               .fillEmail("ecemnazgorusuk@gmail.com");
      cy.wait(1000);
      loginPage.fillPassword("fmfmgfkmfkmfkmfkmfkvmfckmvkmvkcmvckmkmckmvkcvmkcmkcmvkcmvkcmkmvkcmvk")
               .clickLoginButton()
        //kaybolan toast error mesajları için:
               .errorAlertDisplayedControl();
    });
});
