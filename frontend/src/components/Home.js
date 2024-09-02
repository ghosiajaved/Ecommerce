/* 
import React, { useState } from 'react';
import AddProduct from './AddProduct';
import ProductList from './ProductList';
import UpdateProduct from './UpdateProduct';
import Navbar from './Navbar';

const Home = () => {
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [showProductList, setShowProductList] = useState(false);
  const [showUpdateProduct, setShowUpdateProduct] = useState(false);
  const [productIdOrName, setProductIdOrName] = useState('');

  const handleProductCreated = (newProduct) => {
    console.log('Product created:', newProduct);
  };

  const handleUpdateClick = () => {
    setShowUpdateProduct(true);
  };

  return (
    <div style={styles.container}>
      <Navbar />
      <br />
      <h3>Products</h3><br />

      <button
        onClick={() => {
          setShowAddProduct(!showAddProduct);
          setShowProductList(false);
          setShowUpdateProduct(false);
        }}
        className="btn btn-dark"
      >
        Add Product
      </button>

      <button
        onClick={() => {
          setShowProductList(!showProductList);
          setShowAddProduct(false);
          setShowUpdateProduct(false);
        }}
        className="btn btn-dark"
      >
        List Products
      </button>

      <button
        onClick={handleUpdateClick}
        className="btn btn-dark"
      >
        Update Product
      </button>

      {showAddProduct && <AddProduct onProductCreated={handleProductCreated} />}
      {showProductList && <ProductList />}
      {showUpdateProduct && <UpdateProduct />}
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
  }
};

//#9EC8B9
 */


import React, { useState } from 'react';
import AddProduct from './AddProduct';
import ProductList from './ProductList';
import UpdateProduct from './UpdateProduct';
import DeleteProduct from './DeleteProduct'; // Import the DeleteProduct component
import Navbar from './Navbar';

const Home = () => {
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [showProductList, setShowProductList] = useState(false);
  const [showUpdateProduct, setShowUpdateProduct] = useState(false);
  const [showDeleteProduct, setShowDeleteProduct] = useState(false); // State for showing DeleteProduct

  const handleProductCreated = (newProduct) => {
    console.log('Product created:', newProduct);
  };

  const handleUpdateClick = () => {
    setShowUpdateProduct(true);
  };

  return (
    <div style={styles.container}>
      <Navbar />
      <br />
      <h3>Products</h3><br />

      <button
        onClick={() => {
          setShowAddProduct(!showAddProduct);
          setShowProductList(false);
          setShowUpdateProduct(false);
          setShowDeleteProduct(false);
        }}
        className="btn btn-dark"
      >
        Add Product
      </button>

      <button
        onClick={() => {
          setShowProductList(!showProductList);
          setShowAddProduct(false);
          setShowUpdateProduct(false);
          setShowDeleteProduct(false);
        }}
        className="btn btn-dark"
      >
        List Products
      </button>

      <button
        onClick={handleUpdateClick}
        className="btn btn-dark"
      >
        Update Product
      </button>

      <button
        onClick={() => {
          setShowDeleteProduct(!showDeleteProduct);
          setShowAddProduct(false);
          setShowProductList(false);
          setShowUpdateProduct(false);
        }}
        className="btn btn-dark"
      >
        Delete Product
      </button>

      {showAddProduct && <AddProduct onProductCreated={handleProductCreated} />}
      {showProductList && <ProductList />}
      {showUpdateProduct && <UpdateProduct />}
      {showDeleteProduct && <DeleteProduct />} {/* Render DeleteProduct when showDeleteProduct is true */}
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
  }
};
