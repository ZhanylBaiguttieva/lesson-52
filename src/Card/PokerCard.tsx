import React from "react";

interface Props {
    rank: string;
    suit: string;
}
const PokerCard: React.FC<Props> = ({rank},{suit}) => {
    return (
        <div className="cardName">

        </div>
    )
};

export  default PokerCard;