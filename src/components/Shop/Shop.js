import React, { useState } from 'react';
import fakeData from '../../fakeData'
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const data=fakeData.slice(0,);
    const [products, setProduct]= useState(data);
    const [cart,setCart]=useState([]);
    const handleAddProduct=(product)=>{

        const newCart=[...cart,product];
        setCart(newCart);
    }
    return (
        <div className="shopContainer">
            <div className="product-container">
                {
                    products.map(pd=><Product
                        handleAddProduct={handleAddProduct} 
                        product={pd}></Product>)
                }
            </div>
            
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;