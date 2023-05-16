import Logo from "../../../images/footerlogo.svg";
import BurguerMenu from "../../../images/menu.svg";

const HeaderMobile = () => {
  return (
    <div>
      <nav className="navigation-mobile">
        <div>
          <img alt="3Brinde logo" src={Logo} />
        </div>
        <div className="navigation-buttons">
          <button>
            <img src={BurguerMenu} />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default HeaderMobile;
