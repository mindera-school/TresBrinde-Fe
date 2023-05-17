import ChevronDown from "../../../images/chevron-down.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SubCategory from "./SubCategory";
import { useState } from "react";

const Category = ({ category, setIsMenuOpen }: any) => {
  const subcategories = category.subCategories || [];
  const [isSubcategoriesOpen, setIsSubcategoriesOpen] = useState(false);
  const chevronButton = (
    <button
      onClick={() => setIsSubcategoriesOpen(isSubcategoriesOpen ? false : true)}
    >
      <img src={ChevronDown} alt="Chevron to open subcategories" />
    </button>
  );

  return (
    <li>
      <Link
        to={`/products?category=${category.id}`}
        key={category.id}
        onClick={() => {
          setIsMenuOpen(false);
        }}
      >
        <span>{category.name}</span>
      </Link>
      {subcategories.length > 0 ? chevronButton : null}
      <ul
        className={`category-menu-subcategoryList ${
          isSubcategoriesOpen ? "" : "category-menu-subcategoryList-hide"
        }`}
      >
        {subcategories.map((subcategory: any) => (
          <SubCategory
            key={subcategory.id}
            name={subcategory.name}
            id={subcategory.id}
            setIsMenuOpen={setIsMenuOpen}
          />
        ))}
      </ul>
    </li>
  );
};

export default Category;
