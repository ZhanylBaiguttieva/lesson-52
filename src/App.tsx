import PokerCard from "./Card/PokerCard";
import './App.css';
import Card from "./lib/card";
import CardDeck from "./lib/cardDeck";
import {useState} from "react";
import PokerHand from "./lib/pokerHand";

function App() {
    const [cards, setCards] = useState<Card[]>([]);

     const deal = ()  => {
        const cardDeck = new CardDeck();
        setCards(cardDeck.getCards(5));
    }

    const pokerHand = new PokerHand(cards);

    return (
        <div className="App">
            {cards.length !== 0 &&
                cards.map(card => <PokerCard rank={card.rank} suit={card.suit}></PokerCard>)}
            <div>
                {pokerHand.getOutcome()}
            </div>
            <div>
                <button onClick={deal}>Deal cards</button>
            </div>
        </div>
    )
}

export default App
