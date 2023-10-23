import React from 'react';
import { motion, transform } from "framer-motion"
import { Flip } from 'react-awesome-reveal';

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
        <div className="mt-28 px-4 lg:px-0">
            <div className="max-w-6xl mx-auto overflow-hidden">
                <Flip direction='horizontal'>
                    <h3 className="text-center text-3xl md:text-4xl text-black font-semibold mx-2 lg:mx-0">Gallery Of Action Figures</h3>
                </Flip>
                <div className="my-20 flex flex-wrap justify-center items-center gap-3">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                    >
                        <div className="w-60 h-60 shadow-xl">
                            <img src={gallery1} alt="action figure toy" className="rounded-sm" />
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                    >
                        <div className="w-60 h-60 shadow-xl">
                            <img src={gallery2} alt="action figure toy" className="rounded-sm" />
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                    >
                        <div className="w-60 h-60 shadow-xl">
                            <img src={gallery3} alt="action figure toy" className="rounded-sm" />
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                    >
                        <div className="w-60 h-60 shadow-xl">
                            <img src={gallery4} alt="action figure toy" className="rounded-sm" />
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                    >
                        <div className="w-60 h-60 shadow-xl">
                            <img src={gallery5} alt="action figure toy" className="rounded-sm" />
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                    >
                        <div className="w-60 h-60 shadow-xl">
                            <img src={gallery6} alt="action figure toy objet-cover" className="rounded-sm" />
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                    >
                        <div className="w-60 h-60 shadow-xl">
                            <img src={gallery7} alt="action figure toy objet-cover" className="rounded-sm" />
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                    >
                        <div className="w-60 h-60 shadow-xl">
                            <img src={gallery8} alt="action figure toy objet-cover" className="rounded-sm" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;