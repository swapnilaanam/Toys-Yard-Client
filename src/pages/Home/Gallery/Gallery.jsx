import React from 'react';
import gallery1 from '../../../assets/images/gallery/spiderman-2.jpg';
import gallery2 from '../../../assets/images/gallery/batman-2.jpg';
import gallery3 from '../../../assets/images/gallery/deadpool-2.jpg';
import gallery4 from '../../../assets/images/gallery/sasuke.jpg';
import gallery5 from '../../../assets/images/gallery/ironman-2.jpg';
import gallery6 from '../../../assets/images/gallery/naruto-2.jpeg';
import gallery7 from '../../../assets/images/gallery/flash.jpg';
import gallery8 from '../../../assets/images/gallery/captain.png';

const Gallery = () => {
    return (
        <div className="max-w-5xl mx-auto my-24">
            <h3 className="text-center text-3xl font-semibold">Gallery Of Action Figures</h3>
            <div className="mt-12 flex flex-wrap justify-center items-center gap-3">
                <div className="w-60 h-60 shadow-xl border-2 rounded">
                    <img src={gallery1} alt="action figure toy" />
                </div>
                <div className="w-60 h-60 shadow-xl border-2 rounded">
                    <img src={gallery2} alt="action figure toy" />
                </div>
                <div className="w-60 h-60 shadow-xl border-2 rounded">
                    <img src={gallery3} alt="action figure toy" />
                </div>
                <div className="w-60 h-60 shadow-xl border-2 rounded">
                    <img src={gallery4} alt="action figure toy" />
                </div>
                <div className="w-60 h-60 shadow-xl border-2 rounded">
                    <img src={gallery5} alt="action figure toy" />
                </div>
                <div className="w-60 h-60 shadow-xl border-2 rounded">
                    <img src={gallery6} alt="action figure toy objet-cover" />
                </div>
                <div className="w-60 h-60 shadow-xl border-2 rounded">
                    <img src={gallery7} alt="action figure toy objet-cover" />
                </div>
                <div className="w-60 h-60 shadow-xl border-2 rounded">
                    <img src={gallery8} alt="action figure toy objet-cover" />
                </div>
            </div>
        </div>
    );
};

export default Gallery;