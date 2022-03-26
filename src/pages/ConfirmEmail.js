import React from "react";
import { connect } from "react-redux";
import Text from "../components/atoms/Text";
import Grid from "@mui/material/Grid";
import { COLORS } from "../utils/Colors";
import MainButton from "../components/atoms/MyButton";
import InputBox from "../components/atoms/InputBox";

const ConfirmEmail = (props) => {
  const { userData } = props;
  console.log(543, userData);
  const email = userData.user.data.email;
  console.log(email);
  return (
    <div style={MainDiv}>
      <div style={MinorDiv}>
        <Text
          text="Confirm your email"
          color="#525252"
          size="20px"
          weight="700"
          padding="10px"
        />
        <div style={{ width: "80%" }}>
          <Text
            text={`We just sent  a confirmation to ${email}`}
            color="#525252"
            size="12px"
            weight="200"
            padding="10px"
          />
          <MainButton text="Resend Email" />
        </div>
        <span style={Span}>
          <Text
            text={`Haven’t recieved the email? Check your spam folder to make sure it didn’t end up there or resend the confirmation email .`}
            color="#525252"
            size="13px"
            weight="normal"
            padding="10px"
          />
        </span>
        <span style={Span}>
          <Text
            text="Already confirmed email?"
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
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

export default connect(mapStateToProps)(ConfirmEmail);

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
  height: 100,
};
