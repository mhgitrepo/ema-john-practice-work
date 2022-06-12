import { faArrowRight, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { deleteShoppingCart } from '../../utilities/fakedb';
import './Cart.css';

const Cart = ({cart}) => {

    let totalPrice = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        totalPrice = totalPrice + (product.price * product.quantity);
        shipping = shipping + product.shipping;
    }

    const tax = parseFloat((totalPrice * .008).toFixed(2));
    const grandTotal = totalPrice + shipping + tax;

    // delete entire cart
    const deleteEntireCart = () => {
        deleteShoppingCart();
    }
    

    return (
        <div className='cart'>
            <h3>Order Summary</h3>
             <div className='item-calculation'>
                <p>Selected Items: {quantity}</p>
                <p>Items Total Price: ${totalPrice}</p>
                <p>Total Shipping Charge: ${shipping}</p>
                <p>Tax: ${tax}</p>
                <p className='grand-total'>Grand Total: ${grandTotal}</p>
            </div>
            <div className='btn-in-order-summary'>
                <button onClick={deleteEntireCart} className='btn-common'><p>Clear Cart
                <FontAwesomeIcon className='fa-icon-o-s' icon={faTrashCan}></FontAwesomeIcon>
                </p></button>
                <button className='btn-common' id='btn-review-order' disabled><p>Review Order
                <FontAwesomeIcon className='fa-icon-o-s' icon={faArrowRight}></FontAwesomeIcon>
                </p></button>
            </div>
        </div>
    );
};

export default Cart;