import selectors from '../constants/selectors'
import strings from '../constants/strings'

class HeaderSection {
    searchText(searchText) {
        cy.get(selectors.searchBarInput).type(searchText)
        cy.get(selectors.searchBarButton).click()
    }

    navigateToAdvanceSearch(){
        cy.contains(strings.advancedSearchText).click()
    }
}

export default HeaderSection