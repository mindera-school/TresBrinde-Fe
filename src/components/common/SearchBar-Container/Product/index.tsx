import { useHistory } from "react-router-dom";

export const SearchedProduct = ({ product }: { product: any }) => {
  const history = useHistory();
  const handleClick = (id: string) => {
    history.push(`/product/${id}`);
  };
  return (
    <div className="searchedProduct" onClick={() => handleClick(product.id)}>
      <img className="searchedProductImage" src={product.image} alt="Product" />
      <div className="searchedProductTextContainer">
        <p className="title-price">{product.title}</p>
        <p className="description">{product.description}</p>
        <span className="description">a partir de </span>
        <span className="title-price">{product.price}</span>
      </div>
    </div>
  );
};
