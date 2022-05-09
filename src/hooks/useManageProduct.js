import React, { useEffect, useState } from 'react';

const useManageProduct = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://evening-river-08129.herokuapp.com/productItem')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return [products, setProducts];
};

export default useManageProduct;