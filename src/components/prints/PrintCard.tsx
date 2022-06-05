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
      cover={ <div className="top">
                <div className="top-cornered"></div>
                <img alt={print.name} src={print.image.default} />
              </div>
            }
      actions={[<Button className="print-card-button" type="link" onClick={() => handleTap(expanded)}>Ler mais</Button>]}
    >
    
    <Meta style={{ border: "0px" }} title={print.name} description={print.description}  />
      
    </Card>
  );
};

export default PrintCard;
