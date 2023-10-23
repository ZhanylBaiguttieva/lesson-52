import Card from './card';

const ranks: string[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const suits: string[] = ['diams','hearts','clubs','spades'];

// const symbols: string[] = ['♦','♥','♣','♠'];

// const getSymbol = (suit: string) => {
//     let symbol: string = '';
//     if(suit === suits[0]) {
//         symbol= symbols[0];
//     }
//     if(suit === suits[1]) {
//         symbol= symbols[1];
//     }
//     if(suit === suits[2]) {
//         symbol= symbols[2];
//     }
//     if(suit === suits[3]) {
//         symbol= symbols[3];
//     }
//     return symbol;
// }

class CardDeck {
    cards: Card[] = [];
    constructor() {
        for(let i= 0; i < ranks.length; i++) {
            for(let j= 0; j < suits.length; j++) {
                const card = new Card(ranks[i],suits[j]);
                this.cards.push(card);
            }
        }
    }
    getCard(): Card {
        const number = Math.floor(Math.random() * 52);
        const card = this.cards[number];
        this.cards.splice(number, 1);
        return card;
    }
    getCards(howMany: number): Card[] {
        const cards: Card[] = [];
        for (let i = 0; i < howMany; i++) {
            cards.push(this.getCard());
        }
        return cards;
    }
}
export  default CardDeck;