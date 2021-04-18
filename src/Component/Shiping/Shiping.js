import React, { useState } from "react";
import { useForm } from "react-hook-form";

import PaymentGateWay from "./PaymentGateWay/PaymentGateWay";

const Shiping = () => {
  const [orderStatus, setOrderStatus] = useState(false);
  const [formData, setFormData] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setOrderStatus(true);
    setFormData(data);
  };

  return (
    <>
      {orderStatus ? (
        <div className="container">
          <div
            style={{ height: "90vh" }}
            className="row d-flex justify-content-center align-items-center"
          >
            <div className="col-md-5">
              <PaymentGateWay formData={formData} />
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <h3 className="my-4">Your address</h3>
          <div className="bg-light shadow p-3 rounded text-left">
            <form
              className="my-3 p-3 rounded row gy-5"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="col-6 py-2">
                <label htmlFor="name">City</label>
                <br />
                <input
                  className="form-control"
                  id="city"
                  type="text"
                  name="city"
                  {...register("city", { required: true })}
                />
                {errors.city && <p>This field is required</p>}
              </div>
              <div className="col-6 py-2">
                <label htmlFor="price">District</label>
                <br />
                <input
                  className="form-control"
                  id="district"
                  type="text"
                  name="district"
                  {...register("district", { required: true })}
                />
                {errors.district && <p>This field is required</p>}
              </div>

              <div className="col-6 py-2">
                <label htmlFor="weight">Address</label>
                <br />
                <input
                  className="form-control"
                  id="address"
                  type="text"
                  name="address"
                  {...register("address", { required: true })}
                />
                {errors.address && <p>This field is required</p>}
              </div>

              <div className="col-6 py-2">
                <input
                  className="rouded mt-5 shadow float-right"
                  type="submit"
                  value="Buy Service"
                />
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Shiping;
