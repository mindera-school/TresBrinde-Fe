import { useState } from "react";

const PrintCard = ({ print, handleClick }: any) => {
  const [expanded, setExpanded] = useState(false);

  const isDescriptionLong = print.description.length >= 103;

  const toggleExpansion = () => {
    setExpanded(!expanded);
    handleClick(print.id);
  };

  return (
    <div className={`card ${expanded ? "expanded" : ""}`}>
      <img
        className="customization-img"
        alt={print.name}
        src={print.image.default}
      />

      <div className="text-overlay">
        <h3>{print.name}</h3>

        <div className="text-content">
          <p>{print.description}</p>
        </div>

        {isDescriptionLong && (
          <button
            className="print-card-button"
            onClick={() => toggleExpansion()}
          >
            {expanded ? "Fechar" : "Ler mais"}
          </button>
        )}
      </div>
    </div>
  );
};

export default PrintCard;
