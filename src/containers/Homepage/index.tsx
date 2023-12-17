"use client";
import { useState } from "react";

import { ArrowRightOutlined, SkypeOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import Image from "next/image";
import banner from "../../../public/banner.svg";
import style from "./style.module.css";
import "./style.css";
import { DUMMY_DATA } from "../../../dummyData";
import { useRouter } from "next/navigation";

const Homepage = () => {
  const router = useRouter();
  const [state, setState] = useState({
    eventcode: "",
    email: "",
    error: "",
  });

  const onChange = (e: any) => {
    setState({ ...state, [e.target.name]: e.target.value, error: "" });
  };

  const onClickFindBtn = () => {
    if (!state.eventcode) {
      setState({ ...state, error: "Please input event code" });
      return;
    }
    if (!state.email) {
      setState({ ...state, error: "Please input email" });
      return;
    }

    const targetData = DUMMY_DATA.find(item => item.eventCode === state.eventcode);

    if (!targetData) {
      setState({ ...state, error: "Event not found" });
      return;
    }

    sessionStorage.setItem(
      "allData",
      JSON.stringify({
        eventcode: state.eventcode,
        guestemail: state.email,
        findData: targetData,
      })
    );
    router.push("/event-detail");
  };
  return (
    <div className={style.homepageContainer}>
      <h2>Welcome to CLV</h2>
      <Image src={banner} alt="banner" />
      <div className={style.findInfoForm}>
        <h4>Input information to find your event:</h4>
        <Input
          className={`${style.formInput}`}
          name="eventcode"
          value={state.eventcode}
          onChange={onChange}
          placeholder="Input event code"
        />
        <Input
          className={`${style.formInput} ${style.formInput__email}`}
          name="email"
          value={state.email}
          onChange={onChange}
          placeholder="Input your email"
        />
        {state.error && <div className={style.errorText}>{state.error}</div>}
        <Button
          className={`${style.btn} my-btn`}
          type="primary"
          icon={<ArrowRightOutlined />}
          style={{ background: "black" }}
          onClick={onClickFindBtn}
        >
          Let&apos;s go
        </Button>
      </div>
      <div className={style.contactUs}>
        <h4>Or contact us at</h4>
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

export default Homepage;
