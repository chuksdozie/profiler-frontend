import React from "react";
import { Fragment } from "react";
import { COLORS } from "../../utils/Colors";
import Text from "../atoms/Text";
import BottomSummaryCard from "./BottomSummaryCard";
import DepartmentSummaryCard from "./DepartmentSummaryCard";
import { BsCalendarDate, BsClockHistory } from "react-icons/bs";
import { BiBus } from "react-icons/bi";
import { MdNotInterested } from "react-icons/md";

const DepartmentSummaryContainer = () => {
  return (
    <div style={ParentDiv}>
      <Text
        text="Department"
        color="#525252"
        size="17px"
        weight="600"
        padding="1px"
      />
      <div style={MainDiv}>
        <DepartmentSummaryCard />
        <DepartmentSummaryCard />
        <DepartmentSummaryCard />
        <DepartmentSummaryCard />
        <DepartmentSummaryCard />
        <DepartmentSummaryCard />
      </div>
    </div>
  );
};

export default DepartmentSummaryContainer;

const ParentDiv = {
  width: "55%",
  // backgroundColor: "green",
  display: "flex",
  flexDirection: "column",
  // justifyContent: "space-between",
  alignItems: "flex-start",
};

const MainDiv = {
  width: "100%",
  height: "270px",
  backgroundColor: "white",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  alignItems: "flex-start",
  borderRadius: "7px",
  margin: "15px 0",
  overflowY: "scroll",
};
