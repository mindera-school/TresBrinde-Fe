import { useEffect, useState } from "react";
import Logo from "../../../images/MobileHeaderLogo.svg";
import BurguerMenu from "../../../images/menu.svg";
import CategoryMenu from "../CategoryMenu/CategoryMenu";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeAllFromCart } from "../../../redux/actions/CartActions";

const HeaderMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [checkIfCart, setCheckIfCart] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.location.href.indexOf("cart") > -1) {
      setCheckIfCart(true);
    } else {
      setCheckIfCart(false);
    }
  }, []);

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
        <div className={`buttonContainer invisible ${!checkIfCart ? "scrolled" : ""}`}>
          <button
            className="cartProductButton deleteCartButton"
            onClick={() => dispatch(removeAllFromCart())}
          >
            Apagar Carrinho
          </button>
          <button className="button" onClick={() => history.push("/budget")}>
            Pedir Orçamento
          </button>
        </div>
      </div>
      <CategoryMenu isOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </>
  );
};

export default HeaderMobile;
