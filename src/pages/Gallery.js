import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { GALLERY_DATA } from "./../data";

const Gallery = () => {
  return (
    <div className="mt-4 container-fluid">
      <Carousel>
        {GALLERY_DATA.map(({ title, img }, i) => (
          <Carousel.Item
            key={i}
            style={{ height: "fit-content", maxHeight: "600px" }}
          >
            <img className="d-block w-100" src={img} />
            <Carousel.Caption>
              <h3>{title}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Gallery;
