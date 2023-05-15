import { useEffect, useState } from "react";

import { ChevronRight, ChevronLeft } from "react-feather";

import { bannerData } from "../../../dataJSON/banner";

const images = bannerData.images;

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
      }, 3500)
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

  useEffect(() => {}, [currentBanner]);

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
      <div className="titleDescription">
        <p className="banner-title">{bannerData.title}</p>
        <p className="banner-description">{bannerData.description}</p>
      </div>
    </div>
  );
};

export default Banner;
