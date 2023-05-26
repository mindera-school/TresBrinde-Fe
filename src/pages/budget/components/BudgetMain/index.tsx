import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { CartProduct } from "../../../cart/CartProduct";
import BudgetForm from "../BudgetForm";

const BudgetMain = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
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
      <BudgetForm onAction={() => console.log("a")} />
    </div>
  );
};
export default BudgetMain;
