import React from "react";
import Card from "react-bootstrap/Card";

const ServiceOverviewItem = ({ name, img, description, styles }) => {
  return (
    <Card
      className={`grow m-3 ${styles ? styles : ""}`}
      style={{ minWidth: "18rem", maxWidth: "21rem", flexBasis: "33.33%" }}
    >
      <Card.Img
        variant="top"
        src={img}
        className="mx-auto w-fc mt-2 img-fluid"
      />
      <Card.Body>
        <Card.Title className="w-fc mx-auto">{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ServiceOverviewItem;
