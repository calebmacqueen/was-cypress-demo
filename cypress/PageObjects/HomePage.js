import selectors from '../constants/selectors'

class HomePage{
    clickUSAIcon(){
        cy.get(selectors.usaCountryIcon).click()
    }
}
export default HomePage