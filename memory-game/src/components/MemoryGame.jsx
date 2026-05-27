import { useState } from "react";
import { cardsData } from "../constants";
import Card from "./Card";
import { useEffect } from "react";
import { shuffleArray } from "../utils";
import { useCallback } from "react";

const MemoryGame = () => {
  const [cards, setCards] = useState(null);
  const [selectedCards, setSelectedCards] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);
  const [totalMoves, setTotalMoves] = useState(0);

  const isCompleted =
    cards?.every((card) => card.matched);

  const initializeGame = useCallback(() => {
    const shuffledCards = shuffleArray(
      [...cardsData, ...cardsData].map((card, index) => ({
        ...card,
        uniqueId: index,
        isFlipped: false,
        matched: false,
      }))
    );
    setCards(shuffledCards);
    setSelectedCards([]);
    setIsDisabled(false);
    setTotalMoves(0);
  }, []);

  const handleCardClick = (uniqueId) => {
    if (selectedCards?.length === 2 || isDisabled) return;
    setTotalMoves(prev => prev + 1);

    const clickedCard = cards.find((card) => card.uniqueId === uniqueId);
    if (clickedCard.isFlipped || clickedCard.matched) return;

    setCards((prev) => prev.map((card) => card.uniqueId === uniqueId ? { ...card, isFlipped: true } : card));
    setSelectedCards([...selectedCards, clickedCard]);
  };

  useEffect(() => {
    if (selectedCards.length === 2) {
      const [firstCard, secondCard] = selectedCards;

      if (firstCard.id === secondCard.id) {
        setCards((prev) => prev.map((card) => card.id === firstCard.id ? { ...card, matched: true } : card));
        setSelectedCards([]);
      } else {
        setIsDisabled(true);
        setTimeout(() => {
          setCards((prev) => prev.map((card) => card.uniqueId === firstCard.uniqueId || card.uniqueId === secondCard.uniqueId ? { ...card, isFlipped: false } : card));
          setSelectedCards([]);
          setIsDisabled(false);
        }, 1000);
      }
    }
  }, [selectedCards])

  useEffect(() => {
    initializeGame();
  }, [initializeGame]);

  return (
    <>
      <div className="game-board">
        {cards?.map((card) => (
          <Card key={card.uniqueId} card={card} onCardClick={handleCardClick} />
        ))}
      </div>
      {isCompleted && <div>{`Hurray! Game completed in ${totalMoves} moves.`}
        <button onClick={initializeGame}>Reset Game</button>
      </div>}
    </>
  );
};

export default MemoryGame;