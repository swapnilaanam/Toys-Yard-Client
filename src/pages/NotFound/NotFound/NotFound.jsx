import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImage from '../../../assets/images/notfound.png';
import useTitle from '../../../hooks/useTitle';

const NotFound = () => {
    useTitle('404')

    return (
        <div className="flex justify-evenly items-center flex-wrap min-h-screen px-10">
            <div className="flex flex-col justify-center items-center w-2/4">
                <div className="relative">
                    <h1 class="text-9xl font-extrabold text-sky-500 tracking-widest">404</h1>
                </div>
                <div className="my-4">
                    <p className="text-lg font-medium mt-2">
                        Sorry The Page You Are Looking For Doesn't Exist...
                    </p>
                </div>
                <Link to="/">
                    <button className='btn btn-lg px-8 mt-5 bg-green-500 border-0 hover:bg-green-600'>
                        Back To Home
                    </button>
                </Link>
            </div>
            <div className="w-full md:w-2/4 flex">
                <img src={notFoundImage} alt="NotFound" style={{ maxHeight: '650px' }} />
            </div>
        </div >
    );
};

export default NotFound;