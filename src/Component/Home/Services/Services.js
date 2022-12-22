import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get("https://asha-it-server.vercel.app/services").then((res) => {
      setServices(res.data);
    });
  }, []);

  return (
    <Container className="py-5">
      <h2 className="my-5 text-underline text-success">WHAT WE OFFER</h2>
      <Row id="service">
        {services.map((service) => (
          <Service key={service._id} data={service} />
        ))}
      </Row>
      <button className="btn btn-success start mb-5">Explore More</button>
    </Container>
  );
};

export default Services;
