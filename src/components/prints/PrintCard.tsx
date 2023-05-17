import { useState } from "react";

const PrintCard = ({ print, handleClick }: any) => {
  const [expanded, setExpanded] = useState(false);

  const isDescriptionLong = print.description.length >= 103;

  return (
    <div className={`card ${expanded ? "expanded" : ""}`}>
      <img
        className="customization-img"
        alt={print.name}
        src={print.image.default}
      />

      <div className="text-overlay">
        <div className="text-content">
          <h3>{print.name}</h3>
          <p>{print.description}</p>
        </div>

        {isDescriptionLong && (
          <button
            className="print-card-button"
            onClick={() => {
              handleClick(print.id);
              setExpanded(!expanded);
            }}
          >
            {expanded ? "Fechar" : "Ler mais"}
          </button>
        )}
      </div>
    </div>
  );
};

export default PrintCard;
