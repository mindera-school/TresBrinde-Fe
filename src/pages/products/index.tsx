import ProductsList from "../../components/product/productsList";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import useQuery from "../../utils/query";

const Shop = () => {
  const query = useQuery();

  useDocumentTitle("Tres Brinde | Produtos");

  const subCategory = query.get("subCategory");

  return <ProductsList subCategory={subCategory} />;
};

export default Shop;
