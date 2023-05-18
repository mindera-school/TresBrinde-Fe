import { Link } from "react-router-dom";

const SubCategoriesBox = ({ subcategories, show }: any) => {
  const content = (
    <div className={`subcategories-box${show ? "" : "-hide"}`}>
      {subcategories.map((subcategory: any) => (
        <Link to={`/products?subCategory=${subcategory.id}`}>
          {subcategory.name}
        </Link>
      ))}
    </div>
  );
  return subcategories.length > 0 ? content : null;
};

export default SubCategoriesBox;
