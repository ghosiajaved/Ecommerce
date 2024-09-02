import React, { useState } from 'react';
import axios from 'axios';

const UpdateOrder = () => {
    const [order, setOrder] = useState({ id: '', user_id: '', product: '', quantity: '' });

    const handleUpdateOrder = async () => {
        try {
            await axios.put(`/orders/${order.id}`, order);
            setOrder({ id: '', user_id: '', product: '', quantity: '' });
        } catch (error) {
            console.error('Error updating order:', error);
        }
    };

    return (
        <div>
            <h4>Update Order</h4>
            <input
                type="number"
                placeholder="Order ID"
                value={order.id}
                onChange={(e) => setOrder({ ...order, id: e.target.value })}
            />
            <input
                type="number"
                placeholder="User ID"
                value={order.user_id}
                onChange={(e) => setOrder({ ...order, user_id: e.target.value })}
            />
            <input
                type="number"
                placeholder="Product ID"
                value={order.product}
                onChange={(e) => setOrder({ ...order, product: e.target.value })}
            />
            <input
                type="number"
                placeholder="Quantity"
                value={order.quantity}
                onChange={(e) => setOrder({ ...order, quantity: e.target.value })}
            />
            <button onClick={handleUpdateOrder} className="btn btn-dark">
                Update Order
            </button>
        </div>
    );
};

export default UpdateOrder;
