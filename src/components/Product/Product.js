import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css';

const Product = ({product, handleCart}) => {
    const {name, price, img, seller, ratings} = product;

    return (
        <div className='product'>
            <img src={img} alt={name} />
            <div className='product-info'>
                <div>
                    <h3>{name}</h3>
                    <p>Price: ${price}</p>
                </div>
                <div>
                    <p>Manufacturer: {seller}</p>
                    <p>Ratings: {ratings} star</p>
                </div>
            </div>
            <button onClick={() => handleCart(product)} className='btn-cart'><p>Add to Cart
            <FontAwesomeIcon className='font-awesome-icon' icon={faShoppingCart}></FontAwesomeIcon>  
            </p></button>
        </div>
    );
};

export default Product;