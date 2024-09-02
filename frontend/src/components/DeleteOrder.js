/* import React, { useState } from 'react';
import axios from 'axios';

const DeleteOrder = () => {
    const [orderId, setOrderId] = useState('');

    const handleDeleteOrder = async () => {
        try {
            await axios.delete(`http://localhost:3000/api/orders/${orderId}`);
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
 */


import React, { useState } from 'react';
import axios from 'axios';

const DeleteOrder = () => {
    const [orderId, setOrderId] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleDeleteOrder = async () => {
        try {
            await axios.delete(`http://localhost:3000/api/orders/${orderId}`);
            setSuccessMessage('Order deleted successfully!');
            setErrorMessage('');
            setOrderId('');

            // Clear the success message after a few seconds
            setTimeout(() => {
                setSuccessMessage('');
            }, 3000);
        } catch (error) {
            console.error('Error deleting order:', error);
            setErrorMessage('Failed to delete the order. Please try again.');
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
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>
    );
};

export default DeleteOrder;
