import {
  LOAD_DEPARTMENT,
  LOAD_DEPARTMENT_FAILURE,
  LOAD_DEPARTMENT_SUCCESS,
  UPDATE_DEPARTMENT,
  UPDATE_DEPARTMENT_FAILURE,
  UPDATE_DEPARTMENT_SUCCESS,
  CLEAR_DEPARTMENT,
} from "./departmentTypes";
import axios from "axios";
import { BASE_URL } from "../../utils/Constants";
import { organizationId, organizationToken } from "../user/userActions";

export const loadDepartment = () => {
  return {
    type: LOAD_DEPARTMENT,
  };
};

export const loadDepartmentSuccess = (employees) => {
  return {
    type: LOAD_DEPARTMENT_SUCCESS,
    payload: employees,
  };
};

export const loadDepartmentFailure = (error) => {
  return {
    type: LOAD_DEPARTMENT_FAILURE,
    payload: error,
  };
};

export const updateDepartment = () => {
  return {
    type: UPDATE_DEPARTMENT,
  };
};

export const updateDepartmentSuccess = (update) => {
  return {
    type: UPDATE_DEPARTMENT_SUCCESS,
    payload: update,
  };
};

export const updateDepartmentFailure = (error) => {
  return {
    type: UPDATE_DEPARTMENT_FAILURE,
    payload: error,
  };
};

export const clearDepartment = () => {
  return {
    type: CLEAR_DEPARTMENT,
  };
};

/****************************************
 * API CALLS DEFINITELY START HERE
 ****************************************/

export const loadAllDepartments = () => {
  return (dispatch) => {
    dispatch(loadDepartment());

    var config = {
      method: "get",
      url: `${BASE_URL}/department/all`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        // response.data is the list of the employees
        console.log(JSON.stringify(response.data.data));
        const departments = response.data.data;
        dispatch(loadDepartmentSuccess(departments));
      })
      .catch(function (error) {
        // error.response.data.error is the error description
        console.log(error.response.data.error);
        dispatch(loadDepartmentFailure(error.response.data.error));
      });
  };
};

// export const update = (payload) => {
//   return (dispatch) => {
//     dispatch(updateUser());

//     var data = JSON.stringify({
//       name: payload.name,
//       description: payload.description,
//       phonenumber: payload.phonenumber,
//       logo: payload.logo,
//       address: payload.address,
//       city: payload.city,
//       state: payload.state,
//       country: payload.country,
//     });

//     var config = {
//       method: "put",
//       url: `http://localhost:5003/api/org/update/${organizationId}`,
//       headers: {
//         Authorization: `Bearer ${organizationToken}`,
//         "Content-Type": "application/json",
//       },
//       data: data,
//     };
//     console.log(232, organizationId);
//     console.log(232, organizationToken);
//     console.log(111, config.headers.Authorization);

//     axios(config)
//       .then(function (response) {
//         // response.data is the organization
//         console.log(JSON.stringify(response.data));
//         const update = response.data;
//         dispatch(updateUserSuccess(update));
//       })
//       .catch(function (error) {
//         // error.response.data.error is the error description
//         console.log(error.response.data.error);
//         dispatch(updateUserFailure(error.response.data.error));
//       });
//   };
// };
