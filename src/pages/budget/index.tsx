import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { RootState } from "../../redux/store";
import BudgetMain from "./components/BudgetMain";

const BudgetPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  return (
    <div className="budget-page">
      <BudgetMain />
    </div>
  );
};

export default BudgetPage;
