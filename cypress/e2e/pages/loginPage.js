class LoginPage{
    visit(url){
        cy.visit(url, { failOnStatusCode: false });
        return this; //metodları birbirine bağlamak için
    }
    fillEmail(email){
        //id ya da name yerine data-uia alanı da verebiliriz
        cy.get("[id='input-email']").type(email,{delay:200}); //delay:200 ms bekleme
        return this;
    }
    fillPassword(password){
        cy.get("[id='input-password']").type(password);
        return this;
    }
    clickLoginButton(){
        cy.get("[id='form-login'] button").click();
        cy.wait(2000);
        return this;
    }
  
    errorAlertDisplayedControl(){
        cy.get("[id='alert']",
            { timeout: 10000 })
            .should('be.visible')
            .and('contain.text', 'Warning: No match for E-Mail Address and/or Password.'); //mesajın içeriğini doğrula
        return this;
    }
}

export default LoginPage;

