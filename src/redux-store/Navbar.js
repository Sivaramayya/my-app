// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navbar.css';

const Navbar = () => {
    const cartItems = useSelector((state) => state.cart);

    return (
        <nav className="navbar">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/cart" className="nav-link">Cart ({cartItems.length})</Link>
        </nav>
    );
};

export default Navbar;
