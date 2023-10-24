import Card from "./card";

class PokerHand {
    cards: Card[] = [];
    constructor(cards:Card[]) {
        this.cards = cards;
    }

    getOutcome(): string {
        const ranks: string[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const rankCount: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        const suitCount: number[] = [0, 0, 0, 0];
        const suits: string[] = ['diams','hearts','clubs','spades'];
        const countFrequency = (array: number[], element: number) => {
            let count: number = 0;
            for(let i = 0; i < array.length; i++) {
                if(array[i] === element) {
                    count++;
                }
            }
            return count;
        }

        for (let i = 0; i < this.cards.length; i++) {
            const indexElement = ranks.findIndex(element => element === this.cards[i].rank);
            const indexSuitElement = suits.findIndex(element => element === this.cards[i].suit);
            rankCount[indexElement]++;
            suitCount[indexSuitElement]++;
        }
        const maxNumber = Math.max(...rankCount);
        const maxSuitNumber = Math.max(...suitCount);
        if(maxSuitNumber === 5) {
            return 'Flash';
        }
        if(maxNumber === 3) {
            return 'Set';
        }
        if(maxNumber === 2) {
            const count = countFrequency (rankCount, 2);
            if(count === 2) {
                return 'Two pairs';
            } else {
                return 'One pair';
            }
        }
        if(maxNumber === 1) {
            return 'High card';
        }
        return '';
    }
}

export default PokerHand;