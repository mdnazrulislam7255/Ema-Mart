import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const c=props.cart;
    //const totalPrice=c.reduce((total,element)=> total + element.price,0);
    let totalPrice=0;
    for(let i=0 ; i< c.length; i++){
        const pd=c[i];
        totalPrice=totalPrice + pd.price;
    }
    let shipping=0;
    if(totalPrice> 75){
        shipping=12.99;
    }
    else if(totalPrice>35){
        shipping=4.99;
    }
    else{
        shipping=0;
    }
    const tax=totalPrice/10;
    const grandTotal=totalPrice + shipping + tax;
    const formatNum = num =>{
        const precision=num.toFixed(2);
        return(precision);
    }
    return (
        <div>
            <h4 className="order-summary">Order Summary</h4>
            <p className="order-items">Items Ordered:{c.length}</p>
            <p className="order-info">Product Price:${formatNum(totalPrice)}</p>
            <p className="order-info">Shipping Cost:${shipping}</p>
            <p className="order-info">Tax:${formatNum(tax)}</p>
            <p className="total-price">Total Price:${formatNum(grandTotal)}</p>
        </div>
    );
};

export default Cart;