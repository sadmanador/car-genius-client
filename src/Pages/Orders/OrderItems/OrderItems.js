import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AiFillCloseCircle, } from "react-icons/ai";

const OrderItems = ({ order, handleDelete, handleStatusUpdate }) => {
  const { _id, service_id, phone, name, email, status } = order;
  const [orderService, setOrderService] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/services/${service_id}`)
      .then((res) => res.json())
      .then((data) => setOrderService(data));
  }, [service_id]);

  

  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className=" w-24 h-24 rounded">
              <img
                src={orderService?.img && orderService.img}
                alt="Avatar Tailwind CSS Component"
                className=""
              />
            </div>
          </div>
          <div>
            <div className="font-bold">
              {orderService?.title && orderService.title}
            </div>
            <div className="text-sm opacity-50">
              Price: ${orderService?.price && orderService.price}
            </div>
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <th>
        <button 
        className={status ? "btn btn-success btn-xs" : "btn btn-error btn-xs"}
        onClick={()=> handleStatusUpdate(_id)} >
          {
            status ? status : "Pending"
          }
        </button>
      </th>
      <th>
        <button
          className="btn btn-ghost btn-xs text-2xl"
          onClick={() => handleDelete(_id)}
        >
          <AiFillCloseCircle className="text-red-600" />
        </button>
      </th>
    </tr>
  );
};

export default OrderItems;
