// cypress/e2e/login.js

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('I access the Engagesphere app without any cookies set', () => {
    cy.visit('https://engage-sphere.vercel.app/')
})

Given('I see the cookie consent banner', () => {
    cy.get('[class^="CookieConsent_banner__"]').should('be.visible')
})

When('I click on the Accept button', () => {
    cy.contains('button', 'Accept').click()
})

When('I click on the decline button', () => {
    cy.contains('button', 'Decline').click()
})

Then('the cookies banner is closed', () => {
    cy.get('[class^="CookieConsent_banner__"]').should('not.exist')
})

Then('the cookie consent is set with the value accepted', () => {
    cy.getCookie('cookieConsent').should('have.property', 'value', 'accepted')
})

Then('the cookie consent is set with the value declined', () => {
    cy.getCookie('cookieConsent').should('have.property', 'value', 'declined')
})