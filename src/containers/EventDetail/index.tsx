"use client";
import {
  ArrowRightOutlined,
  IdcardOutlined,
  QrcodeOutlined,
} from "@ant-design/icons";
import { Button, Tabs, TabsProps } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import evtBg from "../../../public/banner.svg";

import { EventContext } from "@/contexts/eventContext";
import { formatDate } from "@/utils";
import Modal from "antd/es/modal/Modal";
import IDCard from "./IDCard";
import QRComponent from "./QRComponent";
import style from "./style.module.css";
import "./style.css";

const EventDetail = () => {
  const { event } = useContext(EventContext);
  const router = useRouter();

  const [state, setState] = useState<{
    status?: string;
    time?: string;
    color?: string;
    buttonText?: string;
  }>({
    status: "",
    time: "",
    color: "",
    buttonText: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const onWhatNext = () => {
    router.push("/time-agenda");
  };
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const getDateDifference = (date2: any) => {
    // Convert input strings to Date objects
    const d1 = new Date();
    const d2 = new Date(date2);

    // Calculate the difference in milliseconds
    const differenceInMs = Math.abs(d2.getTime() - d1.getTime()) / 1000;

    // Calculate the difference in days, hours, and minutes
    return convertSecondsToDHMS(differenceInMs);
  };
  function convertSecondsToDHMS(totalSeconds: any) {
    const days = Math.floor(totalSeconds / (24 * 60 * 60));
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = Math.floor(totalSeconds % 60);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Check-in-code",
      children: <QRComponent event={event} />,
      icon: <QrcodeOutlined />,
    },
    {
      key: "2",
      label: "Visitor Card",
      children: <IDCard />,
      icon: <IdcardOutlined />,
    },
  ];
  const genUI = () => {
    let now = new Date();
    let eventStartTime = new Date(event?.eventStartTime || 0);
    let eventFinishTime = new Date(event?.eventFinishTime || 0);
    if (now.getTime() > eventFinishTime.getTime()) {
      setState({
        status: "End Event",
        time: "Ended",
        color: "red",
        buttonText: "Feedback",
      });
    } else if (now.getTime() < eventStartTime.getTime()) {
      let rtnObj = getDateDifference(event.eventStartTime);
      let countdown =
        rtnObj.days + "d " + rtnObj.hours + "h " + rtnObj.minutes + "m ";
      setState({
        status: "Start In",
        time: countdown,
        color: "#FFE600",
        buttonText: "See Timeline",
      });
    } else {
      let current = -1;
      const currentDate = new Date();
      if (event?.eventTimeline) {
        for (var i = 0; i < event.eventTimeline.length; i++) {
          let startTime = new Date(event.eventTimeline[i].startTime || 0);
          if (currentDate >= startTime) {
            current = i;
          }
        }
        console.log(current, event.eventTimeline[i]);
      }

      let rtnObj = getDateDifference(event.eventFinishTime);
      let countdown =
        rtnObj.hours + "h " + rtnObj.minutes + "m " + rtnObj.seconds + "s";
      setState({
        status: "In Progress",
        time:
          current === -1
            ? countdown
            : event.eventTimeline
            ? event.eventTimeline[current].title
            : "--",
        color: "green",
        buttonText: "What's next",
      });
    }
  };

  useEffect(() => {
    genUI();
  }, [event]);
  return (
    <div className={style.layout}>
      <div className={style.eventZone}>
        <h2>{event?.eventName || "--"}</h2>
        <div className={style.eventOverview}>
          <div className={style.eventTime}>
            {formatDate(new Date(event?.eventStartTime || "--"))}
          </div>
          <div className={style.eventTime}>{event?.eventLocation || "--"}</div>
          <Button
            onClick={showModal}
            icon={<QrcodeOutlined />}
            style={{ background: "black", color: "white" }}
          />
        </div>
      </div>
      <div className={style.moreInfo}>
        <div className={style.eventTimeline}>
          <div
            className={style.eventProgress}
            style={{ textAlign: "left", fontWeight: "bold" }}
          >
            {state.status}
          </div>
          <div style={{ color: `${state.color}` }}>{state.time}</div>
        </div>
        <Button
          className={`${style.btn} my-btn`}
          type="primary"
          icon={<ArrowRightOutlined />}
          size="large"
          style={{
            background: "black",
            display: "flex",
            gap: "12px",
            flexDirection: "row-reverse",
            alignItems: "center",
          }}
          onClick={onWhatNext}
        >
          {state.buttonText}
        </Button>
      </div>
      <Image src={evtBg} alt="banner" />

      <div className={style.eventDescription}>
        <h3>Event description</h3>
        <div className={style.eventInfo}>
          <div className={style.eventTitleContainer}>
            <div className={style.eventDescriptionInfo}>Event</div>
            <div className={style.eventDescriptionContent}>
              {event?.eventName || ""}
            </div>
          </div>
          <div className={style.eventTitleContainer}>
            <div className={style.eventDescriptionInfo}>Duration</div>
            <div className={style.eventDescriptionContent}>{`${
              event?.eventDuration || 0
            } hours`}</div>
          </div>
        </div>
        <div className={style.eventDescription}>
          {event.eventDescription || "--"}
        </div>
      </div>
      <Modal
        className="qr-modal"
        footer={null}
        open={isModalOpen}
        onCancel={handleCancel}
      >
        <Tabs defaultActiveKey="1" items={items} />
      </Modal>
    </div>
  );
};

export default EventDetail;
