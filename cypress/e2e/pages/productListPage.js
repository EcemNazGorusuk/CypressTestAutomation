class ProductListPage {
  clickFirstProduct() {
    cy.get("[class='img-fluid']").eq(0).click();
    cy.wait(1000);
    return this;
  }
}

export default ProductListPage;
