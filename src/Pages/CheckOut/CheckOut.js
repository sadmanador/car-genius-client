import React from "react";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const service = useLoaderData();
  const { title, price, description, _id } = service;

  return (
    <div className="text-center">
      <div className="bg-base-200 p-20 rounded-lg">
        <h1 className="text-3xl font-semibold">{title}</h1>
        <h3 className="text-2xl font-semibold my-6">Price: {price}</h3>
        <form>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Phone"
              className="input input-bordered w-full"
            />
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
            />
          </div>
          <textarea className="textarea textarea-bordered w-full h-full my-6" placeholder="Your Message"></textarea>
          <button className="btn bg-orange-600 border-none hover:bg-orange-700 hover:opacity-90 w-full">Order Confirm</button>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
