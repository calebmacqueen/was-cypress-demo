import selectors from '../support/constants/selectors'

Cypress.Commands.add('verifyMissouri', () => {
    cy.get('#content').should('contain', selectors.missouriText)
    cy.get('#content').should('contain', '18')
    cy.get('#content').should('contain', 'Heavy Antiair')
    cy.get('#content').should('contain', 'Task Force - 28/60')
})