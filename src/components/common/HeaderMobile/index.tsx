import { useState } from "react";
import Logo from "../../../images/footerlogo.svg";
import BurguerMenu from "../../../images/menu.svg";
import CategoryMenu from "../CategoryMenu/CategoryMenu";

const HeaderMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div>
        <nav className="navigation-mobile">
          <div>
            <img alt="3Brinde logo" src={Logo} />
          </div>
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
