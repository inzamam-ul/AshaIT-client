import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import { UserContext } from "../../../App";
import jwtDecode from "jwt-decode";

const PrivetRoute = ({ children, ...rest }) => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const isLoggedIn = () => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      return false;
    }
    const decodedToken = token && jwtDecode(token);
    setLoggedInUser(decodedToken);

    // get current time
    const currentTime = new Date().getTime() / 1000;
    // compare the expiration time with the current time
    // will return false if expired and will return true if not expired
    return decodedToken.exp > currentTime;
  };
  return (
    <Route
      {...rest}
      render={(props) =>
        loggedInUser.email || isLoggedIn() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivetRoute;
