import { Card } from "antd";
import { useHistory } from "react-router-dom";
const { Meta } = Card;

const CategoryCard = ({ category }: any) => {
  const history = useHistory();
  return (
    <Card
      bordered={false}
      hoverable
      onClick={() => history.push(`category/${category.id}`)}
      cover={
        <img
          style={{ height: "200px" }}
          alt={category.name}
          src={category.image.default}
        />
      }
    >
      <Meta style={{ border: "0px" }} title={category.name} />
    </Card>
  );
};

export default CategoryCard;
