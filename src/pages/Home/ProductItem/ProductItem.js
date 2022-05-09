import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductItem.css'
const ProductItem = ({ productItem }) => {
    const { name, price, img, _id, supplier, description, quantity } = productItem;
    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate(`/productupdate/${id}`);
    }

    return (
        <div className='product-item p-4'>
            <img className='product-img' src={img} alt="" />
            <h3>{name}</h3>
            <h3>{supplier}</h3>
            <p>Price:{price}</p>
            <p>Quantity: {quantity}</p>
            <p>{description}</p>
            <button onClick={() => navigateToServiceDetail(_id)} className='btn btn-success btn-lg rounded-pill'>Update {name}</button>
        </div>
    );
};

export default ProductItem;