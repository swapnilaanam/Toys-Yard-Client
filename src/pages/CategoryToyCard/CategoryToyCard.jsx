import React from 'react';
import { Link } from 'react-router-dom';

const CategoryToyCard = ({ toyInfo }) => {
    const { _id, toyPhoto, toyName, price, rating } = toyInfo;
    return (
        <div className="card card-compact w-72 bg-base-100 shadow-xl">
            <figure><img src={toyPhoto} alt="action figure toy" className="h-48"/></figure>
            <div className="card-body">
                <h2 className="card-title">Name: {toyName}</h2>
                <p>Price: {price}</p>
                <div className="card-actions justify-start">
                    <Link to={`/toy/${_id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryToyCard;