import React from 'react';
import { Link } from 'react-router-dom';
import useManageProduct from '../../../hooks/useManageProduct';
import ManageInventoryDetail from '../ManageInventoryDetail/ManageInventoryDetail';

const ManageInventory = () => {
    const [products, setProducts] = useManageProduct()
    return (
        <div className='container'>
            <h2 className='product-title m-5 fw-bold'>All Product</h2>
            <Link to='/additem'><button className='btn btn-success btn-lg mb-5'>Add Item</button></Link>
            <div className='product-container'>
                {
                    products.map(product => <ManageInventoryDetail
                        key={product._id}
                        product={product}
                    ></ManageInventoryDetail>)
                }
            </div>
        </div>
    );
};

export default ManageInventory;