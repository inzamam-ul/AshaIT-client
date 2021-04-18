import {
  faAmericanSignLanguageInterpreting,
  faDumpsterFire,
  faKeyboard,
  faShoppingBag,
  faShoppingBasket,
  faThLarge,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useContext, useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, NavLink, useParams, useRouteMatch } from "react-router-dom";
import { UserContext } from "../../../App";
import logo from "../../../images/ash.png";

const Sidebar = () => {
  const { loggedInUser, isAdmin, setIsAdmin } = useContext(UserContext);
  const params = useParams();
  console.log(params);
  const { name, id } = params;
  const { url } = useRouteMatch();
  useEffect(() => {
    const { email } = loggedInUser;
    const url = `https://morning-tor-68251.herokuapp.com/isAdmin/${email}`;
    axios.get(url).then((res) => setIsAdmin(res.data));
  }, [loggedInUser, setIsAdmin]);

  console.log(isAdmin);
  const { email } = loggedInUser;

  return (
    <div className="admin-panel">
      <Link className="admin-logo" to="/">
        <Navbar.Brand className="d-flex justify-content-center align-items-center pl-5 dashboard-logo">
          <div className="d-flex align-items-center">
            <img
              style={{ height: 40 }}
              className="brand mr-2"
              src={logo}
              alt=""
            />
            <h3
              style={{ textDecoration: "none" }}
              className="brand my-3 brand-admin"
            >
              Asha IT
            </h3>
          </div>
        </Navbar.Brand>
      </Link>

      {isAdmin ? (
        <Nav className="align-items-center admin-menu text-left flex-column header">
          <NavLink
            activeClassName="is-active"
            className="nav-link py-3"
            to={`${url}/manage`}
          >
            <FontAwesomeIcon icon={faThLarge} />
            <span> Manage Services</span>
          </NavLink>
          <NavLink
            activeClassName="is-active"
            className="nav-link py-3"
            to={`${url}/allOrder`}
          >
            <FontAwesomeIcon icon={faAmericanSignLanguageInterpreting} />
            <span> Manage Orders</span>
          </NavLink>

          <NavLink
            activeClassName="is-active"
            className="nav-link py-3"
            to={`${url}/addService`}
          >
            <FontAwesomeIcon icon={faKeyboard} />
            <span> Add Service</span>
          </NavLink>
          <NavLink
            activeClassName="is-active"
            className="nav-link py-3"
            to={`${url}/addAdmin`}
          >
            <FontAwesomeIcon icon={faUserPlus} />
            <span> Add Admin</span>
          </NavLink>
        </Nav>
      ) : (
        <Nav className="align-items-center admin-menu text-left flex-column header">
          <NavLink
            activeClassName="is-active"
            className="nav-link py-3"
            to={`${url}/checkout/${name}/${id}`}
          >
            <FontAwesomeIcon icon={faShoppingBag} />
            <span> Order</span>
          </NavLink>
          <NavLink
            activeClassName="is-active"
            className="nav-link py-3"
            to={`${url}/allOrder/${email}`}
          >
            <FontAwesomeIcon icon={faShoppingBasket} />
            <span> All Orders</span>
          </NavLink>

          <NavLink
            activeClassName="is-active"
            className="nav-link py-3"
            to={`${url}/addReview`}
          >
            <FontAwesomeIcon icon={faDumpsterFire} />
            <span> Add Review</span>
          </NavLink>
        </Nav>
      )}
    </div>
  );
};

export default Sidebar;
