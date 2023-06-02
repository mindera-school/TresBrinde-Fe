import { Link } from "react-router-dom";

const SubCategoriesBox = ({ subcategories, show }: any) => {
  const content = (
    <div className={`subcategories-box${show ? "" : "-hide"}`}>
      {subcategories.map((subcategory: any) => (
        <Link
          key={subcategory.id}
          to={`/products?subCategory=${subcategory.id}`}
        >
          {subcategory.name.charAt(0).toUpperCase() + subcategory.name.slice(1)}
        </Link>
      ))}
    </div>
  );
  return subcategories.length > 0 ? content : null;
};

export default SubCategoriesBox;
