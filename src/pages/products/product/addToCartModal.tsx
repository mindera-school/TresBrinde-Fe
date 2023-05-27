import { useState } from "react";
import Dropdown from "../../../components/common/Dropdown";

const AddToCartModal = ({
  open,
  product,
  modalOpenHandler,
  addToCartHandler,
}: any) => {
  const [quantityOpen, setQuantityOpen] = useState(false);
  const [colorOpen, setColorOpen] = useState(false);
  const [sizesOpen, setSizesOpen] = useState(false);

  return (
    <div className={`addToCartModal-wrapper ${open ? "" : "modal-hidden"}`}>
      <div className="addToCartModal">
        <h1>{product?.productName}</h1>
        <div className="product-display">
          <img src={product?.mainImage} />
          <div className="product-dropdown-wrapper">
            <Dropdown
              title={"Quantidade"}
              placeholder={"Selecionar Quantidade"}
              options={product?.priceQuantity?.map((e: any) => e.quantity)}
              open={quantityOpen}
              clickHandler={setQuantityOpen}
            />
            <div className="price-displayer-title">
              <span>Preço</span>
              <div className="price-displayer">{`${product?.price}€ / UN`}</div>
            </div>
            <Dropdown
              title={"Cor"}
              placeholder={"Selecionar Cor"}
              options={product?.productProperty
                ?.filter((e: any) => e.name === "color")
                .map((e: any) => e.value)}
              open={colorOpen}
              clickHandler={setColorOpen}
            />
            <Dropdown
              title={"Dimensões"}
              placeholder={"Selecionar Dimensões"}
              options={product?.productProperty
                ?.filter((e: any) => e.name === "size")
                .map((e: any) => e.value)}
              open={sizesOpen}
              clickHandler={setSizesOpen}
            />
          </div>
        </div>
        <div className="addToCartModal-button-wrapper">
          <button
            className="text-button"
            onClick={() => {
              modalOpenHandler(false);
            }}
          >
            Cancelar
          </button>
          <button
            className="button"
            onClick={() => {
              addToCartHandler();
            }}
          >
            Adicionar à Lista de Artigos
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddToCartModal;
