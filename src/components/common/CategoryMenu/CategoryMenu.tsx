import Logo from "../../../images/MobileHeaderLogo.svg";
import CloseIcon from "../../../images/x.svg";
import ChevronDown from "../../../images/chevron-down.svg";
import { useState } from "react";
import { useSelector } from "react-redux";
import Category from "./Category";

const CategoryMenu = ({ isOpen, setIsMenuOpen }: any) => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const categories = useSelector((state: any) => state.categoryList.categories);

  return (
    <div className={`categoryMenu ${isOpen ? "categoryMenu-appear" : ""}`}>
      <div className="categoryMenu-header">
        <img src={Logo} alt="3 Brinde logo" />
        <button
          aria-roledescription="Menu closing button"
          onClick={() => {
            setIsMenuOpen(false);
          }}
        >
          <img src={CloseIcon} alt={"X icon"} />
        </button>
      </div>
      <div className="categoryMenu-list">
        <button
          aria-roledescription="Button to open and close the products menu"
          className="categories-dropdown-button"
          onClick={() => setIsCategoriesOpen(isCategoriesOpen ? false : true)}
        >
          <h2>Produtos</h2>
          <img src={ChevronDown} alt="Chevron down" />
        </button>
        <ul
          className={`categoryMenu-list-categories ${
            isCategoriesOpen ? "categoryMenu-list-categories-show" : ""
          }`}
        >
          {categories?.map((category: any) => (
            <Category category={category} setIsMenuOpen={setIsMenuOpen} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryMenu;