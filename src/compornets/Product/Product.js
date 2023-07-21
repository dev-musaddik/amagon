import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import { Link } from 'react-router-dom';
const Product = (props) => {
      const {key,name}=props.product;
    
    return (
        <div className='product'>
            <div className="row1_">
                <img src={props.product.img} alt="this is img" />
            </div>
            <div className="row2_details">
                <h4 ><Link to={"/"+ key}>{name}</Link></h4>
                <div className="bug">
                    <div className="row1_proDetails">

                        <h4>by: {props.product.seller}</h4>
                        <h3>${props.product.price}</h3>
                        <p>only {props.product.stock} left in stork-oder soon</p>
                        {/* <button type="submit" onClick={props.eventHandle(props.Product)}><FontAwesomeIcon icon={faShoppingCart} />add to cart</button> */}
                        <button type="submit" onClick={()=>props.eventHandle(props.product)}><FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
                    </div>
                    <div className="row2_star">
                        <div className="col_1">
                            <img src="" alt="it's star" />
                            <h3>Features</h3>
                        </div>
                        <div className="col_2">
                            
                                <ul>
                                    {
                                     props.product.features.map(data=><li>{data.description}: {data.value}</li>) 
                                    }
                                </ul>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;