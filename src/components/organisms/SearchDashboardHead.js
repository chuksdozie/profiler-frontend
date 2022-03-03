import React from "react";
import { Link } from "react-router-dom";
import InputBox from "../../components/atoms/InputBox";
import MainButton from "../atoms/MyButton";
import SecondaryButton from "../atoms/SecondaryButton";

const SearchDashboardHead = () => {
  return (
    <div style={MainDiv}>
      <div style={LeftDiv}>
        <InputBox placeholder="search for an employee" />
      </div>
      <div style={RightDiv}>
        <Link to="/add-employee" style={{ width: "100%" }}>
          <SecondaryButton text="Add New Employee" />
        </Link>
      </div>
    </div>
  );
};

export default SearchDashboardHead;

const MainDiv = {
  width: "95%",
  height: "60px",
  //   backgroundColor: "purple",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: "7px",
  margin: "10px 0",
};

const LeftDiv = {
  width: "50%",
  height: "60px",
  //   backgroundColor: "purple",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: "7px",
  margin: "10px 0",
};

const RightDiv = {
  width: "20%",
  height: "60px",
  //   backgroundColor: "purple",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: "7px",
  margin: "10px 0",
};
