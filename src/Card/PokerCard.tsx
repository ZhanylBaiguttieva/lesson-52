import React from "react";

interface Props {
    rank: string;
    suit: string;
}
const PokerCard: React.FC<Props> = ({rank,suit}) => {
    return (
      <div className="playingCards faceImages">
        <span className={"card " + "rank-" + rank + " " + suit}>
          <span className="rank">{rank}</span>
          <span className="suit">{suit}</span>
        </span>
      </div>
    );
};

export default PokerCard;