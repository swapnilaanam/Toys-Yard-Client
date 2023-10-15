import React from 'react';
import Lottie from "lottie-react";
import { Flip } from 'react-awesome-reveal';

import deliveryAnimation from '../../../assets/animation/delivery.json';
import genuineAnimation from '../../../assets/animation/check.json';
import packagingAnimation from '../../../assets/animation/packaging.json';
import returnAnimation from '../../../assets/animation/return.json';

const Features = () => {
    return (
        <div className="mt-28">
            <div className="max-w-[1380px] mx-4 md:mx-auto bg-black rounded-sm pt-28 pb-36">
                <Flip direction='horizontal'>
                    <h2 className="mb-20 text-center text-3xl md:text-4xl text-white font-semibold tracking-wide">
                        Why We Are Special
                    </h2>
                </Flip>
                <div className="w-full flex flex-col md:flex-row justify-center items-center md:items-end gap-20">
                    <div className="flex flex-col items-center">
                        <Lottie animationData={deliveryAnimation} loop={true} className="w-40 h-40" />
                        <h4 className="text-white text-xl md:text-2xl font-medium tracking-wide">Lightning Fast Delivery</h4>
                    </div>
                    <div className="flex flex-col items-center">
                        <Lottie animationData={genuineAnimation} loop={true} className="w-40 h-40" />
                        <h4 className="text-white text-xl md:text-2xl font-medium tracking-wide">Genuine Products</h4>
                    </div>
                    <div className="flex flex-col items-center">
                        <Lottie animationData={packagingAnimation} loop={true} className="w-44 h-44" />
                        <h4 className="text-white text-xl md:text-2xl font-medium tracking-wide">Themed Packaging</h4>
                    </div>
                    <div className="flex flex-col items-center">
                        <Lottie animationData={returnAnimation} loop={true} className="w-44 h-44" />
                        <h4 className="text-white text-xl md:text-2xl font-medium tracking-wide">7 Days Return Policy</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;