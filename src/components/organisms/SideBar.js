import React from "react";
import { connect } from "react-redux";
import { login, logout } from "../../redux/user/userActions";
import { Link } from "react-router-dom";
import Text from "../atoms/Text";
import Grid from "@mui/material/Grid";
import { COLORS } from "../../utils/Colors";
import MainButton from "../atoms/MyButton";
import InputBox from "../atoms/InputBox";
import Logo from "../../resources/profilerLogo.png";
import SideBarItem from "./SideBarItem";
import { RiDashboardFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { BsPersonLinesFill, BsPeopleFill } from "react-icons/bs";
import { BiArchiveIn } from "react-icons/bi";
import { IoDocumentAttachSharp } from "react-icons/io5";
import { MdOutlineHelpOutline } from "react-icons/md";
import { FiSettings } from "react-icons/fi";

const items = [
  { id: "home", name: "Dashboard", iconImg: RiDashboardFill },
  { id: "profile", name: "Profile", iconImg: BsPersonLinesFill },
  { id: "employments", name: "Employees", iconImg: CgProfile },
  { id: "departments", name: "Departments", iconImg: BsPeopleFill },
  { id: "profile", name: "Archive", iconImg: BiArchiveIn },
  { id: "profile", name: "Reports", iconImg: IoDocumentAttachSharp },
  { id: "profile", name: "Help", iconImg: MdOutlineHelpOutline },
  { id: "profile", name: "Setting", iconImg: FiSettings },
  { id: "/", name: "Log out", iconImg: FiSettings },
];

const SideBar = (props) => {
  const { logoutUsers } = props;
  const checkScenario = async (id) => {
    if (id === "/") {
      const data = await logoutUsers();
      console.log(data);
      console.log("logged out successfully");
    }
  };
  return (
    <div style={MainDiv}>
      <span style={Span}>
        <img style={Img} src={Logo} alt="profiler logo" />
        <Text
          text={"Profiler"}
          color="#525252"
          size="20px"
          weight="600"
          padding="60px 10px 10px 0"
        />
      </span>
      {items.map((i, k) => (
        <Link to={i.id} style={{ width: "100%" }}>
          <SideBarItem
            key={k}
            item={i.name}
            icon={<i.iconImg />}
            onClick={() => checkScenario(i.id)}
          />
        </Link>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUsers: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);

const MainDiv = {
  width: "100%",
  height: "75vh",
  backgroundColor: COLORS.SIGN_UP_BACKGROUND,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "5px",
};

const Span = {
  display: "flex",
  alignItems: "center",
  width: "100%",
  padding: "50px 0",
  // backgroundColor: "red",
};

const Img = {
  width: 25,
  height: 25,
  padding: "50px 5px 0 20px",
};
