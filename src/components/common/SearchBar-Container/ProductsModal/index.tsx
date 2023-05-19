import { SearchedProduct } from "../Product";
import { useHistory } from "react-router-dom";

export const ProductsModal = ({
  numberOfFoundProducts,
  productsList,
  path,
  isModalVisible,
  setIsModalVisible,
}: {
  numberOfFoundProducts: number;
  productsList: any[];
  path: string;
  isModalVisible: boolean;
  setIsModalVisible: (string: boolean) => void;
}) => {
  let history = useHistory();
  const handleClick = () => {
    history.push(`/products?search=${path}`);
    setIsModalVisible(false);
  };

  return (
    <div
      className={`searchedProductsContainer ${isModalVisible ? "" : "isSeen"}`}
    >
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
            setIsModalVisible={setIsModalVisible}
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
