import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('I access the Hacker Stories web app', () => {
   cy.visit('https://wlsf82-hacker-stories.web.app/');
})

When('I search for these terms', dataTable => {
    dataTable.rawTable[0].forEach((term) => {
        cy.get('#search')
          .clear()
          .type(`${term}{enter}`);
    });
});

Then('I see {string} buttons, one for each of the last searched terms', (searchTerm) => {
    cy.get('.last-searches button').should('have.length', searchTerm);
});