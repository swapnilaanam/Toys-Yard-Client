import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import ShopByCategory from '../ShopByCategory/ShopByCategory';

const Home = () => {
    return (
        <div className="bg-[cornsilk] bg-opacity-75">
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <h2>Home</h2>
        </div>
    );
};

export default Home;