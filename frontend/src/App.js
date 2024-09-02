import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Form from './components/Form';
import Home from './components/Home';
import Products from './components/Products'; // Import the Products component
import Orders from './components/Orders';
import Categories from './components/Categories';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
    <Routes>
      {/* Redirect to login if no route is matched or if user is not authenticated */}
      <Route path="/" element={<Navigate to="/login" />} />
      
      {/* Login and Signup routes */}
      <Route path="/signup" element={<Form isSignup />} />
      <Route path="/login" element={<Form />} />

      {/* Protected routes */}
      <Route path="/home" element={<PrivateRoute element={<Home />} />} />
      <Route path="/products" element={<PrivateRoute element={<Products />} />} />
      <Route path="/orders" element={<PrivateRoute element={<Orders />} />} />
      <Route path="/categories" element={<PrivateRoute element={<Categories />} />} />
    </Routes>
  </Router>
  );
}

export default App;
