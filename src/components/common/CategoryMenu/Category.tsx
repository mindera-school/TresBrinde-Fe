import ChevronDown from "../../../images/chevron-down.svg";
import { Link } from "react-router-dom";

const Category = ({ category, setIsMenuOpen }: any) => {
  return (
    <li>
      <Link
        to={`/category/${category.id}`}
        key={category.id}
        onClick={() => {
          setIsMenuOpen(false);
        }}
      >
        <span>{category.name}</span>
      </Link>
      <button>
        <img src={ChevronDown} alt="Chevron to open subcategories" />
      </button>
    </li>
  );
};

export default Category;
