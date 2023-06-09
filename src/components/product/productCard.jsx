import { useHistory } from "react-router-dom";

const ProductCard = ({ id, mainImage, productName, description, price }) => {

    const history = useHistory();

    return <div className="product-card" onClick={() => history.push(`/product/${id}`)}>
        <img alt="Product" src={mainImage} />
        <div className="product-card-info">
            <h4>{productName}</h4>
            <p>{description}</p>
            <div>
                <p>a partir de
                </p>
                <h2>
                    {price}€
                </h2>
            </div>
        </div>
    </div>
}

export default ProductCard;