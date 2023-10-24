import React from "react";
import CardDeck from "../lib/cardDeck";

interface Props {
    rank: string;
    suit: string;
}
const PokerCard: React.FC<Props> = ({rank,suit}) => {
    const cardDeck = new CardDeck();
    return (
      <div className="playingCards faceImages">
        <span className={"card " + "rank-" + rank.toLowerCase() + " " + suit}>
          <span className="rank">{rank}</span>
          <span className="suit">{cardDeck.getSuitImg(suit)}</span>
        </span>
      </div>
    );
};

export default PokerCard;