import { formatDate } from "@/utils";
import {
  CheckCircleOutlined,
  ClockCircleOutlined
} from "@ant-design/icons";
import { ConfigProvider, Timeline } from "antd";
import style from "./style.module.css";

const TimeLine = (props: any) => {
  const timelineCal = () => {
    let currentDate = new Date();
    let current = -1;
    for (var i = 0; i < props.eventTimeline.length; i++) {
      let startTime = new Date(props.eventTimeline[i].startTime);
      if (currentDate >= startTime) {
        current = i;
      }
    }
    let items = [];

    for (var i = 0; i < props.eventTimeline.length; i++) {
      if (i < current) {
        let nodeColor = "green";
        let item = {
          dot: (
            <CheckCircleOutlined
              style={{ fontSize: "24px", marginBottom: "8px" }}
            />
          ),
          color: nodeColor,
          children: (
            <>
              <p className={style.eventNodeTitle} style={{ color: nodeColor }}>
                {props.eventTimeline[i].title}
              </p>
              <p className={style.eventNodeLocation}>
                {props.eventTimeline[i].location}
              </p>
              <p className={style.eventNodeDate}>
                {formatDate(new Date(props.eventTimeline[i].startTime))}
              </p>
            </>
          ),
        };
        items.push(item);
      } else if (i == current) {
        let nodeColor = "#e6a600";
        let item = {
          dot: (
            <ClockCircleOutlined
              style={{ fontSize: "24px", marginBottom: "8px" }}
            />
          ),
          color: nodeColor,
          children: (
            <>
              <p className={style.eventNodeTitle} style={{ color: nodeColor }}>
                {props.eventTimeline[i].title}
              </p>
              <p className={style.eventNodeLocation}>
                {props.eventTimeline[i].location}
              </p>
              <p className={style.eventNodeDate}>
                {formatDate(new Date(props.eventTimeline[i].startTime))}
              </p>
            </>
          ),
        };
        items.push(item);
      } else {
        let nodeColor = "grey";
        let item = {
          color: nodeColor,
          dot: (
            <div
              style={{
                width: "12px",
                height: "12px",
                backgroundColor: nodeColor,
                borderRadius: "50%",
                marginBottom: "12px",
              }}
            />
          ),
          children: (
            <>
              <p className={style.eventNodeTitle} style={{ color: nodeColor }}>
                {props.eventTimeline[i].title}
              </p>
              <p className={style.eventNodeLocation}>
                {props.eventTimeline[i].location}
              </p>
              <p className={style.eventNodeDate}>
                {formatDate(new Date(props.eventTimeline[i].startTime))}
              </p>
            </>
          ),
        };
        items.push(item);
      }
    }
    return items;
  };

  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Timeline: {
              //   itemPaddingBottom: 10,
              fontSize: 16,
              tailWidth: 4,
              //   tailColor: "#778899",
            },
          },
        }}
      >
        <Timeline items={timelineCal()} />
      </ConfigProvider>
    </>
  );
};
export default TimeLine;
