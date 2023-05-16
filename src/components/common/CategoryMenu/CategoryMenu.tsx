import Logo from "../../../images/footerlogo.svg";
import CloseIcon from "../../../images/x.svg";
import ChevronDown from "../../../images/chevron-down.svg";

const CategoryMenu = (props: any) => {
  return (
    <div
      className={`categoryMenu ${props.isOpen ? "categoryMenu-appear" : ""}`}
    >
      <div className="categoryMenu-header">
        <img src={Logo} alt="3 Brinde logo" />
        <button aria-roledescription="Menu closing button">
          <img src={CloseIcon} alt={"X icon"} />
        </button>
      </div>
      <div className="categoryMenu-list">
        <button
          aria-roledescription="Button to open and close the products menu"
          className="categories-dropdown-button"
        >
          <h2>Produtos</h2>
          <img src={ChevronDown} alt="Chevron down" />
        </button>
      </div>
    </div>
  );
};

export default CategoryMenu;
