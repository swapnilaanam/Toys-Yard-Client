import { useEffect } from "react";
import { useState } from "react";
import { Flip } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const LatestNews = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('/news.json')
            .then(res => res.json())
            .then(data => setNews(data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="mt-28 px-4 lg:px-0">
            <div className="max-w-[1380px] mx-auto bg-black pt-28 pb-36 rounded-sm">
                <Flip direction='horizontal'>
                    <h2 className="mb-20 text-center text-3xl md:text-4xl text-white font-semibold tracking-wide">
                        Latest News
                    </h2>
                </Flip>
                <div className="grid grid-cols-1 md:grid-cols-2 justify-center justify-items-center items-start gap-12 mx-7 mt-20">
                    {
                        news.map(singleNews => <div key={singleNews?.id} className="card card-compact md:w-[600px] bg-base-100 shadow-xl">
                            <figure><img src={singleNews.image} alt="News" className="w-full h-[200px] object-cover" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{singleNews.heading}</h2>
                                <p>{singleNews.short}</p>
                                <Link to={`/news/${singleNews.id}`} state={{ singleNews }}>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-warning">Read Full News</button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default LatestNews;