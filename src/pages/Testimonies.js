import React from "react";
import TestimonyItem from "./../components/TestimonyItem";
import { TESTIMONIES } from "../data";

const Testimonies = () => {
  return (
    <div className="mt-4">
      <h1 className="mx-auto w-fc mb-4">What do they say?</h1>
      <div className="d-flex justify-content-around flex-wrap">
        {TESTIMONIES.map((testimony, i) => (
          <TestimonyItem key={i} {...testimony} />
        ))}
      </div>
    </div>
  );
};

export default Testimonies;
