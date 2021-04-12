import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { ABOUT_CONTENT } from "../data";

const About = () => {
  return (
    <Row className="mt-5">
      <Col xs={12} md={5}>
        <Image src="./img/id.jpg" rounded fluid />
      </Col>
      <Col xs={12} md={7}>
        <h2>Dr. Sanjeevani Joshi</h2>
        <h5 className="mt-4">
          {ABOUT_CONTENT.map((paragraph) => (
            <p>{paragraph}</p>
          ))}
        </h5>
      </Col>
    </Row>
  );
};

export default About;
