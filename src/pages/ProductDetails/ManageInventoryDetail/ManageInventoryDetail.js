import React from 'react';
import useManageProduct from '../../../hooks/useManageProduct';
import './ManageInventoryDetails.css'

const ManageInventoryDetail = ({ product }) => {
    const { name, price, img, _id, supplier, description, quantity } = product;
    const [products, setproducts] = useManageProduct();
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to delete?')
        if (proceed) {
            const url = `http://localhost:5000/productItem/${id}`;

            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = products.filter(product => product._id !== id);
                    setproducts(remaining);
                })
        }
    }

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