import { useHistory } from "react-router-dom";
import CategoryCard from "../../../../components/category/categoryCard";
import vector from "../../../../images/vector.svg";
import { useRef } from "react";
import { useSelector } from "react-redux";

const ProductCategories = () => {
  const categories: Array<any> = useSelector(
    (state: any) => state.categoryList.categories
  );

  const history = useHistory();

  const rightButton = useRef(null);
  const leftButton = useRef(null);
  const list = useRef(null);

  return !categories ? (
    <p> Não temos produtos na loja</p>
  ) : (
    <>
      <nav className="category-list-nav">
        <button
          ref={leftButton}
          className="disapear"
          onClick={() => scrollRight(list)}
        >
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
        {categories
          .filter((e) => e.image != null && e.image != "")
          .map((item) => (
            <CategoryCard
              key={item.id}
              category={item}
              onAction={() => toProductPage(history, item.id)}
            />
          ))}
      </div>
    </>
  );
};
const toProductPage = (history: any, id: number) => {
  history.push(`products?category=${id}`);
  window.scrollTo(0, 0);
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
    list.current.scrollLeft >=
    list.current.scrollWidth - list.current.clientWidth
  ) {
    right.current.classList.add("disapear");
    return;
  }
  left.current.classList.remove("disapear");
  right.current.classList.remove("disapear");
};
export default ProductCategories;
