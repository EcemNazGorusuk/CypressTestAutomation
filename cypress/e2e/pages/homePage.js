class HomePage {
  controlAccount(text) {
    cy.get("[class='breadcrumb'] li").eq(1).should("have.text", text);
    return this;
  }
}
export default HomePage;
