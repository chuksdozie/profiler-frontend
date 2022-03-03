import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import store from "./redux/store";
import Home from "./pages/Home";
import "./App.css";
import { logout } from "./redux/user/userActions";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ConfirmEmail from "./pages/ConfirmEmail";
import SideBar from "./components/organisms/SideBar";
import Dashboard from "./pages/Dashboard";

console.log(store.getState());
logout();

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="confirm-email" element={<ConfirmEmail />} />
            <Route path="dashboard/*" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
