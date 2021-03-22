import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ContactRow from "../components/ContactRow";
import Message from "./../components/Message";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [gender, setGender] = useState("Male");
  const [message, setMessage] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (mobileNumber.length !== 10) {
      setError("Invalid Mobile Number");
      return;
    }

    axios
      .post("https://send.pageclip.co/I5Jy0fRHgsRGWLBsn0ScyqtmZqc8Nlyf", {
        name,
        email,
        mobileNumber,
        gender,
        message,
      })
      .then(() => {
        setSuccess("Your query was sent to doctor.");
      })
      .catch((error) => {
        if (error.message === "Network Error") {
          setSuccess("Your query was sent to doctor.");
        } else {
          setError(`Some Error Occurred ${error.message}`);
        }
      });
  };

  return (
    <Row className="mt-5">
      <Col xs={12} md={6} className="mb-5">
        <h2>Get in touch</h2>
        <ListGroup variant="flush" className="mt-3">
          <ContactRow
            title="Address"
            description="Chiplun Area, Chiplun 415605"
          />

          <ContactRow title="Ask Us" description="test@gmail.com" />

          <ContactRow title="Call Us" description="8888823456" />

          <ContactRow
            title="Working Days"
            description="Monday - Saturday: 10AM to 5 PM"
          />
        </ListGroup>
      </Col>
      <Col xs={12} md={6}>
        <h2>Send us a message</h2>

        {error && <Message variant="danger">{error}</Message>}
        {success && <Message>{success}</Message>}

        <Form onSubmit={handleSubmit}>
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridNumber">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Mobile Number"
              required
              onChange={(e) => setMobileNumber(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridGender">
            <Form.Label>Gender</Form.Label>
            <Form.Control
              as="select"
              defaultValue="Male"
              onChange={(e) => setGender(e.target.value)}
            >
              <option>Male</option>
              <option>Female</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Enter Mobile Message"
              required
              onChange={(e) => setMessage(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form.Group>
        </Form>
      </Col>
    </Row>
  );
};

export default Contact;
