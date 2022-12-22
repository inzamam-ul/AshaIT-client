import { faRecycle, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState } from "react";
import Update from "../Update/Update";
import "./LoadServices.css";

const LoadServices = (props) => {
  const [currentData, setCurrentData] = useState(props.data);
  const { name, price, imgUrl, _id } = currentData;
  const [updateStatus, setUpdatestatus] = useState(false);

  const setServiceActoin = props.setServiceActoin;

  const deleteService = (id) => {
    axios
      .delete(`https://asha-it-server.vercel.app/deleteService/${id}`)
      .then((res) => {
        console.log(res.data);
        setServiceActoin(id);
      });
  };
  const loadSingleService = (id) => {
    setUpdatestatus(true);
    console.log(id);
  };
  const style = {
    fontSize: 25,
    color: "#fff",
  };
  return (
    <>
      <li className="list-group-item bg-light row rounded border mt-1 d-flex justify-content-between align-items-start">
        {!updateStatus ? (
          <>
            <div className="d-flex justify-content-start col-md-5 align-items-center">
              <img className="manage-image" src={imgUrl} alt="" />
              <div className="ml-4 text-left me-auto">
                <h6 className="fw-bold text-capitalize">{name}</h6>
                <p className="fw-bold m-0">Cost: ${price} </p>
              </div>
            </div>
            <div className="ms-auto col-md-7 mt-4 text-right">
              <p style={{ fontSize: 20 }} className="m-0">
                <button
                  style={style}
                  id="delete"
                  onClick={() => deleteService(`${_id}`)}
                  className="btn mx-3 btn-warning"
                >
                  <FontAwesomeIcon icon={faTrashAlt} />
                </button>
                <button
                  style={style}
                  id="update"
                  onClick={() => loadSingleService(`${_id}`)}
                  className="btn btn-success"
                >
                  <FontAwesomeIcon icon={faRecycle} />
                </button>
              </p>
            </div>
          </>
        ) : (
          <Update
            setServiceActoin={setServiceActoin}
            setCurrentData={setCurrentData}
            setUpdatestatus={setUpdatestatus}
            id={_id}
          />
        )}
      </li>
    </>
  );
};

export default LoadServices;
