import React from "react";
import InputBox from "../components/atoms/InputBox";
import MainButton from "../components/atoms/MyButton";
import Text from "../components/atoms/Text";
import { COLORS } from "../utils/Colors";

const AddEmployee = () => {
  return (
    <div style={MainDiv}>
      <div style={SubDiv}></div>
      <div
        style={{
          display: "flex",
          width: "95%",
          padding: "10px 0",
          justifyContent: "right",
        }}
      >
        <div style={{ width: "150px" }}>
          <MainButton text="edit" />
        </div>
      </div>

      <div style={RestDiv}>
        <div style={LeftDiv}>
          <Text
            text="Profile"
            color="#525252"
            size="20px"
            weight="normal"
            padding="10px"
          />
          <Text
            text="Company Name"
            color="#525252"
            size="17px"
            weight="normal"
            padding="10px 0 0"
          />
          <InputBox />
          <Text
            text="Company Name"
            color="#525252"
            size="17px"
            weight="normal"
            padding="10px 0 0"
          />
          <InputBox />
          <Text
            text="Company Name"
            color="#525252"
            size="17px"
            weight="normal"
            padding="10px 0 0"
          />
          <InputBox />
          <Text
            text="Company Name"
            color="#525252"
            size="17px"
            weight="normal"
            padding="10px 0 0"
          />
          <InputBox />
        </div>
        <div style={LeftDiv}>
          <Text
            text="Profile"
            color="#525252"
            size="20px"
            weight="normal"
            padding="10px"
          />
          <Text
            text="Company Name"
            color="#525252"
            size="17px"
            weight="normal"
            padding="10px 0 0"
          />
          <InputBox />
          <Text
            text="Company Name"
            color="#525252"
            size="17px"
            weight="normal"
            padding="10px 0 0"
          />
          <InputBox />
          <Text
            text="Company Name"
            color="#525252"
            size="17px"
            weight="normal"
            padding="10px 0 0"
          />
          <InputBox />
          <Text
            text="Company Name"
            color="#525252"
            size="17px"
            weight="normal"
            padding="10px 0 0"
          />
          <InputBox />
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;

const MainDiv = {
  width: "100%",
  //   height: "100vh",
  //   backgroundColor: COLORS.SIGN_UP_BACKGROUND,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "7px",
};

const SubDiv = {
  width: "100%",
  height: "40px",
  backgroundColor: COLORS.PRIMARY_BUTTON_BG_COLOR,
  display: "flex",
};

const RestDiv = {
  width: "95%",
  height: "100%",
  backgroundColor: "white",
  display: "flex",
  justifyContent: "space-between",
  borderRadius: "7px",
};

const LeftDiv = {
  width: "45%",
  height: "auto",
  //   backgroundColor: "red",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  borderRadius: "7px",
  padding: "20px",
};

const RightDiv = {
  width: "40%",
  height: "auto",
  //   backgroundColor: "yellow",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "7px",
};
