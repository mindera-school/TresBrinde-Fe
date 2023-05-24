import { List } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListProductsAction } from "../../redux/actions/productActions";
import { RootState } from "../../redux/store";
import Title from "../common/Title";
import ProductItem from "./productItem";

const ProductsRecommend = (props?: any) => {
  const dispatch = useDispatch();

  const { products } = useSelector((state: RootState) => state.productList);

  useEffect(() => {
    dispatch(ListProductsAction(4, "0", false));
  }, [dispatch]);

  return !products ? (
    <p> Não temos recomendações para ti</p>
  ) : (
    <div style={{ marginTop: "60px" }}>
      <Title>Produtos Recomendados</Title>
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

export default ProductsRecommend;
