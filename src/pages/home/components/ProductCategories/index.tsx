import CategoryCard from "../../../../components/category/categoryCard";
import roupa from "../../../../images/roupa.png";
import bolsa from "../../../../images/bolsa.jpeg";
import canecas from "../../../../images/caneca.png";
import caderno from "../../../../images/caderno.png";
import casa from "../../../../images/casa.png";
import tech from "../../../../images/tech.png";
import vector from "../../../../images/vector.svg";
import { useRef } from "react";
import { check } from "prettier";

const ProductCategories = () => {
  const categories = [
    {
      id: 3,
      name: "Roupa",
      image: roupa,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid dolorem commodi natus cum, recusandae iure illo eius maiores laboriosam ipsum totam est blanditiis veritatis in, mollitia sit harum quis. Excepturi.",
    },
    {
      id: 4,
      name: "Bolsas e Mochilas",
      image: bolsa,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid dolorem commodi natus cum,.",
    },
    {
      id: 5,
      name: "Canecas e Garrafas",
      image: canecas,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid dolorem commodi natus cum, recusandae iure illo eius maiores laboriosam ipsum totam est blanditiis veritatis in, mollitia sit harum quis. Excepturi.",
    },
    {
      id: 6,
      name: "Escritorio e Home Office",
      image: caderno,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid dolorem commodi natus cum, recusandae iure illo eius maiores laboriosam ipsum totam est blanditiis veritatis in, mollitia sit harum quis. Excepturi.",
    },
    {
      id: 7,
      name: "Decoração de casa",
      image: casa,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid dolorem commodi natus cum, recusandae iure illo eius maiores laboriosam ipsum totam est blanditiis veritatis in, mollitia sit harum quis. Excepturi.",
    },
    {
      id: 8,
      name: "Tech",
      image: tech,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid dolorem commodi natus cum, recusandae iure illo eius maiores laboriosam ipsum totam est blanditiis veritatis in, mollitia sit harum quis. Excepturi.",
    },
  ];

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
    list.current.scrollLeft += 50;
  }
};
const scrollRight = (list: any) => {
  if (list != null) {
    list.current.scrollLeft -= 50;
  }
};
const checkSides = (left: any, right: any, list: any) => {
  if (list.current.scrollLeft === 0) {
    left.current.classList.add("display-none");
    return;
  }
  if (
    list.current.scrollLeft ===
    list.current.scrollWidth - list.current.clientWidth
  ) {
    right.current.classList.add("display-none");
    return;
  }
  left.current.classList.remove("display-none");
  right.current.classList.remove("display-none");
};
export default ProductCategories;
