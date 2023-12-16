"use client";
import React, { useEffect, useState } from "react";

import Image from "next/image";
import logo from "../../../public/logo.svg";

import style from "./style.module.css";
import { Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Navigation from "../navigation";
import "./style.css";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [currentKey, setCurrentKey] = useState("event-detail");

  const onChangeRoute = (route: string) => {
    if (route === currentKey) {
      return;
    }
    setCurrentKey(route);
    setOpen((prev) => !prev);
    router.push(`/${route}`);
  };
  const onClose = () => {
    setOpen((prev) => !prev);
  };

  const clickMenuIcon = () => {
    setOpen((prev) => !prev);
  };

  const onClickLogo = () => {
    if (pathname.toString().replace("/", "") === "feedback") {
      sessionStorage.clear();
      router.push("/");
      return;
    }
  };

  useEffect(() => {
    if (pathname.toString().replace("/", "") === currentKey) {
      return;
    }
    setCurrentKey(pathname.toString().replace("/", ""));
  }, [pathname]);
  return (
    <div className={style.headerContainer}>
      {/* <Button
        className={style.menuIcon}
        icon={<MenuOutlined />}
        type="text"
        onClick={clickMenuIcon}
      /> */}
      <Image src={logo} height={36} alt="logo" onClick={onClickLogo} />
      {/* <Drawer
        className={style.drawerContainer}
        placement="left"
        width={180}
        onClose={onClose}
        open={open}
        closable={false}
      >
        <Navigation onChangeRoute={onChangeRoute} currentKey={currentKey} />
      </Drawer> */}
    </div>
  );
};

export default Header;
