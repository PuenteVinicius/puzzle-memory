import puzzleCards from '../../../../public/cards.json';
import CardService from '../card.service';

describe('Card Factory', () => {
    const cardServices = CardService;

    it('should return the same puzzleCards.JSON ', () => {
        cardServices.getAllCards().then((data) => {
            expect(data).toEqual(puzzleCards);
        })
    });
})