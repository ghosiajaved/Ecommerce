import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderList = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const response = await axios.get('/orders');
            setOrders(response.data);
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    };

    return (
        <div>
            <h4>Order List</h4>
            <ul>
                {orders.map((order) => (
                    <li key={order.id}>
                        {order.id}: User ID {order.user_id}, Product {order.product}, Quantity {order.quantity}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrderList;
