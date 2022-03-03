import React from "react";
import { COLORS } from "../../utils/Colors";

const PieChart = () => {
  return <div style={MainDiv}>PieChart coming soon...</div>;
};

export default PieChart;

const MainDiv = {
  width: "30%",
  height: "100%",
  backgroundColor: COLORS.SIGN_UP_BACKGROUND,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "7px",
};
