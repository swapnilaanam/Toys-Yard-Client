import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/GPSDB80/banner-1.jpg")` }}>
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-lg">
                    <h1 className="mb-5 text-3xl font-bold bg-black bg-opacity-40 p-4 rounded">
                        Your Favorite Action Figure Toys Home - <span className="text-orange-500">Toys Yard</span>
                    </h1>
                    <p className="mb-5 mx-6 text-lg font-medium bg-black bg-opacity-30 px-4 py-3 rounded">
                        Find And Grab The Best Action Figure Toys Of Marvel, DC, Naruto And Many Other Universes.
                    </p>
                    <button className="mt-1 bg-warning hover:bg-yellow-500 px-7 py-4 text-xl text-zinc-800 font-semibold capitalize rounded-lg">
                        Find All The Toys
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;