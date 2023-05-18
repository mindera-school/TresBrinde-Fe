import CategoryCard from "../../../../components/category/categoryCard";
import roupa from "../../../../images/roupa.png";
import bolsa from "../../../../images/bolsa.jpeg";
import canecas from "../../../../images/caneca.png";
import caderno from "../../../../images/caderno.png";
import casa from "../../../../images/casa.png";
import tech from "../../../../images/tech.png";
import vector from "../../../../images/vector.svg";
import { useRef } from "react";
import { useSelector } from "react-redux";

const ProductCategories = () => {
  const categories: Array<any> = useSelector(
    (state: any) => state.categoryList.categories
  );

  const rightButton = useRef(null);
  const leftButton = useRef(null);
  const list = useRef(null);

  return !categories ? (
    <p> Não temos produtos na loja</p>
  ) : (
    <>
      <nav className="category-list-nav">
        <button ref={leftButton} onClick={() => scrollRight(list)}>
          <img src={vector} />
        </button>
        <button
          ref={rightButton}
          className="right"
          onClick={() => scrollLeft(list)}
        >
          <img src={vector} />
        </button>
      </nav>
      <div
        ref={list}
        onScroll={(e) => checkSides(leftButton, rightButton, list)}
      >
        {categories.map((item) => (
          <CategoryCard key={item.id} category={item} />
        ))}
      </div>
    </>
  );
};
const scrollLeft = (list: any) => {
  if (list != null) {
    list.current.scrollLeft += 100;
  }
};
const scrollRight = (list: any) => {
  if (list != null) {
    list.current.scrollLeft -= 100;
  }
};
const checkSides = (left: any, right: any, list: any) => {
  if (list.current.scrollLeft === 0) {
    left.current.classList.add("disapear");
    return;
  }
  if (
    list.current.scrollLeft ===
    list.current.scrollWidth - list.current.clientWidth
  ) {
    right.current.classList.add("disapear");
    return;
  }
  left.current.classList.remove("disapear");
  right.current.classList.remove("disapear");
};
export default ProductCategories;
