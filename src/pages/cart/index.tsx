import { Avatar, Button, List, Result } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { ShoppingBag, ChevronLeft } from "react-feather";
import { useHistory } from "react-router-dom";
import { removeFromCart } from "../../redux/actions/CartActions";
import { DetailsProductAction } from "../../redux/actions/productActions";
import Title from "../../components/common/Title";
import { API_IMAGE } from "../../constants/constants";
import { CartProduct } from "./CartProduct";
import { useEffect, useState } from "react";
import {
  removeAllFromCart,
  editItemFromCart,
} from "../../redux/actions/CartActions";
import AddToCartModal from "../products/product/addToCartModal";

const CartList = ({ match, location }: any) => {
  const { cartItems } = useSelector((state: RootState) => state.cart);

  const productDetails = useSelector(
    (state: RootState) => state.productDetails
  );

  const dispatch = useDispatch();
  const history = useHistory();
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [size, setSize] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [color, setColor] = useState(null);
  const [productId, setProductId] = useState(0);
  const { product, loading } = productDetails;

  useEffect(() => {
    dispatch(DetailsProductAction(productId));
  }, [dispatch, productId]);

  const DeleteHandler = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const ClickHandler = (id: string) => {
    setProductId(Number(id));
    setModalOpen(true);
  };

  const EditItem = () => {
    dispatch(editItemFromCart(productId, quantity, color));
    setModalOpen(false);
  };

  return (
    <div className="cartContainer">
      <div>
        <h2 className="cart-title">Lista de Artigos</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla.
        </p>
      </div>
      {cartItems.length === 0 ? (
        /*<Result
          icon={<ShoppingBag />}
          title="Não tens produtos no carrinho."
          extra={
            <Button type="primary" onClick={() => history.push("/")}>
              Voltar
            </Button>
          }
        />*/
        <div>
          <div className="iconButton-container">
            <div className="iconText">
              <ShoppingBag size={80} color="#F0F0F0" />
              <p>Ainda não adiconaste produtos à tua lista. </p>
            </div>
            <button
              className="button alignIcon"
              onClick={() => history.push("/")}
            >
              <ChevronLeft />
              Página Inicial
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="productContainer">
            {cartItems.map((cartItem) => (
              <CartProduct
                img={`${API_IMAGE}${cartItem.image}`}
                name={cartItem.productName}
                quantity={cartItem.quantity}
                price={cartItem.price}
                color={cartItem.color}
                id={cartItem.id}
                ClickHandler={ClickHandler}
                DeleteHandler={DeleteHandler}
              />
            ))}
          </div>
          <div className="buttonContainer scrolled">
            <button
              className="cartProductButton deleteCartButton"
              onClick={() => dispatch(removeAllFromCart())}
            >
              Apagar Carrinho
            </button>
            <button className="button" onClick={() => history.push("/budget")}>
              Pedir Orçamento
            </button>
          </div>
        </div>
      )}
      <AddToCartModal
        open={modalOpen}
        product={product}
        modalOpenHandler={setModalOpen}
        addToCartHandler={EditItem}
        setColor={setColor}
        setSize={setSize}
        quantity={quantity}
        setQuantity={setQuantity}
        setPrice={setPrice}
      />
    </div>
  );
};

export default CartList;

/*
<div>
          <List
            style={{ minWidth: "100px", width: "80%", margin: "auto" }}
            bordered
            dataSource={cartItems}
            renderItem={(item) => (
              <List.Item
                actions={[
                  <Button
                    onClick={() => removeFromCartHandler.bind(this)(item.id)}
                    key="remove-cart"
                  >
                    remove
                  </Button>,
                ]}
              >
                <List.Item.Meta
                  avatar={<Avatar src={`${API_IMAGE}${item.image}`} />}
                  title={<h3>{item.productName}</h3>}
                  description={`Quantidade: ${item.quantity} Preço: ${item.price}€`}
                />
              </List.Item>
            )}
          />
          <div
            style={{
              minWidth: "100px",
              width: "80%",
              margin: "auto",
              marginTop: "8px",
            }}
          >
            <Button
              style={{ float: "right" }}
              type="primary"
              onClick={() => history.push("/budget")}
            >
              Pedir Orçamento
            </Button>
          </div>
        </div>
*/
