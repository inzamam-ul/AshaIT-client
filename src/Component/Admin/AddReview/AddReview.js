import axios from "axios";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../App";

const AddReview = () => {
  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);
  const [reviewAdded, setReviewAdded] = useState(false);
  const { email, name, picture, photo } = loggedInUser;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    const newData = { name, email, photo, picture, ...data };
    const url = "https://morning-tor-68251.herokuapp.com/addReview";
    console.log(newData);

    axios.post(url, newData).then((res) => {
      console.log(res.data);
      setReviewAdded(res.data);
      setTimeout(() => setReviewAdded(false), 3000);
      e.target.reset();
    });
  };
  return (
    <>
      <h2 className="pb-2">Add Review</h2>
      <div className="bg-light p-3 rounded text-left">
        <form
          className="my-3 p-3 rounded row gy-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="col-8 py-2">
            <label htmlFor="name">Write Your Valuable Review</label>
            <br />
            <textarea
              className="form-control"
              id="review"
              type="text"
              name="review"
              rows={10}
              {...register("review", { required: true })}
            />
            {errors.review && <p>This field is required</p>}
          </div>

          <div className="col-8 p-3">
            <input className="rouded cancle" type="submit" value="SAVE" />
          </div>
          <div className="p-4 d-flex align-items center col-3 text-left">
            {reviewAdded && (
              <span style={{ color: "green", lineHeight: 0, marginTop: 25 }}>
                Review added successfully
              </span>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default AddReview;
