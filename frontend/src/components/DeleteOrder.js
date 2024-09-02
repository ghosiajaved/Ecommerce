import React, { useState } from 'react';
import axios from 'axios';

const DeleteOrder = () => {
    const [orderId, setOrderId] = useState('');

    const handleDeleteOrder = async () => {
        try {
            await axios.delete(`/orders/${orderId}`);
            setOrderId('');
        } catch (error) {
            console.error('Error deleting order:', error);
        }
    };

    return (
        <div>
            <h4>Delete Order</h4>
            <input
                type="number"
                placeholder="Order ID"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
            />
            <button onClick={handleDeleteOrder} className="btn btn-dark">
                Delete Order
            </button>
        </div>
    );
};

export default DeleteOrder;
