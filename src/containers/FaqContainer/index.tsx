"use client";
import { App, Avatar, Button, Modal, Space } from "antd";
import type { SizeType } from "antd/es/config-provider/SizeContext";
import Image from "next/image";
import { useState } from "react";
import zone from "../../../public/gif/gate_to_workshop.gif";
import pantry from "../../../public/gif/pantry.gif";
import smoking from "../../../public/gif/smoking.gif";
import wc from "../../../public/gif/wc.gif";
import style from "./style.module.css";
export default function FaqContainer() {
  const [loading, setLoading] = useState(false);
  const [size, setSize] = useState<SizeType>("large");
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };
  const [openZone, setOpenZone] = useState(false);
  const [openPantry, setOpenPantry] = useState(false);
  const [openSmoking, setOpenSmoking] = useState(false);
  const [openToilet, setOpenToilet] = useState(false);
  // Zone
  const showZone = () => {
    setOpenZone(true);
  };
  const handleCancelZone = () => {
    setOpenZone(false);
  };
  // Pantry
  const showPantry = () => {
    setOpenPantry(true);
  };
  const handleCancelPantry = () => {
    setOpenPantry(false);
  };
  // Smoking
  const showSmoking = () => {
    setOpenSmoking(true);
  };
  const handleCancelSmoking = () => {
    setOpenSmoking(false);
  };
  // Toilet
  const showToilet = () => {
    setOpenToilet(true);
  };
  const handleCancelToilet = () => {
    setOpenToilet(false);
  };

  return (
    <div className={style.faqContainer}>
      <h2>Frequently asked questions:</h2>
      <div className={style.faqQuestions}>
        <Button
          size={size}
          style={{
            backgroundColor: "black",
            color: "white",
            fontSize: "14px",
          }}
          onClick={showZone}
        >
          Where is the workshop zone?
        </Button>
        <Modal
          title="Where is the workshop zone?"
          open={openZone}
          onCancel={handleCancelZone}
          width={400}
          footer={[
            <Button key="1" onClick={handleCancelZone}>
              Cancel
            </Button>,
          ]}
        >
          <div
            style={{
              border: "15px solid",
              borderRadius: "10px",
              borderColor: "#d9d9d9",
            }}
          >
            <Image
              style={{
                marginLeft: "-4px",
                borderRadius: "10px",
                marginBottom: "-10px",
                marginTop: "-5px",
              }}
              src={zone}
              alt="Zone"
              height={340}
              width={330}
            />
          </div>
        </Modal>
        <Button
          size={size}
          style={{
            backgroundColor: "black",
            color: "white",
            fontSize: "14px",
          }}
          onClick={showPantry}
        >
          Where is the pantry?
        </Button>
        <Modal
          title="Where is the pantry?"
          open={openPantry}
          onCancel={handleCancelPantry}
          width={400}
          footer={[
            <Button key="1" onClick={handleCancelPantry}>
              Cancel
            </Button>,
          ]}
        >
          <div
            style={{
              border: "15px solid",
              borderRadius: "10px",
              borderColor: "#d9d9d9",
            }}
          >
            <Image
              style={{
                marginLeft: "-4px",
                borderRadius: "10px",
                marginBottom: "-10px",
                marginTop: "-5px",
              }}
              src={pantry}
              alt="Zone"
              height={340}
              width={330}
            />
          </div>
        </Modal>
        <Button
          size={size}
          style={{
            backgroundColor: "black",
            color: "white",
            fontSize: "14px",
          }}
          onClick={showSmoking}
        >
          Where smoking is possible?
        </Button>
        <Modal
          title="Where smoking is possible?"
          open={openSmoking}
          onCancel={handleCancelSmoking}
          width={400}
          footer={[
            <Button key="1" onClick={handleCancelSmoking}>
              Cancel
            </Button>,
          ]}
        >
          <div
            style={{
              border: "15px solid",
              borderRadius: "10px",
              borderColor: "#d9d9d9",
            }}
          >
            <Image
              style={{
                marginLeft: "-4px",
                borderRadius: "10px",
                marginBottom: "-10px",
                marginTop: "-5px",
              }}
              src={smoking}
              alt="Zone"
              height={340}
              width={330}
            />
          </div>
        </Modal>
        <Button
          size={size}
          style={{
            backgroundColor: "black",
            color: "white",
            fontSize: "14px",
          }}
          onClick={showToilet}
        >
          Where is the toilet?
        </Button>
        <Modal
          title="Where is the toilet?"
          open={openToilet}
          onCancel={handleCancelToilet}
          width={400}
          footer={[
            <Button key="1" onClick={handleCancelToilet}>
              Cancel
            </Button>,
          ]}
        >
          <div
            style={{
              border: "15px solid",
              borderRadius: "10px",
              borderColor: "#d9d9d9",
            }}
          >
            <Image
              style={{
                marginLeft: "-4px",
                borderRadius: "10px",
                marginBottom: "-10px",
                marginTop: "-5px",
              }}
              src={wc}
              alt="Zone"
              height={340}
              width={330}
            />
          </div>
        </Modal>
      </div>
      <div className={style.commonRules}>
        <h2>Common Rules:</h2>
        <Space direction="vertical" size={16} style={{ display: "flex" }}>
          <Space wrap size={16}>
            <Avatar size={64} src="clv.jpg" />
            <p
              style={{
                border: "2px solid",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              Wear your visitor card
            </p>
          </Space>
          <Space wrap size={16}>
            <p
              style={{
                border: "2px solid",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              Register your facial ID
            </p>
            <Avatar size={64} src="avatar.jpg" />
          </Space>
          <Space wrap size={16}>
            <Avatar size={64} src="smoking.jpg" />
            <p
              style={{
                border: "2px solid",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              No smoking indoors
            </p>
          </Space>
          <Space wrap size={16}>
            <p
              style={{
                border: "2px solid",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              No plastic containers
            </p>
            <Avatar size={64} src="box.jpg" />
          </Space>
          <Space wrap size={16}>
            <Avatar size={64} src="rac1.jpg" />
            <p
              style={{
                border: "2px solid",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              No food dump in Scetpa&apos;s toilet bins
            </p>
          </Space>
        </Space>
      </div>
    </div>
  );
}
