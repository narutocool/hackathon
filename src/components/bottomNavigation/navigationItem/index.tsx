'use client'
import React from "react";

import style from "./style.module.css";

const NavigationItem = (props: any) => {
  return (
    <div
      className={
        props.isActive ? style.navigationItem__active : style.navigationItem
      }
      onClick={() => props.onChangeKey(props.keyName)}
    >
      {props.icon}
      <div className={props.isActive ? style.title__active : style.title}>
        {props.title}
      </div>
    </div>
  );
};

export default NavigationItem;
