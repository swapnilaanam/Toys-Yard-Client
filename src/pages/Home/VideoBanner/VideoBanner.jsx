import { Link } from 'react-router-dom';
import bannerVideo from '../../../assets/video/videoBanner1.mp4';

const VideoBanner = () => {
    return (
        <section className="mt-28 px-4 lg:px-0">
            <div className="max-w-[1380px] mx-auto rounded-sm relative">
                <video src={bannerVideo} className="min-w-full h-[520px] object-cover" loop autoPlay muted>
                </video>
                <div className="absolute top-0 z-10 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-50">
                    <h4 className="text-5xl text-yellow-400 font-medium uppercase text-center">The Home Of Marvel Action Figures</h4>
                    <Link to="/alltoys" className="text-2xl font-medium text-black bg-white px-8 py-3 rounded mt-7">Buy Marvel Figures</Link>
                </div>
            </div>
        </section>
    );
};

export default VideoBanner;