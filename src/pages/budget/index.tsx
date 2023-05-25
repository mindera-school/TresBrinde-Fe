import { Avatar, Button, Col, Divider, Form, Input, List, Select } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { RootState } from "../../redux/store";
import Title from "../../components/common/Title";
import { Option } from "antd/lib/mentions";
import { CreateBudgetAction } from "../../redux/actions/BudgetActions";
import { API_IMAGE } from "../../constants/constants";

const BudgetPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const cart = useSelector((state: RootState) => state.cart);
  const { cartItems } = cart;

  const userInfo = useSelector((state: RootState) => state.userInfo);

  const totalPrice = cartItems
    .map((p) => p.price)
    .reduce((prev, next) => prev + next);

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="351">+351</Option>
      </Select>
    </Form.Item>
  );

  const onFinish = (values: any) => {
    const products = cartItems.map((p: any) => {
      const properties = {
        productId: p.id,
        quantity: p.quantity,
      };

      return properties;
    });

    const data = {
      userId: userInfo.user.id || null,
      email: values.email || userInfo.user.email,
      NIF: "",
      company_name: "",
      country: "",
      city: "",
      address: values.address,
      expectedPrice: totalPrice,
      description: values.message,
      productsQuantity: products,
    };

    dispatch(CreateBudgetAction(data, history));
  };

  useEffect(() => {
    if (cartItems.length === 0) {
      history.push("/cart");
    }
  }, []);

  return (
    <div>
      <div></div>
    </div>
  );
};

export default BudgetPage;
