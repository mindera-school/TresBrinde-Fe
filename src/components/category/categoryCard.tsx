import { useHistory } from "react-router-dom";

const CategoryCard = ({ category, onAction }: any) => {
  const history = useHistory();
  return (
    <article className="category-card">
      <img src={category.image} alt={category.name} />
      <h3>{category.name}</h3>
      <p>{category.description}</p>
    </article>
  );
};

export default CategoryCard;
