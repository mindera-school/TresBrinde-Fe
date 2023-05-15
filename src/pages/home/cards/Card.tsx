import { Card, Col } from "antd";

export interface Props {
  image: string;
  theme: string;
}

const HomeCard: React.FC<Props> = (props) => {
  const { Meta } = Card;
  return (
    <Col span={8}>
      <Card
        bordered={false}
        hoverable
        cover={<img alt="example" src={props.image} />}
      >
        <Meta
          title={props.theme}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla."
        />
      </Card>
    </Col>
  );
};

export default HomeCard;