"use client";

import { Flex, QRCode, Space } from "antd";

const QRComponent = (props: any) => {
  const jsonData = JSON.stringify({
    eventCode: props.event?.eventCode,
    eventName: props.event?.eventName,
    eventStartTime: props.event?.eventStartTime,
    eventFinishTime: props.event?.eventFinishTime,
    eventDuration: props.event?.eventDuration,
  })
  return (
    <div
      style={{
        backgroundColor: "#D9D9D9",
        borderRadius: 20,
        padding: 20,
        height: "460px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Flex justify="center">
        <Space direction="vertical" align="center">
          <QRCode size={400} value={jsonData || "-"} bgColor="white" />
        </Space>
      </Flex>
    </div>
  );
};

export default QRComponent;
