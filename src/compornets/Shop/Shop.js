import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Carts from '../Carts/Carts';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    // console.log(fakeData);
    let [cart,setCart] =useState([])
  let addEventProduct=(product)=>{
        console.log('click me',product);
        let newCart=[...cart,product];//// "..." it's use for copy
        setCart(newCart);

    }

    return (
        <div className='shop-container'>
            <div className="product-container">

                
                    {products.map(data => <Product product={data}  eventHandle={addEventProduct}></Product>)}
                
            </div>
            <div className="cart-conatiner ">
                <Carts cart={cart}></Carts>
                

            </div>
        </div>
    );
};

export default Shop;