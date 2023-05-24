import Logo from "../../../images/MobileHeaderLogo.svg";
import CloseIcon from "../../../images/x.svg";
import ChevronDown from "../../../images/chevron-down.svg";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Category from "./Category";
import { useHistory } from "react-router-dom";
import { SearchBarContainer } from "../SearchBar-Container";
import { getSearchedListProductsService } from "../../../services/productsService";

const CategoryMenu = ({ isOpen, setIsMenuOpen }: any) => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const categories = useSelector((state: any) => state.categoryList.categories);
  const history = useHistory();
  const [searched, setSearched] = useState("");
  const [productsList, setProductsList] = useState([]);
  const [numberOfProducts, setNumberOfProducts] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    if (searched !== "") {
      const debounceTimer = setTimeout(async () => {
        const updatedProductsList = await getSearchedListProductsService(
          searched
        );
        setProductsList(updatedProductsList);
        setIsModalVisible(true)
      }, 500);

      return () => {
        clearTimeout(debounceTimer);
      };
    }
    setNumberOfProducts(0);
    setProductsList([]);
    setIsModalVisible(false)
  }, [searched]);

  useEffect(() => {
    setNumberOfProducts(productsList.length);
  }, [productsList]);


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
        <SearchBarContainer
          setSearched={setSearched}
          searched={searched}
          numberOfFoundProducts={numberOfProducts}
          productsList={[...productsList.slice(0, 4)]}
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />
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

            <Category
              key={category.id}
              category={category}
              setIsMenuOpen={setIsMenuOpen}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryMenu;
