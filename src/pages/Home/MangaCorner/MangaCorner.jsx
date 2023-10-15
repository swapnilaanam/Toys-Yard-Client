import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Flip } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';

const MangaCorner = () => {
    const [mangaList, setMangaList] = useState([]);
    useEffect(() => {
        fetch('/manga.json')
            .then(res => res.json())
            .then(data => setMangaList(data))
            .catch(error => console.log(error));
    })
    return (
        <div className="mt-28">
            <div className="max-w-[1380px] mx-auto bg-black pt-28 pb-36 rounded-sm">
                <Flip direction='horizontal'>
                    <h2 className="mb-20 text-center text-3xl md:text-4xl text-white font-semibold tracking-wide">
                        Popular Manga
                    </h2>
                </Flip>
                <div className="grid grid-cols-1 md:grid-cols-3 justify-center justify-items-center items-start gap-12 mx-7 mt-20">
                    {
                        mangaList.map((manga, index) => {
                            return (
                                <article key={index} className="flex bg-white transition hover:shadow-xl">
                                    <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                                        {manga.author}
                                    </div>

                                    <div className="hidden sm:block sm:basis-56">
                                        <img
                                            alt="Guitar"
                                            src={manga.image}
                                            className="aspect-square h-full w-full object-contain"
                                        />
                                    </div>

                                    <div className="flex flex-1 flex-col justify-between">
                                        <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                                            <a href="#">
                                                <h3 className="font-bold uppercase text-gray-900">
                                                    {mangaList.title}
                                                </h3>
                                            </a>

                                            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                                                {manga.description}
                                            </p>
                                        </div>

                                        <div className="sm:flex sm:items-end sm:justify-end">
                                            <Link
                                                to={manga.readLink}
                                                className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400 cursor-pointer"
                                            >
                                                Read Manga
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default MangaCorner;