import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import OrderItems from "./OrderItems/OrderItems";

const Orders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user?.email]);

  return (
    <div className="text-center bg-base-200 p-16 rounded-lg">
      <h1 className="text-4xl font-semibold">Orders</h1>
      <h2 className="text-2xl font-semibold">
        You have {orders.length} orders
      </h2>
      <div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Service</th>
                <th>Client</th>
                <th>email</th>
                <th>phone</th>
                <th>edit</th>
                <th>delete</th>
              </tr>
            </thead>
            <tbody>
            {
                orders.map((order) => (
                  <OrderItems order={order} key={order._id}></OrderItems>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
