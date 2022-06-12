import Logo from '../../images/Logo.svg';
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <div>
                <img src={Logo} alt="" />
            </div>
            <div className='nav-links'>
                <a href="/order">Order</a>
                <a href="/order-review">Order Review</a>
                <a href="/manage-inventory">Manage Inventory</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;