import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import logger from "redux-logger";
import thunk from "redux-thunk";
import photoReducer from "./photo/photoReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  photo: photoReducer,
  user: userReducer,
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
