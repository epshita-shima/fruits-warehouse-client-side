import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-fluid"
                    src="https://cdn.shopify.com/s/files/1/0309/2968/2571/files/home-1-slider-1_2edf7037-ceb3-4834-a961-6c486641d0d7.png?v=1595912435"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className='text-dark fw-bolder'>Healthy Life With</h3>
                    <h1 className='text-dark fw-bold'>Natural Organic</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-fluid"
                    src="https://cdn.shopify.com/s/files/1/0309/2968/2571/files/home-1-slider-2.png?v=1595912454"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3 className='text-dark fw-bolder'>Cold Process Organic Fruit</h3>
                    <h1 className='text-dark fw-bold'>Fresh Avocado</h1>


                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;