import React from "react";
import { connect } from "react-redux";
import { COLORS } from "../../utils/Colors";
import Text from "../atoms/Text";
import BottomSummaryCard from "./BottomSummaryCard";
import DepartmentSummaryCard from "./DepartmentSummaryCard";
import { BsCalendarDate, BsClockHistory } from "react-icons/bs";
import { BiBus } from "react-icons/bi";
import { MdNotInterested } from "react-icons/md";

const DepartmentSummaryContainer = (props) => {
  const { userData, departmentData, employeeData } = props;
  let myDepartments = [];
  // let myEmployees = [];
  for (let i = 0; i < departmentData.department.length; i++) {
    if (userData.user.data.id === departmentData.department[i].company_id) {
      myDepartments.push(departmentData.department[i]);
    }
  }
  return (
    <div style={ParentDiv}>
      <Text
        text="Departments"
        color="#525252"
        size="17px"
        weight="600"
        padding="1px"
      />
      <div style={MainDiv}>
        {myDepartments.map((i, k) => (
          <DepartmentSummaryCard
            department={i.name}
            totalEmployees="5"
            othersLeft="5"
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    departmentData: state.department,
    userData: state.user,
    employeeData: state.employee,
  };
};

export default connect(mapStateToProps)(DepartmentSummaryContainer);

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
  flexDirection: "column",
  justifyContent: "left",
  alignItems: "flex-start",
  borderRadius: "7px",
  margin: "15px 0",
  overflowY: "scroll",
};
