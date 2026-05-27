const Card = ({ card, onCardClick }) => {
  return (
    <div className="card" onClick={() => onCardClick(card.uniqueId)}>
      {card.isFlipped ? card.emoji : '?'}
    </div>
  );
};

export default Card;
