"use client";
import React, { useEffect, useState } from "react";

import style from "./style.module.css";
import NavigationItem from "./navigationItem";
import {
  CalendarOutlined,
  ContactsOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { usePathname, useRouter } from "next/navigation";
const BottomNavigation = (props: any) => {
  const pathname = usePathname();
  const router = useRouter();
  const [currentKey, setCurrentKey] = useState("");
  const onChangeKey = (key: string) => {
    if (currentKey === key) {
      return;
    }
    setCurrentKey(key);
    router.push(`/${key}`);
  };

  useEffect(() => {
    if (pathname.toString().replace("/", "") === currentKey) {
      return;
    }
    setCurrentKey(pathname.toString().replace("/", ""));
  }, [pathname, currentKey]);
  return (
    <div className={style.bottomNavigation}>
      <NavigationItem
        isActive={currentKey === "event-detail"}
        keyName="event-detail"
        onChangeKey={onChangeKey}
        icon={<HomeOutlined />}
        title="Home page"
      />
      <NavigationItem
        isActive={currentKey === "time-agenda"}
        keyName="time-agenda"
        onChangeKey={onChangeKey}
        icon={<CalendarOutlined />}
        title="Time agenda"
      />
      <NavigationItem
        isActive={currentKey === "contact"}
        keyName="contact"
        onChangeKey={onChangeKey}
        icon={<ContactsOutlined />}
        title="Contact"
      />
    </div>
  );
};
export default BottomNavigation;
