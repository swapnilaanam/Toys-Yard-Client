import { Link } from 'react-router-dom';
import SellerBannerImage from '../../../assets/images/sellerbanner.jpg';

const SellerBanner = () => {
    return (
        <section className="mt-32 mb-40 px-4 lg:px-0">
            <div className="max-w-[1380px] mx-auto flex flex-col lg:flex-row justify-center rounded">
                <div className="w-full lg:w-[50%] h-full" >
                    <img src={SellerBannerImage} alt="Seller Banner" className="w-full h-full object-contain" />
                </div>
                <div className="w-full lg:w-[50%] bg-black bg-opacity-90 text-center text-white p-8 px-10">
                    <h4 className="text-2xl font-medium mb-10">Be a part of our growing seller family and sell your action figures on our platform.</h4>
                    <Link to="/register" className="btn btn-warning text-black capitalize text-lg">Join Us Today</Link>
                </div>
            </div>
        </section>
    );
};

export default SellerBanner;