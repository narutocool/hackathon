// @ts-nocheck
import { EventContext } from "@/contexts/eventContext";
import React, { useContext } from "react";

import style from "./style.module.css";
import { formatDate } from "@/utils";
import { Button } from "antd";
import { useRouter } from "next/navigation";

const FeedbackContainer = () => {
  const router = useRouter()
  const { event } = useContext(EventContext);

  const onClickLogo = () => {
    sessionStorage.clear();
    router.push("/");
  };
  //   console.log(event);
  return (
    <div className={style.feedbackContainer}>
      <div className={style.eventZone}>
        <h2>{event?.eventName}</h2>
        <div className={style.eventInfo}>
          <div className={style.eventTime}>
            {formatDate(new Date(event?.eventStartTime))}
          </div>
          <div className={style.eventTime}>{event?.eventLocation}</div>
        </div>
        <h2>The event has been finished</h2>
        <p>You can review the event milestone below:</p>
        {event?.eventRecap?.length &&
          event.eventRecap.map((item, index) => {
            return (
              <div className={style.recapRow} key={index}>
                <div className={style.rowBullet} />
                <div>{item}</div>
              </div>
            );
          })}
      </div>
      <div className={style.feedbackZone}>
        <h2>You can send a feedback by hitting the button below</h2>
        <Button type="primary" style={{ background: "black" }} size="large">
          Send Feedback
        </Button>
      </div>
      <div className={style.feedbackZone}>
        <h2>Or back to home</h2>
        <Button type="primary" style={{ background: "black" }} size="large" onClick={onClickLogo}>
          Back to home
        </Button>
      </div>
    </div>
  );
};

export default FeedbackContainer;
