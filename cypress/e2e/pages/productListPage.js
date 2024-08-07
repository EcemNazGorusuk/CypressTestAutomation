class ProductListPage {
  clickFirstProduct() {
    cy.get("[class='img-fluid']").eq(0).click();
    return this;
  }
}

export default ProductListPage;