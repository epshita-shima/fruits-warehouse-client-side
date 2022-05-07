import React, { useEffect, useState } from 'react';
import ProductItem from '../ProductItem/ProductItem';
import './ProductItems.css';

const ProductItems = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0, 6)));
    }, [])
    return (
        <div className='container'>
            <h2 className='product-title m-5 fw-bold'>Our Product</h2>
            <div className='product-container'>
                {
                    products.map(productItem => <ProductItem
                        key={productItem.id}
                        productItem={productItem}
                    ></ProductItem>)
                }
            </div>
        </div>
    );
};

export default ProductItems;