import { Check, Edit2, Upload, X } from "react-feather";
import { useState } from "react";
import { message, Popover } from "antd";

export const CartProduct = ({
  inCart,
  reference,
  img,
  name,
  quantity,
  price,
  color,
  id,
  size,
  fileHandler,
  ClickHandler,
  DeleteHandler,
}: any) => {
  const [hasImage, setHasImage] = useState(false);
  const [miniature, setMiniature] = useState(null);
  const [uploadHover, setUploadHover] = useState(false);

  const onChangeHandler = (e) => {
    if (hasImage) {
      message.warning("Já adicionou uma imagem a esse produto!");
      return;
    }
    setHasImage(true);
    fileHandler(e.target.files[0], reference);
  };

  const miniatureConverter = async (file) => {
    setMiniature(await blobToBase64(file));
  };

  const blobToBase64 = (blob) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const getFileBtn = () => {
    return (
      <Popover
        title={
          hasImage
            ? "Imagem adicionada"
            : "Carregue uma imagem caso pretenda algum tipo de impressão"
        }
        content={
          hasImage ? (
            <img
              alt="Uploaded for printing"
              className="popover-img"
              src={miniature}
            />
          ) : null
        }
      >
        <label className="upload-file-btn">
          {hasImage ? (
            <Check size={14} color={"white"} />
          ) : (
            <Upload size={14} />
          )}
          <input
            type="file"
            name="product-image"
            accept="image/png, image/jpeg, image/jpeg"
            className="input-file"
            disabled={hasImage}
            onChange={(e) => {
              onChangeHandler(e);
              miniatureConverter(e.target.files[0]);
            }}
          />
        </label>
      </Popover>
    );
  };

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
        {inCart ? getFileBtn() : null}
        <button
          className="cartProductButton iconButton editButton"
          onClick={() => ClickHandler(id, quantity, color)}
        >
          <Edit2 size={14} />
          Editar Detalhes
        </button>
        <button
          className="cartProductButton delete-btn"
          onClick={() => DeleteHandler(id)}
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
};
