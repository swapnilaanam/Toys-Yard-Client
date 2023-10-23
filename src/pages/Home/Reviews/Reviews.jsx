import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { Flip } from 'react-awesome-reveal';

import { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { EffectFlip, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('/reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);

    return (
        <div className="mt-28">
            <div className="max-w-[1380px] bg-black mx-4 md:mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-36 rounded-sm overflow-hidden">
                <Flip direction='horizontal'>
                    <h2 className="mb-20 text-center text-3xl md:text-4xl text-white font-semibold tracking-wide">
                        Customer Reviews
                    </h2>
                </Flip>
                <Swiper
                    effect={'flip'}
                    grabCursor={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    modules={[EffectFlip, Autoplay]}
                    className="mySwiper overflow-hidden"
                >
                    {
                        reviews.map(review => <SwiperSlide key={review.id}>
                                <div className="bg-white md:w-[600px] mx-auto rounded-lg shadow-md py-10 px-4 md:px-16 border-2">
                                    <p className="text-black text-lg md:text-xl mb-4">{review.feedback}</p>
                                    <Rating
                                        style={{ maxWidth: 150 }}
                                        readOnly
                                        value={review.rating}
                                    />
                                    <p className="text-gray-900 text-base md:text-lg mt-5">- {review.name}</p>
                                </div>
                            </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Reviews;