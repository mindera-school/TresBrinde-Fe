import Title from "../../components/common/Title";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import ProductCategories from "./components/ProductCategories";
import PrintHome from "./components/prints";

const Home = () => {
  useDocumentTitle("Três Brinde | Home");
  return (
    <>
      <section className="category-homepage">
        <h2>Categorias de Produto</h2>
        <p>
          Confira todas as categorias de produtos que temos para lhe oferecer!
        </p>
        <ProductCategories />
      </section>
      <div className="print-homepage">
        <h2>Personalização</h2>
        <h3>
          Personalize os seus artigos com impressões de qualidade, a preços
          competitivos e sem custos fixos.
        </h3>
        <PrintHome></PrintHome>
      </div>
    </>
  );
};

export default Home;
