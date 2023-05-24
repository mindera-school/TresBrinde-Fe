import ProductCard from "./productCard";

const ProductsContainer = ({
  productsList,
  categoryTitle,
  incrementLimit,
  hasMoreProducts,
}: any) => {
  return (
    <div className="products-container">
      <h2>{categoryTitle}</h2>
      <ul className="product-container-list">
        {productsList?.map((product: any) => {
          return (
            <li>
              <ProductCard
                id={product.id}
                mainImage={product.mainImage}
                productName={product.productName}
                description={product.description}
                price={product.price}
              />
            </li>
          );
        })}
      </ul>
      {hasMoreProducts ? (
        <button className="button" onClick={() => incrementLimit()}>
          Mostrar mais
        </button>
      ) : null}
    </div>
  );
};

export default ProductsContainer;
