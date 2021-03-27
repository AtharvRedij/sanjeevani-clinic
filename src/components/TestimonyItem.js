import React from "react";
import Card from "react-bootstrap/Card";

const TestimonyItem = ({ img, name, review }) => {
  return (
    <Card className="grow m-3" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text
          style={{
            height: "18rem",
            overflowY: "scroll",
            textAlign: "justify",
          }}
          className="pr-3"
        >
          {review}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default TestimonyItem;
