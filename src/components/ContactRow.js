import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

const ContactRow = ({ title, description }) => {
  return (
    <ListGroup.Item>
      <h5>
        <strong>{title}</strong>
      </h5>
      {description}
    </ListGroup.Item>
  );
};

export default ContactRow;
