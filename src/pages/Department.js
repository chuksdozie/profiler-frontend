import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { COLORS } from "../utils/Colors";
import SearchDashboardHead from "../components/organisms/SearchDashboardHead";
import StickyHeadTable from "../components/molecules/Table";

const Department = (props) => {
  const { userData, departmentData, employeeData } = props;
  let myDepartments = [];
  // let myEmployees = [];
  for (let i = 0; i < departmentData.department.length; i++) {
    if (userData.user.data.id === departmentData.department[i].company_id) {
      myDepartments.push(departmentData.department[i]);
    }
  }

  const tableColumns = [
    {
      id: "image",
      label: "",
      minWidth: 40,
      align: "center",
      format: "image",
    },
    { id: "name", label: "Name", minWidth: 150 },
    {
      id: "email",
      label: "Email Address",
      minWidth: 150,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    { id: "phonenumber", label: "Phone Number", minWidth: 150 },
    {
      id: "num_of_staff",
      label: "Total Staff",
      minWidth: 60,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
  ];

  let tableRows = [
    {
      name: "Procurement Department",
      email: "mathe@jabu.com",
      phonenumber: "0803 560 5683",
      num_of_staff: "16",
    },
    {
      name: "Procurement Department",
      email: "mathe@jabu.com",
      phonenumber: "0803 560 5683",
      num_of_staff: "3",
    },
    {
      name: "Procurement Department",
      email: "mathe@jabu.com",
      phonenumber: "0803 560 5683",
      num_of_staff: "39",
    },
  ];
  for (let i = 0; i < myDepartments.length; i++) {
    let tableData = {
      name: `${myDepartments[i].name} Department`,
      email: myDepartments[i].email,
      phonenumber: myDepartments[i].phonenumber,
      num_of_staff: "N/A",
    };
    tableRows.push(tableData);
  }
  return (
    <div style={MainDiv}>
      <SearchDashboardHead />
      <div style={TableDiv}>
        <Link to="/dashboard/home">
          <StickyHeadTable columns={tableColumns} rows={tableRows} />
        </Link>
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
export default connect(mapStateToProps)(Department);

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

const TableDiv = {
  width: "95%",
  margin: "10px 0",
  //   backgroundColor: "red",
  //   display: "flex",
  //   flexDirection: "column",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   padding: "10px 0",
  //   borderRadius: "0px",
};
