import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import { createContext, useState } from "react";
import Admin from "./Component/Admin/Admin";
import Login from "./Component/Shared/Login/Login";
import PrivetRoute from "./Component/Shared/PrivetRoute/PrivetRoute";
import jwtDecode from "jwt-decode";
export const UserContext = createContext();

function App() {
  const token = sessionStorage.getItem("token");
  const decodedToken = token && jwtDecode(token);
  const decodedUser = { ...decodedToken };
  decodedUser.photo = decodedUser.picture;
  const [loggedInUser, setLoggedInUser] = useState(
    decodedUser ? decodedUser : {}
  );
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div className="App">
      <UserContext.Provider
        value={{ loggedInUser, setLoggedInUser, isAdmin, setIsAdmin }}
      >
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <PrivetRoute path="/admin">
              <Admin />
            </PrivetRoute>
            <Route path="/login">
              <Login />
            </Route>

            <Route path="*">
              <h2>NOT found</h2>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
