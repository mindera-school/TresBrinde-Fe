import { useHistory } from "react-router-dom";

const CategoryCard = ({ category, onAction }: any) => {
  const history = useHistory();
  return (
    <article className="category-card">
      <div className="image-container">
        <img src={category.image} alt={category.name} />
      </div>
      <h3>{category.name}</h3>
      <p>{category.description}</p>
      <button>Ver Produtos</button>
    </article>
  );
};

export default CategoryCard;
