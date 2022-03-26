import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import { update } from "../redux/user/userActions";
import InputBox from "../components/atoms/InputBox";
import MainButton from "../components/atoms/MyButton";
import Text from "../components/atoms/Text";
import { COLORS } from "../utils/Colors";
import NotificationModal from "../components/molecules/NotificationModal";

const Profile = (props) => {
  const [editable, setEditable] = useState(true);
  const [selectedImage, setSelectedImage] = useState("");
  const [notify, setNotify] = useState({
    type: "",
    action: "",
    tilte: "",
    details: "",
  });
  const { userData, updateUser } = props;
  let user = userData.user.data;
  const [companyData, setCompanyData] = useState({
    name: user.name,
    description: user.description,
    phonenumber: user.phonenumber,
    logo: user.logo,
    address: user.address,
    city: user.city,
    state: user.state,
    country: user.country,
  });
  const onSubmit = async () => {
    setEditable(!editable);
    if (!editable) {
      await updateUser(companyData);
      console.log(222, userData);
      if (userData.error) {
        setNotify({
          type: "failure",
          action: "try again",
          details: userData.error,
          title: "Something went wrong",
        });
      } else {
        setNotify({
          type: "success",
          action: "continue",
          details: "details updated successfully",
          title: "Success",
        });
      }
    }
    console.log(companyData);
  };
  const onSelect = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const onNameChange = (e) => {
    setCompanyData({ ...companyData, name: e.target.value });
  };
  const onDescriptionChange = (e) => {
    setCompanyData({ ...companyData, description: e.target.value });
  };
  const onPhonenumberChange = (e) => {
    setCompanyData({ ...companyData, phonenumber: e.target.value });
  };
  const onAddressChange = (e) => {
    setCompanyData({ ...companyData, address: e.target.value });
  };
  const onCityChange = (e) => {
    setCompanyData({ ...companyData, city: e.target.value });
  };
  const onStateChange = (e) => {
    setCompanyData({ ...companyData, state: e.target.value });
  };
  const onCountryChange = (e) => {
    setCompanyData({ ...companyData, country: e.target.value });
  };
  return (
    <Fragment>
      <NotificationModal
        type={notify.type}
        title={notify.title}
        details={notify.details}
        action={notify.action}
        onClick={() =>
          setNotify({ type: "", action: "", details: "", title: "" })
        }
      />
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
            <MainButton
              text={editable ? "Edit" : "Save"}
              onClick={() => onSubmit()}
            />
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
            <InputBox
              placeholder="Company Name"
              onChange={(e) => onNameChange(e)}
              value={companyData.name}
              disabled={editable}
            />
            <Text
              text="Description"
              color="#525252"
              size="17px"
              weight="normal"
              padding="10px 0 0"
            />
            <InputBox
              placeholder="Description"
              onChange={(e) => onDescriptionChange(e)}
              value={companyData.description}
              disabled={editable}
            />
            <Text
              text="Phone Number"
              color="#525252"
              size="17px"
              weight="normal"
              padding="10px 0 0"
            />
            <InputBox
              placeholder="Phone Number"
              onChange={(e) => onPhonenumberChange(e)}
              value={companyData.phonenumber}
              disabled={editable}
            />
            <Text
              text="Address"
              color="#525252"
              size="17px"
              weight="normal"
              padding="10px 0 0"
            />
            <InputBox
              placeholder="Address"
              onChange={(e) => onAddressChange(e)}
              value={companyData.address}
              disabled={editable}
            />
            <Text
              text="City"
              color="#525252"
              size="17px"
              weight="normal"
              padding="10px 0 0"
            />
            <InputBox
              placeholder="City"
              onChange={(e) => onCityChange(e)}
              value={companyData.city}
              disabled={editable}
            />
            <Text
              text="State"
              color="#525252"
              size="17px"
              weight="normal"
              padding="10px 0 0"
            />
            <InputBox
              placeholder="State"
              onChange={(e) => onStateChange(e)}
              value={companyData.state}
              disabled={editable}
            />
            <Text
              text="Country"
              color="#525252"
              size="17px"
              weight="normal"
              padding="10px 0 0"
            />
            <InputBox
              placeholder="Country"
              onChange={(e) => onCountryChange(e)}
              value={companyData.country}
              disabled={editable}
            />
          </div>
          <div style={RightDiv}>
            <img
              style={{
                width: "300px",
                height: "300px",
                backgroundColor: "orange",
                borderRadius: "50%",
              }}
              src={
                "https://www.designbust.com/download/1039/png/google_logo_transparent256.png"
              }
              alt="hello"
            />
            <Text
              text="Organization Logo"
              color="#525252"
              size="17px"
              weight="normal"
              padding="10px"
            />
            {/* <button onClick={()=>}>select</button> */}
            <input type="file" onChange={(e) => onSelect(e)} />
            <div style={{ width: "150px", margin: "20px 0" }}>
              <MainButton
                text={editable ? "Upload" : "Upload"}
                onClick={() => onSubmit()}
                disabled={editable}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (payload) => dispatch(update(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

const MainDiv = {
  width: "100%",
  //   height: "100%",
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
  justifyContent: "left",
  alignItems: "center",
  borderRadius: "7px",
  padding: "70px 0",
};
