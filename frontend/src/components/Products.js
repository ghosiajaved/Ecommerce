import React from 'react';
import AddProduct from './AddProduct';
import ProductList from './ProductList';
import UpdateProduct from './UpdateProduct';
import DeleteProduct from './DeleteProduct'; // Import DeleteProduct component

const Products = () => {
  const [showAddProduct, setShowAddProduct] = React.useState(false);
  const [showProductList, setShowProductList] = React.useState(false);
  const [showUpdateProduct, setShowUpdateProduct] = React.useState(false);
  const [showDeleteProduct, setShowDeleteProduct] = React.useState(false);

  const handleProductCreated = (newProduct) => {
    console.log('Product created:', newProduct);
  };

  return (
    <div style={styles.container}>
      <h3>Products Management</h3>
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
        onClick={() => {
          setShowUpdateProduct(!showUpdateProduct);
          setShowAddProduct(false);
          setShowProductList(false);
          setShowDeleteProduct(false);
        }}
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
      {showDeleteProduct && <DeleteProduct />}
    </div>
  );
};

export default Products;

const styles = {
  container: {
    padding: '20px',
  },
};
