import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListProductsAction } from "../../redux/actions/productActions";
import { RootState } from "../../redux/store";
import ProductsContainer from "./productsContainer";
import { getDetailsCategoryService } from "../../services/categoriesServices";
import { getDetailsSubCategoryService } from "../../services/subCategoryService";
import { getListProductsService } from "../../services/productsService";
import Title from "../common/Title";

const ProductsList = (props: any) => {
  const [limit, setLimit] = useState(6);
  const specificCategory = props.specificCategory || 0;
  const categoryCheck = props.categoryCheck;
  const [categoryTitle, setCategoryTitle] = useState();
  const [subcategoryTitle, setSubcategoryTitle] = useState("");
  const [hasMoreProducts, setHasMoreProducts] = useState(false);

  const incrementPage = () => {
    setLimit(limit + 6);
  };

  const dispatch = useDispatch();

  const { products } = useSelector((state: RootState) => state.productList);

  useEffect(() => {
    dispatch(ListProductsAction(limit, specificCategory, categoryCheck));

    if (products !== undefined) {
      getListProductsService(limit + 5, specificCategory, categoryCheck).then(
        (r) => {
          console.log(r.products.length);
          console.log(products.length);
          setHasMoreProducts(
            r.products.length > products.length ? true : false
          );
        }
      );
    }

    //get the correct title
    if (categoryCheck) {
      getDetailsCategoryService(specificCategory).then((r) =>
        setCategoryTitle(r.name)
      );
      return;
    }
    getDetailsSubCategoryService(specificCategory).then((r) =>
      setSubcategoryTitle(r.name)
    );
  }, [dispatch, limit, specificCategory, categoryCheck]);

  return (
    <ProductsContainer
      productsList={products}
      categoryTitle={categoryCheck ? categoryTitle : subcategoryTitle}
      incrementLimit={incrementPage}
      hasMoreProducts={hasMoreProducts}
    />
  );
};

export default ProductsList;
