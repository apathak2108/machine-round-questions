const AccordionCard = ({ card, openedId, onToggle }) => {
  return (
    <div className="accordion-card">
      <div>
        <div className="title">{card.title}</div>
        {openedId.includes(card.id) ? <div>{card.content}</div> : null}
      </div>
      <span className="open-btn" role="button" onClick={() => onToggle(card.id)}>{openedId.includes(card.id) ? 'close' : 'open'}</span>
    </div>
  )
};

export default AccordionCard;