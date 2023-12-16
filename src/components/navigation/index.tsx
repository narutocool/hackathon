import {
    CalendarOutlined,
    ContactsOutlined,
    HomeOutlined,
    QuestionOutlined
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import React from "react";

type MenuItem = Required<MenuProps>["items"][number];

import './style.css';
import style from "./style.module.css";

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps["items"] = [
  getItem("Home page", "event-detail", <HomeOutlined />),
  getItem("Agenda", "time-agenda", <CalendarOutlined />),
  getItem("FAQs", "faqs", <QuestionOutlined />),
  getItem("Contact", "contact", <ContactsOutlined />),
];

const Navigation: React.FC = (props: any) => {
  const onClick: MenuProps["onClick"] = (e) => {
    props.onChangeRoute(e.key)
  };

  return (
    <Menu
      className={style.menuContainer}
      onClick={onClick}
      style={{ width: 160, border: "none" }}
    //   defaultSelectedKeys={["1"]}
    //   defaultOpenKeys={["sub1"]}
      selectedKeys={[props.currentKey]}
      mode="inline"
      items={items}
    />
  );
};

export default Navigation;
