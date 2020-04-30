import CardFactory from '../card.factory';
import Card from "../card.interface";


describe('Card Factory', () => {
    const cardFactory = CardFactory;

  describe('[canInsertCard] - Tests if a card should be inserted on the board', () => {
    let selectedCards: Card[];
    let newSelectedCard: Card;

    it('When selectedCard exist and selectedCards is qual to []', () => {
      selectedCards = [];
      newSelectedCard = {
        id: 1,
        code: "JS",
        name: "Javascript",
        svgPath: "https://svgshare.com/i/J3t.svg",
        selected: false
      }; 
      expect(cardFactory.canInsertCard(selectedCards, newSelectedCard)).toBe(true);
    });

    it('When selectedCard do not exist inside selectedCards', () => {
      selectedCards = [
        {
          id: 2,
          code: "PY",
          name: "Python",
          svgPath: "https://svgshare.com/i/J2M.svg",
          selected: false
        },
        {
          id: 3,
          code: "HTML",
          name: "HTML",
          svgPath: "https://svgshare.com/i/J3G.svg",
          selected: false
        }
      ];
      newSelectedCard = {
        id: 1,
        code: "JS",
        name: "Javascript",
        svgPath: "https://svgshare.com/i/J3t.svg",
        selected: false
      }; 
      expect(cardFactory.canInsertCard(selectedCards, newSelectedCard)).toBe(true);
    });

    it('When selectedCard exist inside selectedCards', () => {
      selectedCards = [
        {
          id: 2,
          code: "PY",
          name: "Python",
          svgPath: "https://svgshare.com/i/J2M.svg",
          selected: false
        },
        {
          id: 3,
          code: "HTML",
          name: "HTML",
          svgPath: "https://svgshare.com/i/J3G.svg",
          selected: false
        }
      ];
      newSelectedCard = {
        id: 2,
        code: "PY",
        name: "Python",
        svgPath: "https://svgshare.com/i/J2M.svg",
        selected: false
      }; 
      expect(cardFactory.canInsertCard(selectedCards, newSelectedCard)).toBe(false);
    });

    it('When selectedCard exist inside selectedCards', () => {
      selectedCards = [
        {
          id: 2,
          code: "PY",
          name: "Python",
          svgPath: "https://svgshare.com/i/J2M.svg",
          selected: false
        },
        {
          id: 3,
          code: "HTML",
          name: "HTML",
          svgPath: "https://svgshare.com/i/J3G.svg",
          selected: false
        }
      ];
      newSelectedCard = {
        id: 2,
        code: "PY",
        name: "Python",
        svgPath: "https://svgshare.com/i/J2M.svg",
        selected: false
      }; 
      expect(cardFactory.canInsertCard(selectedCards, newSelectedCard)).toBe(false);
    });

    it('When selectedCard exist inside selectedCards twice', () => {
      selectedCards = [
        {
          id: 2,
          code: "PY",
          name: "Python",
          svgPath: "https://svgshare.com/i/J2M.svg",
          selected: false
        },
        {
          id: 12,
          code: "PY",
          name: "Python",
          svgPath: "https://svgshare.com/i/J2M.svg",
          selected: false
        }
      ];
      let newSelectedCard = {
        id: 2,
        code: "PY",
        name: "Python",
        svgPath: "https://svgshare.com/i/J2M.svg",
        selected: false
      }; 
      expect(cardFactory.canInsertCard(selectedCards, newSelectedCard)).toBe(false);
    });
  })

  describe('[compareCards] - Compare equalitty betwwen two cards', () => {
    let firstCard: Card;
    let secondCard: Card;
    
    it('should return true if cards are equal ', () => {
      firstCard = {
        id: 1,
        code: "JS",
        name: "Javascript",
        svgPath: "https://svgshare.com/i/J3t.svg",
        selected: false
      } 
      secondCard = {
        id: 11,
        code: "JS",
        name: "Javascript",
        svgPath: "https://svgshare.com/i/J3t.svg",
        selected: false
      }
      expect(cardFactory.compareCards(firstCard, secondCard)).toBe(true);
    });

    it('should return false if cards are not equal ', () => {
      firstCard = {
        id: 9,
        code: "RB",
        name: "Ruby",
        svgPath: "https://svgshare.com/i/J1e.svg",
        selected: false
      } 
      secondCard = {
        id: 13,
        code: "HTML",
        name: "HTML",
        svgPath: "https://svgshare.com/i/J3G.svg",
        selected: false
      }
      expect(cardFactory.compareCards(firstCard, secondCard)).toBe(false);
    });
  })


  describe('[resetCards] - should set selected porperty of equal cards inside selected cards to false', () => {
    let selectedCards: Card[];
    let cards: Card[];  
    it('When both cards of cards inside cards are true', () => {

      cards = [
        {
          id: 1,
          code: "JS",
          name: "Javascript",
          svgPath: "https://svgshare.com/i/J3t.svg",
          selected: true
        },
        {
          id: 2,
          code: "PY",
          name: "Python",
          svgPath: "https://svgshare.com/i/J2M.svg",
          selected: true
        },
        {
          id: 3,
          code: "HTML",
          name: "HTML",
          svgPath: "https://svgshare.com/i/J3G.svg",
          selected: false
        },
        {
          id: 4,
          code: "CSS",
          name: "CSS",
          svgPath: "https://svgshare.com/i/J2P.svg",
          selected: false
        },
      ]
      
      selectedCards = [
        {
          id: 1,
          code: "JS",
          name: "Javascript",
          svgPath: "https://svgshare.com/i/J3t.svg",
          selected: false
        },
        {
          id: 2,
          code: "PY",
          name: "Python",
          svgPath: "https://svgshare.com/i/J2M.svg",
          selected: false
        },
      ]



      expect(cardFactory.resetCards(selectedCards, cards)).toEqual([
        {
          id: 1,
          code: "JS",
          name: "Javascript",
          svgPath: "https://svgshare.com/i/J3t.svg",
          selected: false
        },
        {
          id: 2,
          code: "PY",
          name: "Python",
          svgPath: "https://svgshare.com/i/J2M.svg",
          selected: false
        },
        {
          id: 3,
          code: "HTML",
          name: "HTML",
          svgPath: "https://svgshare.com/i/J3G.svg",
          selected: false
        },
        {
          id: 4,
          code: "CSS",
          name: "CSS",
          svgPath: "https://svgshare.com/i/J2P.svg",
          selected: false
        },
      ]);
    });
  })

  describe('[fillSelectedCards] - Insert selected cards on the temp array', () => {
  
  })

  describe('[updateCards] - Test if selected cards should be cleaned', () => {
  
  })

  describe('[randomizeCards] - Radom cards', () => {
  
  })

  describe('[showCards] - Show cards', () => {
  
  })
  
  describe('[closeCards] - Close cards', () => {
  
  })
  describe('[isWinner] - Testes if the user won the game', () => {
  
  })
})