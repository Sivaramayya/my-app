import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './login/Login';
import Welcome from './login/Welcome';
import LoginFailed from './login/LoginFailed';

import Navbar from './redux-store/Navbar';
import ProductList from './redux-store/ProductList';
import Cart from './redux-store/Cart';


const AppRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>

        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
