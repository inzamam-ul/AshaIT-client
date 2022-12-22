import axios from "axios";
import React, { useContext } from "react";
import { useEffect } from "react";
import { UserContext } from "../../../App";
import { useState } from "react";
import loadingGif from "../../../images/Ring-Loading-1.gif";
import SingleEditableOrder from "./SingleEditableOrder";

const AllOrders = () => {
  const [allOrder, setAllOrder] = useState([]);
  const { loggedInUser, isAdmin } = useContext(UserContext);
  useEffect(() => {
    const { email } = loggedInUser;
    const url = isAdmin
      ? `https://asha-it-server.vercel.app/allOrder`
      : `https://asha-it-server.vercel.app/allOrder/${email}`;
    axios.get(url).then((res) => setAllOrder(res.data));
  }, [isAdmin, loggedInUser]);

  return (
    <div>
      <h3 className="mt-2">All Orders</h3>
      {allOrder.length === 0 && <img className="gif" src={loadingGif} alt="" />}
      <ol id="products" className="list-group p-3 list-group-numbered">
        {allOrder.map((order) => {
          return <SingleEditableOrder key={order._id} data={order} />;
        })}
      </ol>
      ;
    </div>
  );
};

export default AllOrders;
