import ProductsList from "../../components/product/productsList";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import useQuery from "../../utils/query";

const Shop = () => {
  const query = useQuery();

  useDocumentTitle("Tres Brinde | Produtos");

  const category = query.get("category");
  const subCategory = query.get("subCategory");

  const specificId = category === null ? subCategory : category;
  const categoryCheck = category === null ? false : true;

  return (
    <ProductsList specificCategory={specificId} categoryCheck={categoryCheck} />
  );
};

export default Shop;
