import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from backend
    axios.get('http://localhost:3000/api/products/') 
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching products!', error);
      });
  }, []); // Empty dependency array means this runs once when the component mounts

  return (
    <div style={styles.productList}>
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} style={styles.productCard}>
            <h3 style={styles.productName}>{product.name}</h3>
            <p style={styles.productDescription}>{product.description}</p>
            <p style={styles.productPrice}>Price: Rs. {product.price}</p>
            <p style={styles.productQuantity}>Quantity: {product.quantity}</p>
            <p style={styles.productCategory}>Category: {product.category}</p>
          </div>
        ))
      ) : (
        <p style={styles.noProducts}>No products available.</p>
      )}
    </div>
  );
};

export default ProductList;

const styles = {
  productList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: '40px',
    backgroundColor:'white',
  },
  productCard: {
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
  productCardHover: {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
  },
  productName: {
    fontSize: '1.5rem',
    marginBottom: '10px',
  },
  productDescription: {
    fontSize: '1rem',
    marginBottom: '10px',
  },
  productPrice: {
    fontSize: '1.2rem',
    marginBottom: '10px',
  },
  productQuantity: {
    fontSize: '1rem',
    marginBottom: '10px',
  },
  productCategory: {
    fontSize: '1rem',
    marginBottom: '10px',
  },
  noProducts: {
    fontSize: '1.2rem',
    color: '#777',
  },
};
