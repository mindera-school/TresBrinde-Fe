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
    // Retrieve the previous values from the current cartItems
    const currentItem = cartItems.find((item) => Number(item.id) === productId);
    const previousQuantity = currentItem?.quantity;
    const previousColor = currentItem?.color;
    const previousPrice = currentItem?.price;
    const previousSize = currentItem?.size;

    // Update the values if they are not undefined, otherwise use the previous values
    const editedQuantity = quantity !== 0 ? quantity : previousQuantity;
    const editedColor = color !== "" ? color : previousColor;
    const editedPrice = price !== product?.price ? price : previousPrice;
    const editedSize = size !== "" ? size : previousSize;

    // Dispatch the edited values to update the item in the cart
    dispatch(
      editItemFromCart(
        productId,
        editedQuantity,
        editedColor,
        editedPrice,
        editedSize
      )
    );
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
                size={cartItem.size}
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
