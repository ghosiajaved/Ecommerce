import React from 'react';
import AddOrder from './AddOrder';
import OrderList from './OrderList';
import UpdateOrder from './UpdateOrder';
import DeleteOrder from './DeleteOrder'; 
import Navbar from './Navbar';

const Orders = () => {
    const [showAddOrder, setShowAddOrder] = React.useState(false);
    const [showOrderList, setShowOrderList] = React.useState(false);
    const [showUpdateOrder, setShowUpdateOrder] = React.useState(false);
    const [showDeleteOrder, setShowDeleteOrder] = React.useState(false);

    const handleOrderCreated = (newOrder) => {
        console.log('Order created:', newOrder);
    };

    return (
        <div style={styles.container}>
            <Navbar/>
            <br/>
            <h3>Orders Management</h3>
            <br/>
            <button
                onClick={() => {
                    setShowAddOrder(!showAddOrder);
                    setShowOrderList(false);
                    setShowUpdateOrder(false);
                    setShowDeleteOrder(false);
                }}
                className="btn btn-dark"
            >
                Add Order
            </button>

            <button
                onClick={() => {
                    setShowOrderList(!showOrderList);
                    setShowAddOrder(false);
                    setShowUpdateOrder(false);
                    setShowDeleteOrder(false);
                }}
                className="btn btn-dark"
            >
                List Orders
            </button>

            <button
                onClick={() => {
                    setShowUpdateOrder(!showUpdateOrder);
                    setShowAddOrder(false);
                    setShowOrderList(false);
                    setShowDeleteOrder(false);
                }}
                className="btn btn-dark"
            >
                Update Order
            </button>

            <button
                onClick={() => {
                    setShowDeleteOrder(!showDeleteOrder);
                    setShowAddOrder(false);
                    setShowOrderList(false);
                    setShowUpdateOrder(false);
                }}
                className="btn btn-dark"
            >
                Delete Order
            </button>

            {showAddOrder && <AddOrder onOrderCreated={handleOrderCreated} />}
            {showOrderList && <OrderList />}
            {showUpdateOrder && <UpdateOrder />}
            {showDeleteOrder && <DeleteOrder />}
        </div>
    );
};

export default Orders;

const styles = {
    container: {
        
    },
};
