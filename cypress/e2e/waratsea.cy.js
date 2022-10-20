/// <reference types="cypress" />

import strings from '../constants/strings'
import AdvancedSearchPage from '../PageObjects/AdvancedSearchPage'
import CardDetailPage from '../PageObjects/CardDetailPage'
import HeaderSection from '../PageObjects/HeaderSection'
import HomePage from "../PageObjects/HomePage"
import SearchResultsPage from "../PageObjects/SearchResultsPage"

const advancedSearchPage = new AdvancedSearchPage()
const cardDetailPage = new CardDetailPage()
const headerSection = new HeaderSection()
const homePage = new HomePage()
const searchResultsPage = new SearchResultsPage()

describe('War at Sea Card Database', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('SiteHomeUrl'))
  })

  it('Can Find the USS Missouri by Website Navigation', () => {
    homePage.clickUSAIcon()
    searchResultsPage.clickUSSMissouri()
    cardDetailPage.verifyMissouri()
  })

  it('Can Find the USS Missouri by Search Bar', () => {
    cy.pause() //for debugging and troubleshooting
    headerSection.searchText(strings.missouriShort)
    searchResultsPage.clickUSSMissouri()
    cardDetailPage.verifyMissouri()
  })

  it('Can Find the USS Missouri by Search Bar with Partial Text', () => {
    headerSection.searchText(strings.missouriPartial)
    searchResultsPage.clickUSSMissouri()
    cardDetailPage.verifyMissouri()
  })

  it('Can Find the USS Missouri by Advanced Search', () => {
    headerSection.navigateToAdvanceSearch()
    advancedSearchPage.filterUSABattleships()
    searchResultsPage.clickUSSMissouri()
    cardDetailPage.verifyMissouri()
  })

  it('Finds No Results with Gibberish Search Term', () => {
    headerSection.searchText(strings.gibberish)
    searchResultsPage.checkTableShouldBeEmpty()
  })
})
