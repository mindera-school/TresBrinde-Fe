import Dropdown from "../../../components/common/Dropdown";
import { useState, useEffect } from "react";

const AddToCartModalMobile = ({
  open,
  product,
  modalOpenHandler,
  addToCartHandler,
  setColor,
  setSize,
  setPrice,
  quantity,
  setQuantity,
}: any) => {
  const [quantityOpen, setQuantityOpen] = useState(false);
  const [colorOpen, setColorOpen] = useState(false);
  const [sizesOpen, setSizesOpen] = useState(false);
  const [displayedPrice, setDisplayedPrice] = useState(product?.price);

  useEffect(() => {
    if (quantity === 0) {
      setDisplayedPrice(product?.price);
      return;
    }
    setDisplayedPrice(
      product?.priceQuantity.find((e: any) => e.quantity === quantity)
        ?.unitPrice
    );
  }, [quantity, product]);

  const colorDropDown = () => {
    if (
      product?.productProperty.find((e: any) => e.name === "color") ===
      undefined
    ) {
      return;
    }

    return (
      <Dropdown
        title={"Cor"}
        placeholder={"Selecionar Cor"}
        options={product?.productProperty
          ?.filter((e: any) => e.name === "color")
          .map((e: any) => e.value)}
        open={colorOpen}
        clickHandler={setColorOpen}
        selectHandler={setColor}
      />
    );
  };

  const sizeDropDown = () => {
    if (
      product?.productProperty.find((e: any) => e.name === "size") === undefined
    ) {
      return;
    }
    return (
      <Dropdown
        title={"Dimensões"}
        placeholder={"Selecionar Dimensões"}
        options={product?.productProperty
          ?.filter((e: any) => e.name === "size")
          .map((e: any) => e.value)}
        open={sizesOpen}
        clickHandler={setSizesOpen}
        selectHandler={setSize}
      />
    );
  };

  return (
    <div className="addToCartModal-mobile">
      <h1>{product?.productName}</h1>
      <div className="dropdown-mobile-wrapper">
        <Dropdown
          title={"Quantidade"}
          placeholder={"Selecionar Quantidade"}
          options={product?.priceQuantity?.map((e: any) => e.quantity)}
          open={quantityOpen}
          clickHandler={setQuantityOpen}
          selectHandler={setQuantity}
        />
        <div className="price-displayer-title">
          <span>Preço</span>
          <div className="price-displayer">{`${displayedPrice}€ / UN`}</div>
        </div>
        {colorDropDown()}
        {sizeDropDown()}
      </div>
      <div className="addToCartModal-mobile-btn-wrapper">
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
          Adicionar à Lista
        </button>
      </div>
    </div>
  );
};

export default AddToCartModalMobile;
