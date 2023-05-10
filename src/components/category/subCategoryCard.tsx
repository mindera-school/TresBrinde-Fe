import { Card } from "antd";
import { useHistory } from "react-router-dom";
import image from "../../images/category.png";
const { Meta } = Card;

const SubCategoryCard = ( props : any) => {
  const history = useHistory();

  const subCategory = props.subCategory;
  return (
    <Card
      bordered={false}
      onClick={() => history.push(`/products?subCategory=${subCategory.id}`)}
      cover={<img alt={subCategory.name} src={image} />}
    >
      <Meta style={{ border: "0px" }} title={subCategory.name} />
    </Card>
  );
};

export default SubCategoryCard;
