import React from "react";
import BottomSummaryContainer from "../molecules/BottomSummaryContainer";
import DepartmentSummaryContainer from "../molecules/DepartmentSummaryContainer";

const SummaryBottomGeneralContainer = () => {
  return (
    <div style={MainDiv}>
      <BottomSummaryContainer />
      <DepartmentSummaryContainer />
    </div>
  );
};

export default SummaryBottomGeneralContainer;

const MainDiv = {
  width: "95%",
  // backgroundColor: "purple",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: "7px",
  padding: "20px 0",
};
