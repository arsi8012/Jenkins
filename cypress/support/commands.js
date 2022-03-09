const selector = require("../fixtures/selectors.json");
const data = require("../fixtures/data.json");

Cypress.Commands.add("login", (email, password) => {
    cy.get('[for="email"] > .login__input').type(email);
    cy.get('[for="pwd"] > .login__input').type(password);
    cy.get(selector.login).click();
});

Cypress.Commands.add("addNewHall", (nameNewHall) => {
    cy.contains("Создать зал").click();
    cy.get(selector.nameHall).type(nameNewHall);
    cy.get(selector.buttonAddHall).click();
});

Cypress.Commands.add("delNewHall1", () => {
    cy.get('[data-hall-name="Зал 4"]').click();
    cy.get(selector.delHall).click();
});

// Cypress.Commands.add("delNewHall2", () => {
//     cy.get('[data-hall-name="Зал 5"]').click();
//     cy.get(selector.delHall).click();
// });