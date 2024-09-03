import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setShowModal(true);
  };

  const confirmLogout = () => {
    localStorage.removeItem('token'); // Clear the token
    navigate('/login'); // Redirect to login/signup page
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div style={styles.container}>
      <Navbar />
      <br />

      <h3>Products</h3><br />
      <Link to="/products" className="btn btn-dark" style={styles.link}>Go to Products Page</Link>
      <br /><br />

      <h3>Orders</h3><br />
      <Link to="/orders" className="btn btn-dark" style={styles.link}>Go to Orders Page</Link>
      <br /><br />

      <h3>Categories</h3><br />
      <Link to="/categories" className="btn btn-dark" style={styles.link}>Go to Category Page</Link>
      <br /><br />

      <h3>Users</h3><br />
      <Link to="/users" className="btn btn-dark" style={styles.link}>Go to Users Page</Link>
      <br /><br />

      <h3>Order-Products</h3><br />
      <Link to="/order-products" className="btn btn-dark" style={styles.link}>Go to Order-Products Page</Link>
      <br /><br />

      {/* Logout Button */}
      <Button variant="danger" onClick={handleLogout} style={styles.logoutButton}>Logout</Button>

      {/* Logout Confirmation Modal */}
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want to leave the application?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>No</Button>
          <Button variant="primary" onClick={confirmLogout}>Yes</Button>
        </Modal.Footer>
      </Modal>
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
  link: {
    marginTop: '10px',
  },
  logoutButton: {
    marginTop: '20px',
  }
};
