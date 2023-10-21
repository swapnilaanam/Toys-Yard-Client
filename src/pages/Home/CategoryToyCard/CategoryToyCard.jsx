import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { AuthContext } from '../../../providers/AuthProvider';

const CategoryToyCard = ({ toyInfo }) => {
    const { _id, toyPhoto, toyName, price, rating, sellerName, sellerEmail,  } = toyInfo;

    const {user} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleBuyNow = () => {
        const toyInfo = {
            toyId: _id,
            toyName,
            toyPhoto,
            sellerName,
            sellerEmail,
            buyerName: user?.displayName,
            buyerEmail: user?.email,
            price
        };

        localStorage.setItem("toyInfo", JSON.stringify(toyInfo));

        navigate(`/checkout/${_id}`);
    }

    return (
        <motion.div
            initial={{transform: "scaleX(0.5)"}}
            whileInView={{transform: "scaleX(1)"}}
            transition={{ duration: 1 }}
        >
            <div className="card card-compact w-72 md:w-80 bg-[#f8f5ea] border-2 border-gray-300 shadow-2xl rounded-md">
                <img src={toyPhoto} alt="action figure toy" className="h-64 p-7 bg-white object-contain" />
                <div className="card-body items-center py-2 px-4">
                    <h2 className="text-center text-black text-xl font-medium">{toyName}</h2>
                    <div className="mt-1 flex items-center gap-5">
                        <Rating
                            style={{ maxWidth: 120 }}
                            readOnly
                            value={rating}
                        />
                        <span className="font-medium text-lg mt-0.5">{rating}</span>
                    </div>
                    <p className="mt-2 text-lg font-medium">Price: ${price}</p>

                    <div className="card-actions justify-start my-2 gap-4">
                        <Link to={`/toy/${_id}`}>
                            <button className="btn btn-sm btn-warning font-medium text-sm capitalize">View Details</button>
                        </Link>
                        <button onClick={handleBuyNow} className="btn btn-sm btn-nuetral font-medium text-sm capitalize">Buy Now</button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default CategoryToyCard;