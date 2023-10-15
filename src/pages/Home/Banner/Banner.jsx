import React from 'react';
import { Link } from 'react-router-dom';

import spidermanBanner from '../../../assets/images/spiderman-banner.png'
import batmanBanner from '../../../assets/images/batman-banner.png';
import ironmanBanner from '../../../assets/images/ironman-banner.png';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-black">
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="flex flex-col-reverse md:flex-row justify-around items-start text-center text-neutral-content">
                <div className="w-full md:w-2/5">
                    <h2 className="text-4xl md:text-5xl text-[#f9f26d] px-4 font-semibold leading-snug tracking-wide">
                        Your Favorite Action Figure Toys Home
                    </h2>
                    <p className="my-7 text-lg md:text-xl font-medium px-8">
                        Find And Grab The Best Action Figure Toys Of Marvel, DC, Naruto And Many Other Universes.
                    </p>
                    <Link to="/alltoys">
                        <button className="mt-2 px-7 py-4 bg-white text-black text-lg md:text-xl font-semibold capitalize rounded-lg">
                            Find All The Toys
                        </button>
                    </Link>
                </div>
                <div className="w-full md:w-3/5 relative flex justify-center md:justify-between items-start gap-12 md:gap-16 mb-5 md:mb-0">
                    <img src={spidermanBanner} alt="" className="w-36 md:w-96" />
                    <img src={batmanBanner} alt="" className="w-36 md:w-96" />
                    <img src={ironmanBanner} alt="" className="w-36 md:w-96 absolute md:-top-28 md:start-56" />
                </div>
            </div>
        </div>
    );
};

export default Banner;