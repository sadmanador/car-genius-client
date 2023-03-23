import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";

const serviceCard = ({ service }) => {
  const { _id, img, title, price } = service;

  
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={img}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold text-2xl">{title}</h2>
        <p className="text-start text-xl text-orange-600 font-bold">Price: ${price}</p>
        <Link to={`/checkout/${_id}`} className="card-actions justify-end">
          <button  className="btn btn-error btn-outline"><BsArrowRightShort/></button>
        </Link>
      </div>
    </div>
  );
};

export default serviceCard;
