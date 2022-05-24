import { Card } from "antd";
const { Meta } = Card;

const PrintCard = ({ print }: any) => {
  return (
    <Card
      hoverable
      bordered={false}
      cover={<img style={{height: "200px"}} alt={print.name} src={print.image.default} />}
    >
      <Meta style={{ border: "0px" }} title={print.name} description={print.description}/>
    </Card>
  );
};

export default PrintCard;
