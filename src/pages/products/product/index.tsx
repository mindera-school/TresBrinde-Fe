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

const getAllProperties = (
  productProperty: Array<IProductProperty> | undefined
): String[] => {
  if (!productProperty) return [] as String[];
  const propertiesArray: any = [] as String[];

  // eslint-disable-next-line
  productProperty.map((property) => {
    if (!propertiesArray.includes(property.name))
      propertiesArray.push(property.name);
  });

  return propertiesArray;
};

const getOptionsByProperty = (
  productProperties: Array<IProductProperty> | undefined,
  property: String
): String => {
  if (!productProperties) return "";
  const filteredOptions = productProperties.filter(
    (productProperty) => productProperty.name === property
  );

  let options = "";

  let filteredOptionsSliced = filteredOptions.slice(1);

  options = filteredOptionsSliced.reduce(
    (accumulator, currentValue) => `${accumulator}, ${currentValue.value}`,
    filteredOptions[0].value
  );

  return options;
};

const ProductDetails = ({ params }: any) => {
  const productId = params.id;

  const dispatch = useDispatch();
  const history = useHistory();

  const productDetails = useSelector(
    (state: RootState) => state.productDetails
  );
  const { product, loading } = productDetails;

  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(1);
  const [filteredProperties, setFilteredProperties] = useState([] as String[]);

  useEffect(() => {
    dispatch(DetailsProductAction(productId));
  }, [productId]);

  useEffect(() => {
    if (!product) return;

    const { priceQuantity, productProperty } = product;

    if (priceQuantity && priceQuantity[0]) setPrice(priceQuantity[0].unitPrice);

    if (productProperty)
      setFilteredProperties(getAllProperties(productProperty));
  }, [product]);

  const onChange = (value: any) => {
    product?.priceQuantity?.forEach((index) => {
      if (value + 1 >= index.quantity) {
        let priceQty = index.unitPrice * value;
        setPrice(priceQty);
        setQuantity(value);
      }
    });
  };

  const addToCartHandler = () => {
    dispatch(addToCart(productId, quantity, price));
  };

  useDocumentTitle(`Três Brinde | Product ${product?.productName}`);

  return (
    <div>
      {loading ? (
        <Spin />
      ) : (
        <div>
          {!product?.id ? (
            <Result
              status="404"
              title="404"
              subTitle="Produto nao encontrado"
              extra={
                <Button
                  type="primary"
                  onClick={() => {
                    history.push("/");
                  }}
                >
                  Voltar
                </Button>
              }
            />
          ) : (
            <>
              <Row>
                <Col flex="600px">
                  <Carousel>
                    <div>
                      <img
                        style={{ height: "600px" }}
                        src={`${API_IMAGE}${product.mainImage}`}
                        alt={product.productName}
                      />
                    </div>
                  </Carousel>
                </Col>
                <Col flex="auto">
                  <div className="product-item">
                    <Divider />
                    <h3 className="product-title">{product.productName}</h3>
                    <p className="product-price-min">
                      a partir de <strong>{product.price}</strong>€
                    </p>
                    <p className="product-desc">{product.description}</p>
                    <p className="product-material">
                      Material:{" "}
                      <span className="product-property-value">
                        {product.material}
                      </span>
                    </p>
                    {filteredProperties.map((property) => (
                      <p className="product-property-name">
                        {property}:{" "}
                        <span className="product-property-value">
                          {getOptionsByProperty(
                            product.productProperty,
                            property
                          )}{" "}
                        </span>
                      </p>
                    ))}
                    <p className="product-property-name">Quantidade:</p>
                    <InputNumber
                      min={1}
                      defaultValue={1}
                      onChange={onChange}
                    />{" "}
                    <span className="product-price">{price} €</span>
                    {product.tableImage === undefined ? (
                      <img src={product.tableImage} alt={product.productName} />
                    ) : (
                      ""
                    )}
                    <div className="margin-top-40px">
                      <Button type="primary" onClick={addToCartHandler}>
                        Adicionar ao Carrinho
                      </Button>
                    </div>
                    <Divider />
                  </div>
                </Col>
              </Row>

              <ProductsRecommend
                limit="5"
                subCategory={product.subCategories}
              />
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
