import { Card } from "antd";
import { Button } from "antd";
import { useState } from "react";
const { Meta } = Card;

const PrintCard = ({ print }: any) => {
  const [expanded, setExpanded] = useState(false);

  function handleClick() {
    setExpanded(!expanded);
  }

   
  //TODO implement expansion behavior when button is clicked
  return (
    <Card
      hoverable
      bordered={false}
      cover={
            <div className="top">
            <div className="top-cornered"></div>
            <img alt={print.name} src={print.image.default}/></div>
            }
      actions={[<Button className="print-card-button" type="link" onClick={() => handleClick()}>Ler mais</Button>]}
    >

    <Meta style={{ border: "0px" }} title={print.name} description={print.description} />
    </Card>
  );
};

export default PrintCard;

