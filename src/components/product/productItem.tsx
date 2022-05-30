import { Card } from "antd";
//import { Link, useHistory } from "react-router-dom"; warning corrected
import { Link } from "react-router-dom";
import { API_IMAGE } from "../../constants/constants";
const { Meta } = Card;

const ProductItem = ({ product }: any) => {
  //const history = useHistory();  corrected by mjm
  return (
    <Link to={`/product/${product.id}`}>
      <Card
        cover={
          <img
            style={{ height: "300px" }}
            src={`${API_IMAGE}${product.mainImage}`}
            alt={product.mainImage}
          />
        }
      >
        <Meta title={product.productName} description={product.description} />
        <p className="price-text">
          a partir de <strong>{product.price}€</strong>
        </p>
      </Card>
    </Link>
  );
};

export default ProductItem;
