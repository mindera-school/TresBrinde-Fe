import { Avatar, Button, List, Result } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { ShoppingCart } from "react-feather";
import { useHistory } from "react-router-dom";
import { removeFromCart } from "../../redux/actions/CartActions";
import Title from "../../components/common/Title";
import { API_IMAGE } from "../../constants/constants";

const CartList = ({ match, location }: any) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { cartItems } = useSelector((state: RootState) => state.cart);

  const removeFromCartHandler = (id: string) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div>
      {cartItems.length === 0 ? (
        <Result
          icon={<ShoppingCart />}
          title="Não tens produtos no carrinho."
          extra={
            <Button type="primary" onClick={() => history.push("/")}>
              Voltar
            </Button>
          }
        />
      ) : (
        <div>
          <Title>Lista de Artigos</Title>

          <List
            style={{ minWidth: "100px", width: "80%", margin: "auto" }}
            bordered
            dataSource={cartItems}
            renderItem={(item) => (
              <List.Item
                actions={[
                  <Button
                    onClick={() => removeFromCartHandler.bind(this)(item.id)}
                    key="remove-cart"
                  >
                    remove
                  </Button>,
                ]}
              >
                <List.Item.Meta
                  avatar={<Avatar src={`${API_IMAGE}${item.image}`} />}
                  title={<h3>{item.productName}</h3>}
                  description={`Quantidade: ${item.quantity} Preço: ${item.price}€`}
                />
              </List.Item>
            )}
          />
          <div
            style={{
              minWidth: "100px",
              width: "80%",
              margin: "auto",
              marginTop: "8px",
            }}
          >
            <Button
              style={{ float: "right" }}
              type="primary"
              onClick={() => history.push("/budget")}
            >
              Pedir Orçamento
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartList;
