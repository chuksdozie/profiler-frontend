import React from "react";
import { COLORS } from "../../utils/Colors";
import Text from "../atoms/Text";

const SummaryCard = (props) => {
  const { category, value } = props;
  return (
    <div style={MainDiv}>
      <Text
        text={category}
        color="#525252"
        size="17px"
        weight="normal"
        padding="5px"
      />
      <Text
        text={value}
        color={COLORS.PRIMARY_BUTTON_BG_COLOR}
        size="23px"
        weight="600"
        padding="5px"
      />
    </div>
  );
};

export default SummaryCard;

const MainDiv = {
  width: "150px",
  backgroundColor: COLORS.SIGN_UP_BACKGROUND,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: 20,
  borderRadius: "7px",
};
