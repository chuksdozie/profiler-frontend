import React from "react";
import { COLORS } from "../../utils/Colors";
import Text from "../atoms/Text";
import SummaryCard from "../molecules/SummaryCard";

const summary = [
  { name: "Total Employees", value: 350 },
  { name: "Total Employees", value: 350 },
  { name: "Total Employees", value: 350 },
  { name: "Total Employees", value: 350 },
];

const SummaryHead = () => {
  return (
    <div style={MainDiv}>
      {summary.map((i, k) => (
        <SummaryCard key={k} category={i.name} value={i.value} />
      ))}
    </div>
  );
};

export default SummaryHead;

const MainDiv = {
  width: "95%",
  //   backgroundColor: COLORS.SIGN_UP_BACKGROUND,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: 20,
  borderRadius: "7px",
};
