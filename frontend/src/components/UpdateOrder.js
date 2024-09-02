import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateOrder = () => {
    const [orderId, setOrderId] = useState('');
    const [orderData, setOrderData] = useState({
        user_id: '',
        product: '',
        quantity: '',
    });
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isOrderFetched, setIsOrderFetched] = useState(false);
    const [formVisible, setFormVisible] = useState(true);

    // Fetch order details when orderId changes
    useEffect(() => {
        if (orderId) {
            const fetchOrderData = async () => {
                try {
                    const response = await axios.get(`http://localhost:3000/api/orders/${orderId}`);
                    setOrderData(response.data);
                    setIsOrderFetched(true);
                    setErrorMessage('');
                } catch (error) {
                    console.error('There was an error fetching the order data!', error);
                    setErrorMessage('Error fetching order data.');
                    setIsOrderFetched(false);
                }
            };
            fetchOrderData();
        }
    }, [orderId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setOrderData({ ...orderData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3000/api/orders/${orderId}`, orderData);
            setSuccessMessage('Order updated successfully!');
            setErrorMessage('');
            setIsOrderFetched(false);

            // Hide form and success message after 5 seconds
            setTimeout(() => {
                setFormVisible(false);
                setSuccessMessage('');
            }, 2000);

        } catch (error) {
            console.error('There was an error updating the order!', error);
            setErrorMessage('Error updating order.');
        }
    };

    return (
        <div style={styles.container}>
            {formVisible && (
                <form onSubmit={handleSubmit} style={styles.form}>
                    <h2 style={styles.heading}>Update Order</h2>
                    <input
                        type="text"
                        placeholder="Enter Order ID"
                        value={orderId}
                        onChange={(e) => setOrderId(e.target.value)}
                        style={styles.input}
                        required
                    />
                    {isOrderFetched ? (
                        <>
                            <input
                                type="number"
                                name="user_id"
                                placeholder="User ID"
                                value={orderData.user_id}
                                onChange={handleChange}
                                style={styles.input}
                                required
                            />
                            <input
                                type="number"
                                name="product"
                                placeholder="Product ID"
                                value={orderData.product}
                                onChange={handleChange}
                                style={styles.input}
                                required
                            />
                            <input
                                type="number"
                                name="quantity"
                                placeholder="Quantity"
                                value={orderData.quantity}
                                onChange={handleChange}
                                style={styles.input}
                                required
                            />
                            <button type="submit" style={styles.button}>Update Order</button>
                        </>
                    ) : (
                        <p style={styles.infoText}>Enter an order ID to fetch and update details.</p>
                    )}

                    {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                </form>
            )}
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: 'white',
    },
    form: {
        backgroundColor: '#fff',
        padding: '30px',
        borderRadius: '8px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        width: '500px',
    },
    heading: {
        textAlign: 'center',
        marginBottom: '20px',
        fontSize: '24px',
        color: '#333',
    },
    input: {
        width: '100%',
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '4px',
        border: '1px solid #ccc',
    },
    button: {
        width: '100%',
        padding: '10px',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: 'black',
        color: '#fff',
        fontSize: '16px',
        cursor: 'pointer',
    },
    infoText: {
        color: '#888',
        textAlign: 'center',
        marginBottom: '20px',
    },
};

export default UpdateOrder;
