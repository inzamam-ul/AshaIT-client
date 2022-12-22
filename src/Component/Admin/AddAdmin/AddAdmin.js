import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddAdmin = () => {
  const [adminAdded, setAdminAdded] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    console.log(data);
    const url = "https://asha-it-server.vercel.app/addAdmin";

    axios.post(url, data).then((res) => {
      console.log(res.data);
      setAdminAdded(res.data);
      setTimeout(() => setAdminAdded(false), 3000);
      e.target.reset();
    });
  };
  return (
    <>
      <h4 className="p-4">Add Admin</h4>
      <div className="bg-light p-3 rounded text-left">
        <form
          className="my-3 p-3 rounded row gy-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="col-6 py-2">
            <label htmlFor="name">Admin name</label>
            <br />
            <input
              className="form-control"
              id="name"
              type="text"
              name="name"
              {...register("name", { required: true })}
            />
            {errors.name && <p>This field is required</p>}
          </div>
          <div className="col-6 py-2">
            <label htmlFor="price">Email</label>
            <br />
            <input
              className="form-control"
              id="email"
              type="email"
              name="email"
              {...register(
                "email",
                { required: true },
                { pattern: /\S+@\S+\.\S+/ }
              )}
            />
            {errors.email && <p>This field is required</p>}
          </div>

          <div className="col-3 p-3">
            <input className="rouded cancle" type="submit" value="SAVE" />
          </div>
          <div className="p-4 d-flex align-items center col-3 text-left">
            {adminAdded && (
              <span style={{ color: "green", lineHeight: 0, marginTop: 25 }}>
                Admin added successfully
              </span>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default AddAdmin;
