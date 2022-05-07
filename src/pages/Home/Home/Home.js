import React from 'react';
import Banner from '../Banner/Banner';
import FruitBenefit from '../FruitBenefit/FruitBenefit';
import LatestBlog from '../LatestBlog/LatestBlog';
import ProductItems from '../ProductItems/ProductItems';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FruitBenefit></FruitBenefit>
            <ProductItems></ProductItems>
            <LatestBlog></LatestBlog>
        </div>
    );
};

export default Home;