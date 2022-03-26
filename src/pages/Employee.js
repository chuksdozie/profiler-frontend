import React from "react";
import { connect } from "react-redux";
import { COLORS } from "../utils/Colors";
import { Link } from "react-router-dom";
import SearchDashboardHead from "../components/organisms/SearchDashboardHead";
import StickyHeadTable from "../components/molecules/Table";

const Employment = (props) => {
  const { userData, employeeData } = props;
  let myEmployees = [];
  for (let i = 0; i < employeeData.employee.length; i++) {
    if (userData.user.data.id === employeeData.employee[i].company_id) {
      myEmployees.push(employeeData.employee[i]);
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
    { id: "fullname", label: "Full Name", minWidth: 150 },
    { id: "department", label: "Department", minWidth: 80 },
    {
      id: "email",
      label: "Email Address",
      minWidth: 80,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "gender",
      label: "Gender",
      minWidth: 60,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "role",
      label: "Job Role",
      minWidth: 100,
      align: "right",
      format: (value) => value.toFixed(2),
    },
    {
      id: "status",
      label: "Status",
      minWidth: 70,
      align: "right",
      format: (value) => value.toFixed(2),
    },
  ];

  // function createData(name, code, population, size) {
  //   const density = population / size;
  //   return { name, code, population, size, density };
  // }

  let tableRows = [
    {
      fullname: "Alvan Matthew Ikoku",
      department: "fishing",
      email: "mathe@jabu.com",
      gender: "male",
      role: "fisher man",
      status: "available",
    },
    {
      fullname: "Alvan Matthew Ikoku",
      department: "fishing",
      email: "mathe@jabu.com",
      gender: "male",
      role: "fisher man",
      status: "available",
    },
    {
      fullname: "Alvan Matthew Ikoku",
      department: "fishing",
      email: "mathe@jabu.com",
      gender: "male",
      role: "fisher man",
      status: "available",
    },
  ];
  for (let i = 0; i < myEmployees.length; i++) {
    let tableData = {
      fullname: `${myEmployees[i].first_name} ${myEmployees[i].last_name} ${myEmployees[i].middle_name}`,
      department: myEmployees[i].department_id,
      email: myEmployees[i].email,
      gender: myEmployees[i].gender,
      role: myEmployees[i].job_title,
      status: myEmployees[i].status,
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
    employeeData: state.employee,
    userData: state.user,
  };
};

export default connect(mapStateToProps)(Employment);

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
