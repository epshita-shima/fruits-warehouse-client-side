import React, { useEffect, useState } from 'react';

const useManageProduct = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/productItem')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return [products, setProducts];
};

export default useManageProduct;