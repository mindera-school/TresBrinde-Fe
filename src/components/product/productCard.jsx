const ProductCard = ({ id, mainImage, productName, description, price }) => {
    return <div className="product-card">
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