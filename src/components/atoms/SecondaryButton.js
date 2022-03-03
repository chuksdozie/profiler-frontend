import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { COLORS } from "../../utils/Colors";

const MyButton = styled(Button)((props) => ({
  boxShadow: "none",
  width: `${props.width || "100%"}`,
  textTransform: "none",
  fontSize: 15,
  fontWeight: 500,
  padding: "10px",
  color: `${props.colors || COLORS.PRIMARY_BUTTON_BG_COLOR}`,
  border: "2px solid",
  //   backgroundColor: `${props.bgcolors || "white"}`,
  fontFamily: "PT Sans",
  borderRadius: "5px",
  borderColor: COLORS.PRIMARY_BUTTON_BG_COLOR,
  "&:hover": {
    // backgroundColor: `${props.bgcolors || COLORS.PRIMARY_BUTTON_BG_COLOR}`,
    borderColor: "#fff",
    boxShadow: "none",
    border: "2px solid",
  },
}));

const SecondaryButton = (props) => {
  const { text, onClick, colors, bg, width, variant } = props;
  return (
    <div style={{ width: "100%" }}>
      <Grid item xs={12}>
        <MyButton fullWidth onClick={onClick} name="main button">
          {text || "insert a text"}
        </MyButton>
      </Grid>
    </div>
  );
};

export default SecondaryButton;
