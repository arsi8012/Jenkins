const data = require("../fixtures/data.json");

it("Should add two new halls", () => {
    cy.visit("/admin");
    cy.login(data.email, data.password);
    cy.addNewHall(data.newHall1);
    cy.contains(data.newHall1).should("be.visible");
    // cy.addNewHall(data.newHall2);
    // cy.contains(data.newHall2).should("be.visible");
    cy.visit("/admin");
    cy.delNewHall1(data.newHall1);
    // cy.delNewHall2(data.newHall2);
});