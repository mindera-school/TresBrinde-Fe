import ProductCarrousel from "../product/productCarrousel";
import { useState, useEffect } from "react";

const ProductDetailsMobile = ({
  product,
  addToCartHandler,
  checkPropExists,
  findPropertyValues,
  propertiesList,
  buildGrid,
}: any) => {
  const [propertiesListState, setPropertiesListState] =
    useState(propertiesList);

  useEffect(() => {
    setPropertiesListState(propertiesList);
  }, [propertiesList]);
  return (
    <div className="product-page-mobile">
      <h1>{product?.productName}</h1>
      <h2>
        a partir de <span>{product?.price}€</span>
      </h2>
      <ProductCarrousel
        mainImage={product?.mainImage}
        inputImages={product?.tableImage}
      />
      <p>{product?.description}</p>
      {propertiesListState}
      {buildGrid()}
      <button
        className="button details-mobile-btn"
        onClick={() => addToCartHandler()}
      >
        Adicionar à Lista de Artigos
      </button>
    </div>
  );
};

export default ProductDetailsMobile;
