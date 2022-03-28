import {
  LOAD_EMPLOYEE,
  LOAD_EMPLOYEE_FAILURE,
  LOAD_EMPLOYEE_SUCCESS,
  UPDATE_EMPLOYEE,
  UPDATE_EMPLOYEE_FAILURE,
  UPDATE_EMPLOYEE_SUCCESS,
  CLEAR_EMPLOYEE,
} from "./employeeTypes";
import axios from "axios";
import { BASE_URL } from "../../utils/Constants";
import { organizationId, organizationToken } from "../user/userActions";

export const loadEmployee = () => {
  return {
    type: LOAD_EMPLOYEE,
  };
};

export const loadEmployeeSuccess = (employees) => {
  return {
    type: LOAD_EMPLOYEE_SUCCESS,
    payload: employees,
  };
};

export const loadEmployeeFailure = (error) => {
  return {
    type: LOAD_EMPLOYEE_FAILURE,
    payload: error,
  };
};

export const updateEmployee = () => {
  return {
    type: UPDATE_EMPLOYEE,
  };
};

export const updateEmployeeSuccess = (update) => {
  return {
    type: UPDATE_EMPLOYEE_SUCCESS,
    payload: update,
  };
};

export const updateEmployeeFailure = (error) => {
  return {
    type: UPDATE_EMPLOYEE_FAILURE,
    payload: error,
  };
};

export const clearEmployee = () => {
  return {
    type: CLEAR_EMPLOYEE,
  };
};

/****************************************
 * API CALLS DEFINITELY START HERE
 ****************************************/

export const loadAllEmployees = () => {
  return (dispatch) => {
    dispatch(loadEmployee());

    var config = {
      method: "get",
      url: `${BASE_URL}/employee/all`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        // response.data is the list of the employees
        console.log(JSON.stringify(response.data.data));
        const employee = response.data.data;
        dispatch(loadEmployeeSuccess(employee));
      })
      .catch(function (error) {
        // error.response.data.error is the error description
        console.log(error.response.data.error);
        dispatch(loadEmployeeFailure(error.response.data.error));
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
