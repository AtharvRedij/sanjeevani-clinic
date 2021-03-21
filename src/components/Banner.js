import React from "react";
import Button from "react-bootstrap/Button";

const Banner = () => {
  return (
    <div className="section d-flex justify-content-between">
      <img src="./img/id.jpg" alt="doctor" />
      <div>
        <h1>Dr. Sanjeevani Joshi</h1>
        <h4>List of degrees goes here</h4>
        <div className="d-flex justify-content-around">
          <Button variant="outline-primary">Know More</Button>
          <Button variant="outline-primary">Contact Us</Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
