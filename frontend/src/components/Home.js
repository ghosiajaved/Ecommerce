/* import React from 'react'
import AddProduct from './AddProduct';
import ProductList from './ProductList';
import { useState } from 'react';

export default function Home() {

  const [view, setView] = useState(''); // 'add' or 'list'

  const handleProductCreated = (newProduct) => {
    // Handle the new product creation logic here if needed
    console.log('Product created:', newProduct);

  };

  return (
    <div>
      <h1>HOME</h1>
      
      <button onClick={() => setView('add')}>Add Product</button>
      <button onClick={() => setView('list')}>View Product List</button>

      {view === 'add' && <AddProduct categories={categories} onProductCreated={handleProductCreated} />}
      {view === 'list' && <ProductList />}

    </div>
  )
}
 */

import React, { useState } from 'react';
import axios from 'axios';
import AddProduct from './AddProduct';
import ProductList from './ProductList';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [showProductList, setShowProductList] = useState(false);

  const fetchProducts = () => {
    axios.get('/api/products')
      .then(response => {
        setProducts(response.data);
        setShowProductList(true);
      })
      .catch(error => {
        console.error('There was an error fetching products!', error);
      });
  };

  const handleProductCreated = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={fetchProducts}>Show Products</button>
      <AddProduct onProductCreated={handleProductCreated} />
      {showProductList && <ProductList products={products} />}
    </div>
  );
};

export default Home;
