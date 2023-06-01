import { Edit2, X } from "react-feather";

export const CartProduct = ({
  img,
  name,
  quantity,
  price,
  color,
  id,
  size,
  ClickHandler,
  DeleteHandler,
}: {
  img: string;
  name: string;
  quantity: number;
  price: number;
  color: string;
  id: string;
  size: number;
  ClickHandler: (id: string, quantity: number, color: string) => void;
  DeleteHandler: (id: string) => void;
}) => {
  return (
    <div className="cartProductContainer">
      <div className="imgTitle">
        <img src={img} alt="Product" />
        <p>{name}</p>
      </div>

      <div className="descriptionContainer">
        <p className="productDescription">{`Quantidade: ${quantity}`}</p>
        <p className="productDescription">{`Preço: ${price} /UN`}</p>
        {color && color !== "" && (
          <p className="productDescription">
            Cor:
            <div
              className="colorDisplayer"
              style={{
                backgroundColor: color.replace(/ /g, ""),
                margin: "2px",
              }}
            ></div>
            {`- ${color}`}
          </p>
        )}
        {size && <p className="productDescription">{`Tamanho: ${size}`}</p>}
      </div>

      <div className="btnContainer">
        <button
          className="cartProductButton iconButton editButton"
          onClick={() => ClickHandler(id, quantity, "red")}
        >
          <Edit2 size={14} />
          Editar Detalhes
        </button>
        <button className="cartProductButton" onClick={() => DeleteHandler(id)}>
          <X size={14} />
        </button>
      </div>
    </div>
  );
};
