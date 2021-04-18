import axios from "axios";
import React, { useContext, useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";
import { UserContext } from "../../../App";

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const SingleEditableOrder = (props) => {
  const { isAdmin } = useContext(UserContext);
  const [currentData, setCurrentData] = useState(props.data);
  const { userName, email, _id, status } = currentData;
  const { imgUrl, name } = currentData.orderedProduct;

  const classes = useStyles();
  const [orderStatus, setOrderStatus] = useState(status);
  const handleChange = (event) => {
    const newData = { ...currentData };
    newData.status = event.target.value;
    const url = `https://morning-tor-68251.herokuapp.com/updateOrderStatus/${_id}`;
    axios.patch(url, newData).then((res) => {
      console.log(res.data);
      setCurrentData({ _id, ...newData });
    });
    setOrderStatus(event.target.value);
  };

  return (
    <>
      <li className="list-group-item bg-light row rounded border mt-1 d-flex justify-content-around align-items-center">
        <div className="d-flex justify-content-start col-md-3 align-items-center">
          <img className="manage-image" src={imgUrl} alt="" />
          <div className="ml-4 text-left me-auto">
            <h5>{name}</h5>
          </div>
        </div>
        <div className="col-md-3 text-left">
          <h6 className="fw-bold text-capitalize">{userName}</h6>
          <p className="fw-bold m-0">{email} </p>
        </div>

        <div className="ms-auto col-md-3 mt-3 text-right">
          {isAdmin ? (
            <FormControl className={classes.margin}>
              <NativeSelect
                id="demo-customized-select-native"
                value={orderStatus}
                onChange={handleChange}
                input={<BootstrapInput />}
              >
                <option aria-label="None">{status}</option>
                <option>Pending</option>
                <option>On progress</option>
                <option>Done</option>
              </NativeSelect>
            </FormControl>
          ) : (
            <div className="btn btn-success">{status}</div>
          )}
        </div>
      </li>
    </>
  );
};

export default SingleEditableOrder;
