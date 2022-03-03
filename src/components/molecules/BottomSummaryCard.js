import React from "react";
import { COLORS } from "../../utils/Colors";
import Text from "../atoms/Text";

const BottomSummaryCard = (props) => {
  const { category, value, icon } = props;
  return (
    <div style={MainDiv}>
      <Text
        text={icon || "insert icon"}
        color="#525252"
        size="30px"
        weight="normal"
        padding="0px 0 0px 10px"
      />
      <div style={SubDiv}>
        <Text
          text={category || "Attendance"}
          color="#525252"
          size="15px"
          weight="normal"
          padding="2px"
        />
        <Text
          text={value || 20}
          color={COLORS.PRIMARY_BUTTON_BG_COLOR}
          size="20px"
          weight="600"
          padding="2px"
        />
      </div>
    </div>
  );
};

export default BottomSummaryCard;

const MainDiv = {
  width: "170px",
  backgroundColor: COLORS.SIGN_UP_BACKGROUND,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: 10,
  borderRadius: "7px",
};

const SubDiv = {
  width: "150px",
  backgroundColor: COLORS.SIGN_UP_BACKGROUND,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  padding: 20,
  borderRadius: "7px",
};
