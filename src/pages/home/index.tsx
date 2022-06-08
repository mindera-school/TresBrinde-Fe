import Title from "../../components/common/Title";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import CategoriesHome from "./components/categories";
import PrintHome from "./components/prints";

const Home = () => {
  useDocumentTitle("Três Brinde | Home");
  return (
    <>
      <div className="category-homepage">
        <Title>Categorias de Produtos</Title>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringila,
        </h3>
        <CategoriesHome />
      </div>
      <div className="print-homepage">
        <Title>Personalização</Title>
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
