import { useState } from "react";
import AccordionCard from "./components/AccordionCard";
import { accordionData } from "./constants";
import './accordion.css';

const Accordion = () => {
  const [ids, setIds] = useState([1, 2]);

  const handleCardOpen = (id) => {
    if (ids.includes(id)) {
      setIds(ids.filter((openId) => openId !== id));
    } else {
      setIds([...ids, id]);
    }
  };

  return (
    <div className="accordion-main">
      {accordionData.map((card) => (
        <AccordionCard key={card.id} card={card} openedId={ids} onToggle={handleCardOpen} />
      ))}
    </div>
  )
}

export default Accordion;