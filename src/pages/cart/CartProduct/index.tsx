import { Edit2, X } from "react-feather";

export const CartProduct = ({
  img,
  name,
  quantity,
  price,
  color,
  id,
  ClickHandler,
  DeleteHandler,
}: {
  img: string;
  name: string;
  quantity: number;
  price: number;
  color: string;
  id: string;
  ClickHandler: () => void;
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
        <p className="productDescription">{`Preço: ${price}`}</p>
        <p className="productDescription">{`Referencia: ${color}`}</p>
      </div>

      <div>
        <button className="cartProductButton iconButton" onClick={() => ClickHandler()}>
          <Edit2 size={14}/>
           Editar Detalhes
        </button>
        <button className="cartProductButton" onClick={() => DeleteHandler(id)}>
          <X size={14}/>
        </button>
      </div>
    </div>
  );
};
