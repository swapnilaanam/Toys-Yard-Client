import React from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const Reviews = () => {
    return (
        <div class="py-24">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h3 class="text-3xl font-semibold text-gray-800 mb-16 text-center">Customer Reviews</h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
                    <div class="bg-white rounded-lg shadow-md py-6 px-8 border-2">
                        <p class="text-gray-800 mb-4">"I purchased an Iron man action figure toy for my little son. My son was delighted
                            to find it so realistic."</p>
                        <Rating
                            style={{ maxWidth: 150 }}
                            readOnly
                            value={4.5}
                        />
                        <p class="text-gray-600 mt-3">- Rehan Kabir</p>
                    </div>
                    <div class="bg-white rounded-lg shadow-md py-6 px-8 border-2">
                        <p class="text-gray-800 mb-4">"I purchased from this website for several times now for my daughter. Always gives solid built quality toys."</p>
                        <Rating
                            style={{ maxWidth: 150 }}
                            readOnly
                            value={4.8}
                        />
                        <p class="text-gray-600 mt-3">- Maria Jahan</p>
                    </div>
                    <div class="bg-white rounded-lg shadow-md py-6 px-8 border-2">
                        <p class="text-gray-800 mb-4">"I have no issue with the action figures. Buy you guys need to work on your delivery time. Its still slow."</p>
                        <Rating
                            style={{ maxWidth: 150 }}
                            readOnly
                            value={4}
                        />
                        <p class="text-gray-600 mt-3">- Ahsan Ahmed</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;