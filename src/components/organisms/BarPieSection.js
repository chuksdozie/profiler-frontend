import React from "react";
import { COLORS } from "../../utils/Colors";
import Graph from "../molecules/Graph";
import PieChart from "../molecules/PieChart";

const BarPieSection = () => {
  return (
    <div style={MainDiv}>
      <Graph />
      <PieChart />
    </div>
  );
};

export default BarPieSection;

const MainDiv = {
  width: "95%",
  height: "300px",
  //   backgroundColor: "orange",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: "5px",
  margin: "15px 0",
};
