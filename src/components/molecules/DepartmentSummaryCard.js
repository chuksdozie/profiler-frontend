import React from "react";
import { COLORS } from "../../utils/Colors";
import Text from "../atoms/Text";

const DepartmentSummaryCard = (props) => {
  const {
    department,
    totalEmployees,
    pic1,
    pic2,
    pic3,
    pic4,
    pic5,
    othersLeft,
  } = props;
  return (
    <div style={MainDiv}>
      <div style={LeftDiv}>
        <Text
          text={department}
          color="#525252"
          size="17px"
          weight="400"
          padding="0 20px"
        />
        <Text
          text={totalEmployees}
          color="#525252"
          size="17px"
          weight="600"
          padding="0 20px"
        />
      </div>
      <div style={RightDiv}>
        <img style={LeftSideDiv} src={pic1} alt="s" />
        <img style={LeftSideOverDiv} src={pic2} alt="s" />
        <img style={LeftSideOverDiv} src={pic3} alt="s" />
        <img style={LeftSideOverDiv} src={pic4} alt="s" />
        <img style={LeftSideOverDiv} src={pic5} alt="s" />
        <Text
          text={othersLeft}
          color="#525252"
          size="17px"
          weight="600"
          padding="0 20px"
        />
      </div>
    </div>
  );
};

export default DepartmentSummaryCard;

const MainDiv = {
  width: "100%",
  height: "60px",
  //   backgroundColor: "purple",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: "7px",
  margin: "10px 0",
};

const LeftDiv = {
  width: "35%",
  height: "100%",
  //   backgroundColor: "orange",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "flex-start",
};

const RightDiv = {
  width: "65%",
  height: "100%",
  //   backgroundColor: "green",
  display: "flex",
  justifyContent: "left",
  alignItems: "center",
};

const LeftSideDiv = {
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  border: "2px white solid",
  backgroundColor: "red",
  margin: "0 0 0 0",
};

const LeftSideOverDiv = {
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  border: "2px white solid",
  backgroundColor: "red",
  margin: "0 0 0 -20px",
};
