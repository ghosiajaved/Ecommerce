import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = ({ onProductCreated }) => {
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    price: '',
    quantity: '',
    category: '' // This will be set to '1', '2', or '3' based on radio button selection
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/api/products', productData)
      .then(response => {
        onProductCreated(response.data);
        setProductData({
          name: '',
          description: '',
          price: '',
          quantity: '',
          category: ''
        });
        setSuccessMessage('Product created successfully!'); // Set success message
        setTimeout(() => setSuccessMessage(''), 3000);
      })
      .catch(error => {
        console.error('There was an error creating the product!', error);
      });
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.heading}>Add New Product</h2>
        <input 
          type="text" 
          name="name" 
          placeholder="Name" 
          value={productData.name} 
          onChange={handleChange} 
          style={styles.input}
          required 
        />
        <textarea 
          name="description" 
          placeholder="Description" 
          value={productData.description} 
          onChange={handleChange} 
          style={styles.textarea}
          required 
        />
        <input 
          type="number" 
          name="price" 
          placeholder="Price" 
          value={productData.price} 
          onChange={handleChange} 
          style={styles.input}
          required 
        />
        <input 
          type="number" 
          name="quantity" 
          placeholder="Quantity" 
          value={productData.quantity} 
          onChange={handleChange} 
          style={styles.input}
          required 
        />
        <label>Category</label><br/><br/>
        <div style={styles.radioGroup}>
          <label style={styles.radioLabel}>
            <input
              type="radio"
              name="category"
              value="1"
              checked={productData.category === '1'}
              onChange={handleChange}
              style={styles.radioInput}
              required
            />
            Clothing
          </label>
          <label style={styles.radioLabel}>
            <input
              type="radio"
              name="category"
              value="2"
              checked={productData.category === '2'}
              onChange={handleChange}
              style={styles.radioInput}
            />
            Snacks
          </label>
          <label style={styles.radioLabel}>
            <input
              type="radio"
              name="category"
              value="3"
              checked={productData.category === '3'}
              onChange={handleChange}
              style={styles.radioInput}
            />
            Accessories
          </label>
        </div>

        <button type="submit" style={styles.button}>Create Product</button>

        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#9EC8B9',
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
  textarea: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    resize: 'none',
    height: '100px',
  },
  radioGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  radioLabel: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '14px',
    color: '#333',
  },
  radioInput: {
    marginRight: '5px',
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
};

export default AddProduct;
