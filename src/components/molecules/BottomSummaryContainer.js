import React from "react";
import { Fragment } from "react";
import { COLORS } from "../../utils/Colors";
import Text from "../atoms/Text";
import BottomSummaryCard from "./BottomSummaryCard";
import { BsCalendarDate, BsClockHistory } from "react-icons/bs";
import { BiBus } from "react-icons/bi";
import { MdNotInterested } from "react-icons/md";

const BottomSummaryContainer = () => {
  return (
    <div style={ParentDiv}>
      <Text
        text="Employees Availabilty"
        color="#525252"
        size="17px"
        weight="600"
        padding="1px"
      />
      <div style={MainDiv}>
        <BottomSummaryCard
          category="Attendance"
          icon={<BsCalendarDate />}
          value={25}
        />
        <BottomSummaryCard category="Leave Apply" icon={<BiBus />} value={25} />
        <BottomSummaryCard
          category="Late Coming"
          icon={<BsClockHistory />}
          value={25}
        />
        <BottomSummaryCard
          category="Absent"
          icon={<MdNotInterested />}
          value={25}
        />
      </div>
    </div>
  );
};

export default BottomSummaryContainer;

const ParentDiv = {
  width: "40%",
  // backgroundColor: "green",
  display: "flex",
  flexDirection: "column",
  // justifyContent: "space-between",
  alignItems: "flex-start",
};

const MainDiv = {
  width: "100%",
  height: "300px",
  // backgroundColor: "orange",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: "7px",
};
