"use client";
import { useRouter } from "next/navigation";
import style from "./style.module.css";
import TimeLine from "./timeline";
import { useContext } from "react";
import { EventContext } from "@/contexts/eventContext";

const TimeAgenda = () => {
  const router = useRouter();
  const { event } = useContext(EventContext);
  const onClick = () => {
    router.push("/time-agenda");
  };

  return (
    <div className={style.timeAgendaContainer}>
      <h2>Time Agenda</h2>
      <div className={style.eventInfo}>
        <div className={style.eventTitleContainer}>
          <div className={style.title}>Event</div>
          <div className={style.content}>{event?.eventName || ''}</div>
        </div>
        <div className={style.eventTitleContainer}>
          <div className={style.title}>Duration</div>
          <div className={style.content}>{`${event?.eventDuration || 0} hours`}</div>
        </div>
      </div>
      <div className={style.timeLineContainer}>
        <TimeLine eventTimeline={event?.eventTimeline || []} />
      </div>
    </div>
  );
};

export default TimeAgenda;
