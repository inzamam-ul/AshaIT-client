import React from "react";
import { Row } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Iframe from "react-iframe";

const ContactUs = () => {
  return (
    <div style={{ backgroundColor: "#eaf6c4" }}>
      <Container className="py-5">
        <h2 className="text-success pb-3">CONTACT US</h2>
        <Row className="d-flex justify-content-center align-items-center">
          <div className="col-md-6 text-left">
            <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Your Name Here" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Your Email Here" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="email" placeholder="Subject" />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={5} />
              </Form.Group>
            </Form>
          </div>
          <div className="col-md-6">
            <Iframe
              url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4425.917631857413!2d88.63958061216654!3d23.838490674681193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f948a53fc97dad%3A0xb07578acb3273cf5!2sKulbaria%2C%20Bangladesh!5e1!3m2!1sen!2sus!4v1618572643634!5m2!1sen!2sus"
              height="400px"
              id="myId"
              className="map"
              display="initial"
              position="relative"
            />
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;
