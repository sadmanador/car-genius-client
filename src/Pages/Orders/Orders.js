import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const Orders = () => {
    const {user} = useContext(AuthContext);
    const url = `http://localhost:5000/orders?email=${user.email}`;
    const [orders, setOrders] = useState({});

    useEffect(() => {
      fetch(url)
      .then(res => res.json())
      .then(data => setOrders(data))
    }
    ,[user?.email])

    return (
        <div className='text-center'>
            <h1 className='text-4xl font-semibold'>Orders</h1>
            <h2 className='text-2xl font-semibold'>You have {orders.length} orders</h2>
        </div>
    );
};

export default Orders;