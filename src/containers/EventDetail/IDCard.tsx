"use client";

import { Flex, Space } from "antd";
import Image from "next/image";
import guest from "../../../public/guest.svg";

const IDCard = () => {
  return (
    <div style={{ backgroundColor: "#D9D9D9", borderRadius: 20, padding: 20, height:'460px' }}>
      <Flex justify="center">
        <Space direction="vertical" align="center">
          <Image width={400} height={450} src={guest} alt="" />
        </Space>
      </Flex>
    </div>
  );
};

export default IDCard;
