import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import logger from "redux-logger";
import thunk from "redux-thunk";
import photoReducer from "./photo/photoReducer";
import userReducer from "./user/userReducer";
import employeeReducer from "./employee/employeeReducer";
import departmentReducer from "./department/departmentReducer";

const rootReducer = combineReducers({
  photo: photoReducer,
  user: userReducer,
  employee: employeeReducer,
  department: departmentReducer,
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
