import React from 'react'
import './Cart.css';
export default function Carts(props) {
    let cart = props.cart;
    // let productsPrice=cart.reduce((productsPrice,prd)=> productsPrice+prd.price,0)
    //other sestem

    let productsPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        let products = cart[i];
        productsPrice += products.price;
    }
    const FixedNumber = num => {
        let newNumber = num.toFixed(2);
        return Number(newNumber)
    }
    let tax = FixedNumber(productsPrice / 10)
    return (
        <div className='Cart'>
            
            <div className="details">
            <h1>Oder Summary</h1>
            <h4>Items Odered : {cart.length}</h4>
               <div className="row1">
               <h5>Products Price : {productsPrice}</h5>
                <h5>Tax & Vat     : {tax}</h5>
                <h5>Total Price   : {productsPrice + tax}</h5>
               </div>
               
            </div>
        </div >
    )
}
