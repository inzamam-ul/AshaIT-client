import React from "react";
import { Row } from "react-bootstrap";

import {
  faCheckCircle,
  faCheckSquare,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import Quality from "./Quality";
import { Container } from "react-bootstrap";

const WhyUs = () => {
  const qualities = [
    {
      key: 1,
      logo: faGraduationCap,
      name: "Quality Designs",
      description:
        "Hard Working and innovative team creating effective and quality designs from 2009",
    },
    {
      key: 2,
      logo: faCheckSquare,
      name: "Affordable and Fully Customized",
      description:
        "Unlock your ideas, someone is here who care you, more than you care for yourself!",
    },
    {
      key: 3,
      logo: faCheckCircle,
      name: "Great Support",
      description:
        "Our Friendly and Experienced team 24/7 ready to solve problems in a minute.",
    },
  ];
  return (
    <Container className="py-5">
      <h2 className="text-success pb-5">WHY CHOOSE US?</h2>
      <Row>
        {qualities.map((quality) => (
          <Quality key={quality.key} data={quality} />
        ))}
      </Row>
    </Container>
  );
};

export default WhyUs;
