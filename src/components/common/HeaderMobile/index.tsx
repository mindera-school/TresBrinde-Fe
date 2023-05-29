import { useEffect, useState } from "react";
import Logo from "../../../images/MobileHeaderLogo.svg";
import BurguerMenu from "../../../images/menu.svg";
import CategoryMenu from "../CategoryMenu/CategoryMenu";
import { Link } from "react-router-dom";

const HeaderMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  function logit() {
    setScrollY(window.pageYOffset);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });

  return (
    <>
      <div className="nav-mobile-holder">
        <nav
          className={`navigation-mobile ${
            scrollY === 0 ? "navigation-mobile-top" : ""
          }`}
        >
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
