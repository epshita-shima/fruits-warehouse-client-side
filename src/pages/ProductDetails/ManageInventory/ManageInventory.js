import React from 'react';
import { Link } from 'react-router-dom';
import useManageProduct from '../../../hooks/useManageProduct';
import ManageInventoryDetail from '../ManageInventoryDetail/ManageInventoryDetail';

const ManageInventory = () => {
    const [products, setProducts] = useManageProduct();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to delete?')
        if (proceed) {
            const url = `http://localhost:5000/productItem/${id}`;

            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                })
        }
    }
    return (
        <div className='container'>
            <h2 className='product-title m-5 fw-bold'>All Product</h2>
            <Link to='/additem'><button className='btn btn-success btn-lg mb-5'>Add Item</button></Link>
            <div className='product-container'>
                {
                    products.map(product => <ManageInventoryDetail
                        key={product._id}
                        product={product}
                        handleDelete={handleDelete}
                    ></ManageInventoryDetail>)
                }
            </div>
        </div>
    );
};

export default ManageInventory;