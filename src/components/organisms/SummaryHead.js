import React from "react";
import { connect } from "react-redux";
import { COLORS } from "../../utils/Colors";
import Text from "../atoms/Text";
import SummaryCard from "../molecules/SummaryCard";

const SummaryHead = (props) => {
  const { userData, employeeData } = props;
  let myEmployees = [];
  for (let i = 0; i < employeeData.employee.length; i++) {
    if (userData.user.data.id === employeeData.employee[i].company_id) {
      myEmployees.push(employeeData.employee[i]);
    }
  }
  console.log(234, employeeData.employee.length);
  const summary = [
    { name: "Total Employees", value: myEmployees.length },
    { name: "New Employees", value: myEmployees.length },
    { name: "Archived", value: 350 },
    { name: "Departments", value: 350 },
  ];
  return (
    <div style={MainDiv}>
      {summary.map((i, k) => (
        <SummaryCard key={k} category={i.name} value={i.value} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    employeeData: state.employee,
    userData: state.user,
  };
};

export default connect(mapStateToProps)(SummaryHead);

const MainDiv = {
  width: "95%",
  //   backgroundColor: COLORS.SIGN_UP_BACKGROUND,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: 20,
  borderRadius: "7px",
};
