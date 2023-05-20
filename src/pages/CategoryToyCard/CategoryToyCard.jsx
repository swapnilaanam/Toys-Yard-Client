import React from 'react';
import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const CategoryToyCard = ({ toyInfo }) => {
    const { _id, toyPhoto, toyName, price, rating } = toyInfo;

    return (
        <div className="card card-compact w-[350px] h-[470px] bg-base-100 border-2 border-gray-300 shadow-lg">
            <figure><img src={toyPhoto} alt="action figure toy" className="h-64 p-2" /></figure>
            <div className="card-body py-2 px-6">
                <h2 className="card-title font-semibold text-lg">{toyName}</h2>
                <p className="text-xl font-medium">Price: ${price}</p>
                <div className="mt-1 flex items-center gap-5">
                    <Rating
                        style={{ maxWidth: 150 }}
                        readOnly
                        value={rating}
                    />
                    <span className="font-medium text-2xl mt-0.5">{rating}</span>
                </div>
                <div className="card-actions justify-start mt-3">
                    <Link to={`/toy/${_id}`}>
                        <button className="btn btn-warning font-semibold text-base capitalize">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryToyCard;