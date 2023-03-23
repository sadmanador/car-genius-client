import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="text-center my-40">
      <h4 className="text-2xl font-semibold text-orange-600">Service</h4>
      <h2 className="font-bold text-5xl my-5">Our Service Area</h2>
      <p className="text-lg">
        the majority have suffered alteration in some form, by injected humour,
        or Randomized <br /> words which don't look even slightly believable.
      </p>
      <div className="grid grid-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        {
          services.map(service => <ServiceCard
          key={service._id}
          service={service}
          ></ServiceCard>)
        }
      </div>
    </div>
  );
};

export default Service;
