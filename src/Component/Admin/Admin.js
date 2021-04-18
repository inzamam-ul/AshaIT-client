import React, { useContext } from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import { UserContext } from "../../App";
import CheckOut from "../CheckOut/CheckOut";
import AddAdmin from "./AddAdmin/AddAdmin";
import AddReview from "./AddReview/AddReview";
import AddServices from "./AddServices/AddServices";
import "./Admin.css";
import AllOrders from "./AllOrders/AllOrders";
import ManageServices from "./ManageServices/ManageServices";
import Sidebar from "./Sidebar/Sidebar";

const Admin = () => {
  const { loggedInUser } = useContext(UserContext);
  const { path } = useRouteMatch();
  return (
    <div className="container-fluid ps-0">
      <div className="row">
        <div
          style={{ backgroundColor: "#dceab0" }}
          className="col-md-3 sticky-top px-0 admin-bar"
        >
          <Sidebar />
        </div>
        <div
          style={{
            backgroundColor: "#f0f8ff",
            color: "#66792d",
            fontWeight: 400,
          }}
          className="col-md-9"
        >
          <h6 className="text-right p-3">
            {" "}
            <img
              style={{ height: 40, borderRadius: 50 }}
              src={loggedInUser.picture}
              alt=""
            />
          </h6>
          <Switch>
            <Route exact path={path}>
              <h2 className="mt-5 pt-5">
                <img
                  className="mb-4"
                  style={{ height: 70, borderRadius: 50 }}
                  src={loggedInUser.photo}
                  alt=""
                />{" "}
                <br />
                Welcome to Dashboard
              </h2>
            </Route>
            <Route path={`${path}/addService`}>
              <AddServices />
            </Route>
            <Route path={`${path}/manage`}>
              <ManageServices />
            </Route>
            <Route path={`${path}/addAdmin`}>
              <AddAdmin />
            </Route>
            <Route path={`${path}/addReview`}>
              <AddReview />
            </Route>
            <Route path={`${path}/allOrder`}>
              <AllOrders />
            </Route>
            <Route path={`${path}/checkout/:name/:id`}>
              <CheckOut />
            </Route>
            <Route path={`${path}/allOrder/:email`}>
              <AllOrders />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Admin;
