import React from "react";
import { RiDashboardFill } from "react-icons/ri";

const Icon = (props) => {
  const { width, height, color, icon } = props;
  return (
    <div>
      <i style={{ padding: "0 0 0 10px", width: "20px", height: "20px" }}>
        {icon} || <RiDashboardFill />
      </i>
    </div>
  );
};

export default Icon;
