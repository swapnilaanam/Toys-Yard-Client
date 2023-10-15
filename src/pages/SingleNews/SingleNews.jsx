import { useLocation } from "react-router-dom";

const SingleNews = () => {
    const location = useLocation();
    const { image, heading, body } = location.state?.singleNews;

    return (
        <div>
            <div>
                <img src={image} alt="news image" className="w-full h-[350px] object-cover" />
            </div>
            <div className="pt-20 pb-40 bg-yellow-100">
                <h2 className="text-center font-semibold text-3xl mb-12">{heading}</h2>
                <p className="text-center font-medium text-base leading-relaxed px-4 md:mx-28">{body}</p>
            </div>
        </div>
    );
};

export default SingleNews;