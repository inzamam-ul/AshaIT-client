import axios from "axios";
import React, { useEffect, useState } from "react";
import loadingGif from "../../../images/Ring-Loading-1.gif";
import LoadServices from "./LoadServices/LoadServices";
const ManageServices = () => {
  const [serviceData, setServiceData] = useState([]);
  const [serviceAction, setServiceActoin] = useState("");
  useEffect(() => {
    axios
      .get("https://asha-it-server.vercel.app/services")
      .then((response) => setServiceData(response.data));
  }, [serviceAction]);
  return (
    <div>
      <h4 className="p-4">Manage Services</h4>
      {serviceData.length === 0 && (
        <img className="gif" src={loadingGif} alt="" />
      )}
      <ol id="products" className="list-group p-3 list-group-numbered">
        {serviceData.map((product) => {
          return (
            <LoadServices
              key={product._id}
              setServiceActoin={setServiceActoin}
              data={product}
            />
          );
        })}
      </ol>
    </div>
  );
};

export default ManageServices;
