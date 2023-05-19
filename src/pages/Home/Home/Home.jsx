import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';

const Home = () => {
    return (
        <div className="bg-[cornsilk] bg-opacity-75">
            <Banner></Banner>
            <Gallery></Gallery>
            <h2>Home</h2>
        </div>
    );
};

export default Home;