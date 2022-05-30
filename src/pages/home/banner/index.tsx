import { useEffect, useState } from "react";

import { ChevronRight, ChevronLeft } from "react-feather";

import imageOne from "./images/image_banner_1.svg";
import imageTwo from "./images/image_banner_2.svg";

const images = [imageOne, imageOne, imageTwo];

const Banner = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | undefined>(
    undefined
  );


  const handleClickNext = () => {
    if (currentBanner >= images.length - 1) {
      setCurrentBanner(0);
      return;
    }

    setCurrentBanner(currentBanner + 1);
  };

  //make some corrections
  useEffect(() => {
  
    timeoutId && clearTimeout(timeoutId);
    setTimeoutId(
      setTimeout(() => {
        handleClickNext();
      }, 3000)
    );
    // eslint-disable-next-line
      }, [currentBanner]); 

  const handleClickPrevious = () => {
    if (currentBanner <= 0) {
      setCurrentBanner(images.length - 1);
      return;
    }

    setCurrentBanner(currentBanner - 1);
  };

  const handleSelectBanner = (index: number) => {
    setCurrentBanner(index);
  };

  return (
    <div className="banner">
      <div className="container-buttons">
        <button
          onClick={handleClickPrevious}
          className="button button-icon button-circle previous-color"
        >
          <ChevronLeft size="20" />
        </button>

        {images.length &&
          images.map((_, index) => (
            <button
              key={index.toString()}
              className={`button ${
                index === currentBanner
                  ? `button-selected`
                  : `button-to-be-selected`
              }`}
              onClick={() => handleSelectBanner(index)}
            />
          ))}

        <button
          onClick={handleClickNext}
          className="button button-icon button-circle next-color"
        >
          <ChevronRight size="20" />
        </button>
      </div>
      <img
        onClick={handleClickNext}
        id="image"
        src={images[currentBanner]}
        alt="Current Banner"
      />
    </div>
  );
};

export default Banner;
