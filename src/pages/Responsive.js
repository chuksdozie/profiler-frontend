import React from "react";
import Sad from "../resources/sad_face.png";
import Text from "../components/atoms/Text";

const Responsive = () => {
  return (
    <div style={MainDiv}>
      <img style={Img} src={Sad} alt="sad face" />
      <Text
        padding="20px"
        text={`Sorry! this Application is not yet available for mobile devices and tablets. Please use a laptop or monitor instead`}
      />
    </div>
  );
};

export default Responsive;

const MainDiv = {
  width: "100%",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const Img = {
  width: "100px",
  height: "100px",
};
