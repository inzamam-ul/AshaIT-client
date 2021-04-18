import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

const OrderPlaced = ({ selectedProduct }) => {
  const { loggedInUser } = useContext(UserContext);
  const { name, imgUrl, price } = selectedProduct;
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <div className="text-left p-3 bg-light rounded shadow">
        <img style={{ height: 120 }} src={imgUrl} alt="" />
        <h5>{name}</h5>
        <p>Total: ${price}</p>
      </div>
      <h5 className="m-4 col-md-4 text-left">
        Wellcome,{loggedInUser.name}. Your order placed successfully
      </h5>
      <Link to="/">
        <button className="cancle" type="submit">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default OrderPlaced;
