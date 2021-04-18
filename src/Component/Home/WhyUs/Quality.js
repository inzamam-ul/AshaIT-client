import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "react-bootstrap";
const Quality = (props) => {
  const { name, logo, description } = props.data;
  return (
    <div className="my-3 col-md-4">
      <Card style={{ border: 0 }} className="text-center">
        <Card.Body className="d-flex justify-content-center">
          <Card.Title>
            <FontAwesomeIcon
              style={{ color: "#c6db83", fontSize: "70px" }}
              icon={logo}
            />
          </Card.Title>
        </Card.Body>
        <Card.Footer className="border-0 bg-white">
          <Card.Title className="text-capitalize fw-bold">{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Quality;
