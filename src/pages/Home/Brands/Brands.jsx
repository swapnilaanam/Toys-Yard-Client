import React from 'react';
import Marquee from "react-fast-marquee";
import img1 from '../../../assets/images/logo/marvel.jpg';
import img2 from '../../../assets/images/logo/dc.jpg';
import img3 from '../../../assets/images/logo/toy-stars.png';
import { Flip } from 'react-awesome-reveal';

const Brands = () => {
    return (
        <div className="pt-28 pb-40">
            <div className="max-w-7xl mx-auto">
                <Flip direction='horizontal'>
                    <h2 className="mb-20 text-center text-3xl md:text-4xl text-black font-semibold tracking-wide">
                        Our Brand Partners
                    </h2>
                </Flip>
                <Marquee>
                    <div className='flex justify-center items-center gap-20 px-4'>
                        <img src={img1} alt="logo" className="w-56 h-44 object-cover" />
                        <img src={img2} alt="logo" className="w-56 h-44 object-cover" />
                        <img src={img3} alt="logo" className="w-56 h-44 object-cover mr-14" />
                    </div>
                </Marquee>

            </div>
        </div>
    );
};

export default Brands;