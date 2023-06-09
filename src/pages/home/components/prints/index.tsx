import { useEffect, useState } from "react";

import { List } from "antd";

import PrintCard from "../../../../components/prints/PrintCard";

import { data } from "../../../../dataJSON/customization";

interface Print {
  id: number;
  name: string;
  description: string;
  image: typeof import("*.png");
}

const maxLength = 100;

const descriptionChanger = (
  prints: {
    description: string;
    id: number;
    name: string;
    image: typeof import("*.png");
  }[]
): Print[] => {
  return prints.map((item) => {
    let limitedDescription = item.description;
    if (limitedDescription.length > maxLength) {
      limitedDescription = limitedDescription.slice(0, maxLength) + "...";
    }
    return {
      ...item,
      description: limitedDescription,
    };
  });
};

const PrintHome = () => {
  const [prints, setPrints] = useState<Print[]>([]);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  useEffect(() => {
    const limitedPrints = data.slice(0, 4);
    const modifiedPrints = descriptionChanger(limitedPrints);
    setPrints(modifiedPrints);
  }, []);

  const btnHandler = () => {
    setPrints(descriptionChanger(data));
    setIsButtonClicked(true);
  };

  const expandDiv = (id: number) => {
    const modifiedPrints = prints.map((print) => {
      if (print.id === id && print.description.length > maxLength + 3) {
        const tempArray = descriptionChanger(prints);
        return {
          ...print,
          description: tempArray[id - 1]?.description || "",
        };
      }
      if (print.id === id) {
        return {
          ...print,
          description: data.find((item) => item.id === id)?.description || "",
        };
      }
      return print;
    });
    setPrints(modifiedPrints);
  };

  return !prints ? (
    <p>Não temos prints na loja</p>
  ) : (
    <div className="print-container">
      <div className="print-card">
        {prints?.map((item) => (
          <PrintCard print={item} handleClick={expandDiv} />
        ))}
      </div>
      <div className="btnContainerSeeMore">
        <button
          className={`button ${
            isButtonClicked ? "hidden" : ""
          } load-more-button`}
          onClick={() => btnHandler()}
        >
          Mostrar Mais
        </button>
      </div>
    </div>
  );
};

export default PrintHome;
