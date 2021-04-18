import React, { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import "./Header.css";
import logo from "../../../images/ash.png";

const Header = () => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  console.log(loggedInUser);
  return (
    <div
      className="shadow sticky-top"
      style={{ backgroundColor: "#dceab0", overflow: "overlay" }}
    >
      <Navbar className="container head" expand="lg">
        <Link to="/">
          <Navbar.Brand className="d-flex align-items-center">
            <img
              style={{ height: 40 }}
              className="brand mr-2"
              src={logo}
              alt=""
            />
            <h3 className="brand brand-home">Asha IT</h3>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto align-items-center header">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/orders">
              Orders
            </Link>
            <Link className="nav-link" to="/admin">
              Admin
            </Link>

            {loggedInUser.email ? (
              <span className="rounded p-2 bg-light">
                <img
                  style={{ height: 40, borderRadius: 50 }}
                  src={loggedInUser.photo}
                  alt=""
                />
              </span>
            ) : (
              <Link className="nav-link" to="/login">
                <button
                  type="submit"
                  className="btn-outline-secondary btn-custom rounded"
                >
                  Login
                </button>
              </Link>
            )}
            {loggedInUser.email && (
              <button
                onClick={() => {
                  sessionStorage.removeItem("token");
                  setLoggedInUser({});
                }}
                className="btn logout nav-link btn-custom"
              >
                Logout
              </button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* <div style={{ borderBottom: "2px solid green" }}></div> */}
    </div>
  );
};

export default Header;
