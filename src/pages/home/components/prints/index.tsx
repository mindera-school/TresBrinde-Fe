import {  List } from "antd";

import PrintCard from "../../../../components/prints/PrintCard";


const PrintHome = () => {

 const prints = 
   [
      {
        id: 1,
        name: "Transfer Digital",
        description: "Processo de transfer otimizado para impressão digital de pequenas quantidades, sem limites de cores",
        image: require('../../../../images/print.png'),
      },
      {
        id: 2,
        name: "Bordado",
        description: "Processo de transfer otimizado para impressão digital de pequenas quantidades, sem limites de cores",
        image: require('../../../../images/print.png'),
      },
      {
        id: 3,
        name: "Cunho",
        description: "Processo de transfer otimizado para impressão digital de pequenas quantidades, sem limites de cores",

        image: require('../../../../images/print.png'),
      },
      {
        id: 4,
        name: "Doming",
        description: "Processo de transfer otimizado para impressão digital de pequenas quantidades, sem limites de cores",
        image: require('../../../../images/print.png'),
      },
      {
        id: 5,
        name: "Laser",
        description: "Processo de transfer otimizado para impressão digital de pequenas quantidades, sem limites de cores",

        image: require('../../../../images/print.png'),
      },
      {
        id: 6,
        name: "Serigrafia",
        description: "Processo de transfer otimizado para impressão digital de pequenas quantidades, sem limites de cores",

        image: require('../../../../images/print.png'),
      },
      {
        id: 7,
        name: "Serigrafia Circular",
        description: "Processo de transfer otimizado para impressão digital de pequenas quantidades, sem limites de cores",

        image: require('../../../../images/print.png'),
      },
      {
        id: 8,
        name: "Serigrafia Textil",
        description: "Processo de transfer otimizado para impressão digital de pequenas quantidades, sem limites de cores",

        image: require('../../../../images/print.png'),
      },
   ]
 



  return !prints ? (
    <p> Não temos prints na loja</p>
  ) : (
    <div>
   
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 1,
        md: 2,
        lg: 2,
        xl: 4,
        xxl: 4,
      }}
      dataSource={prints}
      renderItem={(item) => (
        <List.Item key={item.id}>
          <PrintCard print={item} />
        </List.Item>
      )}
    />
    </div>
  );
};

export default PrintHome;
