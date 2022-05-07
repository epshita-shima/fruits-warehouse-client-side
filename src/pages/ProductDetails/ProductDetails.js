
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ProductDetails.css';


const ProductDetails = () => {
    const { productId } = useParams();

    const [product, setProduct] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/productItem/${productId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));

    }, [])
    const handleReduceQuantity = () => {
        const url = `http://localhost:5000/productItem/${productId}`;

        if (product.quantity > 0) {
            product.quantity = product.quantity - 1;
            setProduct({ ...product });
        }
        else {
            alert('add product');
        }
        //update Quantity

        fetch('url', {
            method: 'PUT',
            headers: {
                'content-type': 'application-type'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => console.log(data));
    }

    return (
        <div className='inventory-product'>
            <img className='img-product' src={product.img} alt="" />
            <p className='text-center text-primary m-4'>Product id:{productId}</p>
            <h4>Product Name: {product.name}</h4>
            <h4>Supplier Name: {product.supplier}</h4>
            <h6>{product.description}</h6>
            <h5>Price: {product.price}</h5>
            <h5>Quantity: {product.quantity} </h5>
            <h5>Sold : {product.quantity === 0 && 'stock Out'}</h5>

            <button onClick={handleReduceQuantity}>Deliverd</button>


        </div>
    );
};

export default ProductDetails;