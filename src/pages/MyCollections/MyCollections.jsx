import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import MyCollectionsRow from '../MyCollectionRow/MyCollectionRow';
import useTitle from '../../hooks/useTitle';


const MyCollections = () => {
    useTitle('My Collections');

    const [myCollections, setMyCollections] = useState([]);

    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`https://toy-marketplace-server-gray-beta.vercel.app/mycollections?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyCollections(data));
    }, []);

    const sortByPriceAscending = () => {
        fetch(`https://toy-marketplace-server-gray-beta.vercel.app/mycollections/sort?order=Ascending&email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyCollections(data));
    }

    const sortByPriceDescending = () => {
        fetch(`https://toy-marketplace-server-gray-beta.vercel.app/mycollections/sort?order=Descending&email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyCollections(data));
    }

    return (
        <div className="py-16 min-h-screen bg-yellow-100">
            <h2 className="text-3xl font-semibold text-center">My Collections</h2>

            <div className="max-w-[1380px] mx-4 lg:mx-auto flex flex-col md:flex-row md:justify-end gap-3 mt-8">
                <button onClick={sortByPriceAscending} className='btn border-0 bg-sky-500 hover:bg-sky-600 text-white hover:text-white'>
                    Sort By Price In Ascending Order
                </button>
                <button onClick={sortByPriceDescending} className='btn border-0 '>
                    Sort By Price In Descending Order
                </button>
            </div>

            <div className="overflow-x-auto max-w-[1380px] mx-4 lg:mx-auto mt-14">
                <table className="table w-full table-zebra border-2 text-center">
                    <thead>
                        <tr>
                            <th className="text-sm"></th>
                            <th className="text-sm">Toy Name</th>
                            <th className="text-sm">Seller</th>
                            <th className="text-sm">Price</th>
                            <th className="text-sm">Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myCollections.map(toy => <MyCollectionsRow
                                key={toy._id}
                                toy={toy}
                            >
                            </MyCollectionsRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyCollections;