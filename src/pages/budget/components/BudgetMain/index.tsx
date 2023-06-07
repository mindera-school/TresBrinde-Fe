import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { CartProduct } from "../../../cart/CartProduct";
import { useHistory } from "react-router-dom";
import BudgetForm from "../BudgetForm";

const BudgetMain = () => {
  const history = useHistory();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const dispatch = useDispatch();

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
            inCart={false}
            reference={cartItem.reference}
            img={cartItem.image}
            name={cartItem.productName}
            quantity={cartItem.quantity}
            price={cartItem.price}
            color={cartItem.color}
            id={cartItem.id}
            size={cartItem.size}
            ClickHandler={() => null}
            DeleteHandler={() => null}
          />
        ))}
      </div>
      <BudgetForm history={history} dispatch={dispatch} />
    </div>
  );
};

export default BudgetMain;
