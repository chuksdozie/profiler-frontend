import React from "react";
import { COLORS } from "../utils/Colors";
import SummaryHead from "../components/organisms/SummaryHead";
import BarPieSection from "../components/organisms/BarPieSection";
import SummaryBottomGeneralContainer from "../components/organisms/SummaryBottomGeneralContainer";

const Highlights = () => {
  return (
    <div style={MainDiv}>
      <SummaryHead />
      <BarPieSection />
      <SummaryBottomGeneralContainer />
    </div>
  );
};

export default Highlights;

const MainDiv = {
  width: "100%",
  //   backgroundColor: "red",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px 0",
  borderRadius: "0px",
};
