/// <reference types="cypress" />

import selectors from "../support/constants/selectors"
import urls from "../support/constants/urls"

describe('War at Sea Card Database', () => {
  beforeEach(() => {
    cy.visit(urls.warAtSeaURL)
  })

  it('Can Find the USS Missouri by Website Navigation', () => {
    cy.get(selectors.usaCountryIcon).click()
    cy.contains(selectors.missouriText).click()
    cy.verifyMissouri()
  })

  it('Can Find the USS Missouri by Search Bar', () => {
    cy.searchText('missouri')
    cy.contains(selectors.missouriText).click()
    cy.verifyMissouri()
  })

  it('Can Find the USS Missouri by Search Bar with Partial Text', () => {
    cy.searchText('mis')
    cy.contains(selectors.missouriText).click()
    cy.verifyMissouri()
  })

  it('Can Find the USS Missouri by Advanced Search', () => {
    cy.contains('[Advance]').click()
    cy.get(selectors.countrySelect).select('United States')
    cy.get(selectors.typeSelect).select('Battleship')
    cy.get(selectors.raritySelect).select('Rare')
    cy.get(selectors.advancedSearchButton).click()
    cy.contains(selectors.missouriText).click()
    cy.verifyMissouri()
  })

  it('Finds No Results with Gibberish Search Term', () => {
    cy.searchText('asdfghjkl')
    cy.get(selectors.resultsTableRows).should('have.length', 1) //only header row is present
  })
})
