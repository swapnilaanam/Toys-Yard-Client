import React from 'react';
import Marquee from "react-fast-marquee";
import img1 from '../../../assets/images/logo/marvel.jpg';
import img2 from '../../../assets/images/logo/dc.jpg';
import img3 from '../../../assets/images/logo/toy-stars.png';

const Brands = () => {
    return (
        <div className="pt-10 pb-24 max-w-5xl mx-auto">
            <h3 className="text-center text-3xl font-semibold mb-16">Our Brand Partners</h3>
            <Marquee>
                <div className='flex justify-center items-center gap-20'>
                    <img src={img1} alt="logo" className="w-60 h-40" />
                    <img src={img2} alt="logo" className="w-60 h-40" />
                    <img src={img3} alt="logo" className="w-60 h-40" />
                </div>
            </Marquee>

        </div>
    );
};

export default Brands;