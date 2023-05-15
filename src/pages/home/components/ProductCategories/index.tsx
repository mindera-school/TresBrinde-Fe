import { List } from "antd";
import CategoryCard from "../../../../components/category/categoryCard";
import roupa from "../../../../images/roupa.png";
import bolsa from "../../../../images/bolsa.jpeg";
import canecas from "../../../../images/caneca.png";
import caderno from "../../../../images/caderno.png";
import casa from "../../../../images/casa.png";
import tech from "../../../../images/tech.png";

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
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid dolorem commodi natus cum, recusandae iure illo eius maiores laboriosam ipsum totam est blanditiis veritatis in, mollitia sit harum quis. Excepturi.",
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

  return !categories ? (
    <p> Não temos produtos na loja</p>
  ) : (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 1,
        md: 2,
        lg: 2,
        xl: 3,
        xxl: 3,
      }}
      dataSource={categories}
      renderItem={(item) => (
        <List.Item key={item.id}>
          <CategoryCard category={item} />
        </List.Item>
      )}
    />
  );
};

export default ProductCategories;
