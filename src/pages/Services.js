import React from "react";
import Service from "./../components/Service";
import { SERVICES } from "./../data";

const Services = () => {
  return (
    <div className="section">
      <h1 className="mx-auto w-fc mb-5">Our Featured Services</h1>
      <div className="d-flex justify-content-around flex-wrap">
        {SERVICES.map((service, i) => (
          <Service key={i} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
