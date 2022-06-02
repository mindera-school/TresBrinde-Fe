import { Button, Dropdown, Menu } from "antd";
import React from "react";
import Pen from "../../../images/pen.svg";

const SubHeader = () => {
  const menu = (
    <Menu>
      <Menu.Item key="1">Canetas de Metal</Menu.Item>
      <Menu.Item key="2">Canetas de Escritório</Menu.Item>
      <Menu.Item key="3">Conjuntos de Escrita</Menu.Item>
      <Menu.Item key="4">Esferográficas</Menu.Item>
      <Menu.Item key="5">Lápis e Lapiseiras</Menu.Item>
      <Menu.Item key="6">Acessórios de escrita</Menu.Item>
    </Menu>
  );

  return (
    <div className="subheader">
      <ul className="subheader-menu-main">
        <li>
          <Dropdown overlay={menu}>
            <Button>
              <img src={Pen} alt="Pen logo" />
              Escrita
            </Button>
          </Dropdown>
        </li>
        <li>
          <Dropdown overlay={menu}>
            <Button>
              <img src={Pen} alt="Pen logo" />
              Categoria Produtos 1
            </Button>
          </Dropdown>
        </li>
        <li>
          <Dropdown overlay={menu}>
            <Button>
              <img src={Pen} alt="Pen logo" />
              Categoria Produtos 2
            </Button>
          </Dropdown>
        </li>
        <li>
          <Dropdown overlay={menu}>
            <Button>
              <img src={Pen} alt="Pen logo" />
              Categoria Produtos 3
            </Button>
          </Dropdown>
        </li>
        <li>
          <Dropdown overlay={menu}>
            <Button>
              <img src={Pen} alt="Pen logo" />
              Categoria Produtos 4
            </Button>
          </Dropdown>
        </li>
      </ul>
    </div>
  );
};

export default SubHeader;
