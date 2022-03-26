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

const initialState = {
  user: {},
  loading: false,
  error: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        loading: true,
      };

    case LOGIN_USER_SUCCESS:
      return {
        user: action.payload,
        loading: false,
        error: "",
      };

    case LOGIN_USER_FAILURE:
      return {
        user: {},
        loading: false,
        error: action.payload,
      };

    case UPDATE_USER:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_USER_SUCCESS:
      return {
        user: action.payload,
        loading: false,
        error: "",
      };

    case UPDATE_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case SIGNUP_USER:
      return {
        user: {},
        loading: true,
        error: "",
      };

    case SIGNUP_USER_SUCCESS:
      return {
        user: action.payload,
        loading: false,
        error: "",
      };

    case SIGNUP_USER_FAILURE:
      return {
        user: {},
        loading: false,
        error: action.payload,
      };

    case LOGOUT:
      return {
        user: {},
        loading: false,
        error: "",
      };

    default:
      return state;
  }
};

export default userReducer;
