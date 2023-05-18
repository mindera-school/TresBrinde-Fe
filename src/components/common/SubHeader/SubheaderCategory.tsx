import { useState } from "react";
import { Link } from "react-router-dom";
import SubCategoriesBox from "./SubCategoriesBox";

const SubheaderCategory = ({ id, name, subCategories }: any) => {
  const [isSubCatOpen, setSubCatOpen] = useState(false);

  return (
    <div
      className={`subheader-category ${
        isSubCatOpen ? "subheader-category-selected" : ""
      }`}
      onMouseEnter={() => {
        setSubCatOpen(true);
      }}
      onMouseLeave={() => {
        setSubCatOpen(false);
      }}
    >
      <Link to={`/products?category=${id}`}>{name}</Link>
      <SubCategoriesBox show={isSubCatOpen} subcategories={subCategories} />
    </div>
  );
};

export default SubheaderCategory;
