import Logo from "../../../images/MobileHeaderLogo.svg";
import CloseIcon from "../../../images/x.svg";
import ChevronDown from "../../../images/chevron-down.svg";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CategoryMenu = (props: any) => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const categories = useSelector((state) => state);

  console.log(categories);

  return (
    <div
      className={`categoryMenu ${props.isOpen ? "categoryMenu-appear" : ""}`}
    >
      <div className="categoryMenu-header">
        <img src={Logo} alt="3 Brinde logo" />
        <button
          aria-roledescription="Menu closing button"
          onClick={() => {
            props.setIsMenuOpen(false);
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
          {/*  {categories.map((category) => (
            <li key={category.id}>
              <span>{category.name}</span>
              <img src={ChevronDown} alt="Chevron to open subcategories"></img>
            </li>
          ))} */}
        </ul>
      </div>
    </div>
  );
};

export default CategoryMenu;
