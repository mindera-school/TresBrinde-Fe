import { List } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListProductsAction } from "../../redux/actions/productActions";
import { RootState } from "../../redux/store";
import Title from "../common/Title";
import ProductItem from "../product/productItem";

const ProductsList = (props?: any) => {
  const subCategory = props.subCategory || 0;

  const limit = props.limit || 5;

  const dispatch = useDispatch();

  const productsList = useSelector((state: RootState) => state.productList);
  const { products } = productsList;

  useEffect(() => {
    dispatch(ListProductsAction(limit, subCategory));
  }, [dispatch]);

  return !products ? (
    <p> Não temos subcategories nesta categoria</p>
  ) : (
    <div>
      <Title>{subCategory}</Title>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 1,
          md: 2,
          lg: 2,
          xl: 4,
          xxl: 4,
        }}
        dataSource={products}
        renderItem={(item) => (
          <List.Item key={item.id}>
            <ProductItem product={item} />
          </List.Item>
        )}
      />
    </div>
  );
};

export default ProductsList;
