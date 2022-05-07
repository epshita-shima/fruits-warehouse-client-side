import React from 'react';
import './FruitBenefit.css';

const FruitBenefit = () => {
    return (
        <div className='mt-5 '>
            <div className="row p-5">
                <div className="col-md-6 text-start mt-5 p-4">
                    <h2 className='mb-3 fw-bold'>Important to eat fruit</h2>
                    <p>Eating fruit provides health benefits — people who eat more fruits and vegetables as part of an overall healthy diet are likely to have a reduced risk of some chronic diseases. Fruits provide nutrients vital for health and maintenance of your body. </p>
                    <p>Fruits are sources of many essential nutrients that are underconsumed, including potassium, dietary fiber, vitamin C, and folate (folic acid).</p>
                    <p>Most fruits are naturally low in fat, sodium, and calories. None have cholesterol
                    </p>
                </div>
                <div className="col-md-6">
                    <img className='img-fluid' src="https://cdn.shopify.com/s/files/1/0309/2968/2571/files/about-us-2.png?v=1595923776" alt="" />
                </div>
            </div>
        </div>
    );
};

export default FruitBenefit;