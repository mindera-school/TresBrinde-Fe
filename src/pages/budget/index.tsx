import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { RootState } from "../../redux/store";
import BudgetForm from "./components/BudgetForm";
import { CartProduct } from "../cart/CartProduct";

const BudgetPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const cart = useSelector((state: RootState) => state.cart);
  const { cartItems } = cart;

  const userInfo = useSelector((state: RootState) => state.userInfo);

  useEffect(() => {
    if (cartItems.length === 0) {
      history.push("/cart");
    }
  }, []);

  return (
    <div className="budget">
      <div>
        <div className="product-list">
          <h3>Produtos</h3>
          {cartItems.map((cartItem) => (
            <CartProduct
              img={cartItem.image}
              name={cartItem.productName}
              quantity={cartItem.quantity}
              price={cartItem.price}
              color={cartItem.reference}
              id={cartItem.id}
              ClickHandler={() => null}
              DeleteHandler={() => null}
            />
          ))}
        </div>
        <BudgetForm onAction={() => console.log("a")} />
      </div>
    </div>
  );
};

export default BudgetPage;
