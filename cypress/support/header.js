import selectors from '../support/constants/selectors'

Cypress.Commands.add('searchText', (searchText) => {
    cy.get('.search input[type*="text"]').type(searchText)
    cy.get('.search input[type*="submit"]').click()
})