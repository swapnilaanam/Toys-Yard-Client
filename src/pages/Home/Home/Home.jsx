import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import useTitle from '../../../hooks/useTitle';
import Reviews from '../Reviews/Reviews';
import Brands from '../Brands/Brands';
import Features from '../Features/Features';
import LatestNews from '../LatestNews/LatestNews';
import MangaCorner from '../MangaCorner/MangaCorner';
import VideoBanner from '../VideoBanner/VideoBanner';
import UpcomingEvents from '../UpcomingEvents/UpcomingEvents';
import SellerBanner from '../SellerBanner/SellerBanner';
import Faq from '../Faq/Faq';

const Home = () => {
    useTitle('Home');

    return (
        <div className="bg-[#f7ea68]">
            <Banner></Banner>
            <Features></Features>
            <ShopByCategory></ShopByCategory>
            <MangaCorner></MangaCorner>
            <VideoBanner></VideoBanner>
            <UpcomingEvents></UpcomingEvents>
            <Gallery></Gallery>
            <Reviews></Reviews>
            <SellerBanner></SellerBanner>
            <LatestNews></LatestNews>
            <Brands></Brands>
            <Faq></Faq>
        </div>
    );
};

export default Home;