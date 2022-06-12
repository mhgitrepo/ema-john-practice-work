import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    //set products
    const [products, setProducts] = useState([]);
    //calculate items
    const [cart, setCart] = useState([]);

    // get products
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
        })
    }, [])

    useEffect( () => {
        const storedCart = getStoredCart();
        const saveCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct)
            }
        }
        setCart(saveCart);
    }, [products])

    const addToCartHandler = (selectedProduct) => {
        //total items

        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        } else {
            const restProduct = cart.filter(product => product.id !== selectedProduct.id);
            selectedProduct.quantity = selectedProduct.quantity + 1;
            newCart = [...restProduct, selectedProduct];
        }

        setCart(newCart);

        //set shopping cart to local storage
        addToDb(selectedProduct.id);
    }


    return (
        <div className='shop-container'>
            <div className='product-container'>
                {products.map(product => <Product 
                    product = {product}
                    key = {product.id}
                    handleCart = {addToCartHandler}
                ></Product>)}
            </div>
            <div className='order-summary'>
                <Cart 
                cart= {cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;