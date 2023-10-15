import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const CategoryToyCard = ({ toyInfo }) => {
    const { _id, toyPhoto, toyName, price, rating } = toyInfo;

    return (
        <motion.div
            initial={{transform: "scaleX(0.5)"}}
            whileInView={{transform: "scaleX(1)"}}
            transition={{ duration: 1 }}
        >
            <div className="card card-compact w-80 md:w-96 bg-[#f8f5ea] border-2 border-gray-300 shadow-2xl rounded-md">
                <img src={toyPhoto} alt="action figure toy" className="h-64 p-7 bg-white object-contain" />
                <div className="card-body items-center py-2 px-6">
                    <h2 className="text-center text-black text-2xl font-semibold tracking-wide">{toyName}</h2>
                    <div className="mt-1 flex items-center gap-5">
                        <Rating
                            style={{ maxWidth: 150 }}
                            readOnly
                            value={rating}
                        />
                        <span className="font-medium text-2xl mt-0.5">{rating}</span>
                    </div>
                    <p className="mt-2 text-2xl font-medium">Price: ${price}</p>

                    <div className="card-actions justify-start my-3">
                        <Link to={`/toy/${_id}`}>
                            <button className="btn btn-warning font-semibold text-base capitalize">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default CategoryToyCard;