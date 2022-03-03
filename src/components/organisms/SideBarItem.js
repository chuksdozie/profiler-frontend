import React, { useState } from "react";
import Text from "../atoms/Text";
import Grid from "@mui/material/Grid";
import { COLORS } from "../../utils/Colors";
import Icon from "../atoms/Icon";

const SideBar = (props) => {
  const { item, icon, onClick } = props;
  const [bg, setBg] = useState("white");
  const [ig, setIg] = useState("#525252");
  const bgColor = bg;
  const iconColor = ig;

  const onHover = () => {
    setBg(COLORS.PRIMARY_BUTTON_BG_COLOR);
    setIg("white");
  };
  const onLeave = () => {
    setBg("white");
    setIg("#525252");
  };
  const Span = {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: 50,
    backgroundColor: bgColor,
  };

  return (
    <div style={MainDiv}>
      <span
        style={Span}
        onMouseOver={() => onHover()}
        onMouseLeave={() => onLeave()}
        onClick={onClick}
      >
        <Text
          text={icon || "insert icon"}
          color={iconColor}
          size="18px"
          weight="normal"
          padding="10px 0 10px 20px"
        />
        <Text
          text={item || "insert item"}
          color={iconColor}
          size="18px"
          weight="normal"
          padding="10px"
        />
      </span>
    </div>
  );
};

export default SideBar;

const MainDiv = {
  width: "100%",
  backgroundColor: COLORS.SIGN_UP_BACKGROUND,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "5px",
};
