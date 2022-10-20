import selectors from '../constants/selectors'
import strings from '../constants/strings'

class SearchResultsPage{
    clickUSSMissouri(){
        cy.contains(strings.missouriText).click()
    }

    checkTableShouldBeEmpty(){
        cy.get(selectors.resultsTableRows).should('have.length', 1) //only header row is present
    }
}
export default SearchResultsPage