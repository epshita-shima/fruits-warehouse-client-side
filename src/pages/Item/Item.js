import React from 'react';

const Item = ({ item }) => {
    const { name, price, img, _id, supplier, description, quantity } = item;
    return (
        <div>
            <div className='product-item p-4'>
                <img className='product-img' src={img} alt="" />
                <h3>{name}</h3>
                <h3>{supplier}</h3>
                <p>Price:{price}</p>
                <p>Quantity: {quantity}</p>
                <p>{description}</p>
                {/* <button className='btn btn-primary rounded-pill' onClick={() => handleDelete(product._id)}>Delete {name}</button> */}
            </div>
        </div>
    );
};

export default Item;