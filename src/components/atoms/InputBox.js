import React from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { TextField, Input } from "@mui/material";

const MyInput = styled(TextField)((props) => ({
  boxShadow: "none",
  fontSize: 3,
  fontWeight: 400,
  padding: "2px",
  color: "#001c3d",
  border: "1px solid red",
  backgroundColor: "",
  fontFamily: "PT Sans",
  borderRadius: "40px",
  borderColor: "#fff",
  "&:hover": {
    backgroundColor: "#fff",
    borderColor: "#fff",
    boxShadow: "none",
  },
}));

const InputBox = (props) => {
  const { placeholder, onChange, value, onKeyPress, onKeyDown, type } = props;
  return (
    <div style={{ width: "100%", margin: "20px 0" }}>
      <Grid item xs={12}>
        <TextField
          variant="outlined"
          // error
          type={type}
          placeholder={placeholder || "insert a placeholder"}
          onChange={onChange}
          value={value}
          onKeyPress={onKeyPress}
          onKeyDown={onKeyDown}
          fullWidth
        />
      </Grid>
      {/* <MyInput fontSize="3" /> */}
    </div>
  );
};

export default InputBox;
