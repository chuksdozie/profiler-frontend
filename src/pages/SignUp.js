import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { signup } from "../redux/user/userActions";
import Text from "../components/atoms/Text";
import { Link, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { COLORS } from "../utils/Colors";
import MainButton from "../components/atoms/MyButton";
import InputBox from "../components/atoms/InputBox";
import VerificationErrorStatus from "../components/molecules/VerificationErrorStatus";

const SignUp = (props) => {
  const { userData, signNewUser } = props;
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [authError, setAuthError] = useState(false);
  const [signupError, setSignupError] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const onNameChange = (e) => {
    setUser({ ...user, name: e.target.value });
  };
  const onEmailChange = (e) => {
    setUser({ ...user, email: e.target.value });
  };
  const onPasswordChange = (e) => {
    setUser({ ...user, password: e.target.value });
  };
  const onSubmit = async () => {
    setLoading(true);
    console.log(user);
    if (!user.name) {
      setAuthError(true);
      setSignupError("Please enter a company name");
      setLoading(false);
    }
    if (!user.email) {
      setAuthError(true);
      setSignupError("Please enter an email address");
      setLoading(false);
    }
    if (!user.password) {
      setAuthError(true);
      setSignupError("Please enter a password");
      setLoading(false);
    } else {
      const newUser = await signNewUser(user);
      if (userData.error) {
        setSignupError(userData.error);
      } else {
        setAuthError(false);
      }
      const details = userData;
      console.log(11, userData.error);
    }
    // setLoading(false);
    console.log(user);
  };

  useEffect(() => {
    let data = userData;
    if (data.error) {
      setAuthError(true);
      setSignupError(data.error);
      setLoading(false);
    } else {
      setAuthError(false);
    }
  }, [userData]);

  useEffect(() => {
    console.log(authError);
    if (userData.user.data) {
      navigate("/confirm-email");
    }
  }, [authError, userData.user.data]);

  return (
    <div style={MainDiv}>
      <div style={MinorDiv}>
        <div style={authError ? ErrorDiv : { display: "none" }}>
          <VerificationErrorStatus message={signupError} />
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
            placeholder="company"
            onChange={(e) => onNameChange(e)}
            value={user.name}
          />
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
          {/* <Link to="/confirm-email" style={{ width: "100%" }}> */}
          <MainButton
            text="Create Account"
            disabled={loading}
            onClick={() => onSubmit()}
          />
          {/* </Link> */}
        </div>
        <span style={Span}>
          <Text
            text="Already have an account?"
            color="#525252"
            size="15px"
            weight="normal"
            padding="10px"
          />
          <a href="/">
            <Text
              text="Sign In"
              color="#525252"
              size="15px"
              weight="700"
              // padding="10px"
            />
          </a>
        </span>
        <Text
          text="By clicking “Create Account”, I agree to Profiler Terms and Condition and Privacy Policy"
          color="#525252"
          size="12px"
          weight="200"
          padding="10px"
        />
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
    signNewUser: (payload) => dispatch(signup(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

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
  height: "75vh",
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
};

const Span = {
  display: "flex",
  alignItems: "center",
  height: 70,
};
