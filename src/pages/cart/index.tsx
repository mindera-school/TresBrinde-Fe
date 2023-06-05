import { Avatar, Button, List, message, Result } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { ShoppingBag, ChevronLeft } from "react-feather";
import { useHistory } from "react-router-dom";
import { removeFromCart } from "../../redux/actions/CartActions";
import { DetailsProductAction } from "../../redux/actions/productActions";
import Title from "../../components/common/Title";
import { CartProduct } from "./CartProduct";
import { useEffect, useState } from "react";
import {
  removeAllFromCart,
  editItemFromCart,
} from "../../redux/actions/CartActions";
import AddToCartModal from "../products/product/addToCartModal";
import AddToCartModalMobile from "../products/product/addToCartModalMobile";
import { addUploadImage } from "../../redux/actions/CartActions";

const CartList = ({ match, location }: any) => {
  const { cartItems } = useSelector((state: RootState) => state.cart);

  const addToUploadImages = (file: File, reference: string) => {
    const blob = file.slice(0, file.size, file.type);
    const fileType = file.type.split("/")[1];
    const newFile = new File([blob], `${reference}.${fileType}`, {
      type: file.type,
    });
    dispatch(addUploadImage(newFile));
    message.success("Imagem adicionada");
  };

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
    const currentItem = cartItems.find((item) => Number(item.id) === productId);
    const previousQuantity = currentItem?.quantity;
    const previousColor = currentItem?.color;
    const previousPrice = currentItem?.price;
    const previousSize = currentItem?.size;

    const editedQuantity = quantity !== 0 ? quantity : previousQuantity;
    const editedColor = color !== "" ? color : previousColor;
    const editedPrice = price !== product?.price ? price : previousPrice;
    const editedSize = size !== "" ? size : previousSize;

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
          Se pretender solicitar algum tipo de impressão, deve fazer upload da
          respetiva imagem em "Selecionar ficheiro! Essa imagem ser-nos-á
          enviada aquando do pedido de orçamento, para que lhe possamos entregar
          o orçamento mais preciso possível!
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
                reference={cartItem.reference}
                img={cartItem.image}
                name={cartItem.productName}
                quantity={cartItem.quantity}
                price={cartItem.price}
                color={cartItem.color}
                id={cartItem.id}
                size={cartItem.size}
                fileHandler={addToUploadImages}
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
      <div
        className={`addToCartModal-wrapper ${modalOpen ? "" : "modal-hidden"}`}
      >
        <AddToCartModal
          product={product}
          modalOpenHandler={setModalOpen}
          addToCartHandler={EditItem}
          setColor={setColor}
          setSize={setSize}
          quantity={quantity}
          setQuantity={setQuantity}
          setPrice={setPrice}
          btnContent={"Salvar Alterações"}
        />
        <AddToCartModalMobile
          product={product}
          modalOpenHandler={setModalOpen}
          addToCartHandler={EditItem}
          setColor={setColor}
          setSize={setSize}
          quantity={quantity}
          setQuantity={setQuantity}
          setPrice={setPrice}
          btnContent={"Salvar Alterações"}
        />
      </div>
    </div>
  );
};

export default CartList;
