import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const About = () => {
  return (
    <Row className="mt-5">
      <Col xs={12} md={5}>
        <Image src="./img/id.jpg" rounded fluid />
      </Col>
      <Col xs={12} md={7}>
        <h2>Dr. Sanjeevani Joshi</h2>
        <h5 className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum
          posuere lorem ipsum dolor sit. Dolor magna eget est lorem ipsum dolor
          sit. Euismod nisi porta lorem mollis aliquam ut porttitor leo.
          Scelerisque felis imperdiet proin fermentum leo. Enim ut sem viverra
          aliquet eget sit. Varius duis at consectetur lorem donec massa sapien
          faucibus et. Venenatis urna cursus eget nunc. Nullam ac tortor vitae
          purus faucibus ornare suspendisse sed. Enim nulla aliquet porttitor
          lacus luctus accumsan. Turpis massa sed elementum tempus egestas sed
          sed. Elementum integer enim neque volutpat ac tincidunt vitae semper.
          Nullam vehicula ipsum a arcu cursus vitae congue. Augue neque gravida
          in fermentum et sollicitudin ac orci.
        </h5>
      </Col>
    </Row>
  );
};

export default About;
