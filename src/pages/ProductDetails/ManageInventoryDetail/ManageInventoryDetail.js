import React from 'react';
import useManageProduct from '../../../hooks/useManageProduct';
import './ManageInventoryDetails.css'

const ManageInventoryDetail = ({ product, handleDelete }) => {
    const { name, price, img, _id, supplier, description, quantity } = product;

    return (
        <div className='product-item p-4'>
            <img className='product-img' src={img} alt="" />
            <h3>{name}</h3>
            <h3>{supplier}</h3>
            <p>Price:{price}</p>
            <p>Quantity: {quantity}</p>
            <p>{description}</p>
            <button className='btn btn-primary rounded-pill' onClick={() => handleDelete(product._id)}>Delete {name}</button>
        </div>
    );
};

export default ManageInventoryDetail;