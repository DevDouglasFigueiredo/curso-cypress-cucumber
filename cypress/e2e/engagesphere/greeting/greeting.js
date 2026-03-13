// cypress/e2e/login.js
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

When('I type {string} into the name input field', (name) => {
    cy.get('[data-testid="name"]').type(name);
})

Then('I see the following greeting: Hi there!', () => {
    cy.contains('h2', 'Hi there!').should('be.visible')
})

Then('I see the following greeting Hi {string} !', (name) => {
    cy.contains('h2', `Hi ${name}!`).should('be.visible');
})