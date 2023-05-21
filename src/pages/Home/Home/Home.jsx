import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import useTitle from '../../../hooks/useTitle';
import Reviews from '../Reviews/Reviews';
import Brands from '../Brands/Brands';

const Home = () => {
    useTitle('Home');

    return (
        <div className="bg-[cornsilk] bg-opacity-75">
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <Reviews></Reviews>
            <Brands></Brands>
        </div>
    );
};

export default Home;