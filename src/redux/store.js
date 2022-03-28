import { createStore, applyMiddleware, combineReducers } from "redux";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { persistStore, persistReducer } from "redux-persist";
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

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export const persistor = persistStore(store);

// export default store;
