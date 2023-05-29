import { useEffect, useState } from "react";
import ProductCarrousel from "../product/productCarrousel";

const ProductDesktop = ({
  product,
  addToCartHandler,
  checkPropExists,
  propertiesList,
  buildGrid,
}: any) => {
  const productName = product?.productName;

  return (
    <div className="product-page">
      {product?.mainImage === undefined ? null : (
        <div className="product-page-visual">
          <ProductCarrousel
            mainImage={product?.mainImage}
            inputImages={product?.tableImage}
          />
        </div>
      )}
      <div className="product-page-info">
        <button className="button" onClick={() => addToCartHandler()}>
          Adiciona à lista de artigos
        </button>
        <h2>{productName}</h2>
        <h4>
          a partir de <span>{product?.price}€</span>
        </h4>
        <p>{product?.description}</p>
        {propertiesList}
        <div className="horizontal-line"></div>
        <h3>Detalhes de Encomenda</h3>
        {buildGrid()}
      </div>
    </div>
  );
};

export default ProductDesktop;
