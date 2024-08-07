class MainPage{
 //searchbar etc.

 fillSearch(text){
    cy.get("[class='form-control form-control-lg']").type(text,{delay:100});
    cy.get("[class='btn btn-light btn-lg']").click();
    return this;
 }

 fillSearchAndPressEnter(text){
    cy.get("[class='form-control form-control-lg']").clear();
    cy.get("[class='form-control form-control-lg']").type(text +"{enter}",{delay:100});
    return this;
 }

 
}

export default MainPage;