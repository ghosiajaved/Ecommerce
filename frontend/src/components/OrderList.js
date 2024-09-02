/* import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderList = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/orders/');
            setOrders(response.data);
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    };

    return (
        <div style={styles.orderList}>
            {orders.length > 0 ? (
                orders.map((order) => (
                    <div key={order.id} style={styles.orderCard}>
                        <h3 style={styles.orderId}>Order ID: {order.id}</h3>
                        <p style={styles.orderDetail}>User ID: {order.user_id}</p>
                        <p style={styles.orderDetail}>Product ID: {order.product}</p>
                        <p style={styles.orderDetail}>Quantity: {order.quantity}</p>
                    </div>
                ))
            ) : (
                <p style={styles.noOrders}>No orders available.</p>
            )}
        </div>
    );
};

export default OrderList;

const styles = {
    orderList: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: '40px',
        backgroundColor: 'white',
    },
    orderCard: {
        width: '300px',
        border: '1px solid #ccc',
        padding: '20px',
        margin: '10px',
        borderRadius: '10px',
        backgroundColor: '#333',
        color: '#fff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    },
    orderCardHover: {
        transform: 'scale(1.05)',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
    },
    orderId: {
        fontSize: '1.5rem',
        marginBottom: '10px',
    },
    orderDetail: {
        fontSize: '1rem',
        marginBottom: '10px',
    },
    noOrders: {
        fontSize: '1.2rem',
        color: '#777',
    },
};
 */


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderList = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/orders/');
            setOrders(response.data);
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    };

    return (
        <div style={styles.orderList}>
            {orders.length > 0 ? (
                orders.map((order) => (
                    <div key={order.id} style={styles.orderCard}>
                        <h3 style={styles.orderId}>Order ID: {order.id}</h3>
                        <p style={styles.orderDetail}>User ID: {order.user_id}</p>
                        <p style={styles.orderDetail}>Product ID: {order.product}</p>
                        <p style={styles.orderDetail}>Quantity: {order.quantity}</p>
                        <p style={styles.orderDetail}>Order Date: {new Date(order.order_date).toLocaleString()}</p>
                    </div>
                ))
            ) : (
                <p style={styles.noOrders}>No orders available.</p>
            )}
        </div>
    );
};

export default OrderList;

const styles = {
    orderList: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: '40px',
        backgroundColor: 'white',
    },
    orderCard: {
        width: '300px',
        border: '1px solid #ccc',
        padding: '20px',
        margin: '10px',
        borderRadius: '10px',
        backgroundColor: '#333',
        color: '#fff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    },
    orderId: {
        fontSize: '1.5rem',
        marginBottom: '10px',
    },
    orderDetail: {
        fontSize: '1rem',
        marginBottom: '10px',
    },
    noOrders: {
        fontSize: '1.2rem',
        color: '#777',
    },
};
