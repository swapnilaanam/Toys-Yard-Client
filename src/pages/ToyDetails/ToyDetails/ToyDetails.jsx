import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const ToyDetails = () => {
    const toyDetails = useLoaderData();

    const { toyPhoto, toyName, sellerName, sellerEmail, price, rating, quantity, description } = toyDetails;

    return (
        <div className="py-16 bg-[cornsilk]">
            <div className="max-w-7xl mx-auto flex px-4 flex-col lg:flex-row justify-center items-center lg:items-start gap-40">
                <div className="border-2 shadow-xl rounded-lg p-10 bg-white">
                    <img src={toyPhoto} alt="" className="w-[450px] h-[450px] rounded-lg" />
                </div>
                <div className="text-center lg:text-left lg:mt-10 space-y-5 text-gray-900">
                    <h2 className="text-2xl font-medium">
                        Toy Name:
                        <span className="ms-3">{toyName}</span>
                    </h2>
                    <div>
                        <h3 className="text-xl font-medium">Description: </h3>
                        <p className="lg:w-[480px] text-base font-medium mt-4 ms-3">
                            {description}
                        </p>
                    </div>
                    <h3 className="text-xl font-medium">
                        Seller Name:
                        <span className="ms-3">{sellerName}</span>
                    </h3>
                    <h4 className="text-xl font-medium">
                        Seller Email:
                        <span className="ms-3">{sellerEmail}</span>

                    </h4>
                    <div className="my-1 flex justify-center lg:justify-start items-center gap-5">
                        <h4 className="text-xl font-medium">
                            Rating:
                        </h4>
                        <Rating
                            style={{ maxWidth: 150 }}
                            readOnly
                            value={rating}
                        />
                        <span className="font-medium text-2xl mt-0.5">{rating}</span>
                    </div>
                    <h4 className="text-xl font-medium">
                        Available Quantity:
                        <span className="badge badge-lg badge-warning px-7 py-5 ms-3 text-xl font-medium">
                            {quantity}
                        </span>
                    </h4>
                    <h4 className="text-xl font-medium">
                        Price:
                        <span className="badge badge-lg badge-success px-7 py-5 ms-3 text-xl font-medium">
                            ${price}
                        </span>
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;