import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Testimonial from "./Testimonial";
import Slider from "react-slick";
import { useState } from "react";
import axios from "axios";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    axios.get("https://asha-it-server.vercel.app/reviews").then((res) => {
      setTestimonials(res.data);
    });
  }, []);

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  function resize() {
    setWindowSize(window.innerWidth);
  }

  window.onresize = resize;

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: windowSize < 780 ? 1 : 3,
    speed: 500,
  };

  return (
    <div className="py-5 px-3" style={{ backgroundColor: "#eaf6c4" }}>
      <Container>
        <h2 className="py-3 text-success">TESTIMONIAL</h2>
        <Slider className="row" {...settings}>
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} data={testimonial} />
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default Testimonials;
