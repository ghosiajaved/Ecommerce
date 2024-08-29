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
      })
      .catch(error => {
        console.error('There was an error creating the product!', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="name" 
        placeholder="Name" 
        value={productData.name} 
        onChange={handleChange} 
        required 
      />
      <textarea 
        name="description" 
        placeholder="Description" 
        value={productData.description} 
        onChange={handleChange} 
        required 
      />
      <input 
        type="number" 
        name="price" 
        placeholder="Price" 
        value={productData.price} 
        onChange={handleChange} 
        required 
      />
      <input 
        type="number" 
        name="quantity" 
        placeholder="Quantity" 
        value={productData.quantity} 
        onChange={handleChange} 
        required 
      />
      <div>
        <label>
          <input
            type="radio"
            name="category"
            value="1"
            checked={productData.category === '1'}
            onChange={handleChange}
            required
          />
          Clothing
        </label>
        <label>
          <input
            type="radio"
            name="category"
            value="2"
            checked={productData.category === '2'}
            onChange={handleChange}
          />
          Snacks
        </label>
        <label>
          <input
            type="radio"
            name="category"
            value="3"
            checked={productData.category === '3'}
            onChange={handleChange}
          />
          Accessories
        </label>
      </div>

      <button type="submit">Create Product</button>
    </form>
  );
};

export default AddProduct;
