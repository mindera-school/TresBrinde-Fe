import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { CartProduct } from "../../../cart/CartProduct";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { notification } from "antd";
import BudgetForm from "../BudgetForm";

const BudgetMain = () => {
  const history = useHistory();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    if (cartItems.length === 0) {
      history.push("/cart");
    }
  }, []);

  return (
    <div className="budget-main">
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
      {contextHolder}
      <BudgetForm onAction={() => sendBudget(api, null)} />
    </div>
  );
};

const sendBudget = (notificationApi: any, dispatch: any) => {
  notificationApi.success({
    message: "teupai",
    description: "teu pai e muito mamado",
    placement: "topRight",
  });
};
export default BudgetMain;
