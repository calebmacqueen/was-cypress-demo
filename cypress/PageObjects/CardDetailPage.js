import selectors from '../constants/selectors'
import strings from '../constants/strings'

class CardDetailPage{
    verifyMissouri () {
        cy.get(selectors.mainContent).should('contain', strings.missouriText)
        cy.get(selectors.mainContent).should('contain', strings.missouriId)
    }
}
export default CardDetailPage