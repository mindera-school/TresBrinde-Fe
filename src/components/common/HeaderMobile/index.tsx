import { useState } from "react";
import Logo from "../../../images/MobileHeaderLogo.svg";
import BurguerMenu from "../../../images/menu.svg";
import CategoryMenu from "../CategoryMenu/CategoryMenu";
import { Link } from "react-router-dom";

const HeaderMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div>
        <nav className="navigation-mobile">
          <Link to={"/"}>
            <img alt="3Brinde logo" src={Logo} />
          </Link>
          <div className="navigation-buttons">
            <button onClick={() => setIsMenuOpen(isMenuOpen ? false : true)}>
              <img src={BurguerMenu} alt="Menu button icon" />
            </button>
          </div>
        </nav>
      </div>
      <CategoryMenu isOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </>
  );
};

export default HeaderMobile;
