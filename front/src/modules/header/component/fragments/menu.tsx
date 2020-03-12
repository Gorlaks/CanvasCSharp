import React from "react";
import { container } from "tsyringe";
import { Menu as AntMenu } from "antd";
import { IHeaderService } from "../../interfaces";

enum Keys {
  EXIT = "Exit"
}

const { SubMenu } = AntMenu;

const Menu = (props: {
  login: string
}) => {
  return (
    <AntMenu mode="horizontal" onClick={handleActions}>
      <SubMenu
        style={{ border: "none" }}
        title={
          <p className="submenu-title-wrapper">
            {props.login}
          </p>
        }
      >
        <AntMenu.Item key={Keys.EXIT}>Exit</AntMenu.Item>
      </SubMenu>
    </AntMenu>
  )
}

const handleActions = (props: {
  key: string,
}) => {
  const headerService: IHeaderService = container.resolve("headerService");
  const { key } = props;
  if(key === Keys.EXIT) headerService.exit();
}

export default Menu;