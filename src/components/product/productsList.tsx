import { List } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListProductsAction } from "../../redux/actions/productActions";
import { RootState } from "../../redux/store";
import Title from "../common/Title";
import ProductItem from "./productItem";

const ProductsList = (props?: any) => {
  const specificCategory = props.specificCategory || 0;
  const categoryCheck = props.categoryCheck;

  const limit = props.limit || 5;

  const dispatch = useDispatch();

  const { products } = useSelector((state: RootState) => state.productList);

  useEffect(() => {
    dispatch(ListProductsAction(limit, specificCategory, categoryCheck));
  }, [dispatch, limit, specificCategory, categoryCheck]);

  return !products ? (
    <p> Não temos produtos na loja</p>
  ) : (
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
      header={<Title>Lista de Produtos</Title>}
      renderItem={(item) => (
        <>
          <List.Item style={{ marginTop: "8px" }} key={item.id}>
            <ProductItem product={item} />
          </List.Item>
        </>
      )}
    />
  );
};

export default ProductsList;
