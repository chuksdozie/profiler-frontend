import {
  LOAD_EMPLOYEE,
  LOAD_EMPLOYEE_FAILURE,
  LOAD_EMPLOYEE_SUCCESS,
  UPDATE_EMPLOYEE,
  UPDATE_EMPLOYEE_FAILURE,
  UPDATE_EMPLOYEE_SUCCESS,
  CLEAR_EMPLOYEE,
} from "./employeeTypes";

const initialState = {
  employee: {},
  loading: false,
  error: "",
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_EMPLOYEE:
      return {
        ...state,
        loading: true,
      };

    case LOAD_EMPLOYEE_SUCCESS:
      return {
        employee: action.payload,
        loading: false,
        error: "",
      };

    case LOAD_EMPLOYEE_FAILURE:
      return {
        employee: {},
        loading: false,
        error: action.payload,
      };

    case UPDATE_EMPLOYEE:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_EMPLOYEE_SUCCESS:
      return {
        employee: action.payload,
        loading: false,
        error: "",
      };

    case UPDATE_EMPLOYEE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_EMPLOYEE:
      return {
        employee: {},
        loading: false,
        error: "",
      };

    default:
      return state;
  }
};

export default employeeReducer;
