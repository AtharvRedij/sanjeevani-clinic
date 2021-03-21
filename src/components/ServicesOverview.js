import React from "react";
import ServiceOverviewItem from "./ServiceOverviewItem";
import { SERVICES } from "../data";

const ServicesOverview = () => {
  return (
    <div className="section">
      <h1 className="mx-auto w-fc mb-5">Our Featured Services</h1>
      <div className="d-flex justify-content-around flex-wrap">
        {SERVICES.map((service, i) => (
          <ServiceOverviewItem key={i} {...service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesOverview;
