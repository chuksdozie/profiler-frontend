import React, { useState } from "react";
import MainButton from "../atoms/MyButton";
import Text from "../atoms/Text";
import tickgood from "../../resources/tickgood.gif";
import warning from "../../resources/warning.gif";
import failure from "../../resources/failure.gif";

const NotificationModal = (props) => {
  const { title, details, type, action, onClick } = props;

  return (
    <div style={type ? MainDiv : { display: "none" }}>
      <div style={NotiDiv}>
        <img
          style={ImgDiv}
          src={
            type === "success"
              ? tickgood
              : type === "warning"
              ? warning
              : failure
          }
          alt="tick"
        />
        <Text
          text={title || "Message Title Here"}
          color="#525252"
          size="18px"
          weight="600"
          padding="25px 10px 10px 0"
        />
        <Text
          text={details || "Message Details Here"}
          color="#525252"
          size="15px"
          weight="400"
          padding="10px 10px 20px 0"
        />
        <MainButton text={action || "input text"} onClick={onClick} />
      </div>
    </div>
  );
};

export default NotificationModal;

const MainDiv = {
  width: "80%",
  height: "100vh",
  backgroundColor: "rgba(205, 205, 205, 0.4)",
  zIndex: 2,
  position: "fixed",
  top: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const NotiDiv = {
  width: "260px",
  height: "280px",
  backgroundColor: "#D9FDDA",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "5px",
  padding: "15px",
  boxShadow: "1px 1px 7px 1px rgba(180, 180, 180, 0.7)",
};

const ImgDiv = {
  width: "70px",
  height: "70px",
};
