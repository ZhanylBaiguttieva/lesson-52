import Card from './card';

const ranks: string[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const suits: string[] = ['diams','hearts','clubs','spades'];

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