import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

When('I filter by {string} item per page', (number) => {
    cy.get('[aria-label="Pagination limit"]').select(number);
})

Then('I see {string} table rows', (number) => {
    cy.get('tbody tr').should('have.length', number);
}) 