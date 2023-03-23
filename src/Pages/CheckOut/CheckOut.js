import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const CheckOut = () => {
  const service = useLoaderData();
  const { title, price, description, _id } = service;
  const { user } = useContext(AuthContext);

  const handleCheckout = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = `${form.fname.value} ${form.lname.value}`;
    const email = user.email;
    const phone = form.phone.value;
    const message = form.message.value;

    const order = {
      service_id: _id,
      email,
      name,
      phone,
      message,
    };

    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("successfully added to db");
          form.reset();
        }
      })
      .catch((er) => console.error(er));
  };

  return (
    <div className="text-center">
      <div className="check-out-img mb-10">
        <h2 className="text-5xl font-bold">Check Out</h2>
      </div>
      <div className="bg-base-200 p-20 rounded-lg">
        <h1 className="text-3xl font-semibold">{title}</h1>
        <h3 className="text-2xl font-semibold my-6">Price: {price}</h3>
        <form onSubmit={handleCheckout}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <input
              name="fname"
              type="text"
              placeholder="First Name"
              className="input input-bordered w-full"
              required
            />
            <input
              name="lname"
              type="text"
              placeholder="Last Name"
              className="input input-bordered w-full"
              required
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone"
              className="input input-bordered w-full"
              required
            />
            <input
              name="email"
              type="email"
              placeholder={user?.email}
              readOnly
              className="input input-bordered w-full"
            />
          </div>
          <textarea
            name="message"
            className="textarea textarea-bordered w-full h-full my-6"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn bg-orange-600 border-none hover:bg-orange-700 hover:opacity-90 w-full">
            Order Confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
