import React from "react";
import Text from "../atoms/Text";

const VerificationErrorStatus = (props) => {
  const { message } = props;
  return (
    <div>
      <Text
        text={message || "Incorrect Password or Email"}
        color="#fff"
        size="15px"
        weight="200"
        padding="10px"
      />
    </div>
  );
};

export default VerificationErrorStatus;
