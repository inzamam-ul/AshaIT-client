import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import lodinggif from "../../../../images/Ring-Loading-1.gif";
import "./Update.css";

const Update = ({ id, setUpdatestatus, setCurrentData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [imgUploaded, setImageUploaded] = useState(null);

  const [singleServiceData, setSingleServiceData] = useState({});
  const { name, price, description, imgUrl, _id } = singleServiceData;

  const [serviceImgUrl, setServiceImageUrl] = useState(null);
  useEffect(() => {
    axios
      .get(`https://morning-tor-68251.herokuapp.com/singleService/${id}`)
      .then((res) => {
        setSingleServiceData(res.data);
        setServiceImageUrl(res.data.imgUrl);
      });
  }, [id]);

  const onSubmit = (data) => {
    const newData = { ...data, imgUrl: serviceImgUrl };
    const url = `https://morning-tor-68251.herokuapp.com/updateService/${id}`;
    axios.patch(url, newData).then((res) => {
      setUpdatestatus(false);
      setImageUploaded(null);
      setCurrentData({ _id, ...newData });
    });
  };

  const handleImageUpload = (event) => {
    console.log(event.target.files);
    const imageData = new FormData();
    imageData.set("key", "eb6147fa916a481c3d9f2b59dab1909f");
    imageData.append("image", event.target.files[0]);
    setImageUploaded("loading");

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setServiceImageUrl(response.data.data.display_url);
        setImageUploaded(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="rounded text-left">
      <form className="row gy-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="col-6 py-2">
          <label htmlFor="name">Service name</label>
          <br />
          <input
            defaultValue={name}
            className="form-control"
            id="name"
            type="text"
            name="name"
            {...register("name", { required: true })}
          />
          {errors.name && <p>This field is required</p>}
        </div>
        <div className="col-6 py-2">
          <label htmlFor="price">Price</label>
          <br />
          <input
            defaultValue={price}
            className="form-control"
            id="price"
            type="text"
            name="price"
            {...register("price", { required: true })}
          />
          {errors.price && <p>This field is required</p>}
        </div>

        <div className="col-6 py-2">
          <label htmlFor="weight">Description</label>
          <br />
          <textarea
            defaultValue={description}
            className="form-control"
            id="desc"
            type="text"
            name="desc"
            {...register("desc", { required: true })}
          />
          {errors.desc && <p>This field is required</p>}
        </div>

        <div className="col-6 py-2 d-flex justify-content-between align-items-end">
          <div>
            <label htmlFor="photo">Add a photo</label>
            <br />
            <input
              defaultValue={imgUrl}
              onChange={handleImageUpload}
              type="file"
              id="photo"
              name="photo"
            />
            {imgUploaded === true && <span>✔️</span>}
            {imgUploaded === "loading" && (
              <img className="gif-upload" src={lodinggif} alt="/" />
            )}
          </div>
        </div>
        <div className="col-6 py-2 d-flex justify-content-end ml-auto">
          <button
            type="submit"
            onClick={() => setUpdatestatus(false)}
            className="rounded mx-3 btn-outline-dark cancle"
          >
            Cancle
          </button>
          <input
            className="rounded cancle btn-outline-secondary"
            type="submit"
            value="SAVE"
          />
        </div>
      </form>
    </div>
  );
};

export default Update;
