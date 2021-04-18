import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = (props) => {
  const { name, price, imgUrl, description, _id } = props.data;
  return (
    <div className="col-md-4 my-3">
      <Card className="shadow">
        <Card.Body>
          <Card.Title className="thumbnail">
            <img
              style={{ height: 200 }}
              className="product-img"
              src={imgUrl}
              alt=""
            />
          </Card.Title>
        </Card.Body>
        <Card.Footer className="border-0 bg-white">
          <Card.Title className="text-left text-capitalize fw-bold">
            {name}
          </Card.Title>
          <Card.Text className="text-left">{description}</Card.Text>

          <div className="d-flex justify-content-between align-items-center">
            <h5 className="text-success">$ {price}</h5>
            <Link to={`/admin/checkout/${name}/${_id}`}>
              <button className="btn btn-success">Let's start</button>
            </Link>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Service;
