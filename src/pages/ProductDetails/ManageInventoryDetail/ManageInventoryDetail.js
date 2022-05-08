import React from 'react';
import './ManageInventoryDetails.css'

const ManageInventoryDetail = ({ product }) => {
    const { name, price, img, _id, supplier, description, quantity } = product;

    return (
        <div className='product-item p-4'>
            <img className='product-img' src={img} alt="" />
            <h3>{name}</h3>
            <h3>{supplier}</h3>
            <p>Price:{price}</p>
            <p>Quantity: {quantity}</p>
            <p>{description}</p>
            <button className='btn btn-primary rounded-pill'>Delete {name}</button>
        </div>
    );
};

export default ManageInventoryDetail;