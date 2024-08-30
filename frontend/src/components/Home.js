import React, { useState } from 'react';
import AddProduct from './AddProduct';
import ProductList from './ProductList';
import Navbar from './Navbar';

const Home = () => {
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [showProductList, setShowProductList] = useState(false);

  const handleProductCreated = (newProduct) => {
    // This callback can be used to handle product creation if needed
    console.log('Product created:', newProduct);
    //setShowProductList(true); // Optionally show the product list after adding a product
  };

  return (
    <div style={styles.container}>
      <Navbar />
      <br/>
      <h3>Products</h3><br/>

      <button onClick={() => {
        setShowAddProduct(!showAddProduct);
        setShowProductList(false); // Hide the product list if it's open
      }}
        className="btn btn-dark">Add Product</button>

      <button onClick={() => {
        setShowProductList(!showProductList);
        setShowAddProduct(false); // Hide the add product form if it's open
      }}
        className="btn btn-dark">List Products</button>

      {showAddProduct && <AddProduct onProductCreated={handleProductCreated} />}
      {showProductList && <ProductList />}
    </div>
  );
};

export default Home;

const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#9EC8B9',
  }
};
