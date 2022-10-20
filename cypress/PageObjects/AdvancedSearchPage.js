import selectors from '../constants/selectors'
import strings from '../constants/strings'

class AdvancedSearchPage{
    filterUSABattleships(){
        cy.get(selectors.countrySelect).select('United States')
        cy.get(selectors.typeSelect).pause().select('Battleship')
        cy.get(selectors.raritySelect).select('Rare')
        cy.get(selectors.advancedSearchButton).click()
    }
}
export default AdvancedSearchPage