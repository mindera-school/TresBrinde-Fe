import { Card } from "antd";
import { Button } from "antd";
const { Meta } = Card;

const PrintCard = ({ print }: any) => {
  let expanded=false;

  function handleTap(expanded: boolean) {
    console.log(expanded);
    console.log(expanded ? "collapse" : "expand");

    expanded = !expanded;
  }

  return (
    <Card
      hoverable
      bordered={false}
      cover={<img style={{height: "200px"}} alt={print.name} src={print.image.default} />}
      actions={[<Button type="link" 
      onClick={() => handleTap(expanded)}>Ler mais</Button>]}
    >
    
    <Meta style={{ border: "0px" }} title={print.name} description={print.description}  />
      
    </Card>
  );
};

export default PrintCard;
