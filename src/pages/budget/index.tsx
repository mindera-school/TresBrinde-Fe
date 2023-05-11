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
    // eslint-disable-next-line
  }, [cartItems]);

  return (
    <div className="center">
      <Title>Solicitar Orçamento</Title>
      <List
        style={{ minWidth: "100px", width: "50%", margin: "auto" }}
        bordered
        footer={
          <div className="center" style={{ textAlign: "end" }}>
            Preço total: {totalPrice}€
          </div>
        }
        dataSource={cartItems}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={`${API_IMAGE}${item.image}`} />}
              title={<h3>{item.productName}</h3>}
              description={`Quantidade: ${item.quantity} Preço: ${item.price}€`}
            />
          </List.Item>
        )}
      />
      <div style={{ minWidth: "100px", width: "60%", margin: "auto" }}>
        <Divider></Divider>
        <Title title="Dados Pessoais"></Title>

        <Form
          name="basic"
          layout="vertical"
          onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
        >
          <Form.Item
            required
            label="Nome e Apelido"
            name="name"
            initialValue={userInfo.user ? userInfo.user.name : ""}
          >
            <Input defaultValue={userInfo.user ? userInfo.user.name : ""} />
          </Form.Item>
          <Form.Item
            label="E-mail"
            name="email"
            initialValue={userInfo.user ? userInfo.user.email : ""}
            rules={[
              { type: "email", required: true, message: "Email incorrecto" },
            ]}
          >
            <Input defaultValue={userInfo.user ? userInfo.user.email : ""} />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[
              { required: true, message: "Insere o teu numero de telefone!" },
            ]}
          >
            <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item name="address" required label="Morada para Entrega">
            <Input />
          </Form.Item>
          <Form.Item name="postal_code" required label="Codigo Postal">
            <Input />
          </Form.Item>

          <Divider></Divider>

          <Form.Item name="message" label="Mensagem">
            <Input.TextArea />
          </Form.Item>

          <Divider></Divider>

          <Form.Item>
            <Col flex="auto">
              <Button
                style={{ width: "100%" }}
                type="primary"
                htmlType="submit"
              >
                Solicitar Orçamento
              </Button>
            </Col>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default BudgetPage;
