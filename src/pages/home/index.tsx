import Title from "../../components/common/Title";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import CategoriesHome from "./components/categories";
import PrintHome from "./components/prints";


const Home = () => {
  useDocumentTitle("Três Brinde | Home");
  return (
    <>
      <div className="category-homepage">
        <Title> Categorias de Produtos</Title>
        <CategoriesHome />
      </div>
      <Title>Personalização</Title>
      <PrintHome></PrintHome>
    </>
  );
};

export default Home;
