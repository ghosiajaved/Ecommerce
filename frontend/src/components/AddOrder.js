/* import React, { useState } from 'react';
import axios from 'axios';

const AddOrder = ({ onOrderCreated }) => {
    const [order, setOrder] = useState({ user_id: '', product: '', quantity: '' });

    const handleCreateOrder = async () => {
        try {
            // Convert fields to integers
            const newOrder = {
                user_id: parseInt(order.user_id, 10),
                product: parseInt(order.product, 10),
                quantity: parseInt(order.quantity, 10),
            };

            const response = await axios.post('http://localhost:3000/api/orders', newOrder);
            onOrderCreated(response.data);
            setOrder({ user_id: '', product: '', quantity: '' });
        } catch (error) {
            console.error('Error creating order:', error); // Log detailed error
        }
    };

    return (
        <div>
            <h4>Add Order</h4>
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
            <button onClick={handleCreateOrder} className="btn btn-dark">
                Create Order
            </button>
        </div>
    );
};

export default AddOrder;
 */


import React, { useState } from 'react';
import axios from 'axios';

const AddOrder = ({ onOrderCreated }) => {
    const [order, setOrder] = useState({ user_id: '', product: '', quantity: '' });
    const [successMessage, setSuccessMessage] = useState('');

    const handleCreateOrder = async () => {
        try {
            // Convert fields to integers
            const newOrder = {
                user_id: parseInt(order.user_id, 10),
                product: parseInt(order.product, 10),
                quantity: parseInt(order.quantity, 10),
            };

            const response = await axios.post('http://localhost:3000/api/orders', newOrder);
            onOrderCreated(response.data);
            setOrder({ user_id: '', product: '', quantity: '' });
            setSuccessMessage('Order created successfully!'); // Set success message
            setTimeout(() => setSuccessMessage(''), 3000); // Clear message after 3 seconds
        } catch (error) {
            console.error('Error creating order:', error); // Log detailed error
        }
    };

    return (
        <div>
            <h4>Add Order</h4>
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
            <button onClick={handleCreateOrder} className="btn btn-dark">
                Create Order
            </button>
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>} {/* Display success message */}
        </div>
    );
};

export default AddOrder;
