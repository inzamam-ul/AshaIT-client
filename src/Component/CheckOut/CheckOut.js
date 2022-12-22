import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const CheckOut = () => {
  const productdetails = useParams();
  const productId = productdetails.id;
  const [checkout, setCheckout] = useState({});
  useEffect(() => {
    axios
      .get(`https://asha-it-server.vercel.app/singleService/${productId}`)
      .then((res) => {
        setCheckout(res.data);
      });
  }, [productId]);
  const { name, price, description, _id } = checkout;
  return (
    <div className="container">
      <h3 className="mt-2">Order Details</h3>
      {productdetails.id == "undefined" ? (
        <div className="mt-5 p-2 bg-light shadow">
          <h3>There is no product to checkout</h3>
          <Link to="/">
            <button className="btn cancle">Go back to home</button>
          </Link>
        </div>
      ) : (
        <>
          <table className="table table-light shadow text-left my-3 rounded bg-light">
            <thead className="table-secondary">
              <tr className="table-secondary">
                <th scope="col">Service</th>
                <th scope="col">Description</th>
                <th scope="col">Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="text-capitalize" scope="row">
                  {name}
                </th>
                <td>{description}</td>
                <td>${price}</td>
              </tr>

              <tr>
                <th colSpan="2" scope="row">
                  Total
                </th>

                <td>
                  <h6>${price}</h6>
                </td>
              </tr>
            </tbody>
          </table>
          <div>
            <Link to={`/admin/shiping/${name}/${_id}`}>
              <button
                className="btn btn-outline-secondary float-right mt-3 cancle"
                type="button"
              >
                Cheackout
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CheckOut;
