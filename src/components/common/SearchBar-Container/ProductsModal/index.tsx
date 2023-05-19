import { SearchedProduct } from "../Product";
import { useHistory } from "react-router-dom";

export const ProductsModal = ({
  numberOfFoundProducts,
  productsList,
  path,
  isModalVisible
}: {
  numberOfFoundProducts: number;
  productsList: any[];
  path: string;
  isModalVisible: boolean;
}) => {
  let history = useHistory();
  const handleClick = () => {
    history.push(`/products?search=${path}`);
  };

  return (
    <div className={`searchedProductsContainer ${isModalVisible ? "" : "isSeen"}`}>
      <div className="numberOfResults">
        <p>Resultados Encontrados {numberOfFoundProducts}</p>
      </div>
      {productsList.map((product) => {
        return (
          <SearchedProduct
            product={{
              image: product.mainImage,
              title: product.productName,
              description: product.description,
              price: product.price,
              id: product.id,
            }}
          />
        );
      })}
      <button
        className="button load-more-button button-modal"
        onClick={() => handleClick()}
      >
        Ver todos os resultados
      </button>
    </div>
  );
};
