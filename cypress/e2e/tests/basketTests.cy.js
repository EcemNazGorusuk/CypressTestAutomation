/// <reference types="cypress" />

import HomePage from "../pages/homePage";
import LoginPage from "../pages/loginPage";
import MainPage from "../pages/mainPage";
import ProductListPage from "../pages/productListPage";
describe("Basket Test", () => {
  
   //interfaceler burada tanımlanır
   const loginPage=new LoginPage();
   const homePage=new HomePage();
   const mainPage=new MainPage();
   const productListPage=new ProductListPage();

    it("Add To Product", () => { //it.only ile sadece bu testi çalıştırabiliriz
      loginPage.visit("https://demo.opencart.com/en-gb?route=account/login")
               .fillEmail("ecemnazgorusuk@gmail.com");
      cy.wait(1000);
      loginPage.fillPassword("Ecem123")
               .clickLoginButton();
      homePage.controlAccount("Account");
      mainPage.fillSearch("macbook")
      //   .fillSearchAndPressEnter("ipod");
      cy.wait(1000);
      productListPage.clickFirstProduct();         

    });

 
 
  
   
});
