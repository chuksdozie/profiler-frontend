import React from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import SideBar from "../components/organisms/SideBar";
import { COLORS } from "../utils/Colors";
import Highlights from "./Highlights";
import Employment from "./Employee";
import Department from "./Department";
import Profile from "./Profile";
import AddEmployee from "./AddEmployee";

const Dashboard = (props) => {
  const { content, userData } = props;
  let user = userData.user.data;
  return (
    <div style={MainDiv}>
      <div style={Side}>
        <SideBar />
      </div>
      {/* THIS IS WHERE YOU DO THE ROUTER DOM */}
      <div style={Main}>
        <Routes>
          <Route path="home" element={<Highlights />} />
          <Route path="employments" element={<Employment />} />
          <Route path="departments" element={<Department />} />
          <Route path="profile" element={<Profile />} />
          <Route path="add-employee" element={<AddEmployee />} />
        </Routes>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

export default connect(mapStateToProps)(Dashboard);

const MainDiv = {
  width: "100%",
  height: "100vh",
  backgroundColor: COLORS.SIGN_UP_BACKGROUND,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  top: 0,
  overflowY: "hidden",
};

const Side = {
  width: "18%",
  height: "100%",
  //   backgroundColor: "red",
  display: "flex",
  flexDirection: "column",
  justifyContent: "left",
  alignItems: "center",
  position: "relative",
  top: 0,
  overflowY: "hidden",
};

const Main = {
  width: "82%",
  height: "100%",
  backgroundColor: COLORS.GENERAL_BACKGROUND,
  display: "flex",
  flexDirection: "column",
  justifyContent: "left",
  alignItems: "center",
  position: "relative",
  top: 0,
  overflowY: "scroll",
};
