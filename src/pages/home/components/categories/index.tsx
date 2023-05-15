import { List } from "antd";

import CategoryCard from "../../../../components/category/categoryCard";

const CategoriesHome = () => {
  const categories = [
    {
      id: 3,
      name: "Roupa",
      image: require("../../../../images/roupa.png"),
    },
    {
      id: 4,
      name: "Bolsas e Mochilas",
      image: require("../../../../images/bolsa.jpeg"),
    },
    {
      id: 5,
      name: "Canecas e Garrafas",
      image: require("../../../../images/caneca.png"),
    },
    {
      id: 6,
      name: "Escritorio e Home Office",
      image: require("../../../../images/caderno.png"),
    },
    {
      id: 7,
      name: "Decoração de casa",
      image: require("../../../../images/casa.png"),
    },
    {
      id: 8,
      name: "Tech",
      image: require("../../../../images/tech.png"),
    },
  ];

  return !categories ? (
    <p> Não temos produtos na loja</p>
  ) : (
    <div>
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
    </div>
  );
};

export default CategoriesHome;
