import React from 'react';
import './ProductItem.css'
const ProductItem = ({ productItem }) => {
    const { name, price, img } = productItem;


    return (
        <div className='product-item'>
            <img className='product-img' src={img} alt="" />
            <h3>{name}</h3>
            <p>Price:{price}</p>
        </div>
    );
};

export default ProductItem;