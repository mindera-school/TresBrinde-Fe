import { useEffect, useState } from "react";
import { ChevronRight } from "react-feather";
import { ChevronLeft } from "react-feather";

const ProductCarrousel = ({ mainImage, inputImages }: any) => {
  const [images, setImages] = useState<string[]>([]);
  const [imageDisplayedIndex, setImageDisplayedIndex] = useState(0);

  useEffect(() => {
    if (inputImages === undefined) {
      return;
    }
    const images = [...inputImages.map((e: any) => e.image)].filter(
      (e) => e != null
    );
    setImages([mainImage, ...images]);
  }, [mainImage, inputImages]);

  const previousImage = () => {
    if (imageDisplayedIndex !== 0) {
      setImageDisplayedIndex(imageDisplayedIndex - 1);
    }
  };

  const nextImage = () => {
    if (imageDisplayedIndex !== images.length - 1) {
      setImageDisplayedIndex(imageDisplayedIndex + 1);
    }
  };

  const getLeftChevron = () => {
    return imageDisplayedIndex !== 0 ? (
      <button
        className="button-banner button-banner-clickable"
        onClick={() => previousImage()}
      >
        <ChevronLeft color="white" />
      </button>
    ) : (
      <button
        className="button-banner button-banner-disabled"
        onClick={() => previousImage()}
      >
        <ChevronLeft color="gray" />
      </button>
    );
  };

  const getRightChevron = () => {
    return imageDisplayedIndex === images?.length - 1 ? (
      <button
        className="button-banner button-banner-disabled"
        onClick={() => nextImage()}
      >
        <ChevronRight color="gray" />
      </button>
    ) : (
      <button
        className="button-banner button-banner-clickable"
        onClick={() => nextImage()}
      >
        <ChevronRight color="white" />
      </button>
    );
  };

  return (
    <div className="product-carrousel">
      <div className="main-carrousel-img-wrapper">
        <img
          className="main-carrousel-img"
          alt="Product carrousel main"
          src={images[imageDisplayedIndex]}
        />
        {images.length > 1 ? (
          <div className="carrousel-buttons-wrapper">
            {getLeftChevron()}
            {getRightChevron()}
          </div>
        ) : null}
      </div>
      <div className="carrousel-horizontalLine" />
      <ul className="carrousel-card-wrapper">
        {images.map((image, index) => (
          <li className="carrousel-card">
            <img
              alt="Small carrousel display"
              src={image}
              onClick={() => {
                setImageDisplayedIndex(index);
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCarrousel;
