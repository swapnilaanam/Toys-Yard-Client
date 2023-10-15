import bannerImage from '../../assets/images/about-us.jpg';
import storeImg1 from '../../assets/images/store/newyork.jpg'
import storeImg2 from '../../assets/images/store/dhaka.jpg'
import storeImg3 from '../../assets/images/store/sydney.jpg'
import useIsOwner from '../../hooks/useIsOwner';

const AboutUs = () => {
    
    return (
        <div className="min-h-screen bg-yellow-100">
            <div className="w-full h-[400px] flex justify-center items-center">
                <img src={bannerImage} alt="" className="w-full h-full object-cover" />
                <div className="bg-[#f9f26d] w-fit text-3xl md:text-4xl font-semibold text-black px-16 py-4 absolute shadow-xl">
                    About Us
                </div>
            </div>
            <div className="py-20 px-4">
                <div>
                    <h2 className="text-3xl text-center text-black font-medium">Who Are We?</h2>
                    <p className="text-center text-xl mt-7">We are toy marketplace website from where users can find action figure toys.</p>
                </div>
                <div className="mt-20">
                    <h2 className="text-3xl text-center text-black font-medium">Our Physical Store</h2>
                    <div className="max-w-7xl mx-auto mt-20 flex flex-col md:flex-row justify-center gap-20">
                        <div className="w-54 h-54 flex justify-center items-center">
                            <img src={storeImg1} alt="store" className="w-full h-full" />
                            <h2 className="absolute bg-white px-6 py-2 text-lg font-medium">USA</h2>
                        </div>
                        <div className="w-54 h-54 flex justify-center items-center">
                            <img src={storeImg2} alt="store" className="w-full h-full" />
                            <h2 className="absolute bg-white px-6 py-2 text-lg font-medium">Bangladesh</h2>
                        </div>
                        <div className="w-54 h-54 flex justify-center items-center">
                            <img src={storeImg3} alt="store" className="w-full h-full" />
                            <h2 className="absolute bg-white px-6 py-2 text-lg font-medium">Australia</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;