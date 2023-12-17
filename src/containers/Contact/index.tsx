import React from "react";

import style from "./style.module.css";
import { SkypeOutlined } from "@ant-design/icons";
import Image from "next/image";
import banner from "../../../public/banner.svg";

const ContactContainer = () => {
  return (
    <div className={style.contactContainer}>
      <h2>Contact us</h2>
      <Image src={banner} alt="banner" />
      <div className={style.contactUs}>
        <div className={style.contactUsContent}>
          <div className={style.contactRow}>
            <SkypeOutlined />
            <div>support@skype.com</div>
          </div>
          <div className={style.contactRow}>
            <SkypeOutlined />
            <div>support@skype.com</div>
          </div>
          <div className={style.contactRow}>
            <SkypeOutlined />
            <div>support@skype.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactContainer;
