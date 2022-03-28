import {
  CLEAR_DEPARTMENT,
  LOAD_DEPARTMENT,
  LOAD_DEPARTMENT_FAILURE,
  LOAD_DEPARTMENT_SUCCESS,
  UPDATE_DEPARTMENT,
  UPDATE_DEPARTMENT_FAILURE,
  UPDATE_DEPARTMENT_SUCCESS,
} from "./departmentTypes";

const initialState = {
  department: {},
  loading: false,
  error: "",
};

const departmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DEPARTMENT:
      return {
        ...state,
        loading: true,
      };

    case LOAD_DEPARTMENT_SUCCESS:
      return {
        department: action.payload,
        loading: false,
        error: "",
      };

    case LOAD_DEPARTMENT_FAILURE:
      return {
        department: {},
        loading: false,
        error: action.payload,
      };

    case UPDATE_DEPARTMENT:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_DEPARTMENT_SUCCESS:
      return {
        department: action.payload,
        loading: false,
        error: "",
      };

    case UPDATE_DEPARTMENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_DEPARTMENT:
      return {
        department: {},
        loading: false,
        error: "",
      };

    default:
      return state;
  }
};

export default departmentReducer;
