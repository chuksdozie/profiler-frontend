import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { login } from "../redux/user/userActions";
import { loadAllEmployees } from "../redux/employee/employeeActions";
import { loadAllDepartments } from "../redux/department/departmentActions";
import Text from "../components/atoms/Text";
import { Link, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { COLORS } from "../utils/Colors";
import MainButton from "../components/atoms/MyButton";
import InputBox from "../components/atoms/InputBox";
import VerificationErrorStatus from "../components/molecules/VerificationErrorStatus";

const Login = (props) => {
  const navigate = useNavigate();
  const { getUser, userData, getEmployees, getDepartments } = props;
  const [show, setShow] = useState(false);
  const [authError, setAuthError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const onEmailChange = async (e) => {
    setUser({ ...user, email: e.target.value });
    console.log(user);
  };
  const onPasswordChange = async (e) => {
    setUser({ ...user, password: e.target.value });
    console.log(user);
  };
  const onSubmit = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 3000)); // 3 sec
    console.log("load", loading);
    if (!user.email) {
      setAuthError(true);
      setLoginError("Please enter an email address");
      setLoading(false);
    }
    if (!user.password) {
      setAuthError(true);
      setLoginError("Please enter a password");
      setLoading(false);
    }
    const details = await getUser(user.email, user.password);

    const data = await userData;
    // const employees = await getEmployees();
    // const departments = await getDepartments();
    console.log(232, userData);
    console.log(details);
    setLoading(false);
    console.log("load", loading);

    console.log(user);
  };

  useEffect(() => {
    let data = userData;
    if (data.user.data) {
      const employees = getEmployees();
      const departments = getDepartments();
    }

    if (data.error) {
      setAuthError(true);
      setLoginError(data.error);
      setLoading(false);
    } else {
      setAuthError(false);
      setLoading(false);
    }
  }, [userData, getEmployees, getDepartments]);

  useEffect(() => {
    console.log(authError);
    if (userData.user.data) {
      navigate("dashboard/home");
    }
  }, [authError, userData.user.data]);

  return (
    <div style={MainDiv}>
      <div style={MinorDiv}>
        <div style={authError ? ErrorDiv : { display: "none" }}>
          <VerificationErrorStatus message={loginError} />
        </div>
        <Text
          text="PROFILER"
          color="#525252"
          size="25px"
          weight="700"
          padding="10px"
        />
        <div style={{ width: "80%" }}>
          <InputBox
            type="text"
            placeholder="email address"
            onChange={(e) => onEmailChange(e)}
            value={user.email}
          />
          <InputBox
            type="password"
            placeholder="password"
            onChange={(e) => onPasswordChange(e)}
            value={user.password}
          />
          <Link
            to={userData.user.data ? "dashboard/home" : "/"}
            style={{ width: "100%" }}
          >
            <MainButton
              text={loading ? "please wait" : "Sign in"}
              disabled={loading}
              onClick={() => onSubmit()}
            />
          </Link>
          <a href="2">
            <Text
              text="forgot password?"
              color="#525252"
              size="15px"
              weight="700"
              padding="10px"
            />
          </a>
        </div>
        <span style={Span}>
          <Text
            text="Don't have an account?"
            color="#525252"
            size="15px"
            weight="normal"
            padding="10px"
          />
          <a href="signup">
            <Text
              text="Sign Up"
              color="#525252"
              size="15px"
              weight="700"
              // padding="10px"
            />
          </a>
        </span>
      </div>
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
    getUser: (email, password) => dispatch(login(email, password)),
    getEmployees: () => dispatch(loadAllEmployees()),
    getDepartments: () => dispatch(loadAllDepartments()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

const MainDiv = {
  width: "100%",
  height: "100vh",
  backgroundColor: COLORS.GENERAL_BACKGROUND,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const MinorDiv = {
  width: "400px",
  height: "70vh",
  backgroundColor: COLORS.SIGN_UP_BACKGROUND,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "5px",
  padding: "10px",
};

const ErrorDiv = {
  width: "400px",
  height: "30px",
  backgroundColor: "red",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "2px",
  position: "relative",
  top: -17,
};

const Span = {
  display: "flex",
  alignItems: "center",
  height: 70,
};
