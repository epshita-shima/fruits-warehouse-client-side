import React from 'react';
import { Link } from 'react-router-dom';

const ProductInventory = ({ productItemDetails }) => {
    const { name, price, img } = productItemDetails;
    return (
        <div className='product-item'>
            <img className='product-img' src={img} alt="" />
            <h3>{name}</h3>
            <p>Price:{price}</p>
            <Link to='/'>
                <button className='btn btn-primary'>Delivered</button>
            </Link>
        </div>
    );
};

export default ProductInventory;