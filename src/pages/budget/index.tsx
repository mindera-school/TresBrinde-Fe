import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { RootState } from "../../redux/store";
import Title from "../../components/common/Title";
import { Option } from "antd/lib/mentions";
import { CreateBudgetAction } from "../../redux/actions/BudgetActions";
import { API_IMAGE } from "../../constants/constants";
import BudgetForm from "./components/BudgetForm";

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
        <BudgetForm onAction={() => console.log("a")} />
      </div>
    </div>
  );
};

export default BudgetPage;
