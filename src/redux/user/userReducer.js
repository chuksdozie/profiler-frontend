import {
  LOGIN_USER,
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  LOGOUT,
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
