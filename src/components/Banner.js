import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

const Banner = () => {
  return (
    <>
      <Row className="mt-5">
        <Col sm={12} md={5}>
          <Image src="./img/id.jpg" roundedCircle />
        </Col>
        <Col className="mt-5 text-right">
          <h1>Dr. Sanjeevani Joshi</h1>
          <h4>
            Doctorate and PG Gold Medalist in Nutrition with over 20 years of
            experience.
          </h4>
          <div className="mt-5 d-flex justify-content-end">
            <Button size="lg" variant="outline-primary" className="mr-3">
              Know More
            </Button>
            <Button size="lg" variant="outline-primary">
              Contact Us
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Banner;
