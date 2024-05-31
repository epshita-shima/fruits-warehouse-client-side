import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductItem.css'
const ProductItem = ({ productItem }) => {
    const { name, price, image, _id, supplier, description, quantity } = productItem;
    const navigate = useNavigate();
console.log(productItem)
    const navigateToServiceDetail = id => {
        navigate(`/productupdate/${id}`);
    }

    return (
      
         <div class="card-group">
            <div class="card shadow-sm">
                <img src={image} class="w-100 h-50" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Fruits Name: {name}</h5>
                    <h5 class="card-title">Supplier Name: {supplier}</h5>
                    <p class="card-text">Price:{price}</p>
                    <p class="card-text">Quantity: {quantity}</p>
                    <p class="card-text">{description}</p>
                    <button onClick={() => navigateToServiceDetail(_id)} className='btn btn-update'>Update {name}</button>
                </div>
            </div>
        
       </div>
    );
};

export default ProductItem;