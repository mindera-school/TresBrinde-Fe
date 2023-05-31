import { useEffect, useState } from "react";
import { getListProductsService } from "../../services/productsService";

const CategoryCard = ({ category, onAction }: any) => {
  const [imgSrc, setImgSrc] = useState(category.image);
  const [backupImg, setBackupImg] = useState("");

  useEffect(() => {
    getListProductsService(1, category.id, true).then((r) =>
      setBackupImg(r.products[0]?.mainImage)
    );
  }, [category]);

  useEffect(() => {
    if (category.image === null || category.image === "") {
      setImgSrc(backupImg);
      return;
    }
  }, [backupImg, category.image]);

  return (
    <article className="category-card">
      <div className="image-container">
        <img
          src={
            imgSrc !== undefined
              ? imgSrc
              : "https://static.thenounproject.com/png/3407972-200.png"
          }
          alt={category.name}
        />
      </div>
      <h3>{category.name}</h3>
      <p>{category.description}</p>
      <button onClick={onAction}>Ver Produtos</button>
    </article>
  );
};

export default CategoryCard;
