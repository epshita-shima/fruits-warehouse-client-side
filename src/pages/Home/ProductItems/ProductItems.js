import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductItem from '../ProductItem/ProductItem';
import './ProductItems.css';

const ProductItems = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/productItem')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0, 6)));
    }, [])
    return (
        <div className='container'>
            <h2 className='product-title m-5 fw-bold'>Our Product</h2>
            <div className='product-container'>
                {
                    products.map(productItem => <ProductItem
                        key={productItem._id}
                        productItem={productItem}
                    ></ProductItem>)
                }

            </div>
            <div className='manage-inventory-heading mt-5'>
               <p className='mt-2 '>Click here for manage inventory</p> 
               <Link to='/manageInventory'><button className='btn btn-manage-inventory ms-4'>Manage Inventory </button></Link>
            </div>
           
        </div>
    );
};

export default ProductItems;