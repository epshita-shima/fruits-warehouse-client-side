import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const LatestBlog = () => {
    return (
        <div className='mt-5'>
            <div className="row p-5">
                <h2 className='text-center fw-bold mb-4'>Latest Blogs</h2>
                <div className="col-md-4 text-start p-2">
                    <img className='img-fluid mb-2' src="https://cdn.shopify.com/s/files/1/0309/2968/2571/articles/yogurt-1442034_1280_e398f226-c1bb-409e-a62c-c4bc394d9bc6.jpg?v=1578990937" alt="" />
                    <div>
                        <h5 className='fw-bold'>Yogurt contains some of nearly every nutrient that your body needs</h5>
                        <p>Yogurts can be high in protein, calcium, vitamins, and live culture, or probiotics, which can enhance the gut microbiota. These can offer protection for bones and teeth and help prevent digestive problems.</p>
                    </div>
                </div>
                <div className="col-md-4  text-start p-2">
                    <img className='img-fluid mb-2' src="https://cdn.shopify.com/s/files/1/0309/2968/2571/articles/almonds-768699_1280_6bceea27-139a-4893-aa1e-f28c01f8f903.jpg?v=1578991281" alt="" />
                    <div>
                        <h5 className='fw-bold'>Yogurt contains some of nearly every nutrient that your body needs</h5>
                        <p>Yogurts can be high in protein, calcium, vitamins, and live culture, or probiotics, which can enhance the gut microbiota. These can offer protection for bones and teeth and help prevent digestive problems.</p>
                    </div>
                </div>
                <div className="col-md-4  text-start p-2">
                    <img className='img-fluid mb-2' src="https://cdn.shopify.com/s/files/1/0309/2968/2571/articles/yogurt-1442034_1280_e398f226-c1bb-409e-a62c-c4bc394d9bc6.jpg?v=1578990937"  alt="" />
                    <div>
                        <h5 className='fw-bold'>Yogurt contains some of nearly every nutrient that your body needs</h5>
                        <p>Yogurts can be high in protein, calcium, vitamins, and live culture, or probiotics, which can enhance the gut microbiota. These can offer protection for bones and teeth and help prevent digestive problems.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestBlog;