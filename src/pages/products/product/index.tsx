import {
  Button,
  Carousel,
  Col,
  Divider,
  InputNumber,
  Result,
  Row,
  Spin,
} from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import { DetailsProductAction } from "../../../redux/actions/productActions";
import { RootState } from "../../../redux/store";
import { addToCart } from "../../../redux/actions/CartActions";
import ProductsRecommend from "../../../components/product/productsRecommend";
import { API_IMAGE } from "../../../constants/constants";
import { IProductProperty } from "../../../redux/types/IProduct";
import Banner from "../../home/banner";
import ColorDisplayer from "./colorDisplayer";
import ProductCard from "../../../components/product/productCard";
import ProductCarrousel from "./productCarrousel";
import ProductDetailsMobile from "../product-mobile";
import ProductDesktop from "../product-desktop";
import AddToCartModal from "./addToCartModal";

const ProductDetails = ({ params }: any) => {
  const productId = params.id;
  const dispatch = useDispatch();

  const productDetails = useSelector(
    (state: RootState) => state.productDetails
  );
  const { product, loading } = productDetails;
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [size, setSize] = useState("");

  const productName = product?.productName;
  const productProperties: Array<string> = [];
  const [propertiesList, setPropertiesList] = useState(
    <p>O produto não possui propriedades extra</p>
  );
  const [modalOpen, setModalOpen] = useState(false);
  const [color, setColor] = useState(null);

  useEffect(() => {
    dispatch(DetailsProductAction(productId));
  }, [dispatch, productId]);

  const addToCartHandler = () => {
    dispatch(addToCart(productId, quantity, price, color, size));
  };

  const checkPropExists = (propertyName: string) => {
    if (productProperties.includes(propertyName)) {
      return true;
    }
    productProperties.push(propertyName);
    return false;
  };

  const findPropertyValues = (name: string) => {
    const values = product?.productProperty?.filter((e) => e.name === name);
    if (name === "cor" || name === "color") {
      return values?.map((element) => {
        return <ColorDisplayer color={element.value} />;
      });
    }
    return values?.map((e) => e.value + " ");
  };

  const buildGrid = () => {
    if (product?.priceQuantity?.length !== 0) {
      return (
        <div className="table-wrapper">
          <ul className="product-table">
            <li>Quantidade</li>
            {product?.priceQuantity?.map((e) => (
              <li>{e.quantity} unidades</li>
            ))}
          </ul>
          <ul className="product-table">
            <li>Preço</li>
            {product?.priceQuantity?.map((e) => (
              <li>{e.unitPrice}€ /UN</li>
            ))}
          </ul>
        </div>
      );
    }
  };

  const setProductPropertiesList = () => {
    setPropertiesList(
      <ul>
        {product?.material ? (
          <li>
            <span>Material:</span> {product.material}
          </li>
        ) : null}
        {product?.productProperty?.map((e: any) =>
          checkPropExists(e.name) ? null : (
            <li>
              <span>{e.name.charAt(0).toUpperCase() + e.name.slice(1)}</span>
              {findPropertyValues(e.name)}
            </li>
          )
        )}
      </ul>
    );
  };

  const openModal = () => {
    setModalOpen(true);
  };

  useEffect(() => {
    setProductPropertiesList();
  }, []);

  useDocumentTitle(`Três Brinde | Product ${productName}`);
  return (
    <>
      <ProductDesktop
        product={product}
        addToCartHandler={openModal}
        checkPropExists={checkPropExists}
        propertiesList={propertiesList}
        buildGrid={buildGrid}
      />
      <ProductDetailsMobile
        product={product}
        addToCartHandler={openModal}
        checkPropExists={checkPropExists}
        propertiesList={propertiesList}
        buildGrid={buildGrid}
      />
      <AddToCartModal
        open={modalOpen}
        product={product}
        modalOpenHandler={setModalOpen}
        addToCartHandler={addToCartHandler}
        setColor={setColor}
        setSize={setSize}
        quantity={quantity}
        setQuantity={setQuantity}
        setPrice={setPrice}
      />
    </>
  );
};

export default ProductDetails;
