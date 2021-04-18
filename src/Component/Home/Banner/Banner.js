import React from "react";
import { Link } from "react-scroll";
import banner from "../../../images/18907.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner" style={{ backgroundColor: "#eaf6c4" }}>
      <div className="container text-left">
        <div className="row d-flex align-items-center p-5">
          <div className="col-md-5 pr-5">
            <h1>
              Let's create <span className="small">at</span>
            </h1>

            <h4>New ideas</h4>

            <h1>
              <span className="small">With</span> you
            </h1>
            <p className="text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
              ab minima voluptatum natus ullam! Delectus sint possimus
              temporibus id eveniet!
            </p>
          </div>
          <div className="col-md-7">
            <img
              style={{ height: 400 }}
              src={banner}
              className="d-block w-100"
              alt=""
            />
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <Link
            to="service"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <button className="btn btn-success start">Let's start</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
