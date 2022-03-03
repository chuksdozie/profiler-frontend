import {
  LOGIN_USER,
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  LOGOUT,
} from "./userTypes";
import axios from "axios";

export const loginUser = () => {
  return {
    type: LOGIN_USER,
  };
};

export const loginUserSuccess = (user) => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: user,
  };
};

export const loginUserFailure = (error) => {
  return {
    type: LOGIN_USER_FAILURE,
    payload: error,
  };
};

export const logoutUser = () => {
  return {
    type: LOGOUT,
  };
};

export const login = (email, password) => {
  return (dispatch) => {
    dispatch(loginUser());

    var data = JSON.stringify({
      email: email,
      password: password,
    });

    var config = {
      method: "post",
      url: "http://localhost:5003/api/org/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        // response.data is the organization
        console.log(JSON.stringify(response.data));
        const user = response.data;
        dispatch(loginUserSuccess(user));
      })
      .catch(function (error) {
        // error.response.data.error is the error description
        console.log(error.response.data.error);
        dispatch(loginUserFailure(error.response.data.error));
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch(logoutUser());
  };
};
