import {
  LOGIN_USER,
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  LOGOUT,
  UPDATE_USER,
  UPDATE_USER_FAILURE,
  UPDATE_USER_SUCCESS,
  SIGNUP_USER,
  SIGNUP_USER_FAILURE,
  SIGNUP_USER_SUCCESS,
} from "./userTypes";
import axios from "axios";
import { BASE_URL } from "../../utils/Constants";

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

export const updateUser = () => {
  return {
    type: UPDATE_USER,
  };
};

export const updateUserSuccess = (update) => {
  return {
    type: UPDATE_USER_SUCCESS,
    payload: update,
  };
};

export const updateUserFailure = (error) => {
  return {
    type: UPDATE_USER_FAILURE,
    payload: error,
  };
};

export const signupUser = () => {
  return {
    type: SIGNUP_USER,
  };
};

export const signupUserSuccess = (payload) => {
  return {
    type: SIGNUP_USER_SUCCESS,
    payload: payload,
  };
};

export const signupUserFailure = (error) => {
  return {
    type: SIGNUP_USER_FAILURE,
    payload: error,
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch(logoutUser());
  };
};

/****************************************
 * API CALLS DEFINITELY START HERE
 ****************************************/

export let organizationToken = "";
export let organizationId = "";

// LOGIN ACTION CREATOR
export const login = (email, password) => {
  return (dispatch) => {
    dispatch(loginUser());

    var data = JSON.stringify({
      email: email,
      password: password,
    });

    var config = {
      method: "post",
      url: `${BASE_URL}/org/login`,
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
        organizationId = user.data.id;
        organizationToken = user.data.token;
        dispatch(loginUserSuccess(user));
      })
      .catch(function (error) {
        // error.response.data.error is the error description
        console.log(error.response.data.error);
        dispatch(loginUserFailure(error.response.data.error));
      });
  };
};

// UPDATE ACTION CREATOR
export const update = (payload) => {
  return (dispatch) => {
    dispatch(updateUser());

    var data = JSON.stringify({
      name: payload.name,
      description: payload.description,
      phonenumber: payload.phonenumber,
      logo: payload.logo,
      address: payload.address,
      city: payload.city,
      state: payload.state,
      country: payload.country,
    });

    var config = {
      method: "put",
      url: `${BASE_URL}/org/update/${organizationId}`,
      headers: {
        Authorization: `Bearer ${organizationToken}`,
        "Content-Type": "application/json",
      },
      data: data,
    };
    console.log(232, organizationId);
    console.log(232, organizationToken);
    console.log(111, config.headers.Authorization);

    axios(config)
      .then(function (response) {
        // response.data is the organization
        console.log(JSON.stringify(response.data));
        const update = response.data;
        dispatch(updateUserSuccess(update));
      })
      .catch(function (error) {
        // error.response.data.error is the error description
        console.log(error.response.data.error);
        dispatch(updateUserFailure(error.response.data.error));
      });
  };
};

// SIGNUP ACTION CREATOR
export const signup = (payload) => {
  return (dispatch) => {
    dispatch(signupUser());

    var data = JSON.stringify({
      name: payload.name,
      email: payload.email,
      password: payload.password,
    });

    var config = {
      method: "post",
      url: `${BASE_URL}/org/signup`,
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
        dispatch(signupUserSuccess(user));
      })
      .catch(function (error) {
        // error.response.data.error is the error description
        console.log(error.response.data.error);
        dispatch(signupUserFailure(error.response.data.error));
      });
  };
};
