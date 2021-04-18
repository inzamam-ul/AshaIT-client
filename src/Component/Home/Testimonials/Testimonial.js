import React from "react";
import { Card } from "react-bootstrap";

const Testimonial = (props) => {
  const { name, picture, review } = props.data;

  return (
    <div className="my-3 p-2">
      <Card className="shadow text-center">
        <Card.Body className="d-flex justify-content-center">
          <Card.Title>
            <img
              style={{
                height: 130,
                borderRadius: "50%",
              }}
              className="product-img"
              src={picture}
              alt=""
            />
          </Card.Title>
        </Card.Body>
        <Card.Footer className="border-0 bg-white">
          <Card.Title className="text-capitalize fw-bold">{name}</Card.Title>
          <Card.Text>{review}</Card.Text>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Testimonial;
