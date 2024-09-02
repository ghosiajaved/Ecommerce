import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import Navbar from './Navbar';

const Home = () => {
  
  return (
    <div style={styles.container}>
      <Navbar />
      <br />
      <h3>Products</h3><br />

      <Link to="/products" className="btn btn-dark" style={styles.productsLink}>
        Go to Products Page
      </Link>
      <br /><br/>
      <h3>Orders</h3><br />
      <Link to="/orders" className="btn btn-dark" style={styles.ordersLink}>
        Go to Orders Page
      </Link>

      <br /><br/>
      <h3>Categories</h3><br />
      <Link to="/categories" className="btn btn-dark" style={styles.categoriesLink}>
        Go to Category Page
      </Link>

      <br /><br/>
      <h3>Users</h3><br />
      <Link to="/users" className="btn btn-dark" style={styles.usersLink}>
        Go to Users Page
      </Link>
    </div>
  );
};

export default Home;

const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: 'white',
  },
  productsLink: {
    marginTop: '10px',
  },
  ordersLink: {
    marginTop: '10px',
  },
};
